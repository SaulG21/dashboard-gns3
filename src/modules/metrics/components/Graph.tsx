import { GraphCanvas, GraphNode, GraphEdge, useSelection, GraphCanvasRef, darkTheme } from 'reagraph';
import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import { Cidr, IpAddress } from 'cidr-calc';
import BlackButton from './mui/ButtonBlack';
import RoutersList from './RoutersList';

export interface GraphProps {
    className?: string;
    onUpdate: () => void;
    data: any;
    arpData: any;
}

export default function Graph(props: GraphProps) {

    const routers = props.data;
    const arpRouters = props.arpData;
    const [nodes, setNodes] = useState<GraphNode[]>([]);
    const [edges, setEdges] = useState<GraphEdge[]>([]);

    useEffect(() => {
        let newNodes: GraphNode[] = [];
        for (const router in routers) {
            const node: GraphNode = {
                id: `${router}`,
                label: router,
                data: routers[router]
            };
            newNodes.push(node);
        };

        for (const node of newNodes) {
            for (const item of arpRouters) {
                for (const value of item["arp-oper"]) {
                    if (node["data"].interfaces) {
                        if (node["data"].interfaces.includes(value.address)) {
                            let newData: any = {}
                            Object.assign(newData, node);
                            newData["arp-table"] = item["arp-oper"];
                            node["data"] = newData
                        }
                    }
                };
            };
        }
        setNodes(newNodes);
    }, []);

    useEffect(() => {
        let edgesSet: Set<GraphEdge> = new Set();
        for (const router in routers) {
            routers[router].neighbor.map((ip: string) => {
                for (const item in routers) {
                    let interfacesRouter: string[] = routers[item].interfaces;
                    interfacesRouter.map((inter) => {
                        let cidr = new Cidr(IpAddress.of(ip), 30);
                        let ipRange = cidr.toIpRange();
                        let idEdge = ipRange.startIpAddr.toString()
                        if (ip === inter) {
                            let edge: GraphEdge = {
                                id: idEdge + uuidv4(),
                                source: `${router}`,
                                target: `${item}`,
                                label: idEdge,
                                subLabel: idEdge
                            };
                            edgesSet.add(edge);
                        }
                    });
                }
            });
        };
        setEdges(Array.from(edgesSet));
    }, [])

    const graphRef = useRef<GraphCanvasRef | null>(null);

    const { selections, onNodeClick, onCanvasClick, actives, onNodePointerOut } = useSelection({
        ref: graphRef,
        nodes: nodes,
        edges: edges,
        pathSelectionType: 'all',
    });

    return (
        <div className='flex-col w-full h-full items-center justify-center px-5 lg:px-0'>
            <div className='
                w-auto flex flex-col lg:flex-row
                lg:items-center space-y-2 lg:space-y-0
                justify-center lg:space-x-3 px-3 items-center
                '
            >
                <div
                    className={`
                            relative
                            mt-5 lg:mt-0 flex self-center w-full lg:w-1/3 
                            rounded-2xl shadow-xl h-[300px] lg:h-[500px] 
                            hover:cursor-grabbing
                            ${props.className}
                            `}
                >
                    <GraphCanvas
                        edgeArrowPosition="none"
                        nodes={nodes}
                        edges={edges}
                        ref={graphRef}
                        cameraMode='rotate'
                        selections={selections}
                        onNodeClick={onNodeClick}
                        onCanvasClick={onCanvasClick}
                        actives={actives}
                        onNodePointerOut={onNodePointerOut}
                        layoutType='radialOut3d'
                        theme={darkTheme}
                        layoutOverrides={{
                            linkDistance: 150,
                            centerInertia: 100
                        }}
                        labelType='all'
                        edgeLabelPosition='above'
                        contextMenu={({ data, onClose }) => {
                            return (
                                <div className='
                                        flex flex-col justify-center 
                                        items-center space-y-4 bg-white 
                                        w-[150px] border border-blue-700 rounded p-5
                                        text-centershadow-xl
                                    '
                                >
                                    <h1>{data.label}</h1>
                                    <Button
                                        onClick={onClose}
                                        variant='contained'
                                    >
                                        Close
                                    </Button>
                                </div>
                            )
                        }}
                    />
                </div>
                <RoutersList
                    nodes={nodes}
                />
            </div>
            <div className='flex w-full justify-center py-2'>
                <BlackButton
                    label='Actualizar topología'
                    onClick={props.onUpdate}
                />
            </div>
        </div>
    );
}

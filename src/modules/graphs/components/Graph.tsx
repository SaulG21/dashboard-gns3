import { GraphCanvas, GraphNode, GraphEdge, useSelection, GraphCanvasRef } from 'reagraph';
import { useEffect, useRef, useState } from 'react';
import Button from '@mui/material/Button';
import { v4 as uuidv4 } from 'uuid';
import LanIcon from '@mui/icons-material/Lan';
import { Cidr, IpAddress } from 'cidr-calc';

export interface GraphProps {
  className?: string;
  onUpdate?:()=>void;
  data: any;
  arpData: any;
}

export default function Graph(props: GraphProps) {

  const [routers, setRouters] = useState(props.data);
  const [arpRouters, setArpRouters] = useState(props.arpData);
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);

  useEffect(() => {
    // console.log(arpRouters);
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
              console.log(node);
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
    console.log(nodes);
  }, []);

  useEffect(() => {
    // let newEdges: GraphEdge[] = [];
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
                // id: `${router}->${item}`,
                id: idEdge,
                source: `${router}`,
                target: `${item}`,
                label: idEdge,
                subLabel: idEdge
              };
              // newEdges.push(edge);
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
  <div className='flex flex-col w-full items-center justify-center'>
    <div className='w-full flex tems-center justify-center space-x-3 p-3'>
      <div className={`flex relative w-1/3 rounded-2xl shadow-xl ${props.className}`} style={{ height: 500 }}>
        <GraphCanvas
          edgeArrowPosition="none"
          nodes={nodes}
          edges={edges}
          ref={graphRef}
          cameraMode='orbit'
          selections={selections}
          onNodeClick={onNodeClick}
          onCanvasClick={onCanvasClick}
          actives={actives}
          onNodePointerOut={onNodePointerOut}
          sizingType='centrality'
          // edgeInterpolation='curved'
          layoutType='radialOut3d'
          layoutOverrides={{
            linkDistance: 100,
            centerInertia: 1000,
          }}
          labelType='all'
          edgeLabelPosition='above'
          contextMenu={({ data, onClose }) => {
            return (
              <div className={'flex flex-col justify-center items-center space-y-4 bg-white w-[150px] border border-blue-700 rounded p-5 text-centershadow-xl'}
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
      <div className="flex w-1/2 rounded-xl"
        style={{ height: 500 }}
      >
        <div className="
                          w-full flex flex-col 
                          shadow-inner transition-all duration-150 
                          overflow-y-auto items-center space-y-2 p-2
                          "
        >
          {
            Object.entries(props.data).map((item:any) => {
              return (
                <div
                  key={item[0] + uuidv4()}
                  className="w-full flex flex-col px-3 py-2 rounded-md bg-white shadow-lg font-mono"
                >
                  <p className='text-[#3d3d3d] shadow shadow-inherit text-lg font-semibold'>
                    {item[0]}
                  </p>
                  <p className='text-[#3d3d3d]'>Interfaces: </p>
                  {
                    item[1].interfaces.map((inter:any) => {
                      if (inter != "192.168.122.21") {

                        return (
                          <div
                            className='flex px-2 py-1 space-x-2'
                            key={inter + item[0]}
                          >
                            <LanIcon
                              className="text-[#3d3d3d]"
                            />
                            <p className='text-[#3d3d3d]'>
                              {inter}
                            </p>
                          </div>
                        );
                      }
                    })
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
    <div className='flex w-full py-3 mt-3 justify-center'>
          <Button
            sx={{
              background:"#fff",
              textShadow:"initial",
              textAnchor:"middle",
              fontSize:"20px",
              boxShadow:"unset",
              "&:hover":{
                background:"#3d3d3d",
                color:"#fff"
              }
            }}
            variant='text'
            size='large'
            onClick={props.onUpdate}
          >
            Update Topology
          </Button>
    </div>
  </div>
  );
}

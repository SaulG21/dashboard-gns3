import { GraphCanvas, GraphNode, GraphEdge } from 'reagraph';
import { RoutersTest } from "../../metrics/catalogs/arp/routers.catalog"
import { useEffect, useState } from 'react';


export default function Graph() {

  const [routers, setRouters] = useState<any>(RoutersTest);
  const [nodes, setNodes] = useState<GraphNode[]>([]);
  const [edges, setEdges] = useState<GraphEdge[]>([]);

  useEffect(() => {
    let newNodes: GraphNode[] = [];
    for (const router in routers) {
      const node: GraphNode = {
        id: `${router}`,
        label: router,
        data: routers[router]
      }
      newNodes.push(node);
    };
    setNodes(newNodes);
  }, []);

  useEffect(()=>{
    let newEdges: GraphEdge[] = [];
    for (const router in routers) {
      routers[router].neighbor.map((ip:string)=>{
        for (const item in routers) {
          let interfacesRouter:string[] = routers[item].interfaces;
          interfacesRouter.map((inter)=>{
            if (ip===inter){
              let edge:GraphEdge = {
                id:`${router}->${item}`,
                source:`${router}`,
                target:`${item}`
              };
              newEdges.push(edge);
            }
          });
        }
      });
    };
    setEdges(newEdges);
  },[])


  return (
    <GraphCanvas
      edgeArrowPosition="none"
      nodes={nodes}
      edges={edges}
      animated
      defaultNodeSize={200}
      cameraMode='rotate'
    />
  );
}

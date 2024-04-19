import React, { useEffect, useRef } from 'react';
import {} as generators from 'ngraph.generators';

interface GraphProps {
  data: Record<string, string[]>;
}

const Graph: React.FC<GraphProps> = ({ data }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const graph = generators.fromObject(data);
        const renderer = generators.renderers.renderGraph(ctx, graph);
        renderer.run();
      }
    }
  }, [data]);

  return <canvas ref={canvasRef} width={800} height={600} />;
};

export default Graph;
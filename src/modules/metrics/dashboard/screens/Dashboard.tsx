import Button from "@mui/material/Button";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Graph from "../../../../modules/graphs/components/Graph";

export default function Dashboard() {

    const [view, setView] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<any>({});

    const makeRequest = async () => {
        setLoading(true);
        const response = await fetch('http://localhost:4000/functions/build-topology',
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );

        const body = await response.json();
        setData(body);
        console.log(body);  
        setView(true);
        setLoading(false);
    }

    return (
        <div className="flex flex-col h-full w-full justify-center items-center  bg-[#1976d2]">
            <div className="flex py-5 w-full justify-center items-center">    
                <h1 className="text-5xl text-white text-center -mt-24 font-bold  p-5 font-mono">
                    Topología de núcleo de una red
                </h1>
            </div>
            <div className="flex w-full items-center justify-center rounded space-x-6">
                {
                    loading ? (
                        <CircularProgress
                            className="p-2"
                            sx={{
                                color: "white"
                            }}
                            size="70px"
                        />
                    ): view ? (
                            <>
                                <Graph
                                    className="w-fullrounded-3xl"
                                    data={data[0]}
                                    arpData={data[1]}
                                    onUpdate={makeRequest}
                                />
                            </>
                    ) : (
                        <>
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
                                  onClick={makeRequest}
                            >
                                Ver informacion
                            </Button>
                        </>
                    )
                }
            </div>
        </div>
    );
}
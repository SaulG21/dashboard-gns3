import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Graph from "../../components/Graph";
import BlackButton from "../../components/mui/ButtonBlack";

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
        <div className="flex flex-col h-full w-full justify-center items-center  bg-[#1976d2] overflow-y-auto min-h-[820px]">
            <div className="flex lg:py-5 w-full justify-center items-center">    
                <h1 className="text-3xl lg:text-5xl text-white text-center lg:-mt-24 font-bold px-5 font-mono">
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
                            <BlackButton
                                label="Ver información"
                                onClick={makeRequest}
                            />
                        </>
                    )
                }
            </div>
        </div>
    );
}
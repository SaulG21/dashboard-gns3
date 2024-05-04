import Button from "@mui/material/Button";
import { hostNameRouter, uniqueMAC, DataArpPops } from "../../functions/FindBoundaries"
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Graph from "../../../graphs/components/Graph2";

export default function Dashboard() {
    const hostName = hostNameRouter;
    // const table = arpTable["Cisco-IOS-XE-arp-oper:arp-data"]["arp-vrf"][0]["arp-oper"];
    const [neighbor, setNeighbor] = useState<DataArpPops[]>([]);
    const [view, setView] = useState(false);

    // const updateNeighbor = function () {
    //     setNeighbor(uniqueMAC);
    // }

    // useEffect(()=>{
    //    fetch('http://localhost:4000/')
    //    .then(response => response.json())
    //    .then(data => console.log(data))
    //    .then(err=>console.log(err))
    // },[]);

    const makeRequest = async () => {
        const res = await fetch('http://localhost:4000/',
            {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }
        );
        console.log(res);
    }

    return (
        <div className="flex h-full w-full justify-center items-center bg-gray-100">
            <div className="flex flex-col w-full items-center justify-center space-y-3 border ">
                {
                    view ? (
                        <div className="flex flex-col w-full border">
                            <Graph />
                        </div>
                    ) : (
                        <>
                            <p>Vecinos de router {hostName}: </p>
                            <p>
                                Topología de Red
                            </p>
                            <Button
                                onClick={()=>{setView(true)}}
                                variant="contained"
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
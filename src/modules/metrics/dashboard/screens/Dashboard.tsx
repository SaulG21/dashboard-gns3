import Button from "@mui/material/Button";
import { hostNameRouter, uniqueMAC, DataArpPops } from "../../functions/FindBoundaries"
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";

export default function Dashboard() {
    const hostName = hostNameRouter;
    // const table = arpTable["Cisco-IOS-XE-arp-oper:arp-data"]["arp-vrf"][0]["arp-oper"];
    const [neighbor, setNeighbor] = useState<DataArpPops[]>([]);

    // const updateNeighbor = function () {
    //     setNeighbor(uniqueMAC);
    // }

    // useEffect(()=>{
    //    fetch('http://localhost:4000/')
    //    .then(response => response.json())
    //    .then(data => console.log(data))
    //    .then(err=>console.log(err))
    // },[]);

    const makeRequest = async ()=>{
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
            <div className="flex flex-col w-full items-center justify-center space-y-3">
                <p>
                    Topología de Red
                </p>
                <Button
                    onClick={makeRequest}
                    variant="contained"
                >
                    Ver informacion
                </Button>
                {
                    neighbor && (
                        <div className="flex flex-col w-full border">
                            <p>Vecinos de router {hostName}: </p>
                            {
                                neighbor ? (
                                    neighbor.map((item) => {
                                        return (
                                            <div className="flex w-full flex-col my-2"
                                                key={item.hardware}
                                            >
                                                <p>Direccion IP: {item.address}</p>
                                                <p>Direccion MAC: {item.hardware}</p>
                                                <p>Nombre Interfaz: {item.interface}</p>
                                                <p>Tipo: {item.type}</p>
                                            </div>
                                        );
                                    })
                                ) : null
                            }
                        </div>
                    )
                }
            </div>
        </div>
    );
}
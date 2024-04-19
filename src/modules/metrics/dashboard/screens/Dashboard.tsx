import Button from "@mui/material/Button";
import { arpTable } from "../../catalogs/arp/arp.catalog";
import { hostNameRouter, uniqueMAC, DataArpPops } from "../../functions/FindBoundaries"
import { useEffect, useState } from "react";
import { useFetch } from "use-http";
import CircularProgress from "@mui/material/CircularProgress";

export default function Dashboard() {

    const { data, loading, error, get } = useFetch(':');
    const hostName = hostNameRouter;
    // const table = arpTable["Cisco-IOS-XE-arp-oper:arp-data"]["arp-vrf"][0]["arp-oper"];
    const [neighbor, setNeighbor] = useState<DataArpPops[]>([]);

    const updateNeighbor = function () {
        setNeighbor(uniqueMAC);
    }

    useEffect(()=>{
        get('/');
    },[])

    return (
        <div className="flex h-full w-full justify-center items-center bg-gray-100">
            <div className="flex flex-col w-full items-center justify-center space-y-3">
                <p>
                    Topología de Red
                </p>
                <Button
                    onClick={updateNeighbor}
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
                                            <div className="flex w-full flex-col my-2">
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
                {
                    loading || error ? (
                        <CircularProgress
                        />
                    ):(
                        <p>
                            {data}
                        </p>
                    )
                }

            </div>
        </div>
    );
}
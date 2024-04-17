import Button from "@mui/material/Button";
import { arpTable } from "../../catalogs/arp/arp.catalog"

export default function Dashboard(){

    const table = arpTable;

    const data = table["Cisco-IOS-XE-arp-oper:arp-data"]["arp-vrf"];

    return (
        <div className="flex h-full w-full justify-center items-center bg-gray-100">
            <div className="flex flex-col w-full items-center justify-center space-y-3">
                <p>
                    Topología de Red
                </p>
                <Button 
                    onClick={
                        ()=>{console.log('ipAddresses:  ',data[0]["arp-oper"]);}
                    }
                    variant="contained"
                >
                    Ver informacion
                </Button>
            </div>
        </div>
    );
}
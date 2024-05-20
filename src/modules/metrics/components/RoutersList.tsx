import LanIcon from '@mui/icons-material/Lan';
import { v4 as uuidv4 } from 'uuid';
export interface RouterListProps{
    nodes:any[]
};

export default function RoutersList(props:RouterListProps) {
    return (
        <div
            className="flex lg:w-1/4 lg:min-w-[430px] md:w-1/2 self-center w-full rounded-xl max-h-[300px] lg:max-h-[500px]"
            style={{ height: 500 }}
        >
            <div className="
                w-full flex flex-col
                bg-gray-900
                p-4
                shadow-inner transition-all duration-150 
                overflow-y-auto items-center space-y-2
                "
            >
                {
                    props.nodes.map((node) => {
                        return (
                            <div
                                key={uuidv4()}
                                className="w-full flex flex-col px-3 py-2 rounded-md bg-white shadow-2xl font-mono"
                            >
                                <p className='text-[#3d3d3d] shadow shadow-inherit lg:text-lg text-base font-semibold'>
                                    {node.label}
                                </p>
                                <p className='text-[#3d3d3d] text-sm'>Interfaces: </p>
                                {
                                    node.data.data.interfaces.map((inter: any) => {
                                        let interfaceName = ""
                                            props.nodes.map((anotherNode)=>{
                                                anotherNode.data['arp-table'].map((item: any) => {
                                                    if (item.address == inter) {
                                                        interfaceName=item.interface;
                                                        return;
                                                    }
                                                })
                                            })
                                            return (
                                                <div className='flex items-center' key={inter + uuidv4()}>
                                                    <div
                                                        className='flex px-2 py-1 space-x-2'
                                                    >
                                                        <LanIcon
                                                            className="text-[#3d3d3d] text-sm lg:text-base"
                                                        />
                                                        <p className='text-[#3d3d3d] text-sm lg:text-base'>
                                                            {inter}
                                                        </p>
                                                        <p className='text-[#3d3d3d] text-sm lg:text-base'>
                                                            {interfaceName}
                                                        </p>
                                                    </div>
                                                </div>
                                            );
                                    })
                                }
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
};
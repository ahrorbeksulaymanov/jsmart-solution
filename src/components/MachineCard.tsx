
type MachineType = {
    status: number,
    statusName: string,
    name: string,
    quantity: string,
    company: string,
    title: string
}

const MachineCard = ({ machine }: {machine: MachineType}) => {


    return (
        <div className="text-center">
            <div className="py-[10px] px-[12px] rounded-[2px] border-[0.5px] border-solid border-light-border">
                <p className="text-[10px] font-bold flex items-center justify-center gap-1 leading-[160%] mb-2.5">
                    {
                        machine.status === 1 ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <circle cx="6" cy="6" r="6" fill="#0B0FFF" />
                            </svg>
                            : <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <circle cx="6" cy="6" r="6" fill="#FF300B" />
                            </svg>
                    }
                    {machine.statusName}
                </p>
                <div className="p-[12px] rounded-[2px] border-[0.5px] border-solid border-light-border">
                    <p className="text-[10px] leading-[160%] font-bold">{machine.name}</p>
                    <p className="text-[10px] leading-[160%]">{machine.quantity}</p>
                    <p className="text-[10px] leading-[160%]">{machine.company}</p>
                    <p className="text-[10px] leading-[160%]">{machine.title}</p>
                </div>
            </div>
        </div>
    )
}
export default MachineCard;
import MachineCard from "../../components/MachineCard";
import PageHeader from "../../components/PageHeader";
import data from '../../staticDatas/data.json';

const WorkingProccessPage = () => {

    return (
        <div className="text-black">
            <div className="">
                <PageHeader title="설비 가동 현황" />
                <div className="flex md:gap-[64px] gap-[34px] pl-[14px] border-b-[0.5px] border-solid border-light-border">
                    {
                        data.map((item, index) => (
                            <div key={index} className="flex md:gap-[24px] gap-[14px] py-4">
                                <span className="text-black text-[16px] font-bold leading-normal">{item.name}</span>
                                <span className="text-black text-[16px] font-bold leading-normal">
                                    <span className="text-[#0B0FFF]">{item.machines.filter(machine => machine.status === 1).length}</span>
                                    <span className="mx-[2px]">/</span>
                                    {item.machines.length}
                                </span>
                            </div>
                        ))
                    }
                </div>
            </div>
            {
                data.map((item, index) => (
                    <div key={index} className="flex border-b-[0.5px] border-r-[0.5px] border-solid border-light-border">
                        <div className="flex justify-center items-center border-r-[0.5px] border-solid border-light-border bg-sidebar-bg w-[100px]">
                            <p className="text-center text-[14px] font-bold leading-[114%]">{item?.name}</p>
                        </div>
                        <div className="grid 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-2.5 px-6 py-[10px] w-full">
                            {
                                item.machines?.map((machine, i) => (
                                    <MachineCard key={i} machine={machine} />
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
export default WorkingProccessPage;
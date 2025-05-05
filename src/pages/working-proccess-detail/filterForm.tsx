import { useEffect, useState } from "react";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import data from '../../staticDatas/data.json';

const FilterForm = () => {

    const { writeToUrl, urlValue } = useUrlQueryParams({});
    const [machines, setMachines] = useState(data.find(item => item.id === urlValue.filter?.line_id)?.machines)

    useEffect(() => {
        let filteredData = data.find(item => item.id === urlValue.filter?.line_id)?.machines;
        if (!urlValue.filter?.line_id || urlValue.filter?.line_id === 0) {
            filteredData = data.flatMap(item => item.machines);
        }
        setMachines(filteredData)
    }, [urlValue.filter?.line_id])

    return (
        <div className="lg:flex items-center gap-2.5 my-2">
            <div className="flex gap-2.5 items-center mr-2.5">
                <label htmlFor="line-select" className="block text-[10px] font-bold text-gray-07 flex-shrink-0">위치</label>
                <select value={urlValue.filter?.line_id} onChange={((e) => writeToUrl({ name: "line_id", value: e.target.value }))} id="line-select" className="text-[10px] font-bold border-[0.5px] border-solid border-light-border text-gray-07 rounded-[2px] focus:ring-blue-500 focus:border-blue-500 py-1 px-4 w-[82px]">
                    <option selected value={0}>전체</option>
                    {
                        data.map((item, index) => (
                            <option key={index} value={item.id}>{item.name}</option>
                        ))
                    }
                </select>
            </div>
            <div className="flex gap-2.5 items-center">
                <label htmlFor="machine-select" className="block text-[10px] font-bold text-gray-07 flex-shrink-0">설비</label>
                <select value={urlValue.filter?.machine_id} onChange={((e) => writeToUrl({ name: "machine_id", value: e.target.value }))} id="machine-select" className="text-[10px] font-bold border-[0.5px] border-solid border-light-border text-gray-07 rounded-[2px] focus:ring-blue-500 focus:border-blue-500 py-1 px-4 w-[82px]">
                    <option selected>1호기</option>
                    {
                        machines?.map((item, index) => (
                            <option key={index} value={item.name}>{item.title}</option>
                        ))
                    }
                </select>
            </div>

            <div className="flex gap-2.5 items-center ml-auto">
                <label htmlFor="datepicker" className="block text-[10px] font-bold text-gray-07 flex-shrink-0">날짜</label>
                <input
                    id="datepicker"
                    type="date"
                    value={urlValue.filter_like?.start_date}
                    onChange={((e) => writeToUrl({ name: "start_date", value: e.target.value }))}
                    className=" text-[10px] font-bold border-[0.5px] border-solid border-light-border text-gray-07 rounded-[2px] focus:ring-blue-500 focus:border-blue-500 py-1 px-4 w-[106px]"
                    placeholder="Select date"></input>
            </div>
            <span> ~ </span>
            <div className="flex gap-2.5 items-center">
                <input
                    value={urlValue.filter_like?.end_date}
                    type="date"
                    onChange={((e) => writeToUrl({ name: "end_date", value: e.target.value }))}
                    className=" text-[10px] font-bold border-[0.5px] border-solid border-light-border text-gray-07 rounded-[2px] focus:ring-blue-500 focus:border-blue-500 py-1 px-4 w-[106px]"
                    placeholder="Select date"></input>
            </div>
            <button className="bg-gray-07 hover:bg-gray-08 text-white font-bold text-[10px] rounded-[2px] px-4 h-full py-1 cursor-pointer">조회</button>
        </div>
    )
}
export default FilterForm;
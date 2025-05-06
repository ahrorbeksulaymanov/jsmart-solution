import BlockTitle from "../../components/BlockTitle";
import PageHeader from "../../components/PageHeader";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import FilterForm from "./filterForm";

const WorkingProccessDetailPage = () => {

    const { writeToUrl, urlValue } = useUrlQueryParams({ perPage: 10, currentPage: 1 });

    return (
        <div className="text-black">
            <div className="">
                <PageHeader title="설비별 생산 현황" />
                <BlockTitle title="생산 현황 그래프" className="mt-[10px]" />
            </div>
            <FilterForm />
            <div className="border-[0.5px] border-solid border-light-border h-[350px]">

            </div>

            <div className="">
                <div className="flex items-center justify-between mt-5 mb-2.5">
                    <BlockTitle title="생산 현황 데이터" />
                    <select
                        value={urlValue.perPage}
                        onChange={((e) => writeToUrl({ name: "perPage", value: e.target.value }))}
                        className="text-[10px] font-bold border-[0.5px] border-solid border-light-border text-gray-07 rounded-[2px] focus:ring-blue-500 focus:border-blue-500 py-1 pl-3 w-[52px] h-max outline-none"
                    >
                        <option selected value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                    </select>
                </div>


                <div className="relative overflow-x-auto">
                    <table className="w-full text-[12px] text-center text-gray-07 leading-[160%] font-normal">
                        <thead className="uppercase bg-sidebar-bg border-[0.1px] border-solid border-light-border border-b-0">
                            <tr>
                                <th scope="col" className="px-3 py-1 border-r-[0.1px] border-solid border-light-border lg:w-[100px]">날짜</th>
                                <th scope="col" className="px-3 py-1 border-r-[0.1px] border-solid border-light-border lg:w-[50px]">위치</th>
                                <th scope="col" className="px-3 py-1 border-r-[0.1px] border-solid border-light-border">설비</th>
                                <th scope="col" className="px-3 py-1 border-r-[0.1px] border-solid border-light-border">모델</th>
                                <th scope="col" className="px-3 py-1 border-r-[0.1px] border-solid border-light-border lg:w-[150px]">제조사</th>
                                <th scope="col" className="px-3 py-1">생산</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({ length: 10 })?.map((item, index) => (
                                    <tr key={index} className="bg-white leading-[160%] font-normal">
                                        <th scope="row" className="px-3 py-1 whitespace-nowrap leading-[160%] font-normal">
                                            25.09.01
                                        </th>
                                        <td className="px-3 py-1">
                                            A
                                        </td>
                                        <td className="px-3 py-1">
                                            1호기
                                        </td>
                                        <td className="px-3 py-1">
                                            PRESS300TON
                                        </td>
                                        <td className="px-3 py-1">
                                            마이다
                                        </td>
                                        <td className="px-3 py-1">
                                            1200
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-center text-[10px] mt-6">
                <div className="flex justify-center w-max rounded-[2px] border-[1px] border-solid border-light-border h-5">
                    <div className="prev px-3 flex justify-center items-center cursor-pointer hover:bg-sidebar-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                            <path d="M3.5 1L0.5 4L3.5 7" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                        
                    <div className="border-[1px] border-y-0 border-solid border-light-border px-3 flex justify-center items-center cursor-pointer hover:bg-sidebar-bg">
                        <span>1</span>
                    </div>

                    <div className="next px-3 flex justify-center items-center cursor-pointer hover:bg-sidebar-bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="4" height="8" viewBox="0 0 4 8" fill="none">
                            <path d="M0.5 7L3.5 4L0.500001 1" stroke="#404040" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default WorkingProccessDetailPage;
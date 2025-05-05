import BlockTitle from "../../components/BlockTitle";
import PageHeader from "../../components/PageHeader";
import useUrlQueryParams from "../../hooks/useUrlQueryParams";
import data from '../../staticDatas/data.json';
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
                    <table className="w-full text-[10px] text-left rtl:text-right text-gray-500 ">
                        <thead className=" text-gray-700 uppercase bg-gray-50 ">
                            <tr>
                                <th scope="col" className="px-3 py-1">날짜</th>
                                <th scope="col" className="px-3 py-1">위치</th>
                                <th scope="col" className="px-3 py-1">설비</th>
                                <th scope="col" className="px-3 py-1">모델</th>
                                <th scope="col" className="px-3 py-1">제조사</th>
                                <th scope="col" className="px-3 py-1">생산</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Array.from({ length: 10 })?.map((item, index) => (
                                    <tr key={index} className="bg-white border-b  border-gray-200">
                                        <th scope="row" className="px-3 py-1 font-medium text-gray-900 whitespace-nowrap ">
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
        </div>
    )
}
export default WorkingProccessDetailPage;
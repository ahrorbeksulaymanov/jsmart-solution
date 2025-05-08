import { useFetch } from '../../hooks/useFetchData';
import { usePagination } from '../../hooks/usePagination';
import { useDebounce } from '../../hooks/useDebounce';
import TestTable from '../../components/test1/Table';
import Test2 from '../../components/test2/Table';

interface Post {
    id: number;
    title: string;
    body: string;
}

const StatisticsPage = () => {

    const { page, limit, search } = usePagination();
    const debouncedSearch = useDebounce(search, 500);

    const { data, isLoading, isError, error } = useFetch<Post[]>({
        queryKey: ["posts"],
        params: {_page: page, _limit: limit, q: debouncedSearch},
        url: "/posts",
    });
    
    if (isError) return <p>Oops!: {error?.message}</p>;

    return (
        <div className='content'>
                <div className="my-table-wrapper pb-[1px] max-w-[976px] w-full">
                    <Test2 />
                    <br />
                    <TestTable />
                </div>
        </div>
    )
}
export default StatisticsPage;
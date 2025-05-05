import { useSearchParams } from "react-router-dom";

export const usePagination = (defaultLimit = 12) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const page = Number(searchParams.get("_page")) || 1;
  const limit = Number(searchParams.get("_limit")) || defaultLimit;
  const search = searchParams.get("q") || "";


  const setPagination = (newPage: number, newLimit: number = limit, newSearch: string = search) => {
    setSearchParams({ _page: String(newPage), _limit: String(newLimit), q: newSearch });
  };

  return { page, limit, search, setPagination };
};

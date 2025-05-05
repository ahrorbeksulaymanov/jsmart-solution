import { useQuery, QueryKey } from "@tanstack/react-query";
import { api } from "../services/api";
import { AxiosError } from "axios";

interface FetchOptions {
  queryKey: QueryKey;
  url: string;
  enabled?: boolean;
  params?: {[key: string]: string | number} 
}

export const useFetch = <T>({ queryKey, url, enabled = true, params = {} }: FetchOptions) => {
  return useQuery<T, AxiosError>({
    queryKey: [queryKey, params], 
    queryFn: async () => {
        const nerUrl = params ? `${url}?_page=${params?._page ?? 1}&_limit=${params?._limit ?? 12}&q=${params?.q ? params?.q : ""}` : url;
        const { data } = await api.get<T>(nerUrl);
        return data;
    },
    enabled,
    staleTime: 1000 * 60 * 5,
  });
};

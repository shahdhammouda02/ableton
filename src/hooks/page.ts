"use client"
import useSWRInfinite from "swr/infinite";

  // const fetcher =(url: string) => fetch(`https://jsonplaceholder.typicode.com/${url}`).then(res=>res.json());
  // export const useFetch = (url:string)=> {
  //   const {data, isLoading, error} = useSWR(url, fetcher)

  //   return {data, isLoading, error}
  
  // }

 const fetcher =(url: string) => fetch(url).then(res=>res.json());
 
export  const usePaginations = (limit: number) => {
  const getKey = (pageIndex: number, prevData: string | any[]) => {
  if(pageIndex && !prevData.length) return null;
  return `https://jsonplaceholder.typicode.com/posts?_page=${pageIndex}&_limit=${limit}`
 }
  const { data, isLoading, error, setSize, size } = useSWRInfinite(getKey, fetcher);
  return {
    data,
    isLoading,
    error,
    setSize,
    size
  }
 }

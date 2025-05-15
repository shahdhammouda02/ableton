"use client";
import React from "react";
import Image from "next/image";
import {
  photo8,
} from "../../../public/images/page";
import { usePaginations } from "@/hooks/page";
import { Button } from "@/components/page";
const Page = () => {
  // const {data: photos, isLoading, error} = useFetch('/photos?_limit=6')

  // const fetcher =(url: string) => fetch(url).then(res=>res.json());

  // const getKey =(pageIndex:number, previousData:any) =>{
  //     if (pageIndex && !previousData.length) return null
  //     return `https://jsonplaceholder.typicode.com/photos?_page=${pageIndex}&_limit=6`
  // }

  // const {data: photos, size, setSize} = useSWRInfinite(getKey, fetcher)
  const { data: photos, setSize, size } = usePaginations(6);
  return (
    <>
      {/* <div className='max-w-7xl mx-auto'>
      {isLoading && <h1>Loading...</h1>}
      <div className='grid grid-cols-3 gap-1'>
        {photos && photos.map((item:any)=>(
       <div key={item.id} className=''>
         <Image src={photo8} alt='' width={200} height={200} />
        <h1>{item.title}</h1>
       </div>
      ))}
      </div>
    </div> */}

      <div className="max-w-7xl mx-auto mt-8 border border-b-cyan-950 shadow rounded-md">
        <div className=" grid grid-cols-3 gap-5 p-12 w-full">
          {photos &&
            photos.map((photos) => {
              return photos.map((item: { id: React.Key | null | undefined; title: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; body: string | number | bigint | boolean | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | null | undefined; }) => (
                <div key={item.id} className="my-7">
                  <Image src={photo8} alt="" width={360} height={300} className="my-3" />
                  <h1 className="pb-4">{item.title}</h1>
                  <p className="">{item.body}</p>
                </div>
              ));
            })}
        </div>
          <Button type="button" className="bg-blue-950 block my-10 mx-auto" onClick={() => setSize(size + 1)}>Load More</Button>
      </div>
    </>
  );
};

export default Page;

import { useRouter } from "next/router"
import useSWR from "swr"
import { fetcher,fetcherPost } from "../../../fetcher"
import Bottom from "./Bottom"

const Middle = ({ article, fontSize,recommends,comments,likeAmount,liked,watched }) => {
    const router = useRouter()
    // const { data } = useSWR("/api/getSearchBlogs/selam",fetcherPost)
    // const { data } = useSWR("/api/getBlogs",fetcherPost)

    // console.log(data)

    return (
        <div className="grid mx-auto w-10/12 grid-flow-row grid-cols-3 sm:grid-flow-col mt-16 relative">
            <div className="w-10/12 sm:w-8/12 col-span-3 sm:col-span-2">
                <p className={`${fontSize} text-spaceCadet2`}>
                    {article}
                </p>
                <Bottom cols={"hidden sm:block"} comments={comments} likeAmount={likeAmount} liked={liked} watched={watched}  />

            </div>
            <Bottom cols={"col-span-3 sm:hidden"} comments={comments} likeAmount={likeAmount} liked={liked} watched={watched} />

            <div className={`grid grid-flow-col sm:grid-flow-row overflow-y-scroll sm:overflow-visible scrollbar-hide col-span-3 sm:col-span-1 sm:grid-cols-${recommends.length} sm:gap-12 mt-16 sm:mt-0 gap-5 rounded-lg`}>
                {recommends?.map((r,i) => (
                    <div className="col-span-1 sm:w-3/12 w-60 cursor-pointer" onClick={() => router.push("/blog/" + r.id)} key={i}>
                        <img src={r.src} alt="" className="rounded-lg" />
                        <div className="">   
                            <p className=""> {r.name} </p>
                            <p className="truncate"> {r.description} </p>
                        </div>
                    </div>
                ))

                }


            </div>



            {/* <div className="absolute divide-y-2 text-gunMetal text-xl sm:text-2xl bottom-58 left-4 sm:left-auto sm:-top-14 z-20 sm:right-60">
                Recommends
            </div>
            <div className="absolute bg-gray-400 h-0.5 w-5/12 sm:w-3/12 bottom-56 sm:-top-5 sm:right-20" /> */}
            {/* 
            <div className="absolute bottom-58 sm:right-20 md:right-24 sm:-top-12 w-3/12 h-12 ">
                <p className="text-xl sm:text-2xl"> Recommends </p>
                <div className="bg-gray-400 h-0.5 w-40 sm:w-full" />
            </div> */}
        </div>
    )
}

export default Middle

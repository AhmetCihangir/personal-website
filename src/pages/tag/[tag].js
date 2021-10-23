import { useRouter } from "next/router"
import useSWR from "swr"
import { fetcher } from "../../../fetcher"
import Header from "../../components/Header"

const Search = () => {
    const router = useRouter()
    const { tag } = router?.query

    // const blogs = useSWR("/api/getTagBlog/"+tag,fetcher).data

    // console.log(blogs)




    return (
      <div className="min-h-screen bg-ghostWhite">
        <div className="h-16" />
        <Header />

        {blogs?.length > 0 && (
            <div className="w-11/12 mx-auto grid grid-flow-row grid-rows-2 divide-y-2 gap-y-5">
              <p className="text-2xl text-gunMetal row-span-2">Blogs</p>
              <div className="w-full grid grid-cols-2 gap-x-5 row-span-2">
                {blogs.map((b, i) => (
                  <div className="col-span-2 sm:col-span-1 grid grid-cols-3 mt-5 cursor-pointer" onClick={() => router.push("/blog/" + b.id)} key={i}>
                    <div className="col-span-1 rounded-lg">
                      <img src={b.src} alt="" className="w-full rounded-lg" />
                    </div>
                    <div className="col-span-2 flex flex-col my-auto">
                      <p className=""> {b.name} </p>
                      <p className="truncate"> {b.description} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

      </div>
    );
}

export default Search

import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Header from "../../components/Header"

const Search = () => {
    const router = useRouter()
    // console.log(router.query.search[0])
    const { search } = router?.query
    const titles = ["Korea","Coding","Korean","Marvel","Technology","Coin"]

    const isTag = titles.filter(t => t.toLowerCase().startsWith(search?.toLowerCase()))

    const blogs = useSelector(state => state.posts.posts.filter(p => p.name.toLowerCase().startsWith(search)))

    return (
      <div className="min-h-screen bg-ghostWhite">
        <div className="h-16" />
        <Header />

        <div className="flex flex-col space-y-10">
          {isTag.length > 0 && (
            <div className="grid grid-flow-row grid-rows-2 mt-10 w-11/12 mx-auto divide-y-2">
              <p className="text-2xl text-gunMetal row-span-1">#TAGS</p>

              <div className="flex space-x-2 row-span-1">
                {isTag.map((t, i) => (
                  <div
                    className="bg-gunMetal text-ghostWhite rounded-full p-1 px-3 my-3 cursor-pointer"
                    key={i}
                    onClick={() => router.push("/tag/" + t.toLowerCase())}
                  >
                    {" "}
                    {t}{" "}
                  </div>
                ))}
              </div>
            </div>
          )}
          {blogs.length > 0 && (
            <div className="w-11/12 mx-auto grid grid-flow-row grid-rows-2 divide-y-2 gap-y-5">
              <p className="text-2xl text-gunMetal row-span-2">Blogs</p>
              <div className="w-full grid grid-cols-2 gap-x-5 row-span-2">
                {blogs.map((b, i) => (
                  <div className="col-span-2 sm:col-span-1 grid grid-cols-3 mt-5 cursor-pointer" onClick={() => router.push("/blog/" + b.id)} key={i}>
                    <div className="col-span-1 rounded-lg">
                      <img src={b.src} alt="" className="w-full rounded-lg" />
                    </div>
                    <div className="col-span-2 flex flex-col my-auto ml-3">
                      <p className=""> {b.name} </p>
                      <p className="truncate"> {b.description} </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default Search

import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const Latest3News = () => {
  const router = useRouter()

    const news = useSelector(state => state.posts.posts.slice(7,16))


    return (
      <div className="flex justify-center mt-10">
        <div className="w-5/6">
          {news.map((n, i) => (
            <div
              key={i}
              className="grid grid-cols-6 gap-4 mb-3 max-h-52 items-center"
            >
              <div className="col-span-2">
                <img
                  alt=""
                  loading="lazy"
                  className="rounded-lg object-cover bg-center max-h-52 mx-auto my-auto"
                  src={n.src}
                />
              </div>
              <div className="col-span-4">
                <div className="text-sm sm:text-xl font-semibold">
                  {" "}
                  {n.name}{" "}
                </div>
                <div className="flex space-x-1">
                  {n.tags.map((t, i) => (
                    <div
                      key={i}
                      className="text-gray-400 text-xxs sm:text-base"
                    >
                      #{t}
                    </div>
                  ))}
                </div>{" "}
                <div className="text-xxxs sm:text-sm font-medium flex-grow">
                  {n.description}{" "}
                </div>
                <div className="flex justify-end mt-1 sm:mt-2 mr-2">
                  <button
                    onClick={() => router.push("/blog/" + n.id)}
                    className="bg-gunMetal text-ghostWhite rounded-md text-xxs p-1 px-2 sm:px-3 sm:text-sm"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Latest3News

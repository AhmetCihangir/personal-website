import Image from "next/image"

const Latest3News = () => {
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatibus repudiandae in, atque cupiditate excepturi"


    const news = [
        { name : "Selam 7", description, src : "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60", tags : ["Korea", "Code"] },
        { name : "Selam 8", description, src : "https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500", tags : ["Korea", "Code"] },
        { name : "Selam 9", description, src : "https://images.pexels.com/photos/3244513/pexels-photo-3244513.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tags : ["Korea", "Code"] },
        { name : "Selam 10", description, src : "https://images.pexels.com/photos/4906284/pexels-photo-4906284.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tags : ["Korea", "Code"] },
        { name : "Selam 11", description, src : "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841__340.jpg", tags : ["Korea", "Code"] },
        { name : "Selam 12", description, src : "https://images.pexels.com/photos/3727182/pexels-photo-3727182.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500", tags : ["Korea", "Code"] },
        { name : "Selam 13", description, src : "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__340.jpg", tags : ["Korea", "Code"] },
        { name : "Selam 14", description, src : "https://cdn.pixabay.com/photo/2017/05/29/19/13/fire-and-water-2354583__340.jpg", tags : ["Korea", "Code"] },
        { name : "Selam 15", description, src : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg", tags : ["Korea", "Code"] },
    ]


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
                <div className="text-base sm:text-xl font-semibold">
                  {" "}
                  {n.name}{" "}
                </div>
                <div className="flex space-x-1">
                  {n.tags.map((t, i) => (
                    <div key={i} className="text-gray-400 text-xs sm:text-base">
                      #{t}
                    </div>
                  ))}
                </div>{" "}
                <div className="text-xxs sm:text-sm font-medium flex-grow">
                  {n.description}{" "}
                </div>
                <div className="flex justify-end mt-1 sm:mt-2 mr-2">
                  <button className="bg-gunMetal text-ghostWhite rounded-md text-xxs p-1 px-2 sm:px-3 sm:text-sm">
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

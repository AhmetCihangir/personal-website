import { Fade } from "react-slideshow-image"
import Image from "next/image"
import "react-slideshow-image/dist/styles.css"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"

const LatestNews = () => {
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatibus repudiandae in, atque cupiditate excepturi. Assumenda dolor corporis, aperiam commodi soluta reprehenderit voluptate voluptates architecto deleniti ipsa modi ipsum voluptas maiores hic beatae nisi at accusamus nam ex? Facere et sapiente, natus corporis eaque itaque nisi odit perferendis eos adipisci inventore numquam voluptatum minus laudantium quas. Doloremque, provident facilis? Inventore in, nihil cupiditate quidem quas praesentium possimus ut est, rerum magni suscipit. Porro nam nihil et quas reiciendis perspiciatis unde, ad officia repellat dolores sunt fuga quae minima ipsa tempora earum voluptates natus at distinctio possimus. Repellendus enim quaerat officia."

    const news = [
        { name : "Selam", description, src : "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { name : "Selam 1", description, src : "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { name : "Selam 2", description, src : "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { name : "Selam 3", description, src : "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    ]

    const nextArrow = (
        <div className="absolute right-0 top-1/2 flex justify-center items-center h-10 w-10 rounded-full bg-transparent group-hover:bg-ghostWhite group-hover:shadow-md hover:cursor-pointer">
            <AiOutlineArrowRight className="text-transparent group-hover:text-gunMetal" />
        </div>
    )

    const leftArrow = (
        <div className="absolute left-0 top-1/2 flex justify-center items-center h-10 w-10 rounded-full bg-transparent group-hover:bg-ghostWhite group-hover:shadow-md hover:cursor-pointer">
            <AiOutlineArrowLeft className="text-transparent group-hover:text-gunMetal" />
        </div>
    )


    return (
        <div className="w-full">
            <Fade className="group relative max-w-full" pauseOnHover nextArrow={nextArrow} prevArrow={leftArrow} >
                {news.map((n,i) => (
                    <div key={i} className="relative max-w-full flex justify-center">
                        <p className="absolute bottom-0 text-white z-10">{n.name}</p>
                            {/* <Image src={n.src} layout="fill"   /> */}
                            <img src={n.src} loading="lazy" className="rounded-md object-contain" alt="" />
                    </div>
                ))}

            </Fade>
            
        </div>
    )
}

export default LatestNews

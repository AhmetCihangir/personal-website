import { Fade } from "react-slideshow-image"
import Image from "next/image"
import "react-slideshow-image/dist/styles.css"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"

const LatestNews = () => {
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatibus repudiandae in, atque cupiditate excepturi. Assumenda dolor corporis, aperiam commodi soluta reprehenderit voluptate voluptates architecto deleniti ipsa modi ipsum voluptas maiores hic beatae nisi at accusamus nam ex? Facere et sapiente, natus corporis eaque itaque nisi odit perferendis eos adipisci inventore numquam voluptatum minus laudantium quas. Doloremque, provident facilis? Inventore in, nihil cupiditate quidem quas praesentium possimus ut est, rerum magni suscipit. Porro nam nihil et quas reiciendis perspiciatis unde, ad officia repellat dolores sunt fuga quae minima ipsa tempora earum voluptates natus at distinctio possimus. Repellendus enim quaerat officia."

    const news = [
        { name : "Selam", description, src : "https://cdn.pixabay.com/photo/2021/09/14/14/46/cologne-6624212__340.jpg" },
        { name : "Selam 1", description, src : "https://cdn.pixabay.com/photo/2016/10/17/07/53/busan-night-scene-1747130__340.jpg" },
        { name : "Selam 2", description, src : "https://cdn.pixabay.com/photo/2021/08/12/05/19/cathedral-6539937__340.jpg" },
        { name : "Selam 3", description, src : "https://cdn.pixabay.com/photo/2021/10/03/14/21/sequins-6678110__340.jpg" },
    ]

    const nextArrow = (
        <div className="absolute right-0 top-btn sm:top-btnSm flex justify-center items-center sm:h-10 sm:w-10 h-5 w-5 text-xs sm:text-xl rounded-full bg-transparent group-hover:bg-ghostWhite group-hover:shadow-md cursor-pointer">
            <AiOutlineArrowRight className="text-transparent group-hover:text-gunMetal" />
        </div>
    )

    const leftArrow = (
        <div className="absolute left-0 top-btn sm:top-btnSm flex justify-center items-center sm:h-10 sm:w-10 h-5 w-5 text-xs sm:text-xl rounded-full bg-transparent group-hover:bg-ghostWhite group-hover:shadow-md cursor-pointer">
            <AiOutlineArrowLeft className="text-transparent group-hover:text-gunMetal" />
        </div>
    )


    return (
        <div className="w-full">
            <Fade className="group relative max-w-full" canSwipe pauseOnHover nextArrow={nextArrow} prevArrow={leftArrow} >
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

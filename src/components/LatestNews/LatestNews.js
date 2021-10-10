import { Slide } from "react-slideshow-image"
import Image from "next/image"
import "react-slideshow-image/dist/styles.css"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"
import { useSelector } from "react-redux"
import { useRouter } from "next/router"

const LatestNews = () => {
    const router = useRouter()

    const news = useSelector(state => state.posts.posts.slice(0,4))

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
            <Slide className="group relative max-w-full" canSwipe pauseOnHover nextArrow={nextArrow} prevArrow={leftArrow} >
                {news.map((n,i) => (
                    <div key={i} className="relative max-w-full flex justify-center">
                        <p className="absolute bottom-0 text-white z-10">{n.name}</p>
                            {/* <Image src={n.src} layout="fill"   /> */}
                            <img src={n.src} loading="lazy" className="rounded-md object-contain cursor-pointer" alt=""  onClick={() => router.push("/blog/" +  n.id)}  />
                    </div>
                ))}

            </Slide>
            
        </div>
    )
}

export default LatestNews

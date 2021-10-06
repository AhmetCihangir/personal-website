import { Fade } from "react-slideshow-image"
import Image from "next/image"
import "react-slideshow-image/dist/styles.css"
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"

const LatestNews = () => {
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatibus repudiandae in, atque cupiditate excepturi. Assumenda dolor corporis, aperiam commodi soluta reprehenderit voluptate voluptates architecto deleniti ipsa modi ipsum voluptas maiores hic beatae nisi at accusamus nam ex? Facere et sapiente, natus corporis eaque itaque nisi odit perferendis eos adipisci inventore numquam voluptatum minus laudantium quas. Doloremque, provident facilis? Inventore in, nihil cupiditate quidem quas praesentium possimus ut est, rerum magni suscipit. Porro nam nihil et quas reiciendis perspiciatis unde, ad officia repellat dolores sunt fuga quae minima ipsa tempora earum voluptates natus at distinctio possimus. Repellendus enim quaerat officia."

    const news = [
        { name : "Selam", description, src : "https://media.istockphoto.com/photos/birch-forest-picture-id1285337049?s=612x612" },
        { name : "Selam 1", description, src : "https://media.istockphoto.com/photos/birch-forest-picture-id1285337049?s=612x612" },
        { name : "Selam 2", description, src : "https://media.istockphoto.com/photos/birch-forest-picture-id1285337049?s=612x612" },
        { name : "Selam 3", description, src : "https://media.istockphoto.com/photos/birch-forest-picture-id1285337049?s=612x612" },
    ]


    return (
        <div>
            <Fade className="group relative" pauseOnHover prevArrow={<AiOutlineArrowRight className="absolute right-0 top-1/2 text-transparent group-hover:text-white" />} nextArrow={<AiOutlineArrowLeft className="absolute left-0 top-1/2 text-transparent group-hover:text-white" />} >
                {news.map((n,i) => (
                    <div key={i} className="relative h-80">
                        <p className="absolute bottom-0 text-white z-10">{n.name}</p>
                        <Image src={n.src} layout="fill"  />
                    </div>
                ))}

            </Fade>
            
        </div>
    )
}

export default LatestNews

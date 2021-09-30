import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useRouter } from "next/router"
import { useRef,useEffect } from "react"


const Header = () => {
    const router = useRouter()
    // const ref = useRef(null)
    // gsap.registerPlugin(ScrollTrigger)

    // useEffect(()=>{
    //     const current = ref.current

    //     // gsap.fromTo(current,{
    //     //     opacity : 0,
    //     //     y : -20
    //     // },{
    //     //     opacity : 1,
    //     //     y : 0, 
    //     //     scrollTrigger : {
    //     //         trigger : current.querySelector(".game"),
    //     //         start : "center center",
    //     //         end : "bottom center",
    //     //         scrub : true
    //     //     }
    //     // }).duration(1)

    //     gsap.utils.toArray(current.querySelector(".game")).forEach(panel => {
    //         ScrollTrigger.create({
    //             trigger : panel,
    //             start : "center center",

    //         })
    //     })

        

        
    // },[])

    const header = [
        { name : "About",title : "About", link : "/#about" },
        { name : "Blog",title : "Blog", link : "/blog" },
        { name : "Career",title : "Career", link : "/#career" },
        { name : "Contact",title : "Contact Me", link : "/#contact" },
    ]



    return (
        <div className="flex justify-end space-x-14 mx-12 h-16 mt-2" >
            {header.map((h,i) => (
                <div key={i} className="grid items-center w-20 cursor-pointer text-lg p-1 transition duration-200 rounded-lg ease-in hover:bg-gray-50" onClick={() => router.push(h.link)}>
                    <p className="text-center">{h.name}</p>
                </div>
            ))}
        </div>
    )
}

export default Header

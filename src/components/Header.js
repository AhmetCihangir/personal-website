import { useRouter } from "next/router"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { AiOutlineMenuUnfold } from "react-icons/ai"

const Header = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
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
      <div className="fixed top-0 h-16 w-full bg-ghostWhite z-10 pb-2 rounded-b-md">
        {/* {innerWidth > 500 ? (
          <div className="flex justify-end space-x-14 mt-2 pr-7 h-full w-full">
          {header.map((h, i) => (
            <div
              key={i}
              className="grid items-center w-20 cursor-pointer text-lg p-1 transition duration-200 rounded-lg ease-in hover:bg-gray-50"
              onClick={() => router.push(h.link)}
            >
              <p className="text-center">{h.name}</p>
            </div>
          ))}
        </div>
        ) : (
          <div></div>
        )} */}
        <div className="hidden md:flex justify-end space-x-14 mt-2 pr-7 h-full w-full ">
          {header.map((h, i) => (
            <div
              key={i}
              className="grid items-center w-20 cursor-pointer text-lg p-1 transition duration-200 rounded-lg ease-in hover:bg-gray-50"
              onClick={() => router.push(h.link)}
            >
              <p className="text-center">{h.name}</p>
            </div>
          ))}
        </div>

        <div className="flex md:hidden justify-center mt-2 h-full w-full relative">
            {!open ? (
              <FiMenu className="h-full w-6 transition ease-in cursor-pointer" onClick={() => setOpen(!open)} />
            ) : (
              <AiOutlineMenuUnfold className="h-full w-6 transition ease-in cursor-pointer" onClick={() => setOpen(!open)} />
            )}
            
            {open && <div className="grid grid-flow-row space-y-1 absolute -bottom-32 w-full transition-all ease-in bg-ghostWhite">
              {header.map((h, i) => (
                <div
                  key={i}
                  className="grid items-center h-8 w-full cursor-pointer text-lg p-1 transition duration-200 rounded-lg ease-in hover:bg-gray-50"
                  onClick={() => router.push(h.link)}
                >
                  <p className="text-center">{h.name}</p>
                </div>
              ))}
            </div>}
        </div>

      </div>
    );
}

export default Header

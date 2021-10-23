import { useRouter } from "next/router"
import { useRef, useState } from "react"
import { FiMenu } from "react-icons/fi"
import { AiOutlineMenuUnfold,AiOutlineSearch as ScIcon } from "react-icons/ai"
import gsap from "gsap"

const Header = () => {
    const router = useRouter()
    const [open, setOpen] = useState(false)
    const [searchOpen, setSearchOpen] = useState(false)
    const ref = useRef(null)
    const [search, setSearch] = useState("")

    const sOpen = () => {
      gsap.fromTo(ref.current.querySelector(".search"), { y : -20, opacity : 0 },{ y : 0, opacity : 1, display : "flex" })
      gsap.to(ref.current.querySelector(".redirect"),{ opacity : 0 })
      setOpen(false)
      setSearchOpen(true)
    }

    const sClose = () => {
      gsap.fromTo(ref.current.querySelector(".search"), { y : 0, opacity : 1 },{ y : -20, opacity : 0, display : "none" })
      setSearchOpen(false)
    }

    const rOpen = () => {
      gsap.fromTo(ref.current.querySelector(".redirect"), { y : -10, opacity : 0.5 },{ y : 0, opacity : 1, display : "grid", duration : .5, ease : "power0" })
      gsap.to(ref.current.querySelector(".search"),{ opacity : 0 })
      setSearchOpen(false)
      setOpen(true)
    }

    const rClose = () => {
      gsap.fromTo(ref.current.querySelector(".redirect"), { y : 0, opacity : 1 },{ y : -20, opacity : 0, display : "none", duration : .5  })
      setOpen(false)
    }


    const header = [
        { name : "About",title : "About", link : "/#about" },
        { name : "Blog",title : "Blog", link : "/blog" },
        { name : "Career",title : "Career", link : "/#career" },
        { name : "Contact",title : "Contact Me", link : "/#contact" },
    ]

    const searchSystem = (e) => {
      if(e.key === "Enter"){
        router.push("/search/" + search)
      }
    }

    return (
      <div
        className="fixed top-0 h-16 w-full bg-ghostWhite z-50 pb-2 rounded-b-md"
        ref={ref}
      >
        <div className="hidden md:flex justify-end space-x-14 mt-2 pr-7 h-full w-full ">
          {router.pathname >= "/blog" && (
            <div className="flex justify-center items-center w-5/12 sm:w-2/4 relative">
              <input
                type="text"
                placeholder="Search"
                className="h-6 w-full outline-none rounded-full pl-5 text-sm filter shadow-sm"
                value={search}
                onKeyPress={searchSystem}
                onChange={(e) => setSearch(e.target.value)}
              />
              <ScIcon className="h-6 w-9 text-black absolute right-0 bg-gray-300 rounded-r-full p-0.5 cursor-pointer" onClick={() => router.push("/search/" + search)} />
            </div>
          )}
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

        <div className="flex md:hidden justify-end mt-2 h-full w-full relative">
          <div className="w-1/2 flex justify-between mr-5">
            {!open ? (
              <FiMenu
                className="iconO h-full w-6 transition ease-in cursor-pointer ml-2"
                onClick={() => rOpen()}
              />
            ) : (
              <AiOutlineMenuUnfold
                className="iconC h-full w-6 transition ease-in cursor-pointer ml-2"
                onClick={() => rClose()}
              />
            )}
            <ScIcon
              className="w-6 h-full cursor-pointer"
              onClick={() => (searchOpen ? sClose() : sOpen())}
            />
          </div>

          <div
            className={`redirect ${
              !open && "hidden"
            } grid-flow-row space-y-1 absolute -bottom-32 w-full transition-all ease-in bg-ghostWhite`}
          >
            {header.map((h, i) => (
              <div
                key={i}
                className="grid items-center h-8 w-full cursor-pointer text-lg p-1 transition duration-200 rounded-lg ease-in hover:bg-gray-50"
                onClick={() => router.push(h.link)}
              >
                <p className="text-center">{h.name}</p>
              </div>
            ))}
          </div>

          <div className="search hidden justify-center w-full left-auto h-10 bg-ghostWhite z-50 absolute -bottom-10 text-center px-2 py-7">
            {router.pathname >= "/blog" && (
              <div className="flex justify-center items-center w-9/12 sm:w-2/4 relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="h-6 w-full outline-none rounded-full pl-5 text-sm filter shadow-sm"
                  value={search}
                  onKeyPress={searchSystem}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <ScIcon className="h-6 w-9 text-black absolute right-0 bg-gray-300 rounded-r-full p-0.5 cursor-pointer" onClick={() => router.push("/search/" + search)} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
}

export default Header

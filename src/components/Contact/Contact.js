import { SiGmail } from "react-icons/si"
import { RiKakaoTalkFill } from "react-icons/ri"
import { FaInstagram } from "react-icons/fa"
import { AiFillGithub,AiFillLinkedin } from "react-icons/ai"
import { useRef } from "react"
import gsap from "gsap"
import { useRouter } from "next/router"


const Contact = () => {
    const ref = useRef(null)
    const router = useRouter()
    

    const contacts = [
        { name : "Gmail", Icon : <SiGmail className="cion bg-gmail" />, accountName : "cihangircihangir6@gmail.com", classes : [] },
        { name : "Kakao Talk", Icon : <RiKakaoTalkFill className="cion bg-kakaotalk" />, accountName : "Mynaswonkzyie" },
        { name : "Instagram", link : "", Icon : <FaInstagram className="cion bg-gradient-to-br from-instagram-blue via-instagram-orange to-instagram-purple"  />, accountName : "@ahmet_cihangir_lmc" },
        { name : "Github", link : "https://github.com/AhmetCihangir", Icon : <AiFillGithub className="cion bg-black text-white" />, accountName : "AhmetCihangir" },
        { name : "Linkedin", link : "https://www.linkedin.com/in/ahmet-cihangir-gündoğdu/", Icon : <AiFillLinkedin className="cion bg-linkedin" />, accountName : "Ahmet Cihangir Gundogdu" },
    ]

    const createAnimation = (element) => {
        gsap.to(element.icon,{ y : -25, ease : "power2",  duration : .5 })
        gsap.fromTo(element.text,{ color : "transparent", y : -10 },{ ease : "power2", color : "black" , y : 0 , z : 1 , duration : .5 })
    }

    const createBackAnimation = (element) => {
        gsap.to(element.icon,{ y : 0, ease : "power2", duration : .5 })
        gsap.fromTo(element.text,{ color : "black", y : 0 },{ease : "power2" ,color : "transparent" , y : -10 , z : 0, duration : .5 })    
    }

    return (
      <div className="flex justify-center items-center h-screen">
        <div ref={ref} className="grid grid-cols-5 divide-x-2">
          {contacts.map((c, i) => (
            <div
              key={i}
              className={`sm${i} w-16 md:w-40 ${c.link && "cursor-pointer"}`}
              onMouseEnter={() =>
                createAnimation({
                  icon: `.sm${i} .icon`,
                  text: `.sm${i} .text`,
                })
              }
              onMouseLeave={() =>
                createBackAnimation({
                  icon: `.sm${i} .icon`,
                  text: `.sm${i} .text`,
                })
              }

              onClick={() => {
                if(c.link){
                  router.replace(c.link)
                }
              }}
            >
              <div className="icon flex justify-center items-center">
                {c.Icon}
              </div>
              <div className={`text text-center text-xxs md:text-xl w-full break-words -z-1 text-transparent`} >{c.accountName}</div>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Contact

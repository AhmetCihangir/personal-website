import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import Skill from "./Skill"
import { VscLibrary } from "react-icons/vsc"
import { BiCodeAlt } from "react-icons/bi"
import { IoLanguage } from "react-icons/io5" 



const Skills = () => {
    const ref = useRef()
    gsap.registerPlugin(ScrollTrigger)

    const skills = [
        { skillName : "Programming Languages" , skills : ["Javascript","Python","HTML","CSS","SQL","NOSQL","Firebase","SQLite"], topClass : "border-green-600 bg-green-400", bottomClass : "border-green-500 bg-green-300",BallIcon : BiCodeAlt  },
        { skillName : "Libraries" , skills : ["React.js","Next.js","Vue.js","React Native","Redux","Tailwind.css","Express.js","Socket.io"], topClass : "border-red-600 bg-red-400", bottomClass : "border-red-500 bg-red-300",BallIcon : VscLibrary },
        { skillName : "Languages" , skills : ["Turkish (Native)","English (Advanced)","Korean (Intermediate)"], topClass : "border-blue-600 bg-blue-300", bottomClass : "border-yellow-500 bg-yellow-300",BallIcon : IoLanguage },
    ]
    
    useEffect(() => {
      const main = gsap.timeline({
        scrollTrigger : {
          trigger : ref.current,
          scrub : true,
          start: "top top",
          end: "75% center",
          pin : true,
          pinSpacing : 1,
          anticipatePin : 1,
        }
      })


      .to(ref.current.querySelector(".grid>.skill0>.topClass"),{ backgroundColor : "#1E2749",borderColor : "#1E2749",color : "#E4D9FF" })
      .to(ref.current.querySelector(".grid>.skill0>.bottomClass"),{ backgroundColor : "#E4D9FF",borderColor : "#1E2749" }, "<")

      .to(ref.current.querySelector(".grid>.skill0>.ball"),{ duration : 3, y : -200, ease : "power2"}, "<")
      .to(ref.current.querySelector(".grid>.skill0>.ball"),{ duration : 3, y : 0, ease : "power2"})


      .to(ref.current.querySelector(".grid>.skill1>.topClass"),{ backgroundColor : "#1E2749",borderColor : "#1E2749",color : "#E4D9FF" })
      .to(ref.current.querySelector(".grid>.skill1>.bottomClass"),{ backgroundColor : "#E4D9FF",borderColor : "#1E2749" }, "<")

      .to(ref.current.querySelector(".grid>.skill1>.ball"),{ duration : 3, y : -200, ease : "power2"},"<")
      .to(ref.current.querySelector(".grid>.skill1>.ball"),{ duration : 3, y : 0, ease : "power2"})

      .to(ref.current.querySelector(".grid>.skill2>.topClass"),{ backgroundColor : "#1E2749",borderColor : "#1E2749",color : "#E4D9FF" })
      .to(ref.current.querySelector(".grid>.skill2>.bottomClass"),{ backgroundColor : "#E4D9FF",borderColor : "#1E2749" }, "<")

      .to(ref.current.querySelector(".grid>.skill2>.ball"),{ duration : 3, y : -200, ease : "power2"},"<")
      .to(ref.current.querySelector(".grid>.skill2>.ball"),{ duration : 3, y : 0, ease : "power2"})
    },[])


    return (
      <div ref={ref} className="flex items-center justify-center h-screen">
        <div className="w-3/4 grid grid-cols-3 space-x-2 sm:space-x-5 md:space-x-10">
          {skills.map((s, i) => (
            <Skill key={i} id={i} {...s} />
          ))}
        </div>
      </div>
    );
}

export default Skills

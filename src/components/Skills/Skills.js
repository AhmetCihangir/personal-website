import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import { useEffect, useRef } from "react"
import Skill from "./Skill"



const Skills = () => {
    const ref = useRef()
    gsap.registerPlugin(ScrollTrigger)

    const skills = [
        { skillName : "Programming Languages" , skills : ["Javascript","Python","HTML","CSS","SQL","NOSQL","Firebase","SQLite"], topClass : "border-green-600 bg-green-400", bottomClass : "border-green-500 bg-green-300" },
        { skillName : "Libraries" , skills : ["React.js","Next.js","Vue.js","React Native","Redux","Tailwind.css","Express.js","Socket.io"], topClass : "border-red-600 bg-red-400", bottomClass : "border-red-500 bg-red-300" },
        { skillName : "Languages" , skills : ["Turkish (Native)","English (Advanced)","Korean (Intermediate)"], topClass : "border-blue-600 bg-blue-300", bottomClass : "border-yellow-500 bg-yellow-300" },
    ]
    
    useEffect(() => {
      console.log(ref.current.querySelector(".grid>.skills>.bs"))

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


      .to(ref.current.querySelector(".grid>.skill0>.topClass"),{ backgroundColor : "rgb(16, 185, 129)",borderColor : "rgb(5, 150, 105)" })
      .to(ref.current.querySelector(".grid>.skill0>.bottomClass"),{ backgroundColor : "rgb(110, 231, 183)",borderColor : "rgb(52, 211, 153)" }, "<")
      .to(ref.current.querySelector(".grid>.skill0>.ball"),{ duration : 3, y : -200, ease : "bounce"})
      .to(ref.current.querySelector(".grid>.skill0>.ball"),{ duration : 3, y : 0, ease : "bounce"})


      .to(ref.current.querySelector(".grid>.skill1>.topClass"),{ backgroundColor : "rgb(239, 68, 68)",borderColor : "rgb(220, 38, 38)" })
      .to(ref.current.querySelector(".grid>.skill1>.bottomClass"),{ backgroundColor : "rgb(252, 165, 165)",borderColor : "rgb(248, 113, 113)" }, "<")
      .to(ref.current.querySelector(".grid>.skill1>.ball"),{ duration : 3, y : -200, ease : "bounce"})
      .to(ref.current.querySelector(".grid>.skill1>.ball"),{ duration : 3, y : 0, ease : "bounce"})

      .to(ref.current.querySelector(".grid>.skill2>.topClass"),{ backgroundColor : "rgb(245, 158, 11)",borderColor : "rgb(217, 119, 6)" },)
      .to(ref.current.querySelector(".grid>.skill2>.bottomClass"),{ backgroundColor : "rgb(252, 211, 77)",borderColor : "rgb(251, 191, 36)" }, "<")
      .to(ref.current.querySelector(".grid>.skill2>.ball"),{ duration : 3, y : -200, ease : "bounce"})
      .to(ref.current.querySelector(".grid>.skill2>.ball"),{ duration : 3, y : 0, ease : "bounce"})
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

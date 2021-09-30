import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger"
import Image from "next/image"
import { useEffect, useRef } from "react"



const Introduce = () => {
    const ref = useRef()
    gsap.registerPlugin(ScrollTrigger)
    const letters = [
        {link : "/logo/C.svg", name : "C", animation : ""},
        {link : "/logo/I.svg", name : "I", animation : ""},
        {link : "/logo/R.svg", name : "R", animation : ""},
        {link : "/logo/Y.svg", name : "Y", animation : ""},
        {link : "/logo/U.svg", name : "U", animation : ""},
    ]

    useEffect(() => {
        const classes = ref.current.querySelectorAll(".jobs")

        const element = ref.current.querySelector(".letters")


        const main = gsap.timeline({
            scrollTrigger : {
                trigger : ref.current,
                scrub: true,
                start: "top top",
                end: "75% center",
                pin : true,
                pinSpacing : 0,
                anticipatePin : 1
            }
        })
        .from(classes,{opacity : 0})
        .from(element,{ opacity : 0 })
        .to(element,{ opacity : 1, scale : () => innerWidth > 640 ? .5 : .25  })    
        .to(classes,{opacity : 1 , duration : 1})
        .to(classes,{opacity : 0})
        
    },[])

    // const jobs = [
    //     {name : "UI / UX Designer", position : {top : positions[Math.floor(Math.random() * positions.length)], left : positions[Math.floor(Math.random() * positions.length)]}},
    //     {name : "Frontend Developer", position : {top : positions[Math.floor(Math.random() * positions.length)], left : positions[Math.floor(Math.random() * positions.length)]}},
    //     {name : "Backend Developer", position : {top : positions[Math.floor(Math.random() * positions.length)], left : positions[Math.floor(Math.random() * positions.length)]}},
    //     {name : "Python Developer", position : {top : positions[Math.floor(Math.random() * positions.length)], left : positions[Math.floor(Math.random() * positions.length)]}},
    //     {name : "React Native (Mobil) Developer", position : {top : positions[Math.floor(Math.random() * positions.length)], left : positions[Math.floor(Math.random() * positions.length)]}},
    //     {name : "Entrepreneur", position : {top : positions[Math.floor(Math.random() * positions.length)], left : positions[Math.floor(Math.random() * positions.length)]}},
    //     {name : "Student at Huseyin Avni Sozen High School", position : {top : positions[Math.floor(Math.random() * positions.length)], left : positions[Math.floor(Math.random() * positions.length)]}},
    // ]

    return (
      <div
        ref={ref}
        className="flex relative justify-center h-full items-center"
      >
        <div className="flex letters scale-50 sm:scale-100 justify-center items-start md:space-x-2 -space-x-4">
          {letters.map((l, i) => (
            <div className="w-40" key={i}>
              <Image
                layout="responsive"
                className="letters"
                width={100}
                height={100}
                objectFit="contain"
                src={l.link}
              />
            </div>
          ))}
        </div>
        <p className="jobs top-120 text-3xl w-full text-center">
          Ahmet Cihangir / 류 예준 (Ryu Yejun)
        </p>

        {/* {jobs.map((j,i) => (
                <p key={i} className={`absolute top-20 left-40 text-gray-400`}>{j.name}</p>
            ))} */}
        <p className="jobs top-20 left-40">UI / UX Designer</p>
        <p className="jobs top-64 left-56 sm:left-80">Frontend Developer</p>
        <p className="jobs top-72 sm:top-60 left-10 sm:left-160">
          Backend Developer
        </p>
        <p className="jobs top-160">Python Developer</p>
        <p className="jobs bottom-44 left-40">
          React Native (Mobile App) Developer
        </p>
        <p className="jobs top-12 right-40">Entrepreneur</p>
        <p className="jobs bottom-12 right-40">Student</p>
      </div>
    );
}

export default Introduce

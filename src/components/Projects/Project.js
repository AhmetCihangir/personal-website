import { AiFillGithub } from "react-icons/ai"
import Image from "next/image"


const Project = ({ name , image, description, githubLink , websiteLink }) => {
    return (
        <div className="grid grid-cols-7 h-40">
            <div className="col-span-2 relative">
                <Image src={image} layout="fill" objectFit="contain" />
            </div>
            <div className="col-span-5 grid-flow-row my-auto">
                <h3 className="text-2xl font-bold">{name}</h3>
            </div>
        </div>
    )
}

export default Project

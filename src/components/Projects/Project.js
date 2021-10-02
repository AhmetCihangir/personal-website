import { AiFillGithub, AiOutlineLink } from "react-icons/ai"
import Image from "next/image"
import { useRouter } from "next/router";


const Project = ({ name , image, description, githubLink , websiteLink }) => {
  const router = useRouter()

    return (
      <div className="grid grid-cols-7 h-40 mb-3 mr-3 rounded-md">
        <div className="col-span-2 relative">
          <Image
            src={image}
            layout="fill"
            className="rounded-l-xl "
            objectFit="cover"
          />
        </div>
        <div className="col-span-5 flex items-center grid-flow-row h-full border-1 border-l-0 rounded-r-xl border-black">
          <div className="w-full">
            <h3 className="text-2xl font-bold ml-2">{name}</h3>
            <h4 className="text-base font-semibold ml-2">{description}</h4>
            <div className="flex justify-end mt-2">
                {githubLink && (
                <button onClick={() => router.replace(githubLink)} className="bg-black text-white w-16 rounded-sm flex justify-center mr-2">
                    <AiFillGithub className="h-6 mr-1" /> Github{" "}
                </button>
                )}
                {websiteLink && (
                <button onClick={() => router.replace(websiteLink)} className="bg-blue-700 text-white w-16 rounded-sm flex justify-center mr-2">
                    <AiOutlineLink className="h-6 mr-1" /> Link{" "}
                </button>
                )}
            </div>

          </div>
        </div>
      </div>
    );
}

export default Project

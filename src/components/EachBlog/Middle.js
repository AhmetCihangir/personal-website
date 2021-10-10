// import { BsFacebook,BsInstagram } from "react-icons/bs"

// import { AiOutlineInstagram,AiOutlineFacebook,AiOutlineTwitter, } from "react-icons/ai"

const Middle = ({ article, fontSize }) => {
    return (
        <div className="flex justify-center my-10">
            <div className="w-10/12 sm:w-8/12">
                <p className={`${fontSize} text-spaceCadet2`}>
                    {article}
                </p>
            </div>
        </div>
    )
}

export default Middle

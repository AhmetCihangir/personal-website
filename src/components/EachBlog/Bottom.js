import { useState } from "react"
import { AiOutlineLike,AiFillLike,AiFillEye,AiOutlineComment } from "react-icons/ai"

const Bottom = ({ cols,liked,likeAmount,comments,watched }) => {

    console.log(liked,likeAmount,comments)

    return (
        <div className={`w-full mt-5 sm:m min-h-20 ${cols}`}>

            <div className="flex space-x-7 w-full my-2">
                <div className="likes flex justify-center items-center space-x-2">
                    <AiOutlineLike className={`${liked && "hidden"} ${!liked && "block"} h-7 w-7`} />
                    <AiFillLike className={`${!liked && "hidden"} ${liked && "block"} h-7 w-7 text-blue-500`} />
                    <p>
                        {likeAmount}
                    </p>
                </div>

                <div className="watched flex items-center justify-center space-x-1">
                    <AiFillEye className="h-7 w-7" />
                    <p>
                        {watched}
                    </p>
                </div>

                <div className="comments flex items-center justify-center space-x-1">
                    <AiOutlineComment className="h-7 w-7" />
                    <p>
                        {comments?.length}
                    </p>
                </div>  
                
            </div>


            <div className="bg-gunMetal w-3/4 h-0.5" />

            <div className="comments flex-row divide-y-2 my-3 mx-2">

                {comments?.map((c,i) => (
                    <div key={i} className="grid-flow-row grid-rows-5 ">
                        <div className="row-span-2">
                            <p className="w-1/4 font-bold sm:text-xl">
                                {c.name}
                            </p>
                        </div>
                        <div className="row-span-3 flex justify-end my-2">
                            <p className="w-11/12 text-xs sm:text-sm">
                                {c.text}
                            </p>
                        </div>
                    </div>
                ))}

            </div>


        </div>
    )
}

export default Bottom

import { BiFont } from "react-icons/bi"
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai"
import { useEffect, useState } from "react"


const Top = ({ author, date , name, src, onFontSize }) => {
  const [fontNumber, setFontNumber] = useState(0)

  const changeFontSize = number => {
    setFontNumber(fontNumber + number)
  }


  useEffect(() => {
    if(fontNumber === -3){
      onFontSize("text-xxxs sm:text-xs")
    }
    if(fontNumber === -2){
      onFontSize("text-xxs sm:text-sm")
    }
    if(fontNumber === -1){
      onFontSize("text-xs sm:text-base")
    }
    if(fontNumber === 0){
      onFontSize("text-sm sm:text-lg")
    }
    if(fontNumber === 1){
      onFontSize("text-base sm:text-xl")
    }
    if(fontNumber === 2){
      onFontSize("text-lg sm:text-2xl")
    }
    if(fontNumber === 3){
      onFontSize("text-xl sm:text-3xl")
    }

  }, [fontNumber])



    return (
      <div className="mt-10">
        <div className="relative grid grid-flow-row gap-2 w-3/4 mx-auto mb-5">
          <p className="text-3xl sm:text-5xl">{name}</p>
          <div className="flex items-end space-x-1">
            <p className="text-gray-600 text-sm sm:text-base">{author + " - "}</p>
            <p className="text-gray-500 text-xs sm:text-sm">{date}</p>
            <div className="flex flex-grow justify-end">
            <div className="relative h-6 w-6 sm:h-8 sm:w-8 cursor-pointer" onClick={() => changeFontSize(-1)} >
              <BiFont className="w-full h-full" />
              <AiOutlineMinus className="absolute top-0 -right-1 h-3 w-3 sm:h-4 sm:w-4" />
            </div>
            <div className="relative h-6 w-6 sm:h-8 sm:w-8 cursor-pointer" onClick={() => changeFontSize(1)}>
              <BiFont className="w-full h-full" />
              <AiOutlinePlus className="absolute top-0 -right-1 h-3 w-3 sm:h-4 sm:w-4" />
            </div>
          </div>
          </div>

        </div>
        <div id="image" className="w-11/12 mx-auto sm:ml-10 mb-5 sm:w-2/3">
          <img className="w-full rounded-lg" loading="lazy" src={src} alt="" />
        </div>
      </div>
    );
}

export default Top

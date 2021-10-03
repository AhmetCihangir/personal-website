import { AiOutlineSearch as ScIcon } from "react-icons/ai"

const Search = () => {
    return (
        <div className="flex mt-16 justify-center h-20 relative">
            <div className="flex justify-center items-center w-3/4 sm:w-2/4 relative">
                <input type="text" placeholder="Search" className="h-6 w-full outline-none rounded-full pl-5 text-sm"  />
                <ScIcon className="h-6 w-9 text-black absolute right-0 bg-gray-300 rounded-r-full p-0.5" />
            </div>

            <div className="bg-gunMetal absolute w-3/4 h-0.5 bottom-0" />

        </div>
    )
}

export default Search

import { useRouter } from "next/router"
import { useSelector } from "react-redux"

const MostWatched = () => {

    const mostWatched = useSelector(state => state.posts.posts.slice(0,10))
    const router = useRouter()

    return (
        <div className="min-h-90 w-3/4">
            <p className="text-gunMetal font-semibold text-xl ml-4 mb-2">Most Watched</p>

            {mostWatched.map((n,i) => (
                <div key={i} className="h-9 min-w-full flex items-center relative cursor-pointer mt-2" onClick={() => router.push("/blog/" + n.id)}>
                    <div className="h-7 w-7  flex justify-center items-center text-sm rounded-full bg-gunMetal text-ghostWhite"> {i+1} </div>
                    <div className="text-sm flex-grow flex justify-between"> 
                        <p className="ml-2"> {"  " + n.name}  </p> 
                        <div className="flex space-x-1"> 
                            {n.tags.map((t,i) => (
                                <div key={i} className="text-gray-400">#{t}</div>
                            ))} 
                        </div>
                    </div>
                    <div className="bg-gunMetal absolute -top-1 h-px w-full z-10" />
                </div>
            ))}
            
        </div>
    )
}

export default MostWatched

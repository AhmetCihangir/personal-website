const MostWatched = () => {
    const mostWatched = [
        { title : "Selam 1", tags : ["Korea", "Code"] },
        { title : "Selam 2", tags : ["Korea", "Code"] },
        { title : "Selam 3", tags : ["Korea", "Code"] },
        { title : "Selam 4", tags : ["Korea", "Code"] },
        { title : "Selam 5", tags : ["Korea", "Code"] },
        { title : "Selam 6", tags : ["Korea", "Code"] },
        { title : "Selam 7", tags : ["Korea", "Code"] },
        { title : "Selam 8", tags : ["Korea", "Code"] },
        { title : "Selam 9", tags : ["Korea", "Code"] },
        { title : "Selam 10", tags : ["Korea", "Code"] },
    ]

    return (
        <div className="min-h-90 w-3/4">
            <p className="text-gunMetal font-semibold text-xl ml-4 mb-2">Most Watched</p>

            {mostWatched.map((n,i) => (
                <div key={i} className="h-9 min-w-full flex items-center relative cursor-pointer mt-2">
                    <div className="h-7 w-7  flex justify-center items-center text-sm rounded-full bg-gunMetal text-ghostWhite"> {i+1} </div>
                    <div className="text-sm flex-grow flex justify-between"> 
                        <p className="ml-2"> {"  " + n.title}  </p> 
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

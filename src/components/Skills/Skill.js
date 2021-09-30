

const Skill = ({ skillName,skills,topClass,bottomClass, id }) => {
    
    return (
        <div className={`relative skill${id} skills h-auto`}>
            <div className={`w-full border-4 rounded-t-md p-5 bg-gray-500 border-gray-500 topClass bs`}>
                <p className="font-bold text-xxs sm:text-sm md:text-base text-center">{skillName}</p>
            </div>
            <div className={`w-full h-auto border-2 border-t-0 rounded-b-md bg-gray-500 border-gray-500 bottomClass bs`}>
                {skills.map((s,i) => (
                    <p className="font-semibold text-center p-1 text-xs sm:text-sm md:text-base" key={i}>{s}</p>
                ))}
            </div>

            <div className="absolute w-full h-12 -top-6 flex justify-center ball">
                <div className={`w-12 h-12 rounded-full ${bottomClass}`} />
            </div>
            


        </div>
    )
}

export default Skill

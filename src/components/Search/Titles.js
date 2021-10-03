const Titles = () => {
    const titles = ["Korea","Coding","Korean","Marvel","Technology","Coin"]

    return (
        <div className="flex justify-center">
            <div className="flex w-5/6 my-4 grid-flow-col overflow-scroll scrollbar-hide">
                { titles.map((t,i) => (
                    <div className="bg-gunMetal text-ghostWhite rounded-full p-1 px-3 mr-3" key={i}> {t} </div>
                )) }
            </div>

        </div>
    )
}

export default Titles

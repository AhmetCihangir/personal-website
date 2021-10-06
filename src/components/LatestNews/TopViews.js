import Latest2News from "./Latest2News"
import LatestNews from "./LatestNews"

const TopViews = () => {
    return (
        <div className="flex justify-center h-96">
            <div className="w-6/12">
                <LatestNews />
                <Latest2News />
            </div>

            
        </div>
    )
}

export default TopViews

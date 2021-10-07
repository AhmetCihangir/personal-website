import Latest2News from "./Latest2News"
import LatestNews from "./LatestNews"
import MostWatched from "./MostWatched"

const TopViews = () => {
    return (
        <div className="flex justify-center space-x-16 min-h-96 mt-4">
            <div className="w-2/3 sm:w-6/12">
                <LatestNews />
                <Latest2News />
            </div>

            <div className="w-1/4 hidden sm:flex justify-center">
                <MostWatched />
            </div>

            
        </div>
    )
}

export default TopViews

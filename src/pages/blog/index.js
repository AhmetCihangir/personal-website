import Header from "../../components/Header"
import LatestNews from "../../components/LatestNews/LatestNews"
import Search from "../../components/Search/Search"
import Titles from "../../components/Search/Titles"

const blog = () => {
    return (
        <div className="min-h-screen bg-ghostWhite">
            <div className="h-16" />
            <Header />
            {/* <Search />
            <Titles /> */}
            <LatestNews />
            
        </div>
    )
}

export default blog

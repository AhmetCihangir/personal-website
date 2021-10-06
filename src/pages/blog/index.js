import Header from "../../components/Header"
import TopViews from "../../components/LatestNews/TopViews"
import Search from "../../components/Search/Search"
import Titles from "../../components/Search/Titles"

const blog = () => {
    return (
        <div className="min-h-screen bg-ghostWhite">
            <div className="h-16" />
            <Header />
            {/* <Search />
            <Titles /> */}
            <TopViews />
            
        </div>
    )
}

export default blog

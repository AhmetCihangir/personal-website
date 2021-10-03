import Header from "../../components/Header"
import Search from "../../components/Search/Search"
import Titles from "../../components/Search/Titles"

const blog = () => {
    return (
        <div className="min-h-screen bg-ghostWhite">
            <div className="h-16" />
            <Header />
            <Search />
            <Titles />
        </div>
    )
}

export default blog

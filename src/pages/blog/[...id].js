import Top from "../../components/EachBlog/Top"
import Middle from "../../components/EachBlog/Middle"
import Bottom from "../../components/EachBlog/Bottom"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import { selectPosts } from "../../slices/postSlice"
import Header from "../../components/Header"
import { useState } from "react"

const Blog = () => {
    const router = useRouter()
    const { id } = router.query

    const post = useSelector(state => state.posts.posts.filter(p => p.id === parseInt(id))[0])

    const [fontSize, setFontSize] = useState("text-sm sm:text-lg")
    

    return (
        <div className="min-h-screen bg-ghostWhite">
            <div className="h-16" />
            <Header />
            <img src="https://cdn.pixabay.com/photo/2021/09/25/15/47/mail-6655278__340.jpg" loading="lazy" className="hidden sm:block w-6/12 mx-auto rounded-lg" alt="" />
            <Top author={post?.author} date={post?.date} name={post?.name} src={post?.src} onFontSize={(change) => setFontSize(change)} />
            <Middle article={post?.article} fontSize={fontSize} />
            <Bottom />
            
        </div>
    )
}

export default Blog

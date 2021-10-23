import Top from "../../components/EachBlog/Top"
import Middle from "../../components/EachBlog/Middle"
import { useRouter } from "next/router"
import { useSelector } from "react-redux"
import Header from "../../components/Header"
import { useState,useEffect } from "react"

const Blog = () => {
    const router = useRouter()
    const { id } = router.query

    const post = useSelector(state => state.posts.posts.filter(p => p.id === parseInt(id))[0])
    const recommends = useSelector(state => state.posts.posts.filter(p => p.tags.includes(post?.tags[0])))

    const [fontSize, setFontSize] = useState("text-sm sm:text-lg")
    const [liked, setLiked] = useState(false)

    useEffect(() => {
        const isLiked = JSON.parse(localStorage.getItem("likedBlogs"))
        if(!isLiked){
            localStorage.setItem("likedBlogs",JSON.stringify({ datas : [] }))
        }
        if(isLiked){
            const Liked = isLiked.datas.includes(parseInt(id))
            setLiked(Liked)
        }
    }, [post])
    

    return (
        <div className="min-h-screen bg-ghostWhite">
            <div className="h-16" />
            <Header />
            <img src="https://cdn.pixabay.com/photo/2021/09/25/15/47/mail-6655278__340.jpg" loading="lazy" className="hidden sm:block w-6/12 mx-auto rounded-lg" alt="" />
            <Top author={post?.author} date={post?.date} name={post?.name} src={post?.src} onFontSize={(change) => setFontSize(change)} />
            <Middle article={post?.article} fontSize={fontSize} recommends={recommends} comments={post?.comments} likeAmount={post?.likeAmount} liked={liked} watched={post?.watched} />            
        </div>
    )
}

export default Blog

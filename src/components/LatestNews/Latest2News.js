import Post from "../Post/Post"

const Latest2News = () => {

    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatibus repudiandae in, atque cupiditate excepturi. Assumenda dolor corporis, aperiam commodi soluta reprehenderit voluptate voluptates architecto deleniti ipsa modi ipsum voluptas maiores hic beatae nisi at accusamus nam ex? Facere et sapiente, natus corporis eaque itaque nisi odit perferendis eos adipisci inventore numquam voluptatum minus laudantium quas. Doloremque, provident facilis? Inventore in, nihil cupiditate quidem quas praesentium possimus ut est, rerum magni suscipit. Porro nam nihil et quas reiciendis perspiciatis unde, ad officia repellat dolores sunt fuga quae minima ipsa tempora earum voluptates natus at distinctio possimus. Repellendus enim quaerat officia."

    const news = [
        { name : "Selam 4", description, src : "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { name : "Selam 5", description, src : "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
        { name : "Selam 6", description, src : "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bmF0dXJlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
    ]

    return (
        <div className="w-full grid grid-cols-3 gap-4 mt-3 bg-ghostWhite">
            { news.map((n,i) => (
                <Post key={i} post={n} width="w-full" height="h-full" />
            )) }
            
        </div>
    )
}

export default Latest2News

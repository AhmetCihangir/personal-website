import { createSlice } from "@reduxjs/toolkit";

const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta voluptatibus repudiandae in, atque cupiditate excepturi"

const likeAmount = 10

const comments = [
    { name : "Selam 1", text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, perferendis eveniet sed quis voluptates eligendi aperiam quas quasi neque magni.", id : 0 },
    { name : "Selam 2", text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, perferendis eveniet sed quis voluptates eligendi aperiam quas quasi neque magni.", id : 0 },
    { name : "Selam 3", text : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur, perferendis eveniet sed quis voluptates eligendi aperiam quas quasi neque magni.", id : 0 },
]

const article = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos illum itaque sequi mollitia in earum quod molestias natus repellendus voluptatem quisquam dolor quaerat rerum soluta dignissimos tempore, facere harum. Iure delectus quia reprehenderit eius rerum voluptatem nihil, ratione soluta praesentium, est mollitia at cupiditate deleniti maxime facilis repudiandae illum! Maxime facilis dolorem laudantium earum. Dolorem eos eaque saepe. Cumque quod quas magnam labore sapiente similique tempore doloremque. Fuga hic deserunt placeat, ad incidunt ab quae laudantium ratione unde reprehenderit soluta quod veritatis id reiciendis optio voluptate! Mollitia quisquam, iusto provident fuga deleniti fugit ipsum tempore quia inventore, ipsa placeat animi debitis temporibus illo incidunt quaerat cumque sint. Placeat consequuntur necessitatibus ipsum sunt neque dolor velit a aut quod libero. Dicta dolor nobis esse aliquam eius quidem aliquid facere obcaecati molestiae at, velit libero adipisci, consequatur iste. Necessitatibus, laboriosam facilis labore sapiente porro quas. Dolorem dicta numquam dolor enim veritatis amet at distinctio necessitatibus eligendi facilis dolorum quia cupiditate dolores natus, maxime, possimus dolore maiores autem. Aliquam beatae, repellat quo eius sint reprehenderit quod! Porro deserunt laborum distinctio? Vitae, assumenda eligendi autem praesentium voluptate nihil sapiente aspernatur mollitia laudantium qui aliquid recusandae impedit repellendus omnis similique unde doloremque. Maiores quia eligendi quas consectetur voluptatibus obcaecati vitae corrupti incidunt eum libero ullam rerum consequuntur distinctio esse, officia porro dignissimos iste voluptate, delectus expedita provident tenetur maxime tempore! Temporibus, asperiores? Reprehenderit molestias expedita velit odio soluta laudantium asperiores itaque in libero! Dolor voluptatum labore error quaerat dicta itaque facilis veniam, dolorem placeat, enim in mollitia laudantium? Dolores molestiae doloremque culpa necessitatibus qui quas quam asperiores eaque soluta. Alias quas aliquam libero praesentium. Necessitatibus, recusandae possimus impedit ipsum autem minima nam, tenetur voluptatibus debitis adipisci magni aperiam animi, pariatur nemo ut quis. Laboriosam omnis, dolores atque totam enim officiis eius est saepe numquam reprehenderit!"

const posts = [
    { name : "Selam", description, src : "https://cdn.pixabay.com/photo/2020/03/12/22/26/drops-4926381__340.jpg", tags : ["Korea"], id : 0, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 1", description, src : "https://cdn.pixabay.com/photo/2020/10/21/18/07/laptop-5673901__340.jpg", tags : ["Korea"], id : 1, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 2", description, src : "https://cdn.pixabay.com/photo/2020/07/30/10/26/asian-woman-5450041__340.jpg", tags : ["Code"], id : 2, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 3", description, src : "https://cdn.pixabay.com/photo/2020/02/06/08/19/band-4823341__340.jpg", tags : ["Code"], id : 3, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 4", description, src : "https://cdn.pixabay.com/photo/2021/09/06/12/40/cryptocurrency-6601591__340.jpg", tags : ["Korea"], id : 4, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 5", description, src : "https://cdn.pixabay.com/photo/2021/10/03/04/21/woman-6676901__340.jpg", tags : ["Korea"], id : 5, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Korea 6", description, src : "https://cdn.pixabay.com/photo/2020/04/04/03/08/city-5000648__340.jpg", tags : ["Code"], id : 6, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 7", description, src : "https://cdn.pixabay.com/photo/2020/03/23/17/34/sunset-4961562__340.jpg", tags : ["Code"], id : 7, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 8", description, src : "https://cdn.pixabay.com/photo/2017/01/28/02/24/japan-2014618__340.jpg", tags : ["Korea"], id : 8, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 9", description, src : "https://cdn.pixabay.com/photo/2014/10/07/13/48/mountain-477832__480.jpg", tags : ["Korea"], id : 9, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Korea 10", description, src : "https://cdn.pixabay.com/photo/2017/01/13/08/08/tori-1976609__340.jpg", tags : ["Code"], id : 10, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 11", description, src : "https://cdn.pixabay.com/photo/2016/01/19/17/41/friends-1149841__340.jpg", tags : ["Code"], id : 11, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 12", description, src : "https://cdn.pixabay.com/photo/2019/08/26/12/32/feather-4431599__340.jpg", tags : ["Korea"], id : 12, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Korean 13", description, src : "https://cdn.pixabay.com/photo/2016/11/15/07/09/photo-manipulation-1825450__340.jpg", tags : ["Korea"], id : 13, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Selam 14", description, src : "https://cdn.pixabay.com/photo/2017/05/29/19/13/fire-and-water-2354583__340.jpg", tags : ["Code"], id : 14, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },
    { name : "Korean 15", description, src : "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg", tags : ["Code"], id : 15, author : "Ahmet Cihangir", date : "September 9 2021", article, likeAmount, comments, watched : 10 },

]

const initialState = {
    posts
}

export const postSlice = createSlice({
    initialState,
    name : "posts",
    reducers : {
        addToPosts(state,action){
            state.posts = [...state.posts, action.payload]
        },
    }
})

export const selectPosts = (state) => state.posts.posts

export const { addToPosts } = postSlice.actions

export default postSlice.reducer
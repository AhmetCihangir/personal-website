import Image from "next/image"

const Post = ({ width, height, post }) => {
    return (
      <div className={`${width} ${height} h-full w-full text-gunMetal`}>
        <img alt="" loading="lazy" className="rounded-md" src={post.src} />

        <div className="my-3 ml-2">
          <h4>{post.name}</h4>
          <p className="truncate">{post.description}</p>
        </div>

        <div className="flex justify-end">
            <button className="bg-gunMetal text-ghostWhite rounded-md p-1 px-3 text-sm">Read More</button>
        </div>

      </div>
    );
}

export default Post

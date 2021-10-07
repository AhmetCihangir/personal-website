import Image from "next/image"

const Post = ({ width, height, post }) => {
    return (
      <div className={`${width} ${height} h-full w-full text-gunMetal`}>
        <img alt="" loading="lazy" className="rounded-md" src={post.src} />

        <div className="my-3 ml-2">
          <h4 className="text-xs md:text-base">{post.name}</h4>
          <div className="flex space-x-1">
            {post.tags.map((t, i) => (
              <div key={i} className="text-gray-300">
                #{t}
              </div>
            ))}
          </div>
          <p className="truncate text-xxs md:text-sm font-light">
            {post.description}
          </p>
        </div>

        <div className="flex justify-end">
          <button className="bg-gunMetal text-ghostWhite rounded-md text-xxs p-1 px-2 sm:px-3 sm:text-sm">
            Read More
          </button>
        </div>
      </div>
    );
}

export default Post

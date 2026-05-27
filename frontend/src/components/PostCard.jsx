import {Link} from "react-router-dom";

function PostCard({post}){

return(

<div className="bg-white rounded-3xl p-8 shadow-lg hover:scale-105 duration-300">

<div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center mb-5">

{post.author?.username?.[0]}

</div>

<h2 className="text-2xl font-bold">

{post.title}

</h2>

<p className="text-gray-600 mt-4">

{post.content.slice(0,120)}...

</p>

<p className="mt-5 text-sm text-gray-500">

By {post.author?.username}

</p>

<Link

to={`/post/${post._id}`}

className="inline-block mt-5 bg-blue-600 text-white px-5 py-2 rounded-xl"

>

Read More

</Link>

</div>

)

}

export default PostCard;
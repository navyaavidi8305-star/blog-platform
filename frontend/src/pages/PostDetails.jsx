import { useEffect, useState } from "react";

import {

useParams,

useNavigate

} from "react-router-dom";

import API from "../services/api";

import CommentSection from "../components/CommentSection";


function PostDetails(){

const { id } = useParams();

const navigate = useNavigate();

const [post,setPost]=useState(null);


useEffect(()=>{

fetchPost();

},[]);


const fetchPost=async()=>{

try{

const res=
await API.get(

`/posts/${id}`

);

setPost(
res.data
);

}

catch(error){

console.log(error);

}

};


const deletePost=async()=>{

if(

!window.confirm(

"Delete this blog post?"

)

)

return;


try{

const user=
JSON.parse(

localStorage.getItem(
"user"
)

);


await API.delete(

`/posts/${id}`,

{

headers:{

Authorization:

`Bearer ${user.token}`

}

}

);


alert(
"Post deleted successfully"
);

navigate("/");

}

catch(error){

console.log(error);

}

};



if(!post)

return(

<div className="min-h-screen flex justify-center items-center">

<h1 className="text-3xl font-semibold text-gray-600">

Loading...

</h1>

</div>

);



return(

<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-100 py-14 px-6">


<div className="max-w-5xl mx-auto bg-white/80 backdrop-blur-xl rounded-[40px] shadow-2xl p-12">


<div className="flex justify-between items-start flex-wrap gap-8">


<div className="flex-1">


<div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold mb-6">

📘 Blog Article

</div>


<h1 className="text-5xl font-bold leading-tight text-gray-900">

{post.title}

</h1>


<div className="mt-6 flex items-center gap-3">

<div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex justify-center items-center text-xl font-bold">

{post.author?.username?.[0]}

</div>


<div>

<p className="font-semibold text-gray-800">

{post.author?.username}

</p>

<p className="text-gray-500 text-sm">

Author

</p>

</div>

</div>


</div>




<div className="flex gap-4 flex-wrap">


<button

onClick={()=>

navigate(

`/edit/${id}`

)

}

className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg hover:scale-105 transition-all duration-300"

>

✏️ Edit Post

</button>



<button

onClick={deletePost}

className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white font-medium shadow-lg hover:scale-105 transition-all duration-300"

>

🗑 Delete Post

</button>


</div>


</div>



<div className="mt-12 bg-gradient-to-r from-gray-50 to-white p-8 rounded-3xl border border-gray-100 shadow-sm">

<p className="text-lg leading-10 text-gray-700 whitespace-pre-line">

{post.content}

</p>

</div>



<div className="mt-14">

<CommentSection

postId={id}

/>

</div>


</div>


</div>

)

}


export default PostDetails;
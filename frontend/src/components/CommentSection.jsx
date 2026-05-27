import {

useEffect,

useState

} from "react";

import API from "../services/api";


function CommentSection({postId}){

const [comments,setComments]=
useState([]);

const [text,setText]=
useState("");


useEffect(()=>{

fetchComments();

},[]);


const fetchComments=
async()=>{

const res=
await API.get(

`/comments/${postId}`

);

setComments(
res.data
);

};


const addComment=
async()=>{

const user=
JSON.parse(

localStorage.getItem(
"user"
)

);

await API.post(

`/comments/${postId}`,

{text},

{

headers:{

Authorization:

`Bearer ${user.token}`

}

}

);

setText("");

fetchComments();

};


const deleteComment=
async(id)=>{

const user=
JSON.parse(

localStorage.getItem(
"user"
)

);

await API.delete(

`/comments/delete/${id}`,

{

headers:{

Authorization:

`Bearer ${user.token}`

}

}

);

fetchComments();

};


return(

<div className="mt-16">

<h2 className="text-3xl font-bold">

Comments

</h2>


<div className="flex gap-4 mt-6">

<input

value={text}

onChange={(e)=>

setText(
e.target.value
)

}

placeholder="Write comment..."

className="flex-1 p-4 rounded-2xl border"

/>


<button

onClick={addComment}

className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 rounded-2xl"

>

Post

</button>

</div>


<div className="space-y-5 mt-8">

{

comments.map(comment=>(

<div

key={comment._id}

className="bg-white rounded-3xl shadow-lg p-6"

>

<div className="flex justify-between">

<div>

<p className="font-semibold">

{comment.user?.username}

</p>

<p className="mt-3">

{comment.text}

</p>

</div>


<button

onClick={()=>

deleteComment(
comment._id
)

}

className="bg-red-500 text-white px-4 py-2 rounded-xl"

>

Delete

</button>

</div>

</div>

))

}

</div>

</div>

)

}

export default CommentSection;
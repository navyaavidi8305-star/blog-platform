import {useState} from "react";

import API from "../services/api";

import {useNavigate} from "react-router-dom";

function CreatePost(){

const navigate=
useNavigate();

const [form,setForm]=useState({

title:"",

content:""

});


const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:

e.target.value

});

};


const handleSubmit=
async(e)=>{

e.preventDefault();

try{

const user=
JSON.parse(

localStorage.getItem(
"user"
)

);

await API.post(

"/posts",

form,

{

headers:{

Authorization:

`Bearer ${user.token}`

}

}

);

alert(
"Blog created successfully"
);

navigate("/");

}

catch(error){

console.log(error);

}

};


return(

<div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center px-6 py-12">

<div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-10 w-full max-w-3xl">

<h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

Create New Blog

</h1>

<p className="text-center text-gray-500 mt-3">

Share your ideas with the world ✨

</p>


<form
onSubmit={handleSubmit}
className="mt-8 space-y-6"
>

<div>

<label className="block mb-2 font-semibold">

Blog Title

</label>

<input

type="text"

name="title"

placeholder="Enter blog title"

className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"

onChange={handleChange}

/>

</div>


<div>

<label className="block mb-2 font-semibold">

Blog Content

</label>

<textarea

name="content"

rows="8"

placeholder="Write your thoughts here..."

className="w-full p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500"

onChange={handleChange}

/>

</div>


<button

className="w-full py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:scale-105 duration-300"

>

Publish Blog

</button>

</form>

</div>

</div>

)

}

export default CreatePost;
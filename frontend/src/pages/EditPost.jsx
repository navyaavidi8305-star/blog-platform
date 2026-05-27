import {

useEffect,

useState

} from "react";

import {

useParams,

useNavigate

} from "react-router-dom";

import API from "../services/api";


function EditPost(){

const {id}=useParams();

const navigate=
useNavigate();

const [form,setForm]=
useState({

title:"",

content:""

});


useEffect(()=>{

loadPost();

},[]);


const loadPost=
async()=>{

const res=
await API.get(

`/posts/${id}`

);

setForm({

title:res.data.title,

content:
res.data.content

});

};


const updatePost=
async(e)=>{

e.preventDefault();

const user=
JSON.parse(

localStorage.getItem(
"user"
)

);

await API.put(

`/posts/${id}`,

form,

{

headers:{

Authorization:

`Bearer ${user.token}`

}

}

);

navigate(
`/post/${id}`
);

};


return(

<div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex justify-center items-center">

<div className="bg-white/80 backdrop-blur-xl rounded-[35px] shadow-2xl p-10 w-full max-w-3xl">

<h1 className="text-4xl font-bold mb-8">

Edit Blog

</h1>


<form
onSubmit={updatePost}
className="space-y-6"
>

<input

value={form.title}

name="title"

onChange={(e)=>

setForm({

...form,

title:e.target.value

})

}

className="w-full p-4 rounded-2xl border"

/>


<textarea

rows="8"

value={form.content}

name="content"

onChange={(e)=>

setForm({

...form,

content:e.target.value

})

}

className="w-full p-4 rounded-2xl border"

/>


<button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl">

Update Blog

</button>

</form>

</div>

</div>

)

}

export default EditPost;
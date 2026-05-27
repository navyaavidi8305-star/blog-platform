import { useState } from "react";

import API from "../services/api";

import { useNavigate, Link } from "react-router-dom";

function Register(){

const navigate=useNavigate();

const [form,setForm]=useState({

username:"",

email:"",

password:""

});


const handleChange=(e)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

};


const handleSubmit=async(e)=>{

e.preventDefault();

try{

await API.post(

"/auth/register",

form

);

alert(
"Registration successful"
);

navigate("/login");

}

catch(error){

alert(
"Registration failed"
);

}

};


return(

<div className="min-h-screen bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 flex justify-center items-center p-6">

<div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-[35px] w-full max-w-lg p-10">

<h1 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

Create Account

</h1>

<p className="text-center text-gray-500 mt-3">

Start your blogging journey

</p>


<form
onSubmit={handleSubmit}
className="mt-8 space-y-5"
>

<input

type="text"

name="username"

placeholder="Username"

className="w-full p-4 rounded-2xl border"

onChange={handleChange}

/>


<input

type="email"

name="email"

placeholder="Email"

className="w-full p-4 rounded-2xl border"

onChange={handleChange}

/>


<input

type="password"

name="password"

placeholder="Password"

className="w-full p-4 rounded-2xl border"

onChange={handleChange}

/>


<button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold">

Register

</button>

</form>


<p className="text-center mt-6">

Already have account?

<Link

to="/login"

className="text-blue-600 ml-2"

>

Login

</Link>

</p>

</div>

</div>

)

}

export default Register;
import { useState, useContext } from "react";

import API from "../services/api";

import { AuthContext } from "../context/AuthContext";

import { useNavigate, Link } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const { setUser } = useContext(AuthContext);

const [form, setForm] = useState({

email: "",

password: ""

});


const handleChange = (e) => {

setForm({

...form,

[e.target.name]: e.target.value

});

};


const handleSubmit = async (e) => {

e.preventDefault();

try {

const res = await API.post(

"/auth/login",

form

);

localStorage.setItem(

"user",

JSON.stringify(
res.data
)

);

setUser(
res.data
);

navigate("/");

}

catch(error){

console.log(error);

alert(
"Invalid credentials"
);

}

};


return (

<div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 flex items-center justify-center px-6 py-10">


<div className="max-w-6xl w-full grid lg:grid-cols-2 bg-white/70 backdrop-blur-xl shadow-2xl rounded-[40px] overflow-hidden">


{/* LEFT SECTION */}

<div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-600 to-purple-700 text-white p-14">

<h1 className="text-5xl font-bold leading-tight">

Welcome Back 👋

</h1>

<p className="mt-8 text-lg text-gray-100 leading-8">

Continue your blogging journey.

Create stories, share knowledge, and interact with readers around the world.

</p>


<div className="mt-12 bg-white/20 p-6 rounded-3xl">

<h2 className="text-xl font-semibold">

BlogSphere Platform

</h2>

<p className="mt-3 text-gray-200">

Secure authentication

JWT authorization

Interactive blogging

Modern UI experience

</p>

</div>

</div>



{/* RIGHT SECTION */}

<div className="p-10 md:p-16 flex items-center">

<div className="w-full">


<h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

Login Account

</h2>


<p className="text-center text-gray-500 mt-3">

Login to access your dashboard

</p>



<form

onSubmit={handleSubmit}

className="mt-10 space-y-6"

>


<div>

<label className="font-semibold text-gray-700">

Email Address

</label>

<input

type="email"

name="email"

placeholder="Enter your email"

className="w-full mt-2 p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 transition"

onChange={handleChange}

required

/>

</div>



<div>

<label className="font-semibold text-gray-700">

Password

</label>

<input

type="password"

name="password"

placeholder="Enter password"

className="w-full mt-2 p-4 rounded-2xl border border-gray-300 outline-none focus:ring-2 focus:ring-purple-500 transition"

onChange={handleChange}

required

/>

</div>



<button

className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-semibold text-lg hover:scale-105 duration-300 shadow-lg"

>

Login

</button>


</form>



<p className="text-center mt-8 text-gray-600">

Don't have an account?

<Link

to="/register"

className="text-blue-600 font-semibold ml-2"

>

Register

</Link>

</p>



</div>

</div>


</div>

</div>

);

}

export default Login;
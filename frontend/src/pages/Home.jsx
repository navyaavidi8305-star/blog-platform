import {useEffect,useState} from "react";

import API from "../services/api";

import PostCard from "../components/PostCard";

function Home(){

const [posts,setPosts]=
useState([]);

useEffect(()=>{

fetchPosts();

},[]);

const fetchPosts=
async()=>{

const res=
await API.get("/posts");

setPosts(
res.data
);

};

return(

<div>

<section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24">

<div className="max-w-6xl mx-auto px-8">

<h1 className="text-6xl font-bold">

Share Stories

</h1>

<p className="mt-5 text-xl">

Create blogs and connect with people.

</p>

</div>

</section>


<div className="max-w-6xl mx-auto py-12 px-8">

<h2 className="text-4xl font-bold mb-8">

Latest Blogs

</h2>


<div className="grid md:grid-cols-2 gap-8">

{

posts.map(post=>(

<PostCard

key={post._id}

post={post}

/>

))

}

</div>

</div>

</div>

)

}

export default Home;
import { Link } from "react-router-dom";

function Navbar(){

const user=
JSON.parse(

localStorage.getItem(
"user"
)

);


const logout=()=>{

localStorage.removeItem(
"user"
);

window.location="/";

};


return(

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-100">


<div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">


{/* LOGO */}

<div className="flex items-center gap-3">

<div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-center text-xl shadow-lg">

📝

</div>

<h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">

BlogSphere

</h1>

</div>



{/* MENU */}

<div className="flex items-center gap-4 flex-wrap">


<Link

to="/"

className="px-5 py-3 rounded-2xl hover:bg-blue-100 transition duration-300 font-medium text-gray-700"

>

🏠 Home

</Link>



{

user && (

<Link

to="/create"

className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition duration-300"

>

➕ Create

</Link>

)

}



{

!user && (

<>

<Link

to="/login"

className="px-5 py-3 rounded-2xl hover:bg-gray-100 transition duration-300"

>

🔐 Login

</Link>



<Link

to="/register"

className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:scale-105 transition duration-300"

>

✨ Register

</Link>

</>

)

}



{

user && (

<>

<div className="flex items-center gap-3 bg-gray-100 px-4 py-2 rounded-2xl">

<div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white flex items-center justify-center font-bold">

{

user.username?.[0]

}

</div>

<span className="font-medium">

{user.username}

</span>

</div>



<button

onClick={logout}

className="px-5 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-red-600 text-white shadow-lg hover:scale-105 transition duration-300"

>

🚪 Logout

</button>

</>

)

}


</div>


</div>


</nav>

)

}


export default Navbar;
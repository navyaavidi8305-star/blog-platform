const Comment = require("../models/Comment");



// ADD COMMENT

const addComment = async(req,res)=>{

try{

const {text}=req.body;

const comment=
await Comment.create({

text,

user:req.user._id,

post:req.params.postId

});

res.status(201).json(comment);

}

catch(error){

res.status(500).json({

message:error.message

});

}

};




// GET COMMENTS

const getComments = async(req,res)=>{

try{

const comments=
await Comment.find({

post:req.params.postId

})

.populate(

"user",

"username email"

);

res.json(comments);

}

catch(error){

res.status(500).json({

message:error.message

});

}

};




// DELETE COMMENT

const deleteComment = async(req,res)=>{

try{

const comment=
await Comment.findById(

req.params.id

);

if(!comment){

return res.status(404).json({

message:"Comment not found"

});

}


if(

comment.user.toString()

!==

req.user._id.toString()

){

return res.status(401).json({

message:"Unauthorized"

});

}


await comment.deleteOne();

res.json({

message:

"Comment deleted"

});

}

catch(error){

res.status(500).json({

message:error.message

});

}

};



module.exports={

addComment,

getComments,

deleteComment

};
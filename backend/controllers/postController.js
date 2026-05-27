const Post = require("../models/Post");



// CREATE POST

const createPost = async(req,res)=>{

    try{

        const {title,content}=req.body;

        const post = await Post.create({

            title,

            content,

            author:req.user._id

        });

        res.status(201).json(post);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};



// GET ALL POSTS

const getPosts = async(req,res)=>{

    try{

        const posts = await Post.find()

        .populate(
            "author",
            "username email"
        );

        res.json(posts);

    }

    catch(error){

        res.status(500).json({
            message:error.message
        });

    }

};




// GET SINGLE POST

const getPostById = async(req,res)=>{

    try{

        const post = await Post.findById(
            req.params.id
        )

        .populate(
            "author",
            "username email"
        );

        if(!post){

            return res.status(404).json({

                message:"Post not found"

            });

        }

        res.json(post);

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};




// UPDATE POST

const updatePost = async(req,res)=>{

    try{

        const post = await Post.findById(
            req.params.id
        );

        if(!post){

            return res.status(404).json({

                message:"Post not found"

            });

        }

        if(
            post.author.toString()
            !==
            req.user._id.toString()
        ){

            return res.status(401).json({

                message:"Unauthorized"

            });

        }

        post.title =
        req.body.title || post.title;

        post.content =
        req.body.content || post.content;

        const updatedPost =
        await post.save();

        res.json(updatedPost);

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};




// DELETE POST

const deletePost = async(req,res)=>{

    try{

        const post = await Post.findById(
            req.params.id
        );

        if(!post){

            return res.status(404).json({

                message:"Post not found"

            });

        }

        if(
            post.author.toString()
            !==
            req.user._id.toString()
        ){

            return res.status(401).json({

                message:"Unauthorized"

            });

        }

        await post.deleteOne();

        res.json({

            message:"Post deleted"

        });

    }

    catch(error){

        res.status(500).json({

            message:error.message

        });

    }

};



module.exports={

createPost,

getPosts,

getPostById,

updatePost,

deletePost

};
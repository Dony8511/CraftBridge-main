import mongoose from "mongoose";
import Post from "../models/Post.js"


export const getAll = async (req, res) => {
    try {
        const posts = await Post.find().populate('user').exec();

        res.json(posts)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "статьи не найдены"
        })
    }
}

export const getOne = async (req, res) => {
    try {
        const postId = req.params.id;

        const post = await Post.findById(postId).populate('user').exec()

        res.json(post)
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "не удалось получить статью"
        })
    }
}

export const remove = async (req, res) => {
    try {
        const postId = req.params.id;
        Post.findOneAndDelete({ _id: postId, }).then(() => {
            res.json({
                success: true,
            })
        }).catch((err, doc) => {
            if (err) {
                console.log(err)
                return res.status(500).json({
                    message: "не удалось удалить статью"
                })
            }

            if (!doc) {
                console.log(err)
                return res.status(500).json({
                    message: "статья не найдена"
                })
            }
        })

    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "статья не найдены"
        })
    }
}

export const create = async (req, res) => {
    try {
        const doc = new Post({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            user: req.userId,
        });

        const post = await doc.save();

        res.json(post)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            message: 'не удалось создать запись',
        })
    }
}

export const update = async (req, res) => {
    try {
        const postId = req.params.id;

        await Post.updateOne({
            _id: postId,
        }, {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageUrl: req.body.imageUrl,
            user: req.userId,
        },)

        res.json({
            success: true
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({
            message: "не удалось изменить статью"
        })
    }
}

// (err, doc)=>{
//     if(err){
//         console.log(err)
//         return res.status(500).json({
//             message: "не удалось удалить статью"
//         })
//     }

//     if(!doc) {
//         console.log(err)
//         return res.status(500).json({
//             message: "статья не найдена"
//         })
//     }

//     res.json({
//         success: true,
//     })
// }


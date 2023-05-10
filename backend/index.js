import express from 'express';
import mongoose from 'mongoose';
import multer from 'multer';
import cors from 'cors'


import { registerValidator, loginValidator, postCreateValidator } from './validations/validations.js';
import {UserController, PostController} from './controllers/index.js';
import {ValidationErrors ,checkAuth} from './utils/index.js';


const PORT = process.env.PORT || 4000
const app = express()
app.use(express.json())
mongoose
    .connect('mongodb+srv://DiStudd:DiStudd@cluster0.pp6usvy.mongodb.net/craftbridge?retryWrites=true&w=majority')
    .then(() => console.log('DB ok'))
    .catch((err) => console.log('DB err', err));

app.listen(PORT, (err) => {
    if (err) {
        return console.log(err)
    }

    console.log(`Server starting on port: ${PORT}`)

})

app.use(cors())

const storage = multer.diskStorage({
    destination: (_, __, cb)=>{
        cb(null, 'uploads');
    },
    filename: (_, file, cb)=>{
        cb(null, file.originalname);
    },
})
const upload = multer({storage})
app.post('/upload', checkAuth, upload.single('image'), (req, res)=>{
    res.json({
        url: `/uploads/${req.file.originalname}`,
    })
})
app.use('/uploads', express.static('uploads'))



app.get('/profile', checkAuth, UserController.getMyProfile)
app.post('/login', loginValidator, ValidationErrors, UserController.login)
app.post('/register',registerValidator,ValidationErrors, UserController.register);



app.get('/users', UserController.getAll)



app.get('/items', PostController.getAll)
app.get('/items/:id', PostController.getOne)
app.post('/items', checkAuth, postCreateValidator, PostController.create)
app.delete('/items/:id', checkAuth, PostController.remove)
app.patch('/items/:id', checkAuth, postCreateValidator, PostController.update)



app.get('/', (req, res) => {
    res.send("Hello express.js");
})
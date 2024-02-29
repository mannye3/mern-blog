
import  bcryptjs  from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import User from '../models/user.model.js';


export const test = (req, res) => {
    res.json({message : 'Api is working'})
} 




export const updateUser =  async (req, res, next) => {
    if(req.id !== req.params.id){
       return next(errorHandler(401, "Unauthenticated"));
    }

    if(req.body.password)
    {
        if(req.body.password.length < 6)
        {
            return next(errorHandler(400, "Password must be at least 6 characters"));
        }

        req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }

    if(req.body.username)
    {
        if(req.body.username.length < 7 || req.body.username.length > 20)
        {
            return next(errorHandler(400, "Username must be between 7 and 20 characters"));
        }

        if(req.body.username !== req.body.username.toLowerCase())
        {
            return next(errorHandler(400, "Username must be lowercase"));
        }

        if(!req.body.username.match(/^[a-zA-Z0-9]+$/)){
            return next(errorHandler(400, "Username must contain only letters and numbers"));
        }
        try {
            const updateUser = await User.findByIdAndUpdate(req.params.userId, {
                $set: {
                    username: req.body.username,
                    email: req.body.email,
                    profilePicture: req.body.profilePicture,
                    password: req.body.password
                   
                }

            }, {new:true})
            const {password, ...rest} = updateUser._doc
            res.json({
                status: "success",
                data: rest
            })
        } catch (error) {
            
        }
    }
} 



// export const updateUser = async(req,res,next) =>{
//     const {username, email, password} = req.body;
//         try {
//         if(email){
//             const emailTaken = await User.findOne({email})
//             if(emailTaken){
//                 return next(appErr('Email is taken'))
//             }
//         }

//         const user  = await User.findByIdAndUpdate(req.userAuth, {
//             lastname,
//             firstname,
//             email

//         },{
//             new:true,
//             runValidators: true

//         })
//         res.json({
//             status: "success",
//             data: user
//         })
//     } catch (error) {
//         next(appErr(error.message))
        
//     }
// }





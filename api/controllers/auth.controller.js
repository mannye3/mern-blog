import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import  jwt  from "jsonwebtoken";


export const signup = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        if (!username || !email || !password || username === '' || password === '' || email === '') {
            return next(errorHandler(400, 'All fields are required'));
        }

        const hashedPassword = bcryptjs.hashSync(password, 10);
        const user = await User.findOne({ email });
        const userName = await User.findOne({ username });
        if (user) {
             return next(errorHandler(400, 'User already exists'));
            
        }

        if (userName) {
             return next(errorHandler(400, 'Username taken'));
           
        }

        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
};





export const signin = async (req, res, next) => {
    try {
        const {email, password } = req.body;
        if (!email || !password  || password === '' || email === '') {
            return next(errorHandler(400, 'All fields are required'));
        }


         const userFound = await User.findOne({email})
         if(!userFound){
              return next(errorHandler(404, 'Invalid login credentials'));
           
         }


         const isPasswordMatched = await bcryptjs.compare(password, userFound.password)
         if(!isPasswordMatched){
            return next(errorHandler(400, 'Invalid login credentials'));
           
         }

         const token = jwt.sign(
            {
                _id: userFound._id,
                // isAdmin: userFound.isAdmin
            },
            process.env.JWT_SECRET,
            {
                expiresIn: 3600
            }
         )
            
        const { password: pass, ...rest } = userFound._doc;

            res
            .status(200)
            .cookie('access_token', token, {
                httpOnly: true,
            })
            .json(rest);
        } catch (error) {
            next(error);
        }
        };



   

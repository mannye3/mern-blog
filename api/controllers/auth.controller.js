import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => { 

   
    try {
        const { username, email, password } = req.body;
        if (!username || !email ||!password || username === '' || password === '' || email === '')   {
            return res.status(400).json({ error: "All fields are required" });
        }

        const hashedPassword = bcryptjs.hashSync(password, 10)
        const user = await User.findOne({ email });
        const userName = await User.findOne({ username });
        if (user) {
            return res.status(400).json({ error: "User already exists" });
        }

         if (userName) {
            return res.status(400).json({ error: "Username taken" });
        }
        const newUser = new User({ username, email, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        next(error);
    }
}

   

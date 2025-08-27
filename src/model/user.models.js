import mongoose from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
}, { timestamps: true })


userSchema.pre('save', async function (next) {
    if(!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    this.confirmpassword = await bcrypt.hash(this.confirmpassword, 10);
    next()
})

//custom methods
userSchema.methods.checkPassword = async function (inputpassword) {
    return await bcrypt.compare(inputpassword, this.password)
}


userSchema.methods.generateAccessToken = function () {
   return jwt.sign({
        _id: this._id,
        fullname: this.fullname,
        email: this.email,
        userid: this.userid
    },
        process.env.ACCESS_TOKEN_SECRET ,
        {

            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        })
}
userSchema.methods.generateRefreshToken = function () {
   return jwt.sign({
        _id: this._id,
        
    },
        process.env.REFRESH_TOKEN_SECRET,
        {

            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        })
}
export const User = mongoose.model("User", userSchema)


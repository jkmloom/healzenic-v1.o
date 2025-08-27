import asyncHandler from "../utils/asyncHandler.js"
import apiError from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"
import { User } from "../model/user.models.js"
import { checkList } from "../model/checklist.models.js"
import jwt from "jsonwebtoken"
import { initialReport } from "../model/initialreport.models.js"


const userController = asyncHandler(async (req, res, next) => {

    const { fullname, userid, email, password, confirmpassword } = req.body;

    if ([fullname, userid, email, password, confirmpassword].some((field) => field?.trim() == "")) {
        throw new apiError(400, "All fields are must to fill!")
    }

    const existedUser = await User.findOne({ $or: [{ userid }, { email }] })

    if (existedUser) { throw new apiError(400, "User Already Exist!") }

    const registeredUser = await User.create({
        fullname: fullname,
        userid: userid,
        email: email,
        password: password,
        confirmpassword: confirmpassword
    })

    if (!registeredUser) { throw new apiError(500, "Something went Wrong while registering!") };

    console.log(registeredUser)

    res.redirect('/signin')

})


const signinController = asyncHandler(async (req, res, next) => {

    const { userid, password } = req.body;

    if (!userid && !password) { throw new apiError(200, "UserId and Password are Mandatory!") }


    const registeredUser = await User.findOne({ "userid": userid });

    console.log(registeredUser)


    if (!registeredUser) { throw new apiError(404, "User is not registered!") }

    const checkThePassword = await registeredUser.checkPassword(password)

    if (!checkThePassword) { throw new apiError(400, "Password is Incorrect!") }

    const client = await User.findById(registeredUser._id)
    console.log(client)

    const createdRefreshToken = await client.generateRefreshToken()
    const accessToken = await client.generateAccessToken()


    client.refreshToken = createdRefreshToken

    await client.save({ ValidityBeforeSave: false })

    // await client.save({ ValidityBeforeSave: false })
    console.log(accessToken)
    const UserBro = await User.findById(client._id).select("password confirmpassword")

    const options = {
        httpOnly: true,
        secure: true
    }
    // return res.redirect('/homepage')
    res
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", createdRefreshToken, options)

    return res.redirect('/homepage')


})

const deleteaccountController = asyncHandler(async (req, res, next) => {

    const accessToken = req.cookies?.accessToken;
    if (!accessToken) { throw new apiError(200, "Invalid Access Token") }
    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    console.log(decodedToken)
    const updated = User.findByIdAndUpdate(decodedToken._id,
        {
            $set: {
                refreshToken: undefined
            }
        },
        {
            new: true
        })

    const options = {
        httpOnly: true,
        secure: true
    }
    // return res.redirect('/signin')
    return res
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .redirect('/signin')




})

const cleanAccountController = asyncHandler(async (req, res, next) => {

    const accessToken = req.cookies.accessToken;
    const decodedToken = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET)
    const client = await User.deleteOne({ "userid": decodedToken.userid })
    const clientDetails = await initialReport.deleteOne({ "userid": decodedToken.userid })

    if (!(client && clientDetails)) { throw new apiError(500, "Something went wrong while Deleting") }

    const options = {
        httpOnly: true,
        secure: true
    }
    return res
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .redirect('/deleteMsg')


})

const getUserData = asyncHandler(async (req, res, next) => {

    let checkListValue = req.cookies.checkList
    const decodedToken = jwt.verify(req.cookies.accessToken, process.env.ACCESS_TOKEN_SECRET)

    const currentUser = await initialReport.findOne({ "userid": decodedToken.userid })
    const checkListNo = await checkList.find({ "userid": decodedToken._id }).countDocuments()

    console.log("No of CheckList:", checkListNo)



    res.json({ currentUser, checkListValue, checkListNo })

})


const refreshAccessToken = asyncHandler(async (req, res, next) => {
    const refreshTokenInp = await req.cookies.refreshToken;

    const decodedToken = await jwt.verify(refreshTokenInp, process.env.REFRESH_TOKEN_SECRET)
    console.log(decodedToken)

    const user = await User.findById(decodedToken._id)

    const refreshToken = await user.generateRefreshToken()
    const accessToken = await user.generateAccessToken()

    user.refreshToken = refreshToken

    await user.save({ validateBeforeSave: false })

    const options = {
        httpOnly: true,
        secure: true
    }

    res.cookie("accessToken", accessToken, options).cookie("refreshToken", refreshToken, options)
    //    console.log(flag)

})
export { userController, refreshAccessToken, signinController, deleteaccountController, getUserData, cleanAccountController }
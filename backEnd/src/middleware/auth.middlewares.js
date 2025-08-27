import { User } from "../model/user.models.js";
import asyncHandler from "../utils/asyncHandler.js";
import apiError from "../utils/apiError.js";
import apiResponse from "../utils/apiResponse.js";

import jwt from "jsonwebtoken"

const verifyJWT = asyncHandler(async (req, res, next) => {

    const token = req.cookies?.accessToken

    const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken._id).select("-password -confirmpassword -refreshToken")

    if (!user) { throw new apiError(404, "Invalid Access Token") }

    req.user = user;
    next()

})
export default verifyJWT
const express = require("express");
const route = express.Router();
const userController = require("../controller/controller")
var jwt = require('jsonwebtoken');

//Middleware function to validate the access token and authorize the request 
function authenticateUser (req, res, next) {
    var token = req.header('accesstoken');
    if (token) {
    jwt.verify (token, config. JWT_SECRETE_KEY, (err, user) => {
    if (err) {
    let errors = [ {
    "msg": "Unauthorized user access"
    }];
    req.app.responseHelper.sendResponse(res, false, {}, errors, 1002);
    return;
    } else {
    req.isAuthorized = true;
    req.user =  user;
    next();
    }});
    } else {
        let error =[{
        "msg": "Please provide authorization user token"
        }];
        req.app.responseHelper.sendResponse (res, false, {}, errors, 1002);
        return;
        }
        }
        
    

route.post("/user/signin", userController.validateBody, userController.checkUser, userController.ssoLogin, userController.FetchUserRole, userController.signIn);
route.post("/user/register", userController.registerUser);
route.get("/user/verifyToken", userController.verifyUserToken);
route.get("/user/:id", authenticateUser, userController.getUserById); 
// route.get("/user", authenticateUser, userController.getUsers);


module.exports = route;
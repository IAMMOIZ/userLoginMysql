const db = require("../db");
const { body , validationResult } = require("express-validator")
exports.validateBody = (req , res , next)=>
{

}
exports.checkUser = (req , res)=>{

}
exports.ssoLogin = (req , res)=>{
    
}
exports.FetchUserRole = (req , res)=>{
    
}
exports.signIn = (req , res)=>{
    
}
exports.registerUser = (req , res)=>{
    // INSERT INTO `mtf_user_master`(`emp_id`, `emp_name`, `emp_domain`, `emp_role`, `emp_site`, `emp_plant`, `emp_status`, `createdBy`, `createdDate`, `modifiedBy`, `modifiedDate`, `emp_email`) VALUES ('abc','abc','abc123','abc','abc','abc','abc','abc',now(),'abc',now(),'abc')

    
}
exports.verifyUserToken = (req , res)=>{
    
}
exports.getUserById = (req , res)=>{
    
}
exports.getUsers = (req , res)=>{
    
}

exports.getRoles = (req , res)=>{
    db.query("SELECT * FROM mtf_vessels_accounting.mtf_role_master;",
    (err ,data)=>
    {
        if(err)
        {
            return res.json({status : 400 , msg : "error to get roles",err : err})
        }
        console.log(data);
        if(data.length > 0)
        {
            return res.json({status : 200 , msg : "roles details found ",list : data})
        }else{
            return res.json({status : 200 , msg : "roles details not found ",list : []})
        }
        
    })
}
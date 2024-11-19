const groupModel = require("../models/groupModel");
const userModel = require("../models/userModel");

module.exports.creategroupPageController=async (req,res)=>{
    let {name,description}=req.body
    let userID=req.user._id
   let group= await groupModel.create({
        name,description,createdby:userID
    })
    let newgroup=await groupModel.findOne({_id:group._id}).populate('createdby')
  
    res.send(JSON.stringify(newgroup,null,2));


}

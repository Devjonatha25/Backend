
const CreateBanco =require('../controlls/insert-admin-controlls')
const CreatUserServices = require('../services/insert-user-services')
 class CrateUsercontroller{
    async createuser(req,res){
        const { email, senha,}= req.body


        const insertUser = await CreatUserServices.createUser(email,senha);
        

     return res.status(insertUser.status).json({...insertUser.data})

    }
}
module.exports = new CrateUsercontroller();
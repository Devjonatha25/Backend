const alterUser =require("../services/alteruserServices");
class alterUserController{
    async alterUser(req,res){
        const {id,email,senha} = req.body;
        const alter = await alterUser.alterarUsuario(id,email,senha)

        return res.status(alter.status).json({...alter.data});


    }

    
}

module.exports = new alterUserController();
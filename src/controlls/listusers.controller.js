const listAlluser =  require("../services/lisUser");


class ListUsersController {
    async listarUsuarios(req,res){
           
        const user = await listAlluser.listAlluser();

        return res.status(user.status).json({...user.data});
    }
}
module.exports = new ListUsersController();
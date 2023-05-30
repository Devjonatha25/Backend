const insertClienteServices = require('../services/insert-cliente-services');
const alterCli = require()

class alterClicontrolls {
    async alterClie(req,res){
        const {cpf,cargo} = req.body
        const alterarcli = await insertClienteServices.clientCLI(cpf,cargo)
        
        return res.status(alterarcli.status).json({...alterCli.data});
    }
}
module.exports = new alterClicontrolls();
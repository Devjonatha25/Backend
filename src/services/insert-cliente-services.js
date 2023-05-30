const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class UserCliente{
    async clientCLI(cpf,cargo){
        try {
            const insertCli = await prisma.cliente.create({
               data:{
                cpf,
                cargo,

               } 

            });
            return{
                status:200,
                data:insertCli,
                message:'inserido com sucesso'
            }

            }
        catch (error) {
            console.log(error);

            return {
                status: 400,
                data: {}
            }
        }
    }
}
module.exports = new UserCliente();
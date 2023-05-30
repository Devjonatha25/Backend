const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class AlterUser{
    async alterarUsuario(id,email,senha,cpf){

        try {
            const AlterUser = await prisma.user.update({
                where:{
                    id
                },
                data: {
                    email,
                    senha,
                    cpf 
                    
                }
            })
            return{
                status:200,
                data:AlterUser,
                message:"usuario alterado"
            }
            
        } catch (error) {
            console.log(error);

            return{
                status:400,
                data:{},
                message:"deu ruim"
            }
            
        }
    }
}
module.exports = new AlterUser()
const {PrismaClient} = require("@prisma/client");
const prisma = new PrismaClient();

class ListUser {
    async listAlluser(){
        try {
            const listusers = await prisma.user.findMany();
            return{
                status:200,
                data:listusers,
                message:'usuario retornados"'
            }
        
        } catch (error) {
            
            console.log(error)

            return{
                status:400,
                data:{},
                message:' deu erro'
            }
            
        }
    }
}

module.exports = new ListUser();
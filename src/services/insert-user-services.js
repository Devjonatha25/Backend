const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class CreateUserService {
    async createUser(email,senha) {
        try {
            const insertUser = await prisma.user.create({
                data: {
                    email,
                    senha,
                    
                    
                }
            });

            return {
                status: 200,
                data: insertUser,
                message: "inserido"
            }

        } catch (error) {
            console.log(error);

            return {
                status: 400,
                data: {}
            }
        }
    }
}

module.exports = new CreateUserService();
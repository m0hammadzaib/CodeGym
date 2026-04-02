import {prismaClient} from '@prisma/client'

const prisma = new prismaClient({
    log: process.env.NODE_ENV ==="development"?["query","erros","warn"] :["error"],
})

const connectDB= async ()=>{
    try{
        await prisma.$connect();
        console.log("DataBase connected via Prisma")
    }catch(error){
        console.log(`Database connection error ${error.message}`)
        process.exit(1);
    }
}
const disconnectDB= async ()=>{
 await prisma.$disconnect()
}

export {prisma, connectDB, disconnectDB};
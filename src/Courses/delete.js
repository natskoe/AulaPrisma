import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const result = await prisma.courses.delete({
        where:{
            id: 'a8edb252-e1a6-4e3f-bae4-5d8fb5771aa3'
        }
    })
    console.log(result)
}

main()
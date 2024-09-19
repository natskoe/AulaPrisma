import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main(){
    const result = await prisma.courses.update({
        where:{
            id: 'a8edb252-e1a6-4e3f-bae4-5d8fb5771aa3'
        },
        data:{
            description: 'O curso mais completo de JS já feito.'
        }
    })
    console.log(result)
}
main()
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função que vai ao banco, e adiciona.
// Por conta disso o async, para esperar o retorno do banco.
async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de Python",
            duration: 100,
            description: "Curso com 100h de Python.",
        
            teacher:{
                connect:{
                    id: "a1388a91-ab37-4b77-8af1-bfcdfe128be5"
                }
            }
        }
    })
    console.log(result)
}

main()
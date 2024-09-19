import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função que vai ao banco, e adiciona.
// Por conta disso o async, para esperar o retorno do banco.
async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de React Native",
            duration: 300,
            description: "Curso com 300h de React Native",
        
            teacher:{
                connectOrCreate:{
                    where:{
                        name: "Gabriel Fernandes"
                    },
                    create:{
                        name: "Gabriel Fernandes"
                    }
                }
            }
        }
    })
    console.log(result)
}

main()
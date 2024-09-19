import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função que vai ao banco, e adiciona.
// Por conta disso o async, para esperar o retorno do banco.
async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de Java",
            duration: 250,
            description: "Curso com 250h de Java.",
        
            teacher:{
                create:{
                    name: "Maria Silva"
                }
            }
        }
    })
    console.log(result)
}

main()
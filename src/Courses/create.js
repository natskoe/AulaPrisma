import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função que vai ao banco, e adiciona.
// Por conta disso o async, para esperar o retorno do banco.
async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de português",
            duration: 400,
            description: "Curso de idiomas (Português). Fique fluente!"
        }
    })
    console.log(result)
}

main()
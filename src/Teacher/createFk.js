import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Função que vai ao banco, e adiciona.
// Por conta disso o async, para esperar o retorno do banco.
async function main() {
    const result = await prisma.courses.create({
        data: {
            name: "Curso de CSS",
            duration: 50,
            description: "Curso de 50h de CSS",
            fk_id_teacher: "550bc2da-db9e-4a65-9c4e-eb3ebebb7451",
        }
    })
    console.log(result)
}

main()
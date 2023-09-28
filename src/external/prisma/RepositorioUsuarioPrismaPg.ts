import { PrismaClient } from "@prisma/client";
import RepositorioUsuario from "../../core/Usuario/service/RepositorioUsuario";
import Usuario from "../../core/Usuario/model/Usuario";

export default class RepositorioUsuarioPrismaPg implements RepositorioUsuario {
    private prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async consultarTodos(): Promise<Usuario[]> {
        return this.prisma.usuario.findMany()
    }

    async consultarPorId(id: number): Promise<Usuario | null> {
        return this.prisma.usuario.findUnique({
            where: {
                id
            },
        })
    }

    async consultarPorEmail(email: string) {
        return this.prisma.usuario.findUnique({
            where: {
                email
            },
        })
    }

    async criar(usuario: Usuario): Promise<Usuario> {
        return this.prisma.usuario.create({ data: usuario })
    }
}
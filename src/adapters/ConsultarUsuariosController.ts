import Elysia from "elysia";
import ConsultarUsuarios from "../core/Usuario/service/ConsultarUsuarios";

export default class ConsultarUsuariosController {

    constructor(
        readonly servidor: Elysia,
        readonly casoDeUso: ConsultarUsuarios
    ) {
        servidor.get('/usuarios', async () => {
            return casoDeUso.executar()
        })
    }
}
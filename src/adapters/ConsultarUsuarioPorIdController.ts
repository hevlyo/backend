import Elysia from "elysia";
import ConsultarUsuarioPorId from "../core/Usuario/service/ConsultarUsuarioPorId";

export default class ConsultarUsuarioPorIdController {
    constructor(
        readonly servidor: Elysia,
        readonly casoDeUso: ConsultarUsuarioPorId
            ) {

        servidor.get('/usuarios/:id', async ({params}) => { 
            const usuario = await casoDeUso.executar(+params.id);
            if (usuario) {
                return usuario;
            }
            else {
                return 'Usuário não encontrado';
            }
        });
    }
}
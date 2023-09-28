import RepositorioUsuarioMemoria from "./external/memoria/RepositorioUsuarioMemoria";
import RegistrarUsuario from "./core/Usuario/service/RegistrarUsuario";
import RegistrarUsuarioController from "./adapters/RegistrarUsuarioController";
import RepositorioUsuarioPrismaPg from "./external/prisma/RepositorioUsuarioPrismaPg";
import ConsultarUsuarios from "./core/Usuario/service/ConsultarUsuarios";
import ConsultarUsuariosController from "./adapters/ConsultarUsuariosController";
import ConsultarUsuarioPorId from "./core/Usuario/service/ConsultarUsuarioPorId";
import ConsultarUsuarioPorIdController from "./adapters/ConsultarUsuarioPorIdController";
import app from "./external/api/config";

// Registro de Rotas
const repositorioUsuario = new RepositorioUsuarioPrismaPg()
const registrarUsuario = new RegistrarUsuario(repositorioUsuario)
new RegistrarUsuarioController(app, registrarUsuario)

const consultarUsuarios = new ConsultarUsuarios(repositorioUsuario)
new ConsultarUsuariosController(app, consultarUsuarios)

const consultarUsuarioPorId = new ConsultarUsuarioPorId(repositorioUsuario)
new ConsultarUsuarioPorIdController(app, consultarUsuarioPorId)

app.listen(3000)

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

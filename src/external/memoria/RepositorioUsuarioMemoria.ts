import Usuario from "../../core/Usuario/model/Usuario";
import RepositorioUsuario from "../../core/Usuario/service/RepositorioUsuario";

export default class RepositorioUsuarioMemoria implements RepositorioUsuario {
    
        private readonly usuarios: Usuario[] = []
    
        async consultarPorEmail(email: string): Promise<Usuario | null> {
            const usuario = this.usuarios.find(usuario => usuario.email === email)
            return usuario || null
        }
        
        async consultarPorId(id: number): Promise<Usuario | null> {
            const usuario = this.usuarios.find(usuario => usuario.id === id)
            return usuario || null
        }

        async consultarTodos(): Promise<Usuario[]> {
            return this.usuarios
        }

        async criar(usuario: Usuario): Promise<Usuario> {
            const usuarioCriado = { ...usuario, id: Math.random() }
            this.usuarios.push(usuarioCriado)
            return usuarioCriado
        }
    
}
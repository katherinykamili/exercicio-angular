import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './interface-cadastro-usuario';
import { AtualizaPost } from '../../PUT/cadastro-usuario-atualizado/atualiza-post';

@Injectable({ providedIn: 'root' })
export class CadastroUsuarioService {

    private readonly httpClient = inject(HttpClient);
    private readonly urlAPI = 'https://jsonplaceholder.typicode.com/posts';

    cadastrarPostDoService(postCadastro:Post){
        return this.httpClient.post(this.urlAPI,postCadastro)
    }

    atualizarPost(id: number, postAtualizado: AtualizaPost) {
        return this.httpClient.put<AtualizaPost>(`${this.urlAPI}/${id}`, postAtualizado);
    }

    deletarPost(id: number) {
        return this.httpClient.delete<void>(`${this.urlAPI}/${id}`);
    }
}

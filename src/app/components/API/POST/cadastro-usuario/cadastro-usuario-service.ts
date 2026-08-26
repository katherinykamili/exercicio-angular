import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './interface-cadastro-usuario';

@Service()
export class CadastroUsuarioService {

    private readonly httpClient = inject(HttpClient);
    private readonly urlAPI = 'https://jsonplaceholder.typicode.com/posts';

    cadastrarPostDoService(postCadastro:Post){
        return this.httpClient.post(this.urlAPI,postCadastro)
    }
}

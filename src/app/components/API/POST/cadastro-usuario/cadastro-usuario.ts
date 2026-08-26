import { Component, inject, signal } from '@angular/core';
import { Post } from './interface-cadastro-usuario';
import { CadastroUsuarioService } from './cadastro-usuario-service';
import { form, FormField } from '@angular/forms/signals';

@Component({
  selector: 'app-cadastro-usuario',
  imports: [FormField],
  templateUrl: './cadastro-usuario.html',
  styleUrl: './cadastro-usuario.css',
})
export class CadastroUsuario {

  protected readonly cadastroUsuarioService = inject(CadastroUsuarioService);

  protected readonly postModel = signal<Post>({
    userId: null,
    title: '',
    body: ''
  });

  protected readonly postForm = form(this.postModel);

  protected cadastrarPost(event: SubmitEvent) {
    event.preventDefault();

    const post = this.postModel();

    this.cadastroUsuarioService.cadastrarPostDoService(post).subscribe({
      next: () => {
        alert('Post Cadastrado!')

        this.postModel.set({
          userId: null,
          title: '',
          body: ''
        });

        this.postForm().reset();
      },
      error: () => {
        alert('Algo deu errado');
      }
    })
  }

}

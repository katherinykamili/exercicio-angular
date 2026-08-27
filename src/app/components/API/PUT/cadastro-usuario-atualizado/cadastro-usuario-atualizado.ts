import { Component, inject, signal } from '@angular/core';
import { CadastroUsuarioService } from '../../POST/cadastro-usuario/cadastro-usuario-service';
import { AtualizaPost } from './atualiza-post';
import { FormField, form } from '@angular/forms/signals';


@Component({
  selector: 'app-cadastro-usuario-atualizado',
  imports: [FormField],
  templateUrl: './cadastro-usuario-atualizado.html',
  styleUrl: './cadastro-usuario-atualizado.css',
})
export class CadastroUsuarioAtualizado {

  protected readonly cadastroUsuarioService = inject(CadastroUsuarioService);

  protected readonly postModel = signal<AtualizaPost>({
    id: null,
    userId: null,
    title: '',
    body: ''
  });

  protected readonly postForm = form(this.postModel);
  protected mensagem = '';
  protected tipoMensagem: 'sucesso' | 'erro' | '' = '';

  protected atualizaPost(event: SubmitEvent): void {
    event.preventDefault();

    const post = this.postModel();

    if (post.id === null || post.id < 1) {
      this.tipoMensagem = 'erro';
      this.mensagem = 'Informe um ID de post válido para atualizar.';
      return;
    }

    this.cadastroUsuarioService.atualizarPost(post.id, post).subscribe({
      next: (response) => {
        this.tipoMensagem = 'sucesso';
        this.mensagem = `O post #${response.id} foi atualizado com sucesso.`;
        this.postModel.set({
          id: null,
          userId: null,
          title: '',
          body: ''
        });
        this.postForm().reset();
      },

      error: () => {
        this.tipoMensagem = 'erro';
        this.mensagem = 'Não foi possível atualizar o post. Tente novamente.';
      }
    })
  }
}

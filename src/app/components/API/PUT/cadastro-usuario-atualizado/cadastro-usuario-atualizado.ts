import { Component, inject, signal, Signal } from '@angular/core';
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

  protected readonly cadastroUsuarioService = inject(this.cadastroUsuarioService);

  protected readonly postModel = signal<AtualizaPost>({
    id: null,
    userId: null,
    title: '',
    body: ''
  });

  protected readonly postForm = form(this.postModel);

  protected atualizaPost(event: SubmitEvent) {
    event.preventDefault();
    this.cadastroUsuarioService.atualizaPost(this.postModel()).subscribe({
      next: () => {
        alert('Atualização deu certo!');
        this.postModel.set({
          id: null,
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

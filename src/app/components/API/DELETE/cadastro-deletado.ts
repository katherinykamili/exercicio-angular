import { Component, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { CadastroUsuarioService } from '../POST/cadastro-usuario/cadastro-usuario-service';
import { DeletePostModel } from './cadastro-deletado-interface';

@Component({
  selector: 'app-cadastro-deletado',
  imports: [FormField],
  templateUrl: './cadastro-deletado.html',
  styleUrl: './cadastro-deletado.css',
})
export class CadastroDeletado {

  protected readonly cadastroUsuarioService = inject(CadastroUsuarioService);
  protected readonly postModel = signal<DeletePostModel>({
    id: null
  });

  protected readonly postForm = form(this.postModel);
  protected mensagem = '';
  protected tipoMensagem: 'sucesso' | 'erro' | '' = '';

  protected deletarPost(event: SubmitEvent): void {
    event.preventDefault();

    const { id } = this.postModel();

    if (id === null || id < 1) {
      this.tipoMensagem = 'erro';
      this.mensagem = 'Informe um ID de post válido para excluir.';
      return;
    }

    this.cadastroUsuarioService.deletarPost(id).subscribe({
      next: () => {
        this.tipoMensagem = 'sucesso';
        this.mensagem = `O post #${id} foi excluído com sucesso.`;

        this.postModel.set({
          id: null
        });
        this.postForm().reset();
      },
      error: () => {
        this.tipoMensagem = 'erro';
        this.mensagem = 'Não foi possível excluir o post. Tente novamente.';
      }
    })
  }

}

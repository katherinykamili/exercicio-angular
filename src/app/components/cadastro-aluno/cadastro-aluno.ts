import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Define o formato de cada aluno que será guardado na lista.
interface Aluno {
  id: number;
  nome: string;
  media: number;
}

@Component({
  // Nome da tag HTML usada para renderizar este componente.
  selector: 'app-cadastro-aluno',
  // Necessário para utilizar [(ngModel)] nos campos do formulário.
  imports: [FormsModule],
  templateUrl: './cadastro-aluno.html',
  styleUrl: './cadastro-aluno.css',
})
export class CadastroAluno {
  // Variáveis que recebem os valores digitados nos inputs.
  nome = '';
  media: number | null = null;

  // Signal com a lista de alunos. Quando ela muda, o HTML é atualizado.
  alunos = signal<Aluno[]>([]);

  // Texto mostrado quando os dados informados forem inválidos.
  mensagemErro = '';

  // Cria um identificador diferente para cada aluno cadastrado.
  private proximoId = 1;

  cadastrar(): void {
    // Remove espaços antes e depois do nome antes de validá-lo.
    const nomeLimpo = this.nome.trim();

    // Impede cadastro sem nome, sem média ou com média fora do intervalo de 0 a 10.
    if (!nomeLimpo || this.media === null || this.media < 0 || this.media > 10) {
      this.mensagemErro = 'Informe um nome e uma média entre 0 e 10.';
      return;
    }

    // Atualiza a lista sem alterar diretamente o array anterior.
    this.alunos.update((listaAtual) => [
      ...listaAtual,
      { id: this.proximoId++, nome: nomeLimpo, media: this.media!, },
    ]);

    // Limpa o formulário e a mensagem de erro após um cadastro válido.
    this.nome = '';
    this.media = null;
    this.mensagemErro = '';
  }

  // Devolve true para médias iguais ou maiores que 7.
  estaAprovado(media: number): boolean {
    return media >= 7;
  }
}

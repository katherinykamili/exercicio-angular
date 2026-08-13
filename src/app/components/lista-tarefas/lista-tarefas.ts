import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

// Define a estrutura que toda tarefa armazenada na lista deve seguir.
interface Tarefa {
  id: number;
  titulo: string;
  concluida: boolean;
}

@Component({
  // Tag usada para exibir este componente em outro template.
  selector: 'app-lista-tarefas',
  // Permite usar [(ngModel)] para ligar o input à variável novaTarefa.
  imports: [FormsModule],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas {
  // Guarda o texto digitado no campo principal do formulário.
  novaTarefa = '';
  // Lista reativa: alterações aqui são refletidas automaticamente no HTML.
  tarefas = signal<Tarefa[]>([]);
  // Mensagem apresentada ao usuário quando há algum dado inválido.
  mensagemErro = '';

  // Guarda o id da tarefa em edição; null significa que não há edição ativa.
  tarefaEmEdicaoId: number | null = null;
  // Armazena o título original da tarefa enquanto ela está sendo editada.
  textoEdicao = '';

  // Gera um identificador único para cada nova tarefa.
  private proximoId = 1;

  adicionarTarefa(): void {
    // Remove espaços extras e evita cadastrar apenas espaços em branco.
    const titulo = this.novaTarefa.trim();

    // Interrompe a função e mostra um aviso se o campo não tiver conteúdo.
    if (!titulo) {
      this.mensagemErro = 'Digite o nome da tarefa.';
      return;
    }

    // Cria uma nova lista contendo as tarefas existentes e a nova tarefa pendente.
    this.tarefas.update((listaAtual) => [
      ...listaAtual,
      { id: this.proximoId++, titulo, concluida: false }
    ]);

    // Deixa o formulário pronto para o próximo cadastro.
    this.novaTarefa = '';
    this.mensagemErro = '';
  }

  alternarConclusao(id: number): void {
    // Percorre a lista e inverte apenas o estado da tarefa cujo id foi recebido.
    this.tarefas.update((listaAtual) =>
      listaAtual.map((tarefa) =>
        tarefa.id === id
          ? { ...tarefa, concluida: !tarefa.concluida }
          : tarefa,
      ),
    );
  }

  iniciarEdicao(tarefa: Tarefa): void {
  // Identifica qual card está em modo de edição.
  this.tarefaEmEdicaoId = tarefa.id;
  // Guarda o título atual para controlar o estado de edição.
  this.textoEdicao = tarefa.titulo;
  // Preenche o input principal com o texto da tarefa selecionada.
  this.novaTarefa = tarefa.titulo;
  this.mensagemErro = '';
}

salvarEdicao(): void {
  // O novo texto vem do input principal; trim impede salvar espaços vazios.
  const tituloAtualizado = this.novaTarefa.trim();

  // Não permite que uma tarefa existente fique sem título.
  if (!tituloAtualizado) {
    this.mensagemErro = 'O nome da tarefa não pode ficar vazio.';
    return;
  }

  // Atualiza somente a tarefa que está marcada como estando em edição.
  this.tarefas.update((listaAtual) =>
    listaAtual.map((tarefa) =>
      tarefa.id === this.tarefaEmEdicaoId
        ? { ...tarefa, titulo: tituloAtualizado }
        : tarefa,
    ),
  );

  // Encerra a edição e limpa os valores temporários.
  this.tarefaEmEdicaoId = null;
  this.textoEdicao = '';
  this.novaTarefa = '';
  this.mensagemErro = '';
}

cancelarEdicao(): void {
  // Sai do modo de edição sem modificar a lista de tarefas.
  this.tarefaEmEdicaoId = null;
  this.textoEdicao = '';
  this.novaTarefa = '';
  this.mensagemErro = '';
}

removerTarefa(id: number): void {
  // filter cria uma nova lista sem a tarefa que possui o id informado.
  this.tarefas.update((listaAtual) =>
    listaAtual.filter((tarefa) => tarefa.id !== id),
  );

  // Se a tarefa removida estava em edição, também cancela esse estado.
  if (this.tarefaEmEdicaoId === id) {
    this.cancelarEdicao();
  }
}

}

import { Component, signal } from '@angular/core';

// Modelo de cada candidato apresentado pelo exercício.
interface Candidato {
  id: number;
  nome: string;
  foto: string;
  votos: number;
}

@Component({
  selector: 'app-votacao-candidatos',
  imports: [],
  templateUrl: './votacao-candidatos.html',
  styleUrl: './votacao-candidatos.css',
})
export class VotacaoCandidatos {
  // O signal torna a lista reativa: mudanças aparecem automaticamente no HTML.
  protected readonly candidatos = signal<Candidato[]>([
    { id: 1, nome: 'Ana Oliveira', foto: 'https://i.pravatar.cc/160?img=47', votos: 3 },
    { id: 2, nome: 'Bruno Lima', foto: 'https://i.pravatar.cc/160?img=12', votos: 5 },
    { id: 3, nome: 'Carla Souza', foto: 'https://i.pravatar.cc/160?img=32', votos: 2 },
    { id: 4, nome: 'Diego Alves', foto: 'https://i.pravatar.cc/160?img=11', votos: 4 },
  ]);

  protected votar(id: number): void {
    // Cria uma nova lista e incrementa somente o candidato selecionado.
    this.candidatos.update((lista) =>
      lista.map((candidato) =>
        candidato.id === id
          ? { ...candidato, votos: candidato.votos + 1 }
          : candidato,
      ),
    );
  }

  protected ordenarLista(): void {
    // Copia o array antes de ordenar para não modificar o estado anterior diretamente.
    this.candidatos.update((lista) =>
      [...lista].sort((a, b) => b.votos - a.votos),
    );
  }
}

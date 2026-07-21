import { Component, EventEmitter, Input, Output } from '@angular/core';

// Restringe o layout aos dois valores aceitos pelo componente.
export type ProjectCardLayout = 'grid' | 'list';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  // Inputs permitem reutilizar o card com conteúdo diferente em cada projeto.
  @Input() title = '';
  @Input() description = '';
  @Input() layout: ProjectCardLayout = 'grid';
  @Input() eyebrow = 'Projeto selecionado';
  @Input() meta = '';
  @Input() href = '#';
  @Input() linkLabel = 'Ver projeto';
  @Input() imageSrc = '';
  @Input() imageAlt = '';

  // Emite o clique caso o componente pai queira acompanhar a abertura do link.
  @Output() projectOpen = new EventEmitter<MouseEvent>();
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

export type ProjectCardLayout = 'grid' | 'list';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [],
  templateUrl: './project-card.html',
  styleUrl: './project-card.css',
})
export class ProjectCard {
  @Input() title = '';
  @Input() description = '';
  @Input() layout: ProjectCardLayout = 'grid';
  @Input() eyebrow = 'Projeto selecionado';
  @Input() meta = '';
  @Input() href = '#';
  @Input() linkLabel = 'Ver projeto';
  @Input() imageSrc = '';
  @Input() imageAlt = '';

  @Output() projectOpen = new EventEmitter<MouseEvent>();
}

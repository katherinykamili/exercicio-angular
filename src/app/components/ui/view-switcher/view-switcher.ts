import { Component, EventEmitter, Input, Output } from '@angular/core';

// Tipo compartilhado com a Home para alternar a lista de projetos.
export type ProjectView = 'grid' | 'list';

@Component({
  selector: 'ui-view-switcher',
  standalone: true,
  templateUrl: './view-switcher.html',
  styleUrl: './view-switcher.css',
})
export class ViewSwitcher {
  @Input() value: ProjectView = 'grid';
  @Input() label = 'Visualização';
  @Input() name = 'project-view';
  @Input() disabled = false;

  @Output() valueChange = new EventEmitter<ProjectView>();

  onChange(event: Event): void {
    // Lê a opção do select e comunica a mudança ao componente pai.
    this.valueChange.emit((event.target as HTMLSelectElement).value as ProjectView);
  }
}

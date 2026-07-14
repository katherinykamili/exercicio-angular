import { Component, EventEmitter, Input, Output } from '@angular/core';

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
    this.valueChange.emit((event.target as HTMLSelectElement).value as ProjectView);
  }
}

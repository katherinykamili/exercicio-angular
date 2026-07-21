import { Component, DOCUMENT, inject } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { GlassPanel, PillButton, ViewSwitcher } from '../../components/ui';
import type { ProjectView } from '../../components/ui';

@Component({
  selector: 'app-home',
  imports: [ProjectCard, GlassPanel, PillButton, ViewSwitcher],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  // Injeta o documento para localizar a seção de projetos na página.
  private readonly document = inject(DOCUMENT);
  // Controla se os projetos aparecem em grade ou lista.
  viewMode: ProjectView = 'grid';

  scrollToProjects(): void {
    // O operador ?. evita erro caso a seção ainda não esteja disponível.
    this.document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  }
}

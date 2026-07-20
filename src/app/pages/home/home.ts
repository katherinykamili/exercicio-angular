import { Component, DOCUMENT, inject } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';
import { GlassPanel, PillButton, ViewSwitcher } from '../../components/ui';
import type { ProjectView } from '../../components/ui';
import { AuthStatus } from '../../components/auth-status/auth-status';
import { ImagePreview } from '../../components/image-preview/image-preview';

@Component({
  selector: 'app-home',
  imports: [ProjectCard, GlassPanel, PillButton, ViewSwitcher, AuthStatus, ImagePreview],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private readonly document = inject(DOCUMENT);
  viewMode: ProjectView = 'grid';

  scrollToProjects(): void {
    this.document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' });
  }
}

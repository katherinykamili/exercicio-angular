import { Component, Input } from '@angular/core';

export type GlassPanelPadding = 'compact' | 'regular' | 'spacious';

@Component({
  selector: 'ui-glass-panel',
  standalone: true,
  templateUrl: './glass-panel.html',
  styleUrl: './glass-panel.css',
})
export class GlassPanel {
  @Input() padding: GlassPanelPadding = 'regular';
  @Input() interactive = false;
  @Input() role: string | null = null;
  @Input() ariaLabel: string | null = null;
}

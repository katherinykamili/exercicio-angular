import { Component, ChangeDetectionStrategy } from '@angular/core';
import { GlassPanel } from '../../components/ui';

@Component({
  selector: 'app-contact',
  imports: [GlassPanel],
  templateUrl: './contact.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './contact.css',
})
export class Contact {}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { PillButton } from '../ui';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive, PillButton],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input() darkMode = false;
  @Output() themeToggle = new EventEmitter<void>();
}

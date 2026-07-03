import { Component } from '@angular/core';
import { ProjectCard } from '../../components/project-card/project-card';

@Component({
  selector: 'app-home',
  imports: [ProjectCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}

import { Component } from '@angular/core';
import { Counter } from '../../components/counter/counter';
import { Compras } from '../../compras/compras';
import { UsuarioComponent } from '../../usuario/usuario';
import { AuthStatus } from '../../components/auth-status/auth-status';
import { ImagePreview } from '../../components/image-preview/image-preview';

@Component({
  selector: 'app-exercises',
  imports: [Counter, Compras, UsuarioComponent, AuthStatus, ImagePreview],
  templateUrl: './exercises.html',
  styleUrl: './exercises.css',
})
export class Exercises {}

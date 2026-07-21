import { Component } from '@angular/core';
import { Counter } from '../../components/counter/counter';
import { Compras } from '../../compras/compras';
import { UsuarioComponent } from '../../usuario/usuario';
import { AuthStatus } from '../../components/auth-status/auth-status';
import { ImagePreview } from '../../components/image-preview/image-preview';
import { ExemploSignal } from '../../components/exemplo-signal/exemplo-signal';
import { ListaUsuariosComponent } from '../../lista-usuarios/lista-usuarios';
import { VotacaoCandidatos } from '../../components/votacao-candidatos/votacao-candidatos';
import { FormLogin } from '../../components/form-login/form-login';

@Component({
  selector: 'app-exercises',
  // Componentes standalone devem ser importados antes de serem usados no HTML.
  imports: [Counter, Compras, UsuarioComponent, AuthStatus, ImagePreview, ExemploSignal, ListaUsuariosComponent, VotacaoCandidatos, FormLogin],
  templateUrl: './exercises.html',
  styleUrl: './exercises.css',
})
export class Exercises {}

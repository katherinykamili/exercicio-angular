import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SobreMim } from "./sobre-mim/sobre-mim";
import { UsuarioComponent } from "./usuario/usuario";
import { Compras } from "./compras/compras";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SobreMim, UsuarioComponent, Compras, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
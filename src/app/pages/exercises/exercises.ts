import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Counter } from '../../components/counter/counter';
import { Compras } from '../../compras/compras';
import { UsuarioComponent } from '../../usuario/usuario';
import { AuthStatus } from '../../components/auth-status/auth-status';
import { ImagePreview } from '../../components/image-preview/image-preview';
import { ExemploSignal } from '../../components/exemplo-signal/exemplo-signal';
import { ListaUsuariosComponent } from '../../lista-usuarios/lista-usuarios';
import { VotacaoCandidatos } from '../../components/votacao-candidatos/votacao-candidatos';
import { FormLogin } from '../../components/form-login/form-login';
import { FormCadastro } from '../../components/form-cadastro/form-cadastro';
import { CadastroAluno } from '../../components/cadastro-aluno/cadastro-aluno';
import { ListaTarefas } from '../../components/lista-tarefas/lista-tarefas';
import { CadastroUsuario } from '../../components/API/POST/cadastro-usuario/cadastro-usuario';

@Component({
  selector: 'app-exercises',
  // Componentes standalone devem ser importados antes de serem usados no HTML.
  imports: [
    Counter,
    Compras,
    UsuarioComponent,
    AuthStatus,
    ImagePreview,
    ExemploSignal,
    ListaUsuariosComponent,
    VotacaoCandidatos,
    FormLogin,
    FormCadastro,
    CadastroAluno,
    ListaTarefas,
    CadastroUsuario,
  ],
  templateUrl: './exercises.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './exercises.css',
})
export class Exercises {}

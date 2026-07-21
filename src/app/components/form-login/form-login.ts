import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {
  // Credenciais definidas apenas para demonstrar a validação durante o exercício.
  private readonly usuarioCorreto = 'admin';
  private readonly senhaCorreta = 'angular123';

  // Obtém o serviço responsável pela criação dos controles reativos.
  private readonly formBuilder = inject(FormBuilder);

  // Signals atualizam automaticamente as mensagens exibidas no template.
  protected readonly usuarioLogado = signal(false);
  protected readonly credenciaisInvalidas = signal(false);

  // Os dois campos são obrigatórios; a senha precisa ter pelo menos seis caracteres.
  protected readonly loginForm = this.formBuilder.nonNullable.group({
    usuario: ['', Validators.required],
    senha: ['', [Validators.required, Validators.minLength(6)]],
  });

  protected realizarLogin(): void {
    // Exibe os erros dos campos e interrompe a tentativa se o formulário for inválido.
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      this.usuarioLogado.set(false);
      this.credenciaisInvalidas.set(false);
      return;
    }

    const { usuario, senha } = this.loginForm.getRawValue();
    const loginValido = usuario === this.usuarioCorreto && senha === this.senhaCorreta;

    // Atualiza o estado de autenticação conforme a comparação das credenciais.
    this.usuarioLogado.set(loginValido);
    this.credenciaisInvalidas.set(!loginValido);
  }
}

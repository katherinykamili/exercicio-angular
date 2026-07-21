import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

// Representa os dados válidos entregues após o envio do formulário.
interface UsuarioCadastro {
  nome: string;
  email: string;
  idade: number;
}

@Component({
  selector: 'app-form-login',
  imports: [ReactiveFormsModule],
  templateUrl: './form-login.html',
  styleUrl: './form-login.css',
})
export class FormLogin {
  // Obtém o serviço responsável pela criação dos controles reativos.
  private readonly formBuilder = inject(FormBuilder);

  // Guarda o último cadastro para exibi-lo no painel de confirmação.
  protected readonly usuarioCadastrado = signal<UsuarioCadastro | null>(null);

  // Define valores iniciais e regras de validação para cada campo.
  protected readonly usuarioForm = this.formBuilder.nonNullable.group({
    nome: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    idade: [18, [Validators.required, Validators.min(18), Validators.max(120)]],
  });

  protected cadastrarUsuario(): void {
    // Impede o envio inválido e torna todas as mensagens de erro visíveis.
    if (this.usuarioForm.invalid) {
      this.usuarioForm.markAllAsTouched();
      return;
    }

    // Salva os dados válidos e prepara o formulário para outro cadastro.
    this.usuarioCadastrado.set(this.usuarioForm.getRawValue());
    this.usuarioForm.reset({ nome: '', email: '', idade: 18 });
  }
}

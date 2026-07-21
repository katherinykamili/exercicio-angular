import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

interface UsuarioCadastrado {
  id: number;
  nome: string;
  email: string;
  dataNascimento: string;
}

// Valida os dois campos em conjunto, pois a confirmação depende da senha original.
const senhasIguais: ValidatorFn = (grupo: AbstractControl): ValidationErrors | null => {
  const senha = grupo.get('senha')?.value;
  const confirmacaoSenha = grupo.get('confirmacaoSenha')?.value;

  return senha === confirmacaoSenha ? null : { senhasDiferentes: true };
};

// Impede o cadastro de uma data posterior ao dia atual.
const dataNaoFutura: ValidatorFn = (controle: AbstractControl): ValidationErrors | null => {
  if (!controle.value) return null;

  const hoje = new Date().toISOString().slice(0, 10);
  return controle.value <= hoje ? null : { dataFutura: true };
};

@Component({
  selector: 'app-form-cadastro',
  imports: [ReactiveFormsModule],
  templateUrl: './form-cadastro.html',
  styleUrl: './form-cadastro.css',
})
export class FormCadastro {
  private readonly formBuilder = inject(FormBuilder);
  private proximoId = 1;

  protected readonly dataMaxima = new Date().toISOString().slice(0, 10);
  protected readonly usuarios = signal<UsuarioCadastrado[]>([]);

  // O validator do grupo compara senha e confirmação após validar cada campo.
  protected readonly cadastroForm = this.formBuilder.nonNullable.group(
    {
      nome: ['', [Validators.required, Validators.minLength(3), Validators.pattern(/^\S+(?:\s+\S+)+$/)]],
      email: ['', [Validators.required, Validators.email]],
      senha: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d).+$/),
        ],
      ],
      confirmacaoSenha: ['', Validators.required],
      dataNascimento: ['', [Validators.required, dataNaoFutura]],
    },
    { validators: senhasIguais },
  );

  protected cadastrar(): void {
    if (this.cadastroForm.invalid) {
      this.cadastroForm.markAllAsTouched();
      return;
    }

    const { nome, email, dataNascimento } = this.cadastroForm.getRawValue();

    // Senhas não são armazenadas no array nem exibidas na página.
    this.usuarios.update((lista) => [
      ...lista,
      { id: this.proximoId++, nome, email, dataNascimento },
    ]);

    this.cadastroForm.reset({
      nome: '',
      email: '',
      senha: '',
      confirmacaoSenha: '',
      dataNascimento: '',
    });
  }

  protected formatarData(data: string): string {
    // O horário ao meio-dia evita mudança de dia causada por diferenças de fuso.
    return new Intl.DateTimeFormat('pt-BR').format(new Date(`${data}T12:00:00`));
  }
}

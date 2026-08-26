import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroUsuarioAtualizado } from './cadastro-usuario-atualizado';

describe('CadastroUsuarioAtualizado', () => {
  let component: CadastroUsuarioAtualizado;
  let fixture: ComponentFixture<CadastroUsuarioAtualizado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroUsuarioAtualizado],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroUsuarioAtualizado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

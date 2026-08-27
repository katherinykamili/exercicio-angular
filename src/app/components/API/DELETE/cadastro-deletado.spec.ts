import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroDeletado } from './cadastro-deletado';

describe('CadastroDeletado', () => {
  let component: CadastroDeletado;
  let fixture: ComponentFixture<CadastroDeletado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroDeletado],
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroDeletado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioModelo } from './usuario-modelo';

describe('UsuarioModelo', () => {
  let component: UsuarioModelo;
  let fixture: ComponentFixture<UsuarioModelo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioModelo],
    }).compileComponents();

    fixture = TestBed.createComponent(UsuarioModelo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaApi } from './lista-api';

describe('ListaApi', () => {
  let component: ListaApi;
  let fixture: ComponentFixture<ListaApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaApi],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

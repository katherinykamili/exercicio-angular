import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VotacaoCandidatos } from './votacao-candidatos';

describe('VotacaoCandidatos', () => {
  let component: VotacaoCandidatos;
  let fixture: ComponentFixture<VotacaoCandidatos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VotacaoCandidatos],
    }).compileComponents();

    fixture = TestBed.createComponent(VotacaoCandidatos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

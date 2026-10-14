import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Recette } from './recette';

describe('Recette', () => {
  let component: Recette;
  let fixture: ComponentFixture<Recette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Recette],
    }).compileComponents();

    fixture = TestBed.createComponent(Recette);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

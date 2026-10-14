import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateRecette } from './update-recette';

describe('UpdateRecette', () => {
  let component: UpdateRecette;
  let fixture: ComponentFixture<UpdateRecette>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRecette],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateRecette);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateRecetteComponent } from './update-recette';

describe('UpdateRecetteComponent', () => {
  let component: UpdateRecetteComponent;
  let fixture: ComponentFixture<UpdateRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRecetteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateRecetteComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddRecetteComponent } from './add-recette';

describe('AddRecetteComponent', () => {
  let component: AddRecetteComponent;
  let fixture: ComponentFixture<AddRecetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRecetteComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AddRecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSectionComponent } from './food-section.component';

describe('FoodSectionComponent', () => {
  let component: FoodSectionComponent;
  let fixture: ComponentFixture<FoodSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

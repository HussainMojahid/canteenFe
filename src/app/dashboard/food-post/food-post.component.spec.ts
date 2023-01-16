import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodPostComponent } from './food-post.component';

describe('FoodPostComponent', () => {
  let component: FoodPostComponent;
  let fixture: ComponentFixture<FoodPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodPostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

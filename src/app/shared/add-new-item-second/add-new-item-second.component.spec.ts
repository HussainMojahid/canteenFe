import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemSecondComponent } from './add-new-item-second.component';

describe('AddNewItemSecondComponent', () => {
  let component: AddNewItemSecondComponent;
  let fixture: ComponentFixture<AddNewItemSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewItemSecondComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewItemSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

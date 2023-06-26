import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewItemFirstComponent } from './add-new-item-first.component';

describe('AddNewItemFirstComponent', () => {
  let component: AddNewItemFirstComponent;
  let fixture: ComponentFixture<AddNewItemFirstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewItemFirstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewItemFirstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitePopupComponent } from './invite-pop-up.component';

describe('InvitePopUpComponent', () => {
  let component: InvitePopupComponent;
  let fixture: ComponentFixture<InvitePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvitePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvitePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
function beforeEach(arg0: () => Promise<void>) {
  throw new Error('Function not implemented.');
}

function expect(component: InvitePopupComponent): void {
  throw new Error('Function not implemented.');
}


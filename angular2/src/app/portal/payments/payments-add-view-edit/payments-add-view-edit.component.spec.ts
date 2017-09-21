import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsAddViewEditComponent } from './payments-add-view-edit.component';

describe('PaymentsAddViewEditComponent', () => {
  let component: PaymentsAddViewEditComponent;
  let fixture: ComponentFixture<PaymentsAddViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentsAddViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsAddViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

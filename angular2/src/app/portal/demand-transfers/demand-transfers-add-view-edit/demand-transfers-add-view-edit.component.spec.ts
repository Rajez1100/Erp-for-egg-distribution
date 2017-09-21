import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandTransfersAddViewEditComponent } from './demand-transfers-add-view-edit.component';

describe('DemandTransfersAddViewEditComponent', () => {
  let component: DemandTransfersAddViewEditComponent;
  let fixture: ComponentFixture<DemandTransfersAddViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandTransfersAddViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandTransfersAddViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

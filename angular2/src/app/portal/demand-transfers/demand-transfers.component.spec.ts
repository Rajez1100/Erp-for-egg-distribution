import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandTransfersComponent } from './demand-transfers.component';

describe('DemandTransfersComponent', () => {
  let component: DemandTransfersComponent;
  let fixture: ComponentFixture<DemandTransfersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandTransfersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandTransfersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

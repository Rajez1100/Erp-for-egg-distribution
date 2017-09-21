import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandTransfersListComponent } from './demand-transfers-list.component';

describe('DemandTransfersListComponent', () => {
  let component: DemandTransfersListComponent;
  let fixture: ComponentFixture<DemandTransfersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandTransfersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandTransfersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

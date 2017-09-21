import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSummaryListComponent } from './sales-summary-list.component';

describe('SalesSummaryListComponent', () => {
  let component: SalesSummaryListComponent;
  let fixture: ComponentFixture<SalesSummaryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSummaryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSummaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

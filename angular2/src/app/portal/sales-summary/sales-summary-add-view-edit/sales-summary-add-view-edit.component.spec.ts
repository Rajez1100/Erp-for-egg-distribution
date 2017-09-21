import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSummaryAddViewEditComponent } from './sales-summary-add-view-edit.component';

describe('SalesSummaryAddViewEditComponent', () => {
  let component: SalesSummaryAddViewEditComponent;
  let fixture: ComponentFixture<SalesSummaryAddViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesSummaryAddViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSummaryAddViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

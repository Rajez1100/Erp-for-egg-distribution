import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTeamsAddViewEditComponent } from './sales-teams-add-view-edit.component';

describe('SalesTeamsAddViewEditComponent', () => {
  let component: SalesTeamsAddViewEditComponent;
  let fixture: ComponentFixture<SalesTeamsAddViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamsAddViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamsAddViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

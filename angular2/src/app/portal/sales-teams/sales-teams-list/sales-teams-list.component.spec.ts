import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesTeamsListComponent } from './sales-teams-list.component';

describe('SalesTeamsListComponent', () => {
  let component: SalesTeamsListComponent;
  let fixture: ComponentFixture<SalesTeamsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesTeamsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesTeamsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

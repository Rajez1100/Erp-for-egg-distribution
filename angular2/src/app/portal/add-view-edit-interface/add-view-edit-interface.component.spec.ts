import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddViewEditInterfaceComponent } from './add-view-edit-interface.component';

describe('AddViewEditInterfaceComponent', () => {
  let component: AddViewEditInterfaceComponent;
  let fixture: ComponentFixture<AddViewEditInterfaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddViewEditInterfaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddViewEditInterfaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

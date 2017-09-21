import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggFarmAddViewEditComponent } from './egg-farm-add-view-edit.component';

describe('EggFarmAddViewEditComponent', () => {
  let component: EggFarmAddViewEditComponent;
  let fixture: ComponentFixture<EggFarmAddViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggFarmAddViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggFarmAddViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

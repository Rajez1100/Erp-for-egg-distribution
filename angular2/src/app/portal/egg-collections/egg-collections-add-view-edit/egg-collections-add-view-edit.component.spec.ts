import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggCollectionsAddViewEditComponent } from './egg-collections-add-view-edit.component';

describe('EggCollectionsAddViewEditComponent', () => {
  let component: EggCollectionsAddViewEditComponent;
  let fixture: ComponentFixture<EggCollectionsAddViewEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggCollectionsAddViewEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggCollectionsAddViewEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggCollectionsListComponent } from './egg-collections-list.component';

describe('EggCollectionsListComponent', () => {
  let component: EggCollectionsListComponent;
  let fixture: ComponentFixture<EggCollectionsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggCollectionsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggCollectionsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

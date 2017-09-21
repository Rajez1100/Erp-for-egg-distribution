import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggCollectionsComponent } from './egg-collections.component';

describe('EggCollectionsComponent', () => {
  let component: EggCollectionsComponent;
  let fixture: ComponentFixture<EggCollectionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggCollectionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggCollectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

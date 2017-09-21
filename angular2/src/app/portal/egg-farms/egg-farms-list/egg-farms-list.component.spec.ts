import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggFarmsListComponent } from './egg-farms-list.component';

describe('EggFarmsListComponent', () => {
  let component: EggFarmsListComponent;
  let fixture: ComponentFixture<EggFarmsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggFarmsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggFarmsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

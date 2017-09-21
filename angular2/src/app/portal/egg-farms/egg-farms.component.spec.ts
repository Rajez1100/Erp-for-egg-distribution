import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EggFarmsComponent } from './egg-farms.component';

describe('EggFarmsComponent', () => {
  let component: EggFarmsComponent;
  let fixture: ComponentFixture<EggFarmsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EggFarmsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EggFarmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

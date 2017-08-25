import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftlayerVmExtrainputsComponent } from './softlayer-vm-extrainputs.component';

describe('SoftlayerVmExtrainputsComponent', () => {
  let component: SoftlayerVmExtrainputsComponent;
  let fixture: ComponentFixture<SoftlayerVmExtrainputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftlayerVmExtrainputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftlayerVmExtrainputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

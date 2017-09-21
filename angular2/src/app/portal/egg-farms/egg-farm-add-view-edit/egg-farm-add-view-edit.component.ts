import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { EggFarm } from 'app/classes';
import { AddViewEditInterfaceComponent, arg1, arg2, arg3, arg4 } from '../../add-view-edit-interface/add-view-edit-interface.component';
import { EggFarmsService } from 'app/services';

@Component({
  selector: 'app-egg-farm-add-view-edit',
  templateUrl: './egg-farm-add-view-edit.component.html'
})
export class EggFarmAddViewEditComponent extends AddViewEditInterfaceComponent implements OnInit {
  details: EggFarm;
  logoUrl: URL;

  constructor(private farmsService: EggFarmsService, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4) {
    super(arg1, arg2, arg3, arg4);
  }

  getModelClass(data?: Object) {
    return new EggFarm(data);
  }

  buildForm() {
    // Building form
    this.form = this.fb.group({
      'id': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'description': [''],
      'address': [''],
      'logo': ['']
    });

    this.subscribeEvents();
  }

  getFormValue() {
    let formValue = JSON.parse(JSON.stringify(this.details));

    if (this.details.logo) {
      this.logoUrl = this.details.logo;
      delete formValue['logo'];
    }

    return formValue;
  }

  save() {
    this.state = 'saving';

    let formValue: any = this.form.value;
    if (formValue.logo) formValue.logo = formValue['logo'][0];
    else delete formValue['logo'];

    if (this.mode == 'ADD') {
      this.farmsService
        .create(formValue)
        .then(Result => {
          this.details = Result;
          this.state = 'saved';
          this.initViewScreen();
        })
        .catch(Err => {
          this.state = 'FailedToSave';
        });
    }
    else if (this.mode == 'EDIT') {
      this.farmsService
        .update(formValue['id'], formValue)
        .then(Result => {
          this.details = Result;
          this.state = 'saved';
          this.initViewScreen();
        })
        .catch(Err => {
          this.state = 'FailedToSave';
        });
    }


  }

}

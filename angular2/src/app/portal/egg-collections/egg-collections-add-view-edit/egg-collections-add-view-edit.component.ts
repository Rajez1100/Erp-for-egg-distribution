import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { EggCollection, SelectOption } from 'app/classes';
import { AddViewEditInterfaceComponent, arg1, arg2, arg3, arg4 } from '../../add-view-edit-interface/add-view-edit-interface.component';
import { EggCollectionsService } from 'app/services';

declare var moment: any;

@Component({
  selector: 'app-egg-collections-add-view-edit',
  templateUrl: './egg-collections-add-view-edit.component.html',
  styles: []
})
export class EggCollectionsAddViewEditComponent extends AddViewEditInterfaceComponent implements OnInit {
  details: EggCollection;
  selectedFarm: SelectOption;
  selectedSalesTeam: SelectOption;

  constructor(private ecService: EggCollectionsService, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4) {
    super(arg1, arg2, arg3, arg4);
  }

  getModelClass(data?: Object) {
    return new EggCollection(data);
  }

  buildForm() {
    // Building form
    this.form = this.fb.group({
      'id': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'farm': ['', [Validators.required]],
      'rate': ['', [Validators.required]],
      'sales_team': ['', [Validators.required]],
      'no_of_plates': ['', [Validators.required]],
    });

    this.subscribeEvents();
  }

  getFormValue() {
    let formValue: any = JSON.parse(JSON.stringify(this.details));

    if (formValue.farm) this.selectedFarm = { id: formValue.farm, text: formValue.farm_name };
    else this.selectedFarm = null;
    if (formValue.sales_team) this.selectedSalesTeam = { id: formValue.sales_team, text: formValue.sales_team_name };
    else this.selectedSalesTeam = null;

    if (formValue['date']) {
      let date: any = moment(formValue['date'], this.datepickerOptions['format'].toUpperCase());
      formValue['date'] = new Date(date.year(), date.month(), date.date());
    } else {
      formValue['date'] = new Date();
    }

    return formValue;
  }

  save() {
    this.state = 'saving';

    let formValue: any = this.form.value;
    let date: Date = new Date(formValue['date']);
    formValue['date'] = `${String("0" + date.getDate()).slice(-2)}-${String("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;

    let queryParams: Object = { form_data: true };

    if (this.mode == 'ADD') {
      this.ecService
        .create(formValue, queryParams)
        .subscribe(Result => {
          this.details = Result;
          this.state = 'saved';
          this.initViewScreen();
        },
        Err => {
          this.state = 'FailedToSave';
        });
    }
    else if (this.mode == 'EDIT') {
      this.ecService
        .update(formValue['id'], formValue, queryParams)
        .subscribe(Result => {
          this.details = Result;
          this.state = 'saved';
          this.initViewScreen();
        },
        Err => {
          this.state = 'FailedToSave';
        });
    }

  }

  updateFarm(action: string, event: SelectOption) {
    if (action == 'changed') {
      this.selectedFarm = event;
      this.patchForm({ 'farm': event.id });
    }
    else if (action == 'removed') {
      this.selectedFarm = null;
      this.patchForm({ 'farm': '' });
    }
  }

  updateSalesTeam(action: string, event: SelectOption) {
    if (action == 'changed') {
      this.selectedSalesTeam = event;
      this.patchForm({ 'sales_team': event.id });
    }
    else if (action == 'removed') {
      this.selectedSalesTeam = null;
      this.patchForm({ 'sales_team': '' });
    }
  }
}

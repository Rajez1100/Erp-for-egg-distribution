import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { DemandTransfer, SelectOption } from 'app/classes';
import { AddViewEditInterfaceComponent, arg1, arg2, arg3, arg4 } from '../../add-view-edit-interface/add-view-edit-interface.component';
import { DemandTransfersService } from 'app/services';

declare var moment: any;

@Component({
  selector: 'app-demand-transfers-add-view-edit',
  templateUrl: './demand-transfers-add-view-edit.component.html',
  styles: []
})
export class DemandTransfersAddViewEditComponent extends AddViewEditInterfaceComponent implements OnInit {
  details: DemandTransfer;
  selectedFromSt: SelectOption;
  selectedToSt: SelectOption;

  constructor(private dtService: DemandTransfersService, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4) {
    super(arg1, arg2, arg3, arg4);
  }

  getModelClass(data?: Object) {
    return new DemandTransfer(data);
  }

  buildForm() {
    // Building form
    this.form = this.fb.group({
      'id': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'transfer_from': ['', [Validators.required]],
      'transfer_to': ['', [Validators.required]],
      'no_of_plates': ['', [Validators.required]],
    });

    this.subscribeEvents();
  }

  getFormValue() {
    let formValue: any = JSON.parse(JSON.stringify(this.details));

    if (formValue.transfer_from) this.selectedFromSt = { id: formValue.transfer_from, text: formValue.transfer_from_name };
    else this.selectedFromSt = null;
    if (formValue.transfer_to) this.selectedToSt = { id: formValue.transfer_to, text: formValue.transfer_to_name };
    else this.selectedToSt = null;

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
      this.dtService
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
      this.dtService
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

  updateFromSt(action: string, event: SelectOption) {
    if (action == 'changed') {
      this.selectedFromSt = event;
      this.patchForm({ 'transfer_from': event.id });
    }
    else if (action == 'removed') {
      this.selectedFromSt = null;
      this.patchForm({ 'transfer_from': '' });
    }
  }

  updateToSt(action: string, event: SelectOption) {
    if (action == 'changed') {
      this.selectedToSt = event;
      this.patchForm({ 'transfer_to': event.id });
    }
    else if (action == 'removed') {
      this.selectedToSt = null;
      this.patchForm({ 'transfer_to': '' });
    }
  }
}

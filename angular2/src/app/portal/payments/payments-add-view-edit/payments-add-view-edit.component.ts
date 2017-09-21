import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Payment, SelectOption } from 'app/classes';
import { AddViewEditInterfaceComponent, arg1, arg2, arg3, arg4 } from '../../add-view-edit-interface/add-view-edit-interface.component';
import { PaymentsService } from 'app/services';

declare var moment: any;

@Component({
  selector: 'app-payments-add-view-edit',
  templateUrl: './payments-add-view-edit.component.html',
  styles: []
})
export class PaymentsAddViewEditComponent extends AddViewEditInterfaceComponent implements OnInit {
  details: Payment;
  selectedFarm: SelectOption;

  constructor(private paymentService: PaymentsService, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4) {
    super(arg1, arg2, arg3, arg4);
  }

  getModelClass(data?: Object) {
    return new Payment(data);
  }

  buildForm() {
    // Building form
    this.form = this.fb.group({
      'id': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'farm': ['', [Validators.required]],
      'amount': ['', [Validators.required]]
    });

    this.subscribeEvents();
  }

  getFormValue() {
    let formValue: any = JSON.parse(JSON.stringify(this.details));

    if (formValue.farm) this.selectedFarm = { id: formValue.farm, text: formValue.farm_name };
    else this.selectedFarm = null;

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
      this.paymentService
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
      this.paymentService
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

}

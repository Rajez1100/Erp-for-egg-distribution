import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { SalesSummary, SelectOption } from 'app/classes';
import { AddViewEditInterfaceComponent, arg1, arg2, arg3, arg4 } from '../../add-view-edit-interface/add-view-edit-interface.component';
import { SalesSummaryService } from 'app/services';

declare var moment: any;

@Component({
  selector: 'app-sales-summary-add-view-edit',
  templateUrl: './sales-summary-add-view-edit.component.html',
  styles: []
})
export class SalesSummaryAddViewEditComponent extends AddViewEditInterfaceComponent implements OnInit {
  details: SalesSummary;
  selectedSalesTeam: SelectOption;

  constructor(private ssService: SalesSummaryService, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4) {
    super(arg1, arg2, arg3, arg4);
  }

  getModelClass(data?: Object) {
    return new SalesSummary(data);
  }

  buildForm() {
    // Building form
    this.form = this.fb.group({
      'id': ['', [Validators.required]],
      'date': ['', [Validators.required]],
      'sales_team': ['', [Validators.required]],
      'damaged_plates': ['', []],
      'cash_handovered': ['', []],
      'rates': new FormArray([
        this.buildRateForm()
      ])
    });

    this.subscribeEvents();
  }

  buildRateForm(data?: Object): FormGroup {
    let rateForm: FormGroup = this.fb.group({
      'id': ['', []],
      'rate': ['', [Validators.required]],
      'no_of_plates': ['', [Validators.required]],
    })

    if (data) {
      rateForm.patchValue(data);

      if ('id' in data) {
        rateForm.controls['id'].setValidators([Validators.required]);
        rateForm.controls['id'].updateValueAndValidity();
      }
    }

    return rateForm;
  }

  addRate() {
    let rateArray: FormArray = <FormArray>this.form.controls['rates'];

    rateArray.push(this.buildRateForm());
    rateArray.updateValueAndValidity();
  }

  removeRate(index: number) {
    let rateArray: FormArray = <FormArray>this.form.controls['rates'];

    if (rateArray.length > 1) {
      rateArray.removeAt(index);
      rateArray.updateValueAndValidity();
    }
  }

  getFormValue() {
    let formValue: any = JSON.parse(JSON.stringify(this.details));

    // Dropdown options
    if (formValue.sales_team) this.selectedSalesTeam = { id: formValue.sales_team, text: formValue.sales_team_name };
    else this.selectedSalesTeam = null;

    // Formatting date
    if (formValue['date']) {
      let date: any = moment(formValue['date'], this.datepickerOptions['format'].toUpperCase());
      formValue['date'] = new Date(date.year(), date.month(), date.date());
    } else {
      formValue['date'] = new Date();
    }

    // Rates Array
    let ratesArray: FormArray = new FormArray([]);

    if (formValue['rates'].length == 0) ratesArray.push(this.buildRateForm());
    else {
      formValue['rates'].forEach(r => ratesArray.push(this.buildRateForm(r)));
    }

    this.form.setControl('rates', ratesArray);
    this.form.updateValueAndValidity();

    return formValue;
  }

  save() {
    this.state = 'saving';

    let formValue: any = JSON.parse(JSON.stringify(this.form.value));
    let date: Date = new Date(formValue['date']);
    formValue['date'] = `${String("0" + date.getDate()).slice(-2)}-${String("0" + (date.getMonth() + 1)).slice(-2)}-${date.getFullYear()}`;

    formValue['damaged_plates'] = formValue['damaged_plates'] || 0;
    formValue['cash_handovered'] = formValue['cash_handovered'] || 0;

    formValue['rates'].map(r => {
      if (r['id']) return r;
      else {
        delete r['id'];
        return r;
      }
    })

    let queryParams: Object = { form_data: true };

    if (this.mode == 'ADD') {
      this.ssService
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
      this.ssService
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

  getTotalCost() {
    let formValue: Object = this.form.value;

    let totalCost: number = 0;

    formValue['rates'].forEach(r => totalCost += parseFloat(r.rate) * parseFloat(r.no_of_plates));

    return totalCost || 0;
  }

  getTotalPlates() {
    let formValue: Object = this.form.value;

    let totalPlates: number = 0;

    formValue['rates'].forEach(r => totalPlates += parseFloat(r.no_of_plates));

    return totalPlates || 0;
  }

  getCost(index: number) {
    let rates: Object[] = this.form.value.rates;

    let cost: number = parseFloat(rates[index]['rate']) * parseFloat(rates[index]['no_of_plates']) || 0;

    return cost;
  }

  getTotalOutstanding() {
    let formValue: Object = this.form.value;

    return (this.getTotalCost() - parseFloat(formValue['cash_handovered'])) || 0;
  }
}

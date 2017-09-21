import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceLocator } from 'app/app.module';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

export { Location as arg1, ActivatedRoute as arg2, Router as arg3, FormBuilder as arg4 };

class Dummy {
  id: number | '' = '';
  constructor(data?: Object) { }
}

@Component({
  selector: 'app-add-view-edit-interface',
  template: ''
})
export class AddViewEditInterfaceComponent implements OnInit {
  protected ngUnSubcribe: Subject<void> = new Subject<void>();
  protected details: Dummy;
  protected mode: string = 'VIEW';
  protected form: FormGroup;
  protected state: string;
  protected formData: Object = {};
  protected currencyFormat: string = 'INR';
  protected datepickerOptions: Object = {
    autoclose: true,
    todayHighlight: true,
    format: 'dd-mm-yyyy'
  };
  path: string;

  constructor(
    protected _location: Location,
    protected route: ActivatedRoute,
    protected router: Router,
    protected fb: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnSubcribe.next();
    this.ngUnSubcribe.complete();
  }

  getModelClass(data?: Object) {
    return new Dummy(data);
  }

  buildForm() {
    // Building form
    this.form = this.fb.group({});

    this.subscribeEvents();
  }

  subscribeEvents() {
    // Route params
    this.route.params.takeUntil(this.ngUnSubcribe).subscribe(params => {
      let route: any = this.route.snapshot;
      this.path = route.url[0].path;

      if (!('id' in params)) {
        if ('form_data' in route.data) this.formData = route.data.form_data;
        else this.formData = {};

        this.initAddScreen();
      }
      else {

        if (route.data.details) this.details = route.data.details;
        else this.details = this.getModelClass();

        if ('form_data' in route.data) this.formData = route.data.form_data;
        else this.formData = {};

        switch (route.url[0].path.toLocaleUpperCase()) {
          case 'VIEW': this.initViewScreen(); break;
          case 'EDIT': this.initEditScreen(); break;
        }
      }
    });
  }

  getFormValue() {
    return this.details;
  }

  initAddScreen() {
    this.mode = 'ADD';
    this.details = this.getModelClass();
    this.form.patchValue(this.getFormValue());

    this.form.controls['id'].setValidators([]);
    this.form.controls['id'].updateValueAndValidity();
  }

  initViewScreen() {
    this.mode = 'VIEW';
    this.form.reset();
    this.form.updateValueAndValidity();
  }

  initEditScreen() {
    this.mode = 'EDIT';
    this.form.patchValue(this.getFormValue());

    this.form.controls['id'].setValidators([Validators.required]);
    this.form.controls['id'].updateValueAndValidity();
  }

  patchForm(value: Object) {
    this.form.patchValue(value);
    this.form.updateValueAndValidity();
  }

  save() {
    this.state = 'saving';
  }

  cancel() {
    this.state = null;

    if (this.path == 'add' || this.path == 'edit') this.back();
    else this.initViewScreen();
  }

  back() {
    this._location.back();
  }

}

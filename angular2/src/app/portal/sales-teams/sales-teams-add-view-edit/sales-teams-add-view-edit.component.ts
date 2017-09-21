import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { SalesTeam } from 'app/classes';
import { AddViewEditInterfaceComponent, arg1, arg2, arg3, arg4 } from '../../add-view-edit-interface/add-view-edit-interface.component';
import { SalesTeamsService } from 'app/services';

@Component({
  selector: 'app-sales-teams-add-view-edit',
  templateUrl: './sales-teams-add-view-edit.component.html'
})
export class SalesTeamsAddViewEditComponent extends AddViewEditInterfaceComponent implements OnInit {
  details: SalesTeam;

  constructor(private ssService: SalesTeamsService, arg1: arg1, arg2: arg2, arg3: arg3, arg4: arg4) {
    super(arg1, arg2, arg3, arg4);
  }

  getModelClass(data?: Object) {
    return new SalesTeam(data);
  }

  buildForm() {
    // Building form
    this.form = this.fb.group({
      'id': ['', [Validators.required]],
      'name': ['', [Validators.required]],
      'description': ['']
    });

    this.subscribeEvents();
  }

  save() {
    this.state = 'saving';

    let formValue: any = this.form.value;

    if (this.mode == 'ADD') {
      this.ssService
        .create(formValue)
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
        .update(formValue['id'], formValue)
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

}

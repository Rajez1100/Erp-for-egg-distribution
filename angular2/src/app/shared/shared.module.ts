import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'app/directives';
import { PipesModule } from 'app/pipes';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule } from 'ngx-bootstrap';
import { Ng2TableComponent } from 'app/directives';
import { SelectModule } from 'ng2-select';
import { NKDatetimeModule } from 'ng2-datetime/ng2-datetime';

@NgModule({
    imports: [
        // Angular modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Custom modules
        PipesModule,
        DirectivesModule,

        // Third party modules
        Ng2TableModule,
        PaginationModule.forRoot(),
        SelectModule,
        NKDatetimeModule

    ],
    declarations: [
        // Custom directives
        Ng2TableComponent

        // Third party

    ],
    providers: [

    ],
    exports: [
        // Angular modules
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,

        // Custom modules
        PipesModule,
        DirectivesModule,

        Ng2TableComponent,

        // Third party modules
        Ng2TableModule,
        PaginationModule,
        SelectModule,
        NKDatetimeModule
    ]
})
export class SharedModule { }

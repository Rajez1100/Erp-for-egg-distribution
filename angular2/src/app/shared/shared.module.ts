import { NgModule, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DirectivesModule } from 'app/directives';
import { PipesModule } from 'app/pipes';

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


    ],
    declarations: [
        // Custom directives


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
    ]
})
export class SharedModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TileDirective } from './tile.directive';
import { AccessDirective } from './access.directive';
import { TooltipDirective } from './tooltip.directive';
import { LocalitySelectDirective } from './input-directives/locality-select/locality-select.directive';
import { MailRecipientCollectorDirective } from './input-directives/mail-recipient-collector/mail-recipient-collector.directive';
import { ValidationService } from './form-validations/validation.service';
import { ControlMessagesComponent } from './form-validations/control-messages.component';
import { ExtendNg2SelectDirective } from './extend-ng2-select.directive';
import { DebounceTimerDirective } from './input-directives/debounce-timer/debounce-timer.directive';
import { CurrencyFormatterDirective } from './input-directives/currency-formatter/currency-formatter.directive';
import { InlineInputDirective } from './input-directives/inline-input/inline-input.directive';
import { PipesModule, CurrencyPipe } from 'app/pipes';
import { NumberFormatterDirective } from './number-formatter/number-formatter.directive';
import { DataAffixDirective } from './data-affix.directive';
import { FileValueAccessorDirective } from './input-directives/file-input-validator/file-input-validator.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PipesModule
    ],
    declarations: [
        TileDirective,
        AccessDirective,
        TooltipDirective,
        LocalitySelectDirective,
        MailRecipientCollectorDirective,
        ExtendNg2SelectDirective,
        ControlMessagesComponent,
        DebounceTimerDirective,
        CurrencyFormatterDirective,
        InlineInputDirective,
        NumberFormatterDirective,
        DataAffixDirective,
        FileValueAccessorDirective
    ],
    exports: [
        TileDirective,
        AccessDirective,
        TooltipDirective,
        LocalitySelectDirective,
        MailRecipientCollectorDirective,
        ExtendNg2SelectDirective,
        ControlMessagesComponent,
        DebounceTimerDirective,
        CurrencyFormatterDirective,
        InlineInputDirective,
        NumberFormatterDirective,
        DataAffixDirective,
        FileValueAccessorDirective
    ],
    providers: [
        ValidationService,
        CurrencyPipe
    ]
})
export class DirectivesModule { }

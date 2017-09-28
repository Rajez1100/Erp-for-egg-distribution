import { Directive, ElementRef, AfterViewInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
declare var jQuery: any;
declare var moment: any;

@Directive({
    selector: '[appWeekPicker]'
})
export class WeekPickerDirective {
    element: HTMLElement;
    @Output() weekChanged: EventEmitter<any> = new EventEmitter();
    preVal: any;
    @Input() default: Date = new Date();

    constructor(el_ref: ElementRef) {
        this.element = el_ref.nativeElement;
    }

    ngAfterViewInit() {
        var self = this;

        var dp = jQuery(self.element).datepicker({
            format: 'dd-mm-yyyy',
            autoclose: true,
            todayBtn: "linked"

        }).on('changeDate', (e) => {         //Get the value of Start and End of Week
            var value = e.date;

            if (value.getDay() != 0 && moment(value).format("DD-MM-YYYY") != self.preVal) {
                self.preVal = moment(value).format("DD-MM-YYYY");

                var firstDate = moment(value).day(0);
                var lastDate = moment(value).day(6);

                setTimeout(() => {
                    self.weekChanged.emit([firstDate._d, lastDate._d]);

                    jQuery(self.element).datepicker("setDate", firstDate.format("DD-MM-YYYY"));
                    jQuery(self.element).val(firstDate.format("DD-MM-YYYY") + " - " + lastDate.format("DD-MM-YYYY"));

                }, 1)
            }

        }).on('show', (e) => { // Add css class for design on datepicker open
            jQuery('.datepicker').addClass('weekpicker');
        }).on('hide', (e) => { // Remove css class for design on datepicker close
            jQuery('.datepicker').removeClass('weekpicker');
        });



        // Show datepicker on icon click 
        jQuery(self.element).parent().find('.input-group-addon').on('click', () => {
            jQuery(self.element).datepicker('show');
        });

        // set default date
        if(this.default) jQuery(self.element).datepicker("setDate", this.default);

    }

    ngOnDestroy() {
        jQuery(this.element).datepicker('destroy');
    }
}

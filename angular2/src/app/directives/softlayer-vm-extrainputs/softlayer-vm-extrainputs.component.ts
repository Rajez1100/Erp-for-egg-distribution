import {Component, OnInit, OnChanges, SimpleChange, EventEmitter,Output} from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Input} from "@angular/core/src/metadata/directives";

@Component({
    selector: 'app-softlayer-vm-extra-inputs',
    templateUrl: './softlayer-vm-extrainputs.component.html',
    styleUrls: ['./softlayer-vm-extrainputs.component.scss']
})
export class SoftlayerVmExtrainputsComponent implements OnInit,OnChanges {
    public softlayer_extra_input_Form:FormGroup
    @Input() quantity:number=0;
    @Output() onForm_status = new EventEmitter<any>();
    @Input() datacenterOption:any
    @Input() keyPairList:any
    private quantity_length_arry = []
    constructor() { }

    ngOnInit() {
        this.softlayer_extra_input_Form.valueChanges.subscribe(data => {
            console.log(this.softlayer_extra_input_Form.valid)
            if(this.softlayer_extra_input_Form.valid){
                data={
                    formstatus:true,
                    formvalues:this.softlayer_extra_input_Form.value
                }
                this.onForm_status.emit(data);
            }
            else {
                data={
                    formstatus:false,
                    formvalues:this.softlayer_extra_input_Form.value
                }
                this.onForm_status.emit(data);
            }
        })
    }
    ngOnChanges(changes: {[propKey: string]: SimpleChange})
    {
        if(changes.hasOwnProperty('quantity')){
            let curretValue=changes['quantity'].currentValue;
            let previousValue=changes['quantity'].previousValue
            if(typeof changes['quantity'].previousValue=='object'){
                let group: any = {};
                let formgroup:any={}
                for(let index=0;index<curretValue;index++){
                    group['domain_'+index] = new FormControl('', [<any>Validators.required,Validators.pattern(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/)])
                    group['host_'+index]=new FormControl('', [<any>Validators.required,Validators.pattern(/^[0-9a-zA-Z]+$/)])
                }
                formgroup['domain_host_group']= new FormGroup(group)
                formgroup['datacenters']=new FormControl('', [<any>Validators.required])
                formgroup['keypairId']=new FormControl('', [<any>Validators.required])
                this.softlayer_extra_input_Form=new FormGroup(formgroup)
                this.quantity_length_arry = this.numberReturnLength(curretValue)
            }
            else {
                let group: any = {};
                if(curretValue>previousValue){
                    let domain_host_group=this.softlayer_extra_input_Form.controls['domain_host_group'].value
                    for (let index=0;index<previousValue;index++){
                        group['domain_'+index] = new FormControl(domain_host_group['domain_'+index], [<any>Validators.required,Validators.pattern(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/)])
                        group['host_'+index]=new FormControl(domain_host_group['host_'+index], [<any>Validators.required,Validators.pattern(/^[0-9a-zA-Z]+$/)])
                    }
                    let lastindexvalue=curretValue-1
                    group['domain_'+lastindexvalue] = new FormControl('', [<any>Validators.required,Validators.pattern(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/)])
                    group['host_'+lastindexvalue]=new FormControl('', [<any>Validators.required,Validators.pattern(/^[0-9a-zA-Z]+$/)])
                }
                else {
                    let domain_host_group=this.softlayer_extra_input_Form.controls['domain_host_group'].value
                    for (let index=0;index<previousValue-1;index++){
                        group['domain_'+index] = new FormControl(domain_host_group['domain_'+index], [<any>Validators.required,Validators.pattern(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/)])
                        group['host_'+index]=new FormControl(domain_host_group['host_'+index], [<any>Validators.required,Validators.pattern(/^[0-9a-zA-Z]+$/)])
                    }
                }
                this.softlayer_extra_input_Form.removeControl('domain_host_group');
                this.softlayer_extra_input_Form.addControl('domain_host_group',new FormGroup(group))
                let data={
                    formstatus:this.softlayer_extra_input_Form.valid,
                    formvalues:this.softlayer_extra_input_Form.value
                }
                this.onForm_status.emit(data);
                this.quantity_length_arry = this.numberReturnLength(curretValue)
            }
        }
    }
    private numberReturnLength(length){
        return new Array(length);
    }
}

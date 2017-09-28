import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthHttp } from "angular2-jwt";
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { baseURL } from 'app/parameters';
import { Router } from "@angular/router";
import { DatePipe } from '@angular/common';

export interface ng2TableConfig {
    screenName: string;
    fetchUrl: string;
    queryParams?: Object
    commonFilter?: {
        filterString: string;
        columnName: string;
        placeholder: string;
    };
    columns: Array<{
        title: string;
        name: string;
        sort?: boolean;
        edit?: boolean;
        type?: string;
        fraction?: number;
        filtering?: {
            inputType: string;
            filterString?: string;
            placeholder?: string;
            options?: Array<{ id: number; value: string; }>;
        }
    } | {
        title: string;
        links: Array<string>;
    }>;
    rows?: Array<any>;
    limit: number;
    addButtonInfo?: { text: string; url: string; };
};

@Component({
    selector: 'app-ng2-table',
    templateUrl: './ng2-table.component.html',
    styleUrls: ['./ng2-table.component.css'],
    providers: [DatePipe]
})
export class Ng2TableComponent implements OnInit {
    @Input() screenName: string;
    @Input() fetchUrl: string;
    queryParams: Object = {};
    @Input() addButtonInfo: any;
    @Input() commonFilter: any;
    @Input() limit: number;
    @Input('columns') columns: Array<any>;
    @Output() event = new EventEmitter();

    public page: number = 1;
    public rows: Array<Object> = [];
    public itemsPerPage: number = 5;
    public maxSize: number = 5;
    public length: number = 0;
    public totalRecords: number = 0;
    public columnFilter: Array<Object> = [];
    public isSearchEnabled: boolean = false;
    public displayCommonFilter: boolean = false;
    public imageColumns: Array<string> = [];
    public colourButtonColumns: Array<string> = [];
    public dateColumns: Array<Object> = [];
    public sortColumnName: string = '';
    public searchText: string = '';

    public config: any = {
        paging: true,
        itemsPerPage: 5,
        sorting: true,
        filtering: { filterString: '' },
        className: ['table-striped', 'table-hover', 'partner-list-screen', 'actions-list ']
    };

    private data: Array<any> = (this.rows) ? this.rows : [];

    private classNamesList: Object = {
        "View": { name: "View", iconClass: "fa fa-text-view", mainClass: "btn-info" },
        "Edit": { name: "Edit", iconClass: "fa fa-text-edit", mainClass: "btn-warning" },
        "Delete": { name: "Delete", iconClass: "fa fa-text-delete", mainClass: "btn-danger" }
    }

    public constructor(private http: AuthHttp, private router: Router, private datePipe: DatePipe) {

    }

    public ngOnInit(): void {
        if (this.commonFilter && this.commonFilter.columnName) {
            this.displayCommonFilter = true;
            this.config.filtering = this.commonFilter;
        }
        this.setColumnDetails();
        this.config.sorting = { columns: this.columns };
        this.fetchRecords(0, this.limit);
    }

    setColumnDetails(): void {
        this.colourButtonColumns = [];
        this.imageColumns = [];
        this.dateColumns = [];
        this.columns.forEach((column: any) => {
            if (column.isColourButton) {
                this.colourButtonColumns.push(column.name);
            }
            if (column.isImage) {
                this.imageColumns.push(column.name);
            }
            if (column.dateFormat) {
                this.dateColumns.push({ name: column.name, format: column.dateFormat });
            }

            let field = column.name;
            if (field) {
                column.className = field.replace(/\./g, '_') + '_header';
            } else {
                column.className = 'actions_header';
                let links = column.links;
                if (links.length) {
                    let linkToReplace = []
                    links.forEach((link: any) => {
                        if (typeof link == 'string') {
                            if (this.classNamesList.hasOwnProperty(link)) {
                                linkToReplace.push(this.classNamesList[link])
                            } else {
                                linkToReplace.push({ name: link, iconClass: "", mainClass: "" })
                            }
                        } else {
                            linkToReplace.push(link);
                        }
                    });
                    column.links = linkToReplace;
                }
            }
        });
    }

    @Input('queryParams')
    set _queryParams(params: any) {
        if (params) this.queryParams = params;
        else this.queryParams = {};

        this.fetchRecords(0, this.limit);
    }

    currentRequest: any = false;
    fetchRecords(offset: number, end: number): void {
        if (this.fetchUrl == '') {
            //Todo: this is for developers
            alert('Please specify the fetchUrl value');
        }

        // To cancel the previous request
        if (this.currentRequest) {
            this.currentRequest.unsubscribe();
        }

        let url = this.constructURL(offset, end);
        this.currentRequest = this.http
            .get(url)
            .map(Response => {
                this.setPaginationDetails(Response.json());
            })
            .catch(this.handleError).subscribe();
    }

    constructURL(offset: number, end: number): string {
        let url = this.fetchUrl + '?offset=' + offset + '&end=' + end;

        Object.keys(this.queryParams).forEach(property => {
            url += `&${encodeURIComponent(property)}=${encodeURIComponent(this.queryParams[property])}`;
        });

        if (this.columnFilter.length) {
            this.columnFilter.forEach((column: any) => {
                url += '&' + encodeURIComponent(column.name) + '=' + encodeURIComponent(column.value);
            });
        }
        if (this.sortColumnName != '') {
            url += '&order_by=' + encodeURIComponent(this.sortColumnName);
        }
        if (this.searchText != '') {
            url += '&search_text=' + encodeURIComponent(this.searchText);
        }
        return url;
    }

    setPaginationDetails(data: any): void {
        let records = this.processRecords(data.records);
        console.log('table data loaded');
        this.rows = records;
        this.totalRecords = data.totalRecords;
    }

    processRecords(records: Array<Object>): Array<Object> {
        var selfData = this;
        records.forEach((record: any) => {
            //To handle the image columns
            if (selfData.imageColumns && selfData.imageColumns.length) {
                record = selfData.setImageData(record, selfData.imageColumns);
            }

            //To handle the colour buttons has boolean values
            if (selfData.colourButtonColumns && selfData.colourButtonColumns.length) {
                record = selfData.setColourButtonData(record, selfData.colourButtonColumns);
            }

            //To handle the date values
            if (selfData.dateColumns && selfData.dateColumns.length) {
                record = selfData.setDateFieldValue(record, selfData.dateColumns);
            }

        });
        return records;
    }

    setImageData(record: any, imageColumns: Array<Object>): any {
        imageColumns.forEach((columnName: any) => {
            if (record[columnName] && record[columnName] != '') {
                record[columnName] = '<img style="max-height: 30px;" src="' + baseURL + 'uploads/' + record[columnName] + '" />';
            }
        });
        return record;
    }

    setDateFieldValue(record: any, dateColumns: Array<Object>): any {
        dateColumns.forEach((column: any) => {
            let columnName = column.name;
            if (record[columnName] && record[columnName] != '') {
                let format = column.dateFormat;
                if (!format) {
                    format = 'yMMMd';
                }
                record[columnName] = this.datePipe.transform(record[columnName], format);
            }
        });
        return record;
    }

    setColourButtonData(record: any, colourButtonColumns: Array<Object>): any {
        colourButtonColumns.forEach((columnName: any) => {
            if (record[columnName]) {
                record[columnName] = '<div class="btn btn-success partner-status">Yes</div>';
            } else {
                record[columnName] = '<div class="btn btn-danger partner-status">No</div>';
            }
        });
        return record;
    }

    public changePage(page: any, data: Array<any> = this.data): void {
        let start = (page.page - 1) * parseInt(page.itemsPerPage);
        let end = start + parseInt(page.itemsPerPage);
        this.fetchRecords(start, end);
    }

    public changeSort(data: any, config: any): any {
        
        if (!config.sorting) {
            return data;
        }

        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (['', false, undefined, true].indexOf(columns[i].sort) < 0) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        if (columnName) {
            let sign = '';
            if (sort == 'desc') {
                sign = '-';
            }
            this.sortColumnName = sign + columnName;
        } else {
            this.sortColumnName = '';
        }
        console.log(columnName + '-' + sort);
    }

    public changeFilter(data: any, config: any): any {
        this.columnFilter = [];
        this.isSearchEnabled = false;
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                let searchText = column.filtering.filterString;
                this.columnFilter.push({ 'name': column.name, 'value': searchText });
                if (searchText != '') {
                    this.isSearchEnabled = true;
                }
            }
        });
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }, type: string): any {
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        if (type == 'column') {
            let filteredData = this.changeFilter(this.data, this.config);
            let sortedData = this.changeSort(filteredData, this.config);
            this.page = 1;
            this.fetchRecords(0, this.limit);
        }

        if (type == 'page') {
            this.changePage(page, []);
        }

        if (type == 'topSearch') {
            console.log(this.searchText);
            this.fetchRecords(0, this.limit);
        }
    }

    public onCellClick(data: any): any {
        console.log(data);
    }

    linkClicked(data: any): any {
        this.event.emit({
            data: data
        });
    }

    public changeLimit(): void {
        console.log('Limit:' + this.limit);
        this.itemsPerPage = this.limit;
        this.page = 0;
        this.fetchRecords(0, this.itemsPerPage);
    }

    public navigateToAddScreen(): void {
        console.log('Redirecting to ' + this.addButtonInfo.url);
        this.router.navigate([this.addButtonInfo.url]);
    }

    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
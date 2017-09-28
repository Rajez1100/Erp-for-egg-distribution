export class SalesReportSummary {
    purchased_plates: number = 0;
    sold_plates: number = 0;
    damaged_plates: number = 0.0;
    unsold_plates: number = 0;
    transfer_out_plates: number = 0;
    transfer_in_plates: number = 0;
    cost_purchased: number = 0.0;
    cost_damaged: number = 0.0;
    cost_unsold: number = 0.0;
    cost_sales: number = 0.0;
    cost_transfer_out: number = 0.0;
    cost_transfer_in: number = 0.0;
    cost_collected: number = 0.0;
    cost_outstanding: number = 0.0;
    cost_profit: number = 0.0;


    constructor(data?: Object) {

        if (data) {
            this.purchased_plates = data["purchased_plates"] || this.purchased_plates;
            this.sold_plates = data["sold_plates"] || this.sold_plates;
            this.damaged_plates = data["damaged_plates"] || this.damaged_plates;
            this.unsold_plates = data["unsold_plates"] || this.unsold_plates;
            this.transfer_out_plates = data["transfer_out_plates"] || this.transfer_out_plates;
            this.transfer_in_plates = data["transfer_in_plates"] || this.transfer_in_plates;
            this.cost_purchased = data["cost_purchased"] || this.cost_purchased;
            this.cost_damaged = data["cost_damaged"] || this.cost_damaged;
            this.cost_unsold = data["cost_unsold"] || this.cost_unsold;
            this.cost_sales = data["cost_sales"] || this.cost_sales;
            this.cost_collected = data["cost_collected"] || this.cost_collected;
            this.cost_outstanding = data["cost_outstanding"] || this.cost_outstanding;
            this.cost_profit = data["cost_profit"] || this.cost_profit;
            this.cost_transfer_out = data["cost_transfer_out"] || this.cost_transfer_out;
            this.cost_transfer_in = data["cost_transfer_in"] || this.cost_transfer_in;
        }
    }
}

export class PaymentsReportFarmwiseItem {
    farm: number | '' = '';
    farm__name: string = '';
    collection_plates: number = 0;
    cost_collection__sum: number = 0;
    cost_payment__sum: number = 0;

    constructor(data?: Object) {
        if (data) {
            this.farm = data['farm'] || this.farm;
            this.farm__name = data['farm__name'] || this.farm__name;
            this.collection_plates = data['collection_plates'] || this.collection_plates;
            this.cost_collection__sum = data['cost_collection__sum'] || this.cost_collection__sum;
            this.cost_payment__sum = data['cost_payment__sum'] || this.cost_payment__sum;
        }
    }
}

export class PaymentsReportSummary {
    summary: {
        plates_collection__sum: number;
        cost_collection__sum: number;
        cost_payment__sum: number;
        cost_balance__sum: number;
    } = {
        plates_collection__sum: 0,
        cost_collection__sum: 0,
        cost_payment__sum: 0,
        cost_balance__sum: 0
    }

    farm_wise_summary: PaymentsReportFarmwiseItem[] = [];

    constructor(data?: Object) {
        if (data) {
            this.summary.plates_collection__sum = data['summary']['plates_collection__sum'] || this.summary.plates_collection__sum;
            this.summary.cost_collection__sum = data['summary']['cost_collection__sum'] || this.summary.cost_collection__sum;
            this.summary.cost_payment__sum = data['summary']['cost_payment__sum'] || this.summary.cost_payment__sum;
            this.summary.cost_balance__sum = data['summary']['cost_balance__sum'] || this.summary.cost_balance__sum;

            if (data['farm_wise_summary'] instanceof Array)
                this.farm_wise_summary = data['farm_wise_summary'].map(i => new PaymentsReportFarmwiseItem(i));
        }
    }
}

export class DailyReportSummary {
    summary: SalesReportSummary;
    sales_team_wise_summary: SalesReportSummary[] = [];

    constructor(data?: Object) {
        if (data) {
            this.summary = new SalesReportSummary(data['summary']);

            if (data['sales_team_wise_summary'] instanceof Array)
                this.sales_team_wise_summary = data['sales_team_wise_summary'].map(s => new SalesReportSummary(s));
        }
    }
}
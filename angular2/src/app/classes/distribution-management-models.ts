export class EggFarm {
    id: number | '' = '';
    name: string = '';
    description: string = '';
    address: string = '';
    logo: URL | '' = '';
    created_at: Date | '' = '';
    created_by: number | '' = '';
    modified_at: Date | '' = '';
    modified_by: number | '' = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.name = data['name'] || this.name;
            this.description = data['description'] || this.description;
            this.address = data['address'] || this.address;
            this.logo = data['logo'] || this.logo;
            this.created_at = data['created_at'] || this.created_at;
            this.created_by = data['created_by'] || this.created_by;
            this.modified_at = data['modified_at'] || this.modified_at;
            this.modified_by = data['modified_by'] || this.modified_by;
        }
    }
}


export class SalesTeam {
    id: number | '' = '';
    name: string = '';
    description: string = '';
    created_at: Date | '' = '';
    created_by: number | '' = '';
    modified_at: Date | '' = '';
    modified_by: number | '' = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.name = data['name'] || this.name;
            this.description = data['description'] || this.description;
            this.created_at = data['created_at'] || this.created_at;
            this.created_by = data['created_by'] || this.created_by;
            this.modified_at = data['modified_at'] || this.modified_at;
            this.modified_by = data['modified_by'] || this.modified_by;
        }
    }

}

export class EggCollection {
    id: number | '' = '';
    date: Date = new Date();
    farm: number | '' = '';
    farm_name: string = '';
    rate: number | '' = '';
    sales_team: number | '' = '';
    sales_team_name: string = '';
    no_of_plates: number| '' = '';
    created_at: Date | '' = '';
    created_by: number | '' = '';
    modified_at: Date | '' = '';
    modified_by: number | '' = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.date = data['date'] || this.date;
            this.farm = data['farm'] || this.farm;
            this.farm_name = data['farm_name'] || this.farm_name;
            this.rate = data['rate'] || this.rate;
            this.sales_team = data['sales_team'] || this.sales_team;
            this.sales_team_name = data['sales_team_name'] || this.sales_team_name;
            this.no_of_plates = data['no_of_plates'] || this.no_of_plates;
            this.created_at = data['created_at'] || this.created_at;
            this.created_by = data['created_by'] || this.created_by;
            this.modified_at = data['modified_at'] || this.modified_at;
            this.modified_by = data['modified_by'] || this.modified_by;
        }
    }
}

export class DemandTransfer {
    id: number | '' = '';
    date: Date = new Date();
    transfer_from: number | '' = '';
    transfer_from_name: string = '';
    transfer_to: number | '' = '';
    transfer_to_name: string = '';
    no_of_plates: number | '' = '';
    created_at: Date | '' = '';
    created_by: number | '' = '';
    modified_at: Date | '' = '';
    modified_by: number | '' = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.date = data['date'] || this.date;
            this.transfer_from = data['transfer_from'] || this.transfer_from;
            this.transfer_from_name = data['transfer_from_name'] || this.transfer_from_name;
            this.transfer_to = data['transfer_to'] || this.transfer_to;
            this.transfer_to_name = data['transfer_to_name'] || this.transfer_to_name;
            this.no_of_plates = data['no_of_plates'] || this.no_of_plates;
            this.created_at = data['created_at'] || this.created_at;
            this.created_by = data['created_by'] || this.created_by;
            this.modified_at = data['modified_at'] || this.modified_at;
            this.modified_by = data['modified_by'] || this.modified_by;
        }
    }

}

export class Payment {
    id: number | '' = '';
    date: Date = new Date();
    farm: number | '' = '';
    farm_name: string = '';
    amount: number | '' = '';
    created_at: Date | '' = '';
    created_by: number | '' = '';
    modified_at: Date | '' = '';
    modified_by: number | '' = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.date = data['date'] || this.date;
            this.farm = data['farm'] || this.farm;
            this.farm_name = data['farm_name'] || this.farm_name;
            this.amount = data['amount'] || this.amount;
            this.created_at = data['created_at'] || this.created_at;
            this.created_by = data['created_by'] || this.created_by;
            this.modified_at = data['modified_at'] || this.modified_at;
            this.modified_by = data['modified_by'] || this.modified_by;

        }
    }
}

export class SalesSummary {
    id: number | '' = '';
    date: Date = new Date();
    sales_team: number | '' = '';
    sales_team_name: string = '';
    damaged_plates: number | '' = '';
    rates: SalesSummaryItem[] = [];
    total_plates: number | '' = '';
    total_cost: number | '' = '';
    cash_handovered: number | '' = '';
    total_outstanding: number | '' = '';
    created_at: Date | '' = '';
    created_by: number | '' = '';
    modified_at: Date | '' = '';
    modified_by: number | '' = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.date = data['date'] || this.date;
            this.sales_team = data['sales_team'] || this.sales_team;
            this.sales_team_name = data['sales_team_name'] || this.sales_team_name;
            this.damaged_plates = data['damaged_plates'] || this.damaged_plates;
            this.total_plates = data['total_plates'] || this.total_plates;
            this.total_cost = data['total_cost'] || this.total_cost;
            this.cash_handovered = data['cash_handovered'] || this.cash_handovered;
            this.total_outstanding = data['total_outstanding'] || this.total_outstanding;
            this.created_at = data['created_at'] || this.created_at;
            this.created_by = data['created_by'] || this.created_by;
            this.modified_at = data['modified_at'] || this.modified_at;
            this.modified_by = data['modified_by'] || this.modified_by;

            if (data['rates'] instanceof Array) this.rates = data['rates'].map(r => new SalesSummaryItem(r));
        }
    }
}

export class SalesSummaryItem {
    id: number | '' = '';
    date: Date = new Date();
    summary: number | '' = '';
    rate: number | '' = '';
    no_of_plates: number | '' = '';
    cost: number = 0;
    created_at: Date | '' = '';
    created_by: number | '' = '';
    modified_at: Date | '' = '';
    modified_by: number | '' = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.date = data['date'] || this.date;
            this.summary = data['summary'] || this.summary;
            this.rate = data['rate'] || this.rate;
            this.no_of_plates = data['no_of_plates'] || this.no_of_plates;
            this.cost = data['cost'] || this.cost;
            this.created_at = data['created_at'] || this.created_at;
            this.created_by = data['created_by'] || this.created_by;
            this.modified_at = data['modified_at'] || this.modified_at;
            this.modified_by = data['modified_by'] || this.modified_by;

        }
    }
}

export class EggCollectionFormData {
    farms: SelectOption[] = [];
    sales_teams: SelectOption[] = [];

    constructor(data?: Object) {
        if (data) {
            if (data['sales_teams'] instanceof Array) this.sales_teams = data['sales_teams'].map(st => new SelectOption(st));
            if (data['farms'] instanceof Array) this.farms = data['farms'].map(f => new SelectOption(f));
        }
    }
}

export class DemandTransferFormData {
    sales_teams: SelectOption[] = [];

    constructor(data?: Object) {
        if (data) {
            if (data['sales_teams'] instanceof Array) this.sales_teams = data['sales_teams'].map(st => new SelectOption(st));
        }
    }
}

export class PaymentFormData {
    farms: SelectOption[] = [];

    constructor(data?: Object) {
        if (data) {
            if (data['farms'] instanceof Array) this.farms = data['farms'].map(f => new SelectOption(f));
        }
    }
}

export class SalesSummaryFormData {
    sales_teams: SelectOption[] = [];

    constructor(data?: Object) {
        if (data) {
            if (data['sales_teams'] instanceof Array) this.sales_teams = data['sales_teams'].map(st => new SelectOption(st));
        }
    }
}

export class SelectOption {
    id: number | '' = '';
    text: string = '';

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || this.id;
            this.text = data['text'] || this.text;
        }
    }
}
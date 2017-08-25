export class User {
    public id: number;
    public username: string;
    public email: string;
    public user_type: string;
    public firstName: string;
    public lastName: string;
    public address_line1: string;
    public address_line2: string;
    public city: string;
    public state: any;
    public pin_code: any;
    public description: any;
    public role_id: any;
    public permissions: any;

    constructor(data?: Object) {
        if (data) {
            this.id = data['id'] || '';
            this.username = data['username'] || '';
            this.email = data['email'] || '';
            this.user_type = data['user_type'] || '';
            this.firstName = data['firstName'] || '';
            this.lastName = data['lastName'] || '';
            this.address_line1 = data['address_line1'] || '';
            this.address_line2 = data['address_line2'] || '';
            this.city = data['city'] || '';
            this.state = data['state'] || '';
            this.pin_code = data['pin_code'] || '';
            this.description = data['description'] || '';
            this.role_id = data['role_id'] || '';
            this.permissions = data['permissions'] || [];
        }
    }
}

export class UserType {
    id: number;
    text: string;
}

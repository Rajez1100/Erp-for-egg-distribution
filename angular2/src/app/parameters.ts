// Configurations
export const baseURL = "http://velan:8000/";

export const CompanyName: Array<string> = ['VVG', 'Vijaya Velan Eggs'];

export const currencySymbols = {
    'INR': '₹',
    'USD': '$'
}

// get ApiURL
export function GetApiurl(path: string) {
    return baseURL + path;
}

export const monthNames: Array<string> = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];

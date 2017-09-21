import { baseURL } from 'app/parameters';

// get ApiURL
export function GetApiurl(path: string, queryParams?: Object) {

    let url: string = baseURL + path;

    if (queryParams) {
        url += '?';

        Object.keys(queryParams).forEach(property => {
            url += `${encodeURIComponent(property)}=${encodeURIComponent(queryParams[property])}&`;
        });
    }

    return url;
}
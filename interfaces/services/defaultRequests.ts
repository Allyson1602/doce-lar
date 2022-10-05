import { AxiosResponse } from "axios";

export interface DefaultRequests {
    get: <T>(url: string, queryParams?: object) => Promise<AxiosResponse<T>>;

    post: <T>(url: string, body: object, queryParams?: object) => Promise<AxiosResponse<T>>;

    put: <T>(url: string, body: object, queryParams?: object) => Promise<AxiosResponse<T>>;

    patch: <T>(url: string, body: object, queryParams?: object) => Promise<AxiosResponse<T>>;

    delete: (url: string, id:number) => Promise<boolean>;
}

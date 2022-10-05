import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { DefaultRequests as IDefaultRequests } from "../interfaces/services/defaultRequests";

const initializeAxios = (config: AxiosRequestConfig): AxiosInstance => {
    const axiosInstance = axios.create(config);

    /*
        Add default headers, interceptors etc..
    */

    return axiosInstance;
};

const axiosRequestConfiguration: AxiosRequestConfig = {
    baseURL: 'http://demo0852532.mockable.io/',
    responseType: 'json',
    headers: {
        'Content-Type': 'application/json; charset=utf-8',
    },
    timeout: 30000
};

const axiosInstance = initializeAxios(axiosRequestConfiguration);

class DefaultRequests implements IDefaultRequests {
    
    get = <T>(url: string, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.get<T>(url, { params: queryParams });
    }

    post =<T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.post<T>(url, body, { params: queryParams });
    }

    put = <T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.put<T>(url, body, { params: queryParams });
    }

    patch = <T>(url: string, body: object, queryParams?: object): Promise<AxiosResponse<T>> => {
        return axiosInstance.patch<T>(url, body, { params: queryParams });
    }

    delete = (url: string, id: number): Promise<boolean> => {
        return axiosInstance.delete(`${url}/${id}` );
    }
}

export default DefaultRequests;

import { AxiosResponse } from "axios";
import { DataFeatures } from "./features";

export interface DataRentals {
    id: number;
    images: string[],
    features: DataFeatures,
    price: number,
    size: number
}

export interface RentalService {
    getRentals: () => Promise<AxiosResponse<DataRentals[]>>;
}
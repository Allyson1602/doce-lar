import { AxiosResponse } from "axios";
import { DataRentals, LengthPages, RentalService } from "../interfaces/rentals";
import DefaultRequests from "./configs";

class Rental extends DefaultRequests implements RentalService {
    getRentals = (): Promise<AxiosResponse<DataRentals[]>> => {
        return this.get<DataRentals[]>("rentals");
    };
    
    getRentalLengthPages = (): Promise<AxiosResponse<LengthPages>> => {
        return this.get<LengthPages>("rentals/pages");
    };
}

export default Rental;

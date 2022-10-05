import { AxiosResponse } from "axios";
import { DataRentals, RentalService } from "../interfaces/rentals";
import DefaultRequests from "./configs";

class Rental extends DefaultRequests implements RentalService {
    getRentals = (): Promise<AxiosResponse<DataRentals[]>> => {
        return this.get<DataRentals[]>("rentals");
    };
}

export default Rental;
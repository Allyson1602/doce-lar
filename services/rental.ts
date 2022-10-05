import { DataRentals, RentalService } from "../interfaces/rentals";

class Rental implements RentalService {
    getRentals = (): Promise<DataRentals[]> => {
        return new Promise((resolve, reject) => {
            resolve([]);
        });
    };
}

export default Rental;
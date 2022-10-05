export interface DataRentals {
    
}

export interface RentalService {
    getRentals: () => Promise<DataRentals[]>;
}
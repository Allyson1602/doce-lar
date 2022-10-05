export interface DataRentals {
    id: number;
}

export interface RentalService {
    getRentals: () => Promise<DataRentals[]>;
}
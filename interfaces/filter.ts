export interface DataFilter {
    animals: boolean;
    kids: boolean;
    garage: boolean;
    furnished: boolean;
    barbecue: boolean;
    swimmingPool: boolean;
    porch: boolean;
    garden: boolean;
    airconditioning: boolean;
    internet: boolean;
    security: boolean;
    bathrooms: number | null;
    floorImmobile: number | null;
    vacancyCar: number | null;
    people: number | null;
    rooms: number | null;
    minimumArea: number | null;
    maximumArea: number | null;
    minimumValue: number | null;
    maximumValue: number | null;
    advertiserName: string;
    immobileType: string;
}

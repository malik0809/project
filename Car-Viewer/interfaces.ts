export interface Car {
    id: number;
    name: string;
    description: string;
    price: number;
    available: boolean;
    releaseDate: string;
    imageUrl: string;
    category: string;
    features: string[];
    dealerId: number;
}

export interface Dealership {
    id: number;
    name: string;
    location: string;
    contact: string;
    website: string;
}

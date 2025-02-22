export interface Part {
  id: string;
  name: string;
  category: string;
  model: string;
  price: number;
  availability: number;
  supplier: string;
  location: string;
  deliveryTime: string;
  isLocal: boolean;
  vinRequired?: boolean;
  engineType?: string;
  transmissionType?: string;
  trimLevel?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'repair_shop' | 'dealership' | 'customer';
}

export interface SearchFilters {
  category?: string;
  priceRange?: { min: number; max: number };
  location?: string;
  supplier?: string;
}

export interface Vehicle {
  make: string;
  model: string;
  year: number;
  series?: string;
  vinRequired: boolean;
  engineType?: string;
  transmissionType?: string;
  trimLevel?: string;
}

export interface VehicleSelection {
  make?: string;
  model?: string;
  year?: number;
  series?: string;
  vin?: string;
  engineType?: string;
  transmissionType?: string;
  trimLevel?: string;
}

export interface VehicleModel {
  name: string;
  years: number[];
  engineTypes?: string[];
  transmissionTypes?: string[];
  trimLevels?: string[];
}
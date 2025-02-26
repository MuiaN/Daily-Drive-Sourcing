import { Part, User, VehicleModel } from '../types';

export const vehicleModels: { [key: string]: VehicleModel[] } = {
  'Toyota': [
    { name: 'Corolla', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Camry', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'RAV4', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Land Cruiser', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Prado', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Hilux', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Hiace', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Fortuner', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'BMW': [
    { name: '3 Series', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: '5 Series', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'X3', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'X5', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Mercedes-Benz': [
    { name: 'C-Class', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'E-Class', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'GLC', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'GLE', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ]
};

// Vehicle images mapping
export const vehicleImages = {
  'BMW 3 Series 2019': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2070&q=80',
  'Mercedes-Benz C-Class 2021': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2070&q=80',
  'Toyota Land Cruiser 2020': 'https://images.unsplash.com/photo-1594505106762-4f7db2a005c1?auto=format&fit=crop&w=2070&q=80'
};

// Parts data with images and additional details
const bmw3SeriesParts: Part[] = [
  {
    id: 'bmw-1',
    name: 'Oil Filter Kit',
    category: 'Engine',
    model: 'BMW 3 Series 2019',
    price: 4500,
    availability: 15,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (B48)',
    engineNumber: 'B48B20B',
    partNumber: 'BMW-11428507683',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'bmw-2',
    name: 'Brake Pad Set - Front',
    category: 'Brakes',
    model: 'BMW 3 Series 2019',
    price: 18500,
    availability: 8,
    supplier: 'Euro Car Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (B48)',
    engineNumber: 'B48B20B',
    partNumber: 'BMW-34116873093',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line',
    image: 'https://images.unsplash.com/photo-1600191763437-4b7f2cae081c?auto=format&fit=crop&w=800&q=80'
  }
];

const mercedesCClassParts: Part[] = [
  {
    id: 'mb-1',
    name: 'Air Suspension Compressor',
    category: 'Suspension',
    model: 'Mercedes-Benz C-Class 2021',
    price: 85000,
    availability: 3,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: false,
    engineType: '2.0L 4-cylinder (M254)',
    engineNumber: 'M254E20',
    partNumber: 'MB-A2780160101',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mb-2',
    name: 'LED Headlight Assembly',
    category: 'Lighting',
    model: 'Mercedes-Benz C-Class 2021',
    price: 125000,
    availability: 2,
    supplier: 'Euro Car Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '3-4 days',
    isLocal: false,
    engineType: '2.0L 4-cylinder (M254)',
    engineNumber: 'M254E20',
    partNumber: 'MB-A2059063403',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line',
    image: 'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=800&q=80'
  }
];

const toyotaLandCruiserParts: Part[] = [
  {
    id: 'toyota-1',
    name: 'Diesel Fuel Filter Kit',
    category: 'Fuel System',
    model: 'Toyota Land Cruiser 2020',
    price: 15000,
    availability: 20,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    engineNumber: '1VD0269652',
    partNumber: 'TOY-23390-51070',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'toyota-2',
    name: 'Front Shock Absorber Set',
    category: 'Suspension',
    model: 'Toyota Land Cruiser 2020',
    price: 85000,
    availability: 6,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    engineNumber: '1VD0269652',
    partNumber: 'TOY-48510-69725',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX',
    image: 'https://images.unsplash.com/photo-1582058486053-ae0665624031?auto=format&fit=crop&w=800&q=80'
  }
];

export const mockParts: Part[] = [
  ...bmw3SeriesParts,
  ...mercedesCClassParts,
  ...toyotaLandCruiserParts
];

export const categories = [
  'Brakes',
  'Engine',
  'Electrical',
  'Suspension',
  'Transmission',
  'Steering',
  'Body Parts',
  'Air Conditioning',
  'Exhaust',
  'Fuel System',
  'Interior',
  'Lighting'
];

export const suppliers = [
  'AutoPro Parts',
  'German Auto Spares',
  'Japan Auto Parts',
  'Euro Car Parts'
];

export const locations = [
  'Nairobi, Kenya',
  'Mombasa, Kenya',
  'Kisumu, Kenya',
  'Nakuru, Kenya',
  'Eldoret, Kenya'
];
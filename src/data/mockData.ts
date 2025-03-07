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
  ],
  'Volkswagen': [
    { name: 'Golf', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Passat', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Tiguan', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Nissan': [
    { name: 'X-Trail', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Qashqai', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Navara', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Honda': [
    { name: 'CR-V', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Civic', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Accord', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ]
};

// Vehicle images mapping
export const vehicleImages = {
  'BMW 3 Series 2019': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2070&q=80',
  'Mercedes-Benz C-Class 2021': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2070&q=80',
  'Toyota Land Cruiser 2020': 'https://images.unsplash.com/photo-1594505106762-4f7db2a005c1?auto=format&fit=crop&w=2070&q=80',
  'Volkswagen Golf 2020': 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=2070&q=80',
  'Nissan X-Trail 2022': 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=2070&q=80',
  'Honda CR-V 2021': 'https://images.unsplash.com/photo-1605893477799-b99e3b8b93fe?auto=format&fit=crop&w=2070&q=80'
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
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80',
    vin: 'WBAJB1C51KB375143'
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
    image: 'https://images.unsplash.com/photo-1600191763437-4b7f2cae081c?auto=format&fit=crop&w=800&q=80',
    vin: 'WBAJB1C51KB375143'
  },
  {
    id: 'bmw-3',
    name: 'Air Filter Element',
    category: 'Engine',
    model: 'BMW 3 Series 2019',
    price: 6800,
    availability: 12,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (B48)',
    engineNumber: 'B48B20B',
    partNumber: 'BMW-13718577320',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line',
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609e6d9d5?auto=format&fit=crop&w=800&q=80',
    vin: 'WBAJB1C51KB375143'
  },
  {
    id: 'bmw-4',
    name: 'Spark Plug Set',
    category: 'Ignition',
    model: 'BMW 3 Series 2019',
    price: 12000,
    availability: 20,
    supplier: 'Euro Car Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (B48)',
    engineNumber: 'B48B20B',
    partNumber: 'BMW-12120037244',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line',
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609e6d9d5?auto=format&fit=crop&w=800&q=80',
    vin: 'WBAJB1C51KB375143'
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
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80',
    vin: 'WDD2130421A123456'
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
    image: 'https://images.unsplash.com/photo-1600661653561-629509216228?auto=format&fit=crop&w=800&q=80',
    vin: 'WDD2130421A123456'
  },
  {
    id: 'mb-3',
    name: 'Brake Disc Set - Rear',
    category: 'Brakes',
    model: 'Mercedes-Benz C-Class 2021',
    price: 45000,
    availability: 6,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (M254)',
    engineNumber: 'M254E20',
    partNumber: 'MB-A0004231512',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line',
    image: 'https://images.unsplash.com/photo-1600191763437-4b7f2cae081c?auto=format&fit=crop&w=800&q=80',
    vin: 'WDD2130421A123456'
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
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80',
    vin: 'JT3HN86R0Y0269652'
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
    image: 'https://images.unsplash.com/photo-1582058486053-ae0665624031?auto=format&fit=crop&w=800&q=80',
    vin: 'JT3HN86R0Y0269652'
  },
  {
    id: 'toyota-3',
    name: 'Timing Belt Kit',
    category: 'Engine',
    model: 'Toyota Land Cruiser 2020',
    price: 45000,
    availability: 4,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    engineNumber: '1VD0269652',
    partNumber: 'TOY-13568-69095',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX',
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609e6d9d5?auto=format&fit=crop&w=800&q=80',
    vin: 'JT3HN86R0Y0269652'
  }
];

const volkswagenGolfParts: Part[] = [
  {
    id: 'vw-1',
    name: 'DSG Transmission Oil Kit',
    category: 'Transmission',
    model: 'Volkswagen Golf 2020',
    price: 22000,
    availability: 8,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (EA888)',
    engineNumber: 'EA888Gen3B',
    partNumber: 'VW-02E305051C',
    transmissionType: 'DSG 7-Speed',
    trimLevel: 'R-Line',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80',
    vin: 'WVWZZZ1KZAW123456'
  },
  {
    id: 'vw-2',
    name: 'Turbocharger Assembly',
    category: 'Engine',
    model: 'Volkswagen Golf 2020',
    price: 120000,
    availability: 2,
    supplier: 'Euro Car Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '3-4 days',
    isLocal: false,
    engineType: '2.0L 4-cylinder (EA888)',
    engineNumber: 'EA888Gen3B',
    partNumber: 'VW-06K145722H',
    transmissionType: 'DSG 7-Speed',
    trimLevel: 'R-Line',
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609e6d9d5?auto=format&fit=crop&w=800&q=80',
    vin: 'WVWZZZ1KZAW123456'
  }
];

const nissanXTrailParts: Part[] = [
  {
    id: 'nissan-1',
    name: 'CVT Transmission Fluid Kit',
    category: 'Transmission',
    model: 'Nissan X-Trail 2022',
    price: 18000,
    availability: 10,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    engineNumber: 'QR25DE123456',
    partNumber: 'NIS-KE90899932',
    transmissionType: 'CVT',
    trimLevel: 'Tekna',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80',
    vin: 'JN1TBNT32U0123456'
  },
  {
    id: 'nissan-2',
    name: 'Oxygen Sensor',
    category: 'Electrical',
    model: 'Nissan X-Trail 2022',
    price: 12500,
    availability: 15,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    engineNumber: 'QR25DE123456',
    partNumber: 'NIS-226A0-4BA0A',
    transmissionType: 'CVT',
    trimLevel: 'Tekna',
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609e6d9d5?auto=format&fit=crop&w=800&q=80',
    vin: 'JN1TBNT32U0123456'
  }
];

const hondaCRVParts: Part[] = [
  {
    id: 'honda-1',
    name: 'Cabin Air Filter',
    category: 'Air Conditioning',
    model: 'Honda CR-V 2021',
    price: 3500,
    availability: 25,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    engineNumber: 'L15BE123456',
    partNumber: 'HON-80292-SDA-A01',
    transmissionType: 'CVT',
    trimLevel: 'EX-L',
    image: 'https://images.unsplash.com/photo-1635784063388-1ff609e6d9d5?auto=format&fit=crop&w=800&q=80',
    vin: 'JHMGK5H59MC123456'
  },
  {
    id: 'honda-2',
    name: 'Brake Master Cylinder',
    category: 'Brakes',
    model: 'Honda CR-V 2021',
    price: 28000,
    availability: 4,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    engineNumber: 'L15BE123456',
    partNumber: 'HON-46100-THR-A02',
    transmissionType: 'CVT',
    trimLevel: 'EX-L',
    image: 'https://images.unsplash.com/photo-1600191763437-4b7f2cae081c?auto=format&fit=crop&w=800&q=80',
    vin: 'JHMGK5H59MC123456'
  }
];

export const mockParts: Part[] = [
  ...bmw3SeriesParts,
  ...mercedesCClassParts,
  ...toyotaLandCruiserParts,
  ...volkswagenGolfParts,
  ...nissanXTrailParts,
  ...hondaCRVParts
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
  'Lighting',
  'Ignition'
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
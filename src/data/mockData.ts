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
  'Honda': [
    { name: 'CR-V', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Fit', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Civic', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Accord', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'HR-V', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Nissan': [
    { name: 'X-Trail', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Qashqai', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Navara', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Patrol', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Juke', years: [2018, 2019, 2020, 2021, 2022, 2023] }
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
    { name: 'Tiguan', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Polo', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Touareg', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Hyundai': [
    { name: 'Tucson', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Santa Fe', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Creta', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'i30', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Kia': [
    { name: 'Sportage', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Sorento', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Seltos', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Rio', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ]
};

// Parts for BMW 3 Series (VIN: WBAJB1C51KB375143)
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
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line'
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
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line'
  },
  {
    id: 'bmw-3',
    name: 'Air Filter Element',
    category: 'Engine',
    model: 'BMW 3 Series 2019',
    price: 6500,
    availability: 12,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (B48)',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line'
  }
];

// Parts for Mercedes C-Class (VIN: WDD2130421A123456)
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
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
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
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
  },
  {
    id: 'mb-3',
    name: 'Brake Disc Set',
    category: 'Brakes',
    model: 'Mercedes-Benz C-Class 2021',
    price: 45000,
    availability: 6,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (M254)',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
  }
];

// Parts for VW Golf (VIN: WVWZZZ1KZAW123456)
const vwGolfParts: Part[] = [
  {
    id: 'vw-1',
    name: 'DSG Transmission Oil Kit',
    category: 'Transmission',
    model: 'Volkswagen Golf 2020',
    price: 28000,
    availability: 5,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (EA888)',
    transmissionType: 'DSG 7-Speed',
    trimLevel: 'R-Line'
  },
  {
    id: 'vw-2',
    name: 'Timing Chain Kit',
    category: 'Engine',
    model: 'Volkswagen Golf 2020',
    price: 45000,
    availability: 3,
    supplier: 'Euro Car Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: false,
    engineType: '2.0L 4-cylinder (EA888)',
    transmissionType: 'DSG 7-Speed',
    trimLevel: 'R-Line'
  },
  {
    id: 'vw-3',
    name: 'Spark Plug Set',
    category: 'Engine',
    model: 'Volkswagen Golf 2020',
    price: 12000,
    availability: 8,
    supplier: 'German Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder (EA888)',
    transmissionType: 'DSG 7-Speed',
    trimLevel: 'R-Line'
  }
];

// Parts for Toyota Land Cruiser (VIN: JT3HN86R0Y0269652)
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
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
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
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
  },
  {
    id: 'toyota-3',
    name: 'Air Filter Assembly',
    category: 'Engine',
    model: 'Toyota Land Cruiser 2020',
    price: 12000,
    availability: 15,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
  }
];

// Parts for Nissan X-Trail (VIN: JN1TBNT32U0123456)
const nissanXTrailParts: Part[] = [
  {
    id: 'nissan-1',
    name: 'CVT Transmission Fluid Kit',
    category: 'Transmission',
    model: 'Nissan X-Trail 2022',
    price: 18000,
    availability: 12,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    transmissionType: 'CVT',
    trimLevel: 'Tekna'
  },
  {
    id: 'nissan-2',
    name: 'Brake Pad Set - Front',
    category: 'Brakes',
    model: 'Nissan X-Trail 2022',
    price: 12500,
    availability: 18,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    transmissionType: 'CVT',
    trimLevel: 'Tekna'
  },
  {
    id: 'nissan-3',
    name: 'Air Conditioning Compressor',
    category: 'Air Conditioning',
    model: 'Nissan X-Trail 2022',
    price: 65000,
    availability: 4,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    transmissionType: 'CVT',
    trimLevel: 'Tekna'
  }
];

// Parts for Honda CR-V (VIN: JHMGK5H59MC123456)
const hondaCRVParts: Part[] = [
  {
    id: 'honda-1',
    name: 'Engine Oil Filter',
    category: 'Engine',
    model: 'Honda CR-V 2021',
    price: 3500,
    availability: 25,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX-L'
  },
  {
    id: 'honda-2',
    name: 'Cabin Air Filter',
    category: 'Air Conditioning',
    model: 'Honda CR-V 2021',
    price: 4500,
    availability: 20,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX-L'
  },
  {
    id: 'honda-3',
    name: 'Spark Plug Set',
    category: 'Engine',
    model: 'Honda CR-V 2021',
    price: 8500,
    availability: 15,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX-L'
  }
];

// Parts for Hyundai Tucson (VIN: KMHXX00XXNU123456)
const hyundaiTucsonParts: Part[] = [
  {
    id: 'hyundai-1',
    name: 'Transmission Oil Filter Kit',
    category: 'Transmission',
    model: 'Hyundai Tucson 2022',
    price: 15000,
    availability: 10,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Ultimate'
  },
  {
    id: 'hyundai-2',
    name: 'Air Filter Element',
    category: 'Engine',
    model: 'Hyundai Tucson 2022',
    price: 5500,
    availability: 18,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Ultimate'
  },
  {
    id: 'hyundai-3',
    name: 'Brake Disc Set - Front',
    category: 'Brakes',
    model: 'Hyundai Tucson 2022',
    price: 25000,
    availability: 8,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.0L 4-cylinder',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Ultimate'
  }
];

// Parts for Kia Sportage (VIN: U5YPK81AANU123456)
const kiaSportageParts: Part[] = [
  {
    id: 'kia-1',
    name: 'Oil Filter Kit',
    category: 'Engine',
    model: 'Kia Sportage 2023',
    price: 4500,
    availability: 22,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.6L Turbo GDI',
    transmissionType: 'DCT 7-Speed',
    trimLevel: 'GT-Line'
  },
  {
    id: 'kia-2',
    name: 'Spark Plug Set',
    category: 'Engine',
    model: 'Kia Sportage 2023',
    price: 12000,
    availability: 15,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.6L Turbo GDI',
    transmissionType: 'DCT 7-Speed',
    trimLevel: 'GT-Line'
  },
  {
    id: 'kia-3',
    name: 'Air Conditioning Filter',
    category: 'Air Conditioning',
    model: 'Kia Sportage 2023',
    price: 3500,
    availability: 25,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.6L Turbo GDI',
    transmissionType: 'DCT 7-Speed',
    trimLevel: 'GT-Line'
  }
];

export const mockParts: Part[] = [
  ...bmw3SeriesParts,
  ...mercedesCClassParts,
  ...vwGolfParts,
  ...toyotaLandCruiserParts,
  ...nissanXTrailParts,
  ...hondaCRVParts,
  ...hyundaiTucsonParts,
  ...kiaSportageParts
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
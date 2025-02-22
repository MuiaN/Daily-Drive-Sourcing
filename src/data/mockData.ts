import { Part, User, VehicleModel } from '../types';

export const vehicleModels: { [key: string]: VehicleModel[] } = {
  'Toyota': [
    { name: 'Camry', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Corolla', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'RAV4', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Hilux', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Land Cruiser', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Prado', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Honda': [
    { name: 'Civic', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Accord', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'CR-V', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Fit', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'HR-V', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Nissan': [
    { name: 'X-Trail', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Qashqai', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Navara', years: [2018, 2019, 2020, 2021, 2022, 2023] },
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
  ]
};

export const mockParts: Part[] = [
  // Toyota Camry Parts
  {
    id: '1',
    name: 'Brake Pad Set',
    category: 'Brakes',
    model: 'Toyota Camry 2020',
    price: 8500,
    availability: 45,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (A25A-FKS)',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'SE'
  },
  {
    id: '2',
    name: 'Air Filter',
    category: 'Engine',
    model: 'Toyota Camry 2020',
    price: 2500,
    availability: 60,
    supplier: 'Parts Plus',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (A25A-FKS)',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'SE'
  },

  // BMW 3 Series Parts
  {
    id: '3',
    name: 'Brake Caliper',
    category: 'Brakes',
    model: 'BMW 3 Series 2021',
    price: 35000,
    availability: 8,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '10-14 days',
    isLocal: false,
    vinRequired: true,
    engineType: '2.0L 4-cylinder (B48)',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'M Sport'
  },
  {
    id: '4',
    name: 'Oil Filter',
    category: 'Engine',
    model: 'BMW 3 Series 2021',
    price: 4500,
    availability: 15,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '7-10 days',
    isLocal: false,
    vinRequired: true,
    engineType: '2.0L 4-cylinder (B48)',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'M Sport'
  },

  // Mercedes-Benz C-Class Parts
  {
    id: '5',
    name: 'Spark Plug Set',
    category: 'Engine',
    model: 'Mercedes-Benz C-Class 2022',
    price: 12000,
    availability: 20,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '7-10 days',
    isLocal: false,
    vinRequired: true,
    engineType: '2.0L 4-cylinder (M254)',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
  },
  {
    id: '6',
    name: 'Air Suspension Kit',
    category: 'Suspension',
    model: 'Mercedes-Benz C-Class 2022',
    price: 85000,
    availability: 5,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '14-21 days',
    isLocal: false,
    vinRequired: true,
    engineType: '2.0L 4-cylinder (M254)',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
  },

  // Honda Civic Parts
  {
    id: '7',
    name: 'Timing Belt Kit',
    category: 'Engine',
    model: 'Honda Civic 2021',
    price: 15000,
    availability: 25,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.5L Turbo',
    transmissionType: 'CVT',
    trimLevel: 'Sport'
  },
  {
    id: '8',
    name: 'Clutch Kit',
    category: 'Transmission',
    model: 'Honda Civic 2021',
    price: 45000,
    availability: 10,
    supplier: 'Parts Plus',
    location: 'Mombasa, Kenya',
    deliveryTime: '3-4 days',
    isLocal: true,
    engineType: '1.5L Turbo',
    transmissionType: 'Manual 6-Speed',
    trimLevel: 'Sport'
  },

  // Toyota Land Cruiser Parts
  {
    id: '9',
    name: 'Fuel Filter',
    category: 'Engine',
    model: 'Toyota Land Cruiser 2020',
    price: 8000,
    availability: 30,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
  },
  {
    id: '10',
    name: 'Shock Absorber Set',
    category: 'Suspension',
    model: 'Toyota Land Cruiser 2020',
    price: 65000,
    availability: 8,
    supplier: 'Parts Plus',
    location: 'Mombasa, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
  },

  // BMW 5 Series Parts
  {
    id: '11',
    name: 'Water Pump',
    category: 'Engine',
    model: 'BMW 5 Series 2022',
    price: 45000,
    availability: 6,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '10-14 days',
    isLocal: false,
    vinRequired: true,
    engineType: '3.0L 6-cylinder (B58)',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'M Sport'
  },
  {
    id: '12',
    name: 'LED Headlight Assembly',
    category: 'Body Parts',
    model: 'BMW 5 Series 2022',
    price: 125000,
    availability: 4,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '14-21 days',
    isLocal: false,
    vinRequired: true,
    engineType: '3.0L 6-cylinder (B58)',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'M Sport'
  },

  // Mercedes-Benz E-Class Parts
  {
    id: '13',
    name: 'Air Filter',
    category: 'Engine',
    model: 'Mercedes-Benz E-Class 2021',
    price: 8500,
    availability: 15,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '7-10 days',
    isLocal: false,
    vinRequired: true,
    engineType: '3.0L 6-cylinder (M256)',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
  },
  {
    id: '14',
    name: 'Brake Disc Set',
    category: 'Brakes',
    model: 'Mercedes-Benz E-Class 2021',
    price: 45000,
    availability: 8,
    supplier: 'Elite Auto Parts',
    location: 'Germany',
    deliveryTime: '10-14 days',
    isLocal: false,
    vinRequired: true,
    engineType: '3.0L 6-cylinder (M256)',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
  },

  // Honda CR-V Parts
  {
    id: '15',
    name: 'CV Joint',
    category: 'Transmission',
    model: 'Honda CR-V 2022',
    price: 18500,
    availability: 20,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.5L Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX-L'
  },
  {
    id: '16',
    name: 'Power Steering Pump',
    category: 'Steering',
    model: 'Honda CR-V 2022',
    price: 35000,
    availability: 8,
    supplier: 'Parts Plus',
    location: 'Mombasa, Kenya',
    deliveryTime: '3-4 days',
    isLocal: true,
    engineType: '1.5L Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX-L'
  }
];

export const mockUser: User = {
  id: '1',
  name: 'John Smith',
  email: 'john@repairshop.com',
  role: 'repair_shop'
};

export const categories = [
  'Brakes',
  'Engine',
  'Electrical',
  'Suspension',
  'Transmission',
  'Body Parts',
  'Steering'
];

export const suppliers = [
  'AutoPro Parts',
  'Parts Plus',
  'Elite Auto Parts'
];

export const locations = [
  'Nairobi, Kenya',
  'Mombasa, Kenya',
  'Germany'
];
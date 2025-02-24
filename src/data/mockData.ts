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
  'Mazda': [
    { name: 'CX-5', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'CX-3', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Mazda3', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Mazda6', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'BT-50', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Suzuki': [
    { name: 'Vitara', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Swift', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Jimny', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'S-Presso', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Subaru': [
    { name: 'Forester', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Outback', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'XV', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Impreza', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Mitsubishi': [
    { name: 'Outlander', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'ASX', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'L200', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Pajero', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Lexus': [
    { name: 'RX', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'NX', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'LX', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'ES', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Isuzu': [
    { name: 'D-Max', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'MU-X', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'FRR', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'NPR', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Mercedes-Benz': [
    { name: 'C-Class', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'E-Class', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'GLC', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'GLE', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'BMW': [
    { name: '3 Series', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: '5 Series', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'X3', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'X5', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Volkswagen': [
    { name: 'Golf', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Tiguan', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Polo', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Touareg', years: [2018, 2019, 2020, 2021, 2022, 2023] }
  ],
  'Land Rover': [
    { name: 'Range Rover', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Discovery', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Defender', years: [2018, 2019, 2020, 2021, 2022, 2023] },
    { name: 'Evoque', years: [2018, 2019, 2020, 2021, 2022, 2023] }
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

export const mockParts: Part[] = [
  {
    id: '1',
    name: 'Brake Pad Set',
    category: 'Brakes',
    model: 'Toyota Corolla 2022',
    price: 8500,
    availability: 45,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.8L 4-cylinder (2ZR-FE)',
    transmissionType: 'CVT',
    trimLevel: 'XLi'
  },
  {
    id: '2',
    name: 'Air Filter',
    category: 'Engine',
    model: 'Toyota Corolla 2022',
    price: 2500,
    availability: 60,
    supplier: 'AutoPro Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.8L 4-cylinder (2ZR-FE)',
    transmissionType: 'CVT',
    trimLevel: 'XLi'
  },
  {
    id: '3',
    name: 'Spark Plug Set',
    category: 'Engine',
    model: 'Toyota Corolla 2022',
    price: 4500,
    availability: 40,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '1.8L 4-cylinder (2ZR-FE)',
    transmissionType: 'CVT',
    trimLevel: 'XLi'
  },
  {
    id: '4',
    name: 'Fuel Filter',
    category: 'Fuel System',
    model: 'Toyota Land Cruiser 2021',
    price: 12000,
    availability: 25,
    supplier: 'Japan Auto Parts',
    location: 'Mombasa, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
  },
  {
    id: '5',
    name: 'Shock Absorber Set',
    category: 'Suspension',
    model: 'Toyota Land Cruiser 2021',
    price: 85000,
    availability: 12,
    supplier: 'Premium Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
  },
  {
    id: '6',
    name: 'Timing Belt Kit',
    category: 'Engine',
    model: 'Toyota Land Cruiser 2021',
    price: 45000,
    availability: 8,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '4.5L V8 Diesel (1VD-FTV)',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'VX'
  },
  {
    id: '7',
    name: 'CV Joint',
    category: 'Transmission',
    model: 'Honda CR-V 2022',
    price: 25000,
    availability: 15,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX'
  },
  {
    id: '8',
    name: 'Alternator',
    category: 'Electrical',
    model: 'Honda CR-V 2022',
    price: 45000,
    availability: 10,
    supplier: 'AutoPro Parts',
    location: 'Mombasa, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX'
  },
  {
    id: '9',
    name: 'AC Compressor',
    category: 'Air Conditioning',
    model: 'Honda CR-V 2022',
    price: 65000,
    availability: 5,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.5L VTEC Turbo',
    transmissionType: 'CVT',
    trimLevel: 'EX'
  },
  {
    id: '10',
    name: 'Front Brake Discs',
    category: 'Brakes',
    model: 'Nissan X-Trail 2021',
    price: 18000,
    availability: 20,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '1-2 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    transmissionType: 'CVT',
    trimLevel: 'Acenta'
  },
  {
    id: '11',
    name: 'Oxygen Sensor',
    category: 'Engine',
    model: 'Nissan X-Trail 2021',
    price: 12000,
    availability: 15,
    supplier: 'AutoPro Parts',
    location: 'Kisumu, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    transmissionType: 'CVT',
    trimLevel: 'Acenta'
  },
  {
    id: '12',
    name: 'Power Steering Pump',
    category: 'Steering',
    model: 'Nissan X-Trail 2021',
    price: 35000,
    availability: 8,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.5L 4-cylinder (QR25DE)',
    transmissionType: 'CVT',
    trimLevel: 'Acenta'
  },
  {
    id: '13',
    name: 'Water Pump',
    category: 'Engine',
    model: 'Mazda CX-5 2022',
    price: 28000,
    availability: 12,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.5L Skyactiv-G',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'Touring'
  },
  {
    id: '14',
    name: 'Transmission Filter Kit',
    category: 'Transmission',
    model: 'Mazda CX-5 2022',
    price: 15000,
    availability: 18,
    supplier: 'AutoPro Parts',
    location: 'Mombasa, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '2.5L Skyactiv-G',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'Touring'
  },
  {
    id: '15',
    name: 'LED Headlight Assembly',
    category: 'Lighting',
    model: 'Mazda CX-5 2022',
    price: 75000,
    availability: 6,
    supplier: 'Premium Auto Spares',
    location: 'Nairobi, Kenya',
    deliveryTime: '3-4 days',
    isLocal: true,
    engineType: '2.5L Skyactiv-G',
    transmissionType: 'Automatic 6-Speed',
    trimLevel: 'Touring'
  },
  {
    id: '16',
    name: 'Clutch Kit',
    category: 'Transmission',
    model: 'Suzuki Vitara 2021',
    price: 45000,
    availability: 10,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.6L 4-cylinder (M16A)',
    transmissionType: 'Manual 5-Speed',
    trimLevel: 'GL+'
  },
  {
    id: '17',
    name: 'Radiator',
    category: 'Engine',
    model: 'Suzuki Vitara 2021',
    price: 35000,
    availability: 8,
    supplier: 'AutoPro Parts',
    location: 'Eldoret, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.6L 4-cylinder (M16A)',
    transmissionType: 'Manual 5-Speed',
    trimLevel: 'GL+'
  },
  {
    id: '18',
    name: 'Fuel Pump Assembly',
    category: 'Fuel System',
    model: 'Suzuki Vitara 2021',
    price: 25000,
    availability: 15,
    supplier: 'Japan Auto Parts',
    location: 'Nairobi, Kenya',
    deliveryTime: '2-3 days',
    isLocal: true,
    engineType: '1.6L 4-cylinder (M16A)',
    transmissionType: 'Manual 5-Speed',
    trimLevel: 'GL+'
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
  'Parts Plus',
  'German Auto Spares',
  'Japan Auto Parts',
  'Euro Car Parts',
  'Premium Auto Spares',
  'Commercial Vehicle Parts'
];

export const locations = [
  'Nairobi, Kenya',
  'Mombasa, Kenya',
  'Kisumu, Kenya',
  'Nakuru, Kenya',
  'Eldoret, Kenya'
];
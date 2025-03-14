import { Part, User, VehicleModel } from '../types';

export const vehicleModels: { [key: string]: VehicleModel[] } = {
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
  'BMW 3 Series 2020': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2070&q=80',
  'BMW 3 Series 2021': 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2070&q=80',
  'Mercedes-Benz C-Class 2021': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2070&q=80',
  'Mercedes-Benz C-Class 2022': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2070&q=80',
  'Mercedes-Benz C-Class 2023': 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2070&q=80'
};

// Example VIN mappings
export const vinMappings = {
  // BMW 3 Series Examples
  'WBAJB1C51KB375143': {
    make: 'BMW',
    model: '3 Series',
    year: 2019,
    engineType: '2.0L 4-cylinder (B48)',
    engineNumber: 'B48B20B',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'Sport Line'
  },
  'WBAJB1C52LB385144': {
    make: 'BMW',
    model: '3 Series',
    year: 2020,
    engineType: '2.0L 4-cylinder (B48)',
    engineNumber: 'B48B20B',
    transmissionType: 'Automatic 8-Speed',
    trimLevel: 'M Sport'
  },
  // Mercedes C-Class Examples
  'WDD2050421R123456': {
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2021,
    engineType: '2.0L 4-cylinder (M254)',
    engineNumber: 'M254E20',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'AMG Line'
  },
  'WDD2050422R234567': {
    make: 'Mercedes-Benz',
    model: 'C-Class',
    year: 2022,
    engineType: '2.0L 4-cylinder (M254)',
    engineNumber: 'M254E20',
    transmissionType: 'Automatic 9-Speed',
    trimLevel: 'Avantgarde'
  }
};

export const categories = [
  'Suspension',
  'Brakes',
  'Engine',
  'Transmission',
  'Steering',
  'Electrical',
  'Body Parts',
  'Interior'
];

export const suppliers = [
  'German Auto Spares',
  'Euro Car Parts',
  'Mercedes-Benz Official Parts'
];

export const locations = [
  'Nairobi, Kenya',
  'Mombasa, Kenya',
  'Kisumu, Kenya'
];
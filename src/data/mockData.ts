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

// Supplier information
export interface SupplierLocation {
  name: string;
  address: string;
  coordinates: { lat: number; lng: number };
  hours: string;
  phone: string;
  email: string;
  website?: string;
  established: string;
  specialization: string;
  certifications: string[];
  verificationStatus: 'Premium Partner' | 'Verified' | 'Standard';
  totalOrders: number;
  satisfactionRate: number;
  mapsUrl: string;
}

export const supplierLocations: { [key: string]: SupplierLocation } = {
  'German Auto Spares Ltd.': {
    name: 'German Auto Spares Ltd.',
    address: 'Mombasa Road, Nairobi, Kenya',
    coordinates: { lat: -1.319167, lng: 36.888611 },
    hours: 'Mon-Sat: 8:00 AM - 6:00 PM',
    phone: '+254 712 345 678',
    email: 'sales@germanauto.co.ke',
    website: 'https://germanauto.co.ke',
    established: '1995',
    specialization: 'BMW, Mercedes-Benz, Audi parts',
    certifications: ['BMW Certified Partner', 'ISO 9001:2015'],
    verificationStatus: 'Premium Partner',
    totalOrders: 15000,
    satisfactionRate: 98,
    mapsUrl: 'https://www.google.com/maps?q=-1.319167,36.888611'
  },
  'Euro Car Parts Kenya': {
    name: 'Euro Car Parts Kenya',
    address: 'Nyali Road, Mombasa, Kenya',
    coordinates: { lat: -4.019583, lng: 39.720167 },
    hours: 'Mon-Fri: 8:30 AM - 5:30 PM',
    phone: '+254 722 987 654',
    email: 'info@europarts.co.ke',
    website: 'https://europarts.co.ke',
    established: '2005',
    specialization: 'European vehicle parts',
    certifications: ['ISO 9001:2015', 'TÜV Certified'],
    verificationStatus: 'Verified',
    totalOrders: 8500,
    satisfactionRate: 95,
    mapsUrl: 'https://www.google.com/maps?q=-4.019583,39.720167'
  },
  'Quality Used Auto Parts': {
    name: 'Quality Used Auto Parts',
    address: 'Industrial Area, Nairobi, Kenya',
    coordinates: { lat: -1.308000, lng: 36.865000 },
    hours: 'Mon-Sat: 9:00 AM - 5:00 PM',
    phone: '+254 733 123 456',
    email: 'info@qualityused.co.ke',
    established: '2010',
    specialization: 'Used European car parts',
    certifications: ['KRA Registered', 'KEBS Certified'],
    verificationStatus: 'Verified',
    totalOrders: 5000,
    satisfactionRate: 92,
    mapsUrl: 'https://www.google.com/maps?q=-1.308000,36.865000'
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

export const suppliers = Object.keys(supplierLocations);

export const locations = [
  'Nairobi, Kenya',
  'Mombasa, Kenya',
  'Kisumu, Kenya'
];
import { CarType } from '../components/CarTypeSelector';
import { PartUnit } from '../components/PartUnitSelector';
import suspensionDiagram from '../assets/images/suspension-diagram.png';

// BMW 3 Series car types
const bmw3SeriesTypes: CarType[] = [
  {
    id: 'sedan',
    name: 'Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=2070&q=80',
    description: '4-door sedan with trunk'
  },
  {
    id: 'touring',
    name: 'Touring',
    image: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=2069&q=80',
    description: 'Station wagon with extended cargo area'
  },
  {
    id: 'coupe',
    name: 'Coupe',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=2060&q=80',
    description: '2-door sports coupe'
  }
];

// BMW 3 Series Sedan part units
const bmw3SeriesSedanUnits: PartUnit[] = [
  {
    id: 'suspension',
    name: 'Suspension',
    image: suspensionDiagram,
    description: 'Suspension and steering components'
  },
  {
    id: 'engine',
    name: 'Engine',
    image: 'https://images.unsplash.com/photo-1486754735734-325b5831c3ad?auto=format&fit=crop&w=800&q=80',
    description: 'Engine components and parts'
  },
  {
    id: 'brakes',
    name: 'Brakes',
    image: 'https://images.unsplash.com/photo-1600191763437-4b7f2cae081c?auto=format&fit=crop&w=800&q=80',
    description: 'Brake system components'
  }
];

// BMW Suspension diagram
const bmwSuspensionDiagram = {
  image: suspensionDiagram,
  parts: [
    {
      id: '3K185',
      name: 'Steering Knuckle Assembly',
      coordinates: { x: 28.5, y: 20.5, width: 4, height: 3 },
      partNumber: 'BMW-31216765423',
      description: 'Front left steering knuckle assembly',
      price: 78500,
      availability: 4
    },
    {
      id: 'HB1',
      name: 'Hub Bolt',
      coordinates: { x: 29, y: 29, width: 3, height: 3 },
      partNumber: 'BMW-31106779420',
      description: 'Wheel hub mounting bolt',
      price: 2500,
      availability: 32
    },
    {
      id: '3123',
      name: 'Wheel Hub Assembly',
      coordinates: { x: 55.5, y: 37, width: 3, height: 3 },
      partNumber: 'BMW-31226765601',
      description: 'Front wheel hub and bearing assembly',
      price: 42000,
      availability: 7
    },
    {
      id: 'HN1',
      name: 'Hub Nut',
      coordinates: { x: 61.5, y: 70.5, width: 3, height: 3 },
      partNumber: 'BMW-31226776162',
      description: 'Wheel hub axle nut',
      price: 1800,
      availability: 45
    }
  ]
};

// Map vehicle makes to their types
const vehicleTypesMap = {
  'BMW': {
    '3 Series': bmw3SeriesTypes
  }
};

// Map vehicle types to their part units
const partUnitsMap = {
  'BMW': {
    '3 Series': {
      'sedan': bmw3SeriesSedanUnits
    }
  }
};

// Map part units to their diagrams
const diagramsMap = {
  'BMW': {
    '3 Series': {
      'sedan': {
        'suspension': bmwSuspensionDiagram
      }
    }
  }
};

export { vehicleTypesMap, partUnitsMap, diagramsMap };
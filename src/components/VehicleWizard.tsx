import React, { useState, useEffect } from 'react';
import { AlertCircle, Search, ArrowLeft } from 'lucide-react';
import { VehicleSelection } from '../types';
import { vehicleModels } from '../data/mockData';

interface Props {
  onComplete: (selection: VehicleSelection) => void;
  initialSelection?: VehicleSelection;
}

const VehicleWizard: React.FC<Props> = ({ onComplete, initialSelection }) => {
  const [vin, setVin] = useState('');
  const [partNumber, setPartNumber] = useState('');
  const [engineNumber, setEngineNumber] = useState('');
  const [selection, setSelection] = useState<VehicleSelection>(initialSelection || {});
  const [showManualSearch, setShowManualSearch] = useState(false);
  const [vinError, setVinError] = useState('');

  const germanBrands = ['BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Porsche', 'Opel'];
  const makes = Object.keys(vehicleModels);

  useEffect(() => {
    if (initialSelection?.make) {
      setShowManualSearch(true);
    }
  }, [initialSelection]);

  // Mock VIN/Chassis lookup data
  const mockVinData = {
    // German Cars
    'WBAJB1C51KB375143': {
      make: 'BMW',
      model: '3 Series',
      year: 2019,
      engineType: '2.0L 4-cylinder (B48)',
      engineNumber: 'B48B20B',
      transmissionType: 'Automatic 8-Speed',
      trimLevel: 'Sport Line'
    },
    'WDD2130421A123456': {
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2021,
      engineType: '2.0L 4-cylinder (M254)',
      engineNumber: 'M254E20',
      transmissionType: 'Automatic 9-Speed',
      trimLevel: 'AMG Line'
    },
    'WVWZZZ1KZAW123456': {
      make: 'Volkswagen',
      model: 'Golf',
      year: 2020,
      engineType: '2.0L 4-cylinder (EA888)',
      engineNumber: 'EA888Gen3B',
      transmissionType: 'DSG 7-Speed',
      trimLevel: 'R-Line'
    },
    // Japanese Cars
    'JT3HN86R0Y0269652': {
      make: 'Toyota',
      model: 'Land Cruiser',
      year: 2020,
      engineType: '4.5L V8 Diesel (1VD-FTV)',
      engineNumber: '1VD0269652',
      transmissionType: 'Automatic 6-Speed',
      trimLevel: 'VX'
    },
    'JN1TBNT32U0123456': {
      make: 'Nissan',
      model: 'X-Trail',
      year: 2022,
      engineType: '2.5L 4-cylinder (QR25DE)',
      engineNumber: 'QR25DE123456',
      transmissionType: 'CVT',
      trimLevel: 'Tekna'
    },
    'JHMGK5H59MC123456': {
      make: 'Honda',
      model: 'CR-V',
      year: 2021,
      engineType: '1.5L VTEC Turbo',
      engineNumber: 'L15BE123456',
      transmissionType: 'CVT',
      trimLevel: 'EX-L'
    }
  };

  // Mock part number lookup data
  const mockPartData = {
    'BMW-11428507683': {
      make: 'BMW',
      model: '3 Series',
      year: 2019,
      engineType: '2.0L 4-cylinder (B48)',
      engineNumber: 'B48B20B',
      transmissionType: 'Automatic 8-Speed',
      trimLevel: 'Sport Line'
    },
    'MB-A2780160101': {
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2021,
      engineType: '2.0L 4-cylinder (M254)',
      engineNumber: 'M254E20',
      transmissionType: 'Automatic 9-Speed',
      trimLevel: 'AMG Line'
    }
  };

  // Mock engine number lookup data
  const mockEngineData = {
    'B48B20B': {
      make: 'BMW',
      model: '3 Series',
      year: 2019,
      engineType: '2.0L 4-cylinder (B48)',
      transmissionType: 'Automatic 8-Speed',
      trimLevel: 'Sport Line'
    },
    'M254E20': {
      make: 'Mercedes-Benz',
      model: 'C-Class',
      year: 2021,
      engineType: '2.0L 4-cylinder (M254)',
      transmissionType: 'Automatic 9-Speed',
      trimLevel: 'AMG Line'
    }
  };

  const handleSearch = () => {
    setVinError('');
    let foundData = null;

    if (vin) {
      const normalizedVin = vin.toUpperCase().trim();
      foundData = mockVinData[normalizedVin];
      if (foundData) {
        setSelection({
          ...foundData,
          vin: normalizedVin
        });
        onComplete({
          ...foundData,
          vin: normalizedVin
        });
        return;
      }
    }

    if (partNumber) {
      const normalizedPartNumber = partNumber.toUpperCase().trim();
      foundData = mockPartData[normalizedPartNumber];
      if (foundData) {
        setSelection({
          ...foundData,
          partNumber: normalizedPartNumber
        });
        onComplete({
          ...foundData,
          partNumber: normalizedPartNumber
        });
        return;
      }
    }

    if (engineNumber) {
      const normalizedEngineNumber = engineNumber.toUpperCase().trim();
      foundData = mockEngineData[normalizedEngineNumber];
      if (foundData) {
        setSelection({
          ...foundData,
          engineNumber: normalizedEngineNumber
        });
        onComplete({
          ...foundData,
          engineNumber: normalizedEngineNumber
        });
        return;
      }
    }

    setVinError('Vehicle not found. Please try manual search.');
    setShowManualSearch(true);
  };

  const handleManualSearch = () => {
    if (selection.make && selection.model && selection.year) {
      onComplete(selection);
    }
  };

  const availableModels = selection.make ? vehicleModels[selection.make] : [];
  const selectedModel = selection.model 
    ? availableModels.find(m => m.name === selection.model)
    : null;
  const availableYears = selectedModel?.years || [];

  const mockEngineTypes = {
    'Toyota': {
      'Camry': ['2.5L 4-cylinder (A25A-FKS)', '3.5L V6 (2GR-FKS)'],
      'Land Cruiser': ['4.5L V8 Diesel (1VD-FTV)', '4.6L V8 Petrol (1UR-FE)']
    },
    'BMW': {
      '3 Series': ['2.0L 4-cylinder (B48)', '3.0L 6-cylinder (B58)'],
      '5 Series': ['2.0L 4-cylinder (B48)', '3.0L 6-cylinder (B58)', '4.4L V8 (N63)']
    }
  };

  const mockTransmissionTypes = [
    'Manual 6-Speed',
    'Automatic 8-Speed',
    'Automatic 9-Speed',
    'Automatic 6-Speed',
    'CVT',
    'DCT 7-Speed',
    'DSG 7-Speed'
  ];

  const mockTrimLevels = {
    'Toyota': {
      'Camry': ['LE', 'SE', 'XLE', 'XSE', 'TRD'],
      'Land Cruiser': ['GX', 'VX', 'ZX']
    },
    'BMW': {
      '3 Series': ['Sport Line', 'M Sport', 'Luxury Line'],
      '5 Series': ['Sport Line', 'M Sport', 'Luxury Line']
    }
  };

  const getAvailableEngineTypes = () => {
    if (!selection.make || !selection.model) return [];
    return mockEngineTypes[selection.make]?.[selection.model] || 
      ['2.0L', '2.5L', '3.0L', '3.5L', '4.0L'];
  };

  const getAvailableTrimLevels = () => {
    if (!selection.make || !selection.model) return [];
    return mockTrimLevels[selection.make]?.[selection.model] || 
      ['Base', 'Mid', 'High'];
  };

  const isGermanBrand = (make: string) => germanBrands.includes(make);

  return (
    <div className="max-w-2xl mx-auto bg-card p-6 rounded-lg shadow-lg border border-border">
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-4 text-card-foreground flex items-center justify-between">
            <span>Search by {isGermanBrand(selection.make || '') ? 'VIN' : 'Chassis'} Number, Part Number, or Engine Number</span>
            {initialSelection && (
              <button
                onClick={() => onComplete(initialSelection)}
                className="text-sm text-primary hover:text-primary/80 flex items-center gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Results
              </button>
            )}
          </h3>
          <div className="space-y-4">
            <div className="space-y-2">
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                placeholder={`Enter ${isGermanBrand(selection.make || '') ? 'VIN' : 'Chassis'} number`}
                maxLength={17}
                value={vin}
                onChange={(e) => setVin(e.target.value.toUpperCase())}
              />
              <div className="text-center text-sm text-muted-foreground">or</div>
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                placeholder="Enter part number"
                value={partNumber}
                onChange={(e) => setPartNumber(e.target.value.toUpperCase())}
              />
              <div className="text-center text-sm text-muted-foreground">or</div>
              <input
                type="text"
                className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                placeholder="Enter engine number"
                value={engineNumber}
                onChange={(e) => setEngineNumber(e.target.value.toUpperCase())}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-lg flex items-center gap-2"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
                Search
              </button>
            </div>
            {vinError && (
              <div className="flex items-center gap-2 text-destructive">
                <AlertCircle className="h-4 w-4" />
                <span>{vinError}</span>
              </div>
            )}
            <button
              className="text-primary hover:text-primary/80 text-sm"
              onClick={() => setShowManualSearch(true)}
            >
              Can't find your vehicle? Try manual search
            </button>
          </div>
        </div>

        {showManualSearch && (
          <div className="space-y-4 border-t border-border pt-4">
            <h4 className="font-medium text-card-foreground">Manual Search</h4>
            
            <div>
              <label className="block text-sm font-medium text-muted-foreground mb-1">
                Make
              </label>
              <select
                className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                value={selection.make || ''}
                onChange={(e) =>
                  setSelection({ make: e.target.value })
                }
              >
                <option value="">Select Make</option>
                {makes.map((make) => (
                  <option key={make} value={make}>
                    {make}
                  </option>
                ))}
              </select>
            </div>

            {selection.make && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Model
                </label>
                <select
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  value={selection.model || ''}
                  onChange={(e) =>
                    setSelection({ ...selection, model: e.target.value })
                  }
                >
                  <option value="">Select Model</option>
                  {availableModels.map((model) => (
                    <option key={model.name} value={model.name}>
                      {model.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selection.model && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Year
                </label>
                <select
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  value={selection.year || ''}
                  onChange={(e) =>
                    setSelection({ ...selection, year: Number(e.target.value) })
                  }
                >
                  <option value="">Select Year</option>
                  {availableYears.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selection.year && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Engine Type
                </label>
                <select
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  value={selection.engineType || ''}
                  onChange={(e) =>
                    setSelection({ ...selection, engineType: e.target.value })
                  }
                >
                  <option value="">Select Engine Type</option>
                  {getAvailableEngineTypes().map((engine) => (
                    <option key={engine} value={engine}>
                      {engine}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selection.engineType && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Transmission Type
                </label>
                <select
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  value={selection.transmissionType || ''}
                  onChange={(e) =>
                    setSelection({ ...selection, transmissionType: e.target.value })
                  }
                >
                  <option value="">Select Transmission Type</option>
                  {mockTransmissionTypes.map((transmission) => (
                    <option key={transmission} value={transmission}>
                      {transmission}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selection.transmissionType && (
              <div>
                <label className="block text-sm font-medium text-muted-foreground mb-1">
                  Trim Level
                </label>
                <select
                  className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
                  value={selection.trimLevel || ''}
                  onChange={(e) =>
                    setSelection({ ...selection, trimLevel: e.target.value })
                  }
                >
                  <option value="">Select Trim Level</option>
                  {getAvailableTrimLevels().map((trim) => (
                    <option key={trim} value={trim}>
                      {trim}
                    </option>
                  ))}
                </select>
              </div>
            )}

            {selection.make && selection.model && selection.year && (
              <div className="pt-4">
                <button
                  onClick={handleManualSearch}
                  className="w-full bg-primary text-primary-foreground py-2 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Find Parts
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default VehicleWizard;
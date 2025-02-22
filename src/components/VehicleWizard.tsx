import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { VehicleSelection } from '../types';
import { vehicleModels } from '../data/mockData';

interface Props {
  onComplete: (selection: VehicleSelection) => void;
}

const VehicleWizard: React.FC<Props> = ({ onComplete }) => {
  const [step, setStep] = useState(1);
  const [selection, setSelection] = useState<VehicleSelection>({});

  const makes = Object.keys(vehicleModels);
  const germanBrands = ['BMW', 'Mercedes-Benz', 'Volkswagen', 'Audi', 'Porsche', 'Opel'];
  const requiresVIN = germanBrands.includes(selection.make || '');

  const handleNext = () => {
    if (step === (requiresVIN ? 7 : 6)) {
      onComplete(selection);
    } else {
      setStep(step + 1);
    }
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return !!selection.make;
      case 2:
        return !!selection.model;
      case 3:
        return !!selection.year;
      case 4:
        return !!selection.engineType;
      case 5:
        return !!selection.transmissionType;
      case 6:
        return !!selection.trimLevel;
      case 7:
        return !!selection.vin && selection.vin.length === 17;
      default:
        return false;
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
    },
    'Mercedes-Benz': {
      'C-Class': ['2.0L 4-cylinder (M254)', '3.0L 6-cylinder (M256)'],
      'E-Class': ['2.0L 4-cylinder (M254)', '3.0L 6-cylinder (M256)', '4.0L V8 (M177)']
    }
  };

  const mockTransmissionTypes = [
    'Manual 6-Speed',
    'Automatic 8-Speed',
    'Automatic 6-Speed',
    'CVT',
    'DCT (Dual Clutch)',
    'AMT (Automated Manual)'
  ];

  const mockTrimLevels = {
    'Toyota': {
      'Camry': ['LE', 'SE', 'XLE', 'XSE', 'TRD'],
      'Land Cruiser': ['GX', 'VX', 'ZX']
    },
    'BMW': {
      '3 Series': ['Sport Line', 'M Sport', 'Luxury Line'],
      '5 Series': ['Sport Line', 'M Sport', 'Luxury Line']
    },
    'Mercedes-Benz': {
      'C-Class': ['Avantgarde', 'AMG Line', 'Exclusive'],
      'E-Class': ['Avantgarde', 'AMG Line', 'Exclusive']
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

  return (
    <div className="max-w-2xl mx-auto bg-card p-6 rounded-lg shadow-lg border border-border">
      <div className="mb-8">
        <div className="flex items-center">
          {[1, 2, 3, 4, 5, 6, requiresVIN ? 7 : null].filter(Boolean).map((stepNumber) => (
            <React.Fragment key={stepNumber}>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  step >= stepNumber
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
              >
                {stepNumber}
              </div>
              {stepNumber < (requiresVIN ? 7 : 6) && (
                <div
                  className={`h-1 w-8 mx-1 ${
                    step > stepNumber ? 'bg-primary' : 'bg-secondary'
                  }`}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {step === 1 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Select Vehicle Make</h3>
            <div className="grid grid-cols-2 gap-4">
              {makes.map((make) => (
                <button
                  key={make}
                  className={`p-4 rounded-lg border ${
                    selection.make === make
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary'
                  }`}
                  onClick={() => setSelection({ make })}
                >
                  {make}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Select Model</h3>
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

        {step === 3 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Select Year</h3>
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

        {step === 4 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Select Engine Type</h3>
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
            <p className="text-sm text-muted-foreground mt-2">
              Selecting the correct engine type ensures you get the right parts for your vehicle
            </p>
          </div>
        )}

        {step === 5 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Select Transmission Type</h3>
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
            <p className="text-sm text-muted-foreground mt-2">
              Different transmission types may require specific parts
            </p>
          </div>
        )}

        {step === 6 && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Select Trim Level</h3>
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
            <p className="text-sm text-muted-foreground mt-2">
              Different trim levels may have unique parts and specifications
            </p>
          </div>
        )}

        {step === 7 && requiresVIN && (
          <div>
            <h3 className="text-lg font-semibold mb-4 text-card-foreground">Enter VIN Number</h3>
            <input
              type="text"
              className="w-full p-2 rounded-lg border border-input bg-background text-foreground"
              placeholder="17-character VIN"
              maxLength={17}
              value={selection.vin || ''}
              onChange={(e) =>
                setSelection({ ...selection, vin: e.target.value.toUpperCase() })
              }
            />
            <p className="text-sm text-muted-foreground mt-2">
              For German vehicles, the VIN is required to ensure exact part matching.
              You can find it on your vehicle registration document or on the driver's side dashboard.
            </p>
          </div>
        )}

        <div className="flex justify-end">
          <button
            className={`px-6 py-2 rounded-lg flex items-center space-x-2 ${
              isStepValid()
                ? 'bg-primary text-primary-foreground'
                : 'bg-secondary text-secondary-foreground cursor-not-allowed'
            }`}
            onClick={handleNext}
            disabled={!isStepValid()}
          >
            <span>{step === (requiresVIN ? 7 : 6) ? 'Find Parts' : 'Next'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehicleWizard;
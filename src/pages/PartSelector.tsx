import React, { useState } from 'react';
import VehicleWizard from '../components/VehicleWizard';
import CarTypeSelector, { CarType } from '../components/CarTypeSelector';
import PartUnitSelector, { PartUnit } from '../components/PartUnitSelector';
import InteractiveDiagram from '../components/InteractiveDiagram';
import SelectionBreadcrumb, { BreadcrumbItem } from '../components/SelectionBreadcrumb';
import { VehicleSelection } from '../types';
import { vehicleTypesMap, partUnitsMap, diagramsMap } from '../data/mockDiagramData';

enum SelectionStep {
  VehicleSelection,
  CarTypeSelection,
  PartUnitSelection,
  DiagramSelection
}

const PartSelector: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<SelectionStep>(SelectionStep.VehicleSelection);
  const [vehicleSelection, setVehicleSelection] = useState<VehicleSelection | null>(null);
  const [selectedCarType, setSelectedCarType] = useState<string | null>(null);
  const [selectedPartUnit, setSelectedPartUnit] = useState<string | null>(null);
  const [selectedPartId, setSelectedPartId] = useState<string | null>(null);
  const [breadcrumbItems, setBreadcrumbItems] = useState<BreadcrumbItem[]>([]);

  // Get available car types based on vehicle selection
  const getCarTypes = (): CarType[] => {
    if (!vehicleSelection?.make || !vehicleSelection?.model) return [];
    return vehicleTypesMap[vehicleSelection.make]?.[vehicleSelection.model] || [];
  };

  // Get available part units based on vehicle and car type selection
  const getPartUnits = (): PartUnit[] => {
    if (!vehicleSelection?.make || !vehicleSelection?.model || !selectedCarType) return [];
    return partUnitsMap[vehicleSelection.make]?.[vehicleSelection.model]?.[selectedCarType] || [];
  };

  // Get diagram data based on selections
  const getDiagramData = () => {
    if (!vehicleSelection?.make || !vehicleSelection?.model || !selectedCarType || !selectedPartUnit) {
      return null;
    }
    return diagramsMap[vehicleSelection.make]?.[vehicleSelection.model]?.[selectedCarType]?.[selectedPartUnit] || null;
  };

  // Handle vehicle selection
  const handleVehicleSelection = (selection: VehicleSelection) => {
    setVehicleSelection(selection);
    setCurrentStep(SelectionStep.CarTypeSelection);
    updateBreadcrumbs(SelectionStep.CarTypeSelection, selection);
  };

  // Handle car type selection
  const handleCarTypeSelection = (typeId: string) => {
    setSelectedCarType(typeId);
    setCurrentStep(SelectionStep.PartUnitSelection);
    updateBreadcrumbs(SelectionStep.PartUnitSelection);
  };

  // Handle part unit selection
  const handlePartUnitSelection = (unitId: string) => {
    setSelectedPartUnit(unitId);
    setCurrentStep(SelectionStep.DiagramSelection);
    updateBreadcrumbs(SelectionStep.DiagramSelection);
  };

  // Handle part selection from diagram
  const handlePartSelection = (partId: string) => {
    setSelectedPartId(partId);
  };

  // Update breadcrumb items based on current step
  const updateBreadcrumbs = (step: SelectionStep, selection?: VehicleSelection) => {
    const items: BreadcrumbItem[] = [];
    
    if (step >= SelectionStep.CarTypeSelection) {
      const vehicleInfo = selection || vehicleSelection;
      items.push({
        id: 'vehicle',
        label: `${vehicleInfo?.make} ${vehicleInfo?.model} ${vehicleInfo?.year}`,
        active: step === SelectionStep.CarTypeSelection
      });
    }
    
    if (step >= SelectionStep.PartUnitSelection) {
      const carTypes = getCarTypes();
      const selectedType = carTypes.find(type => type.id === selectedCarType);
      items.push({
        id: 'carType',
        label: selectedType?.name || 'Car Type',
        active: step === SelectionStep.PartUnitSelection
      });
    }
    
    if (step >= SelectionStep.DiagramSelection) {
      const partUnits = getPartUnits();
      const selectedUnit = partUnits.find(unit => unit.id === selectedPartUnit);
      items.push({
        id: 'partUnit',
        label: selectedUnit?.name || 'Part Unit',
        active: step === SelectionStep.DiagramSelection
      });
    }
    
    setBreadcrumbItems(items);
  };

  // Handle breadcrumb navigation
  const handleBreadcrumbNavigation = (itemId: string) => {
    switch (itemId) {
      case 'vehicle':
        setCurrentStep(SelectionStep.CarTypeSelection);
        setSelectedCarType(null);
        setSelectedPartUnit(null);
        setSelectedPartId(null);
        updateBreadcrumbs(SelectionStep.CarTypeSelection);
        break;
      case 'carType':
        setCurrentStep(SelectionStep.PartUnitSelection);
        setSelectedPartUnit(null);
        setSelectedPartId(null);
        updateBreadcrumbs(SelectionStep.PartUnitSelection);
        break;
      case 'partUnit':
        setCurrentStep(SelectionStep.DiagramSelection);
        setSelectedPartId(null);
        updateBreadcrumbs(SelectionStep.DiagramSelection);
        break;
    }
  };

  // Render content based on current step
  const renderStepContent = () => {
    switch (currentStep) {
      case SelectionStep.VehicleSelection:
        return (
          <VehicleWizard 
            onComplete={handleVehicleSelection} 
            initialSelection={vehicleSelection || undefined}
          />
        );
      
      case SelectionStep.CarTypeSelection:
        return (
          <CarTypeSelector 
            carTypes={getCarTypes()} 
            onTypeSelect={handleCarTypeSelection} 
          />
        );
      
      case SelectionStep.PartUnitSelection:
        return (
          <PartUnitSelector 
            units={getPartUnits()} 
            onUnitSelect={handlePartUnitSelection} 
          />
        );
      
      case SelectionStep.DiagramSelection:
        const diagramData = getDiagramData();
        if (!diagramData) {
          return <div>No diagram available for this selection.</div>;
        }
        
        return (
          <InteractiveDiagram 
            diagramImage={diagramData.image}
            parts={diagramData.parts}
            onPartSelect={handlePartSelection}
            selectedPartId={selectedPartId || undefined}
          />
        );
    }
  };

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
      {currentStep > SelectionStep.VehicleSelection && (
        <SelectionBreadcrumb 
          items={breadcrumbItems} 
          onNavigate={handleBreadcrumbNavigation} 
        />
      )}
      
      {renderStepContent()}
    </div>
  );
};

export default PartSelector;
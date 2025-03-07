import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface PartUnit {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface Props {
  units: PartUnit[];
  onUnitSelect: (unitId: string) => void;
}

const PartUnitSelector: React.FC<Props> = ({ units, onUnitSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {units.map(unit => (
        <div 
          key={unit.id}
          className="bg-card rounded-lg shadow-md border border-border hover:border-primary transition-colors cursor-pointer"
          onClick={() => onUnitSelect(unit.id)}
        >
          <div className="aspect-video w-full overflow-hidden rounded-t-lg">
            <img 
              src={unit.image} 
              alt={unit.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-card-foreground">{unit.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">{unit.description}</p>
            <div className="flex justify-end mt-2">
              <ChevronRight className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PartUnitSelector;
import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface CarType {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface Props {
  carTypes: CarType[];
  onTypeSelect: (typeId: string) => void;
}

const CarTypeSelector: React.FC<Props> = ({ carTypes, onTypeSelect }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {carTypes.map((type) => (
        <div
          key={type.id}
          className="bg-card rounded-lg shadow-md border border-border hover:border-primary transition-colors cursor-pointer"
          onClick={() => onTypeSelect(type.id)}
        >
          <div className="aspect-video w-full overflow-hidden rounded-t-lg">
            <img
              src={type.image}
              alt={type.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-card-foreground">{type.name}</h3>
            <p className="text-sm text-muted-foreground mt-1">
              {type.description}
            </p>
            <div className="flex justify-end mt-2">
              <ChevronRight className="h-5 w-5 text-primary" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarTypeSelector;

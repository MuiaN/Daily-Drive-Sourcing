import React, { useState } from 'react';
import { Part } from '../types';
import PartCard from './PartCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';

interface Props {
  parts: Part[];
  selectedPartId?: string;
}

const PartsList: React.FC<Props> = ({ parts, selectedPartId }) => {
  const [showSidebar, setShowSidebar] = useState(true);
  
  const filteredParts = selectedPartId 
    ? parts.filter(part => part.id === selectedPartId)
    : parts;

  const toggleSidebar = () => {
    setShowSidebar(prev => !prev);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-card-foreground">
          {selectedPartId ? 'Selected Part' : 'Available Parts'}
        </h3>
        <button 
          onClick={toggleSidebar}
          className="p-1 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
        >
          {showSidebar ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
        </button>
      </div>
      
      {showSidebar && (
        <div className="grid grid-cols-1 gap-4">
          {filteredParts.map(part => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>
      )}
      
      {filteredParts.length === 0 && showSidebar && (
        <div className="text-center py-8">
          <p className="text-muted-foreground">No parts found. Please select a part from the diagram.</p>
        </div>
      )}
    </div>
  );
};

export default PartsList;
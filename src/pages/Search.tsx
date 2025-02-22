import React, { useState } from 'react';
import { Search as SearchIcon } from 'lucide-react';
import SearchFilters from '../components/SearchFilters';
import PartCard from '../components/PartCard';
import VehicleWizard from '../components/VehicleWizard';
import { mockParts } from '../data/mockData';
import { SearchFilters as SearchFiltersType, VehicleSelection } from '../types';

const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState<SearchFiltersType>({});
  const [vehicleSelected, setVehicleSelected] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<VehicleSelection | null>(null);

  const handleVehicleSelection = (selection: VehicleSelection) => {
    setSelectedVehicle(selection);
    setVehicleSelected(true);
  };

  const filteredParts = mockParts.filter(part => {
    if (!vehicleSelected) return false;

    // Match vehicle details
    const matchesVehicle = 
      part.model.toLowerCase().includes(selectedVehicle?.make?.toLowerCase() || '') &&
      part.model.toLowerCase().includes(selectedVehicle?.model?.toLowerCase() || '');

    // Match engine type if specified
    const matchesEngine = !selectedVehicle?.engineType || 
      part.engineType === selectedVehicle.engineType;

    // Match transmission type if specified
    const matchesTransmission = !selectedVehicle?.transmissionType || 
      part.transmissionType === selectedVehicle.transmissionType;

    // Match trim level if specified
    const matchesTrim = !selectedVehicle?.trimLevel || 
      part.trimLevel === selectedVehicle.trimLevel;

    // Match search term
    const matchesSearch = searchTerm === '' || 
      part.name.toLowerCase().includes(searchTerm.toLowerCase());

    // Match filters
    const matchesCategory = !filters.category || part.category === filters.category;
    const matchesLocation = !filters.location || part.location === filters.location;
    const matchesSupplier = !filters.supplier || part.supplier === filters.supplier;
    const matchesPriceRange = !filters.priceRange ||
      (!filters.priceRange.min || part.price >= filters.priceRange.min) &&
      (!filters.priceRange.max || part.price <= filters.priceRange.max);

    return matchesVehicle && matchesEngine && matchesTransmission && matchesTrim &&
           matchesSearch && matchesCategory && matchesLocation && matchesSupplier && 
           matchesPriceRange;
  });

  if (!vehicleSelected) {
    return <VehicleWizard onComplete={handleVehicleSelection} />;
  }

  return (
    <div className="grid grid-cols-4 gap-6">
      <div className="col-span-1">
        <div className="bg-card p-4 rounded-lg shadow mb-6 border border-border">
          <h3 className="font-semibold text-lg mb-2">Selected Vehicle</h3>
          <div className="text-sm text-muted-foreground">
            <p>Make: {selectedVehicle?.make}</p>
            <p>Model: {selectedVehicle?.model}</p>
            <p>Year: {selectedVehicle?.year}</p>
            <p>Engine: {selectedVehicle?.engineType}</p>
            <p>Transmission: {selectedVehicle?.transmissionType}</p>
            <p>Trim: {selectedVehicle?.trimLevel}</p>
            {selectedVehicle?.vin && <p>VIN: {selectedVehicle.vin}</p>}
          </div>
          <button
            onClick={() => setVehicleSelected(false)}
            className="mt-4 text-sm text-primary hover:text-primary/80"
          >
            Change Vehicle
          </button>
        </div>
        <SearchFilters filters={filters} onFilterChange={setFilters} />
      </div>
      
      <div className="col-span-3">
        <div className="mb-6">
          <div className="relative">
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <input
              type="text"
              placeholder="Search parts by name..."
              className="w-full pl-10 pr-4 py-2 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredParts.map(part => (
            <PartCard key={part.id} part={part} />
          ))}
        </div>

        {filteredParts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No parts found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
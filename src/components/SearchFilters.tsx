import React from 'react';
import { SearchFilters } from '../types';
import { categories, suppliers, locations } from '../data/mockData';
import { FlagOff } from 'lucide-react';

interface Props {
  filters: SearchFilters;
  onFilterChange: (filters: SearchFilters) => void;
}

const SearchFiltersComponent: React.FC<Props> = ({ filters, onFilterChange }) => {
  return (
    <div className="bg-card p-4 rounded-lg shadow mb-6 border border-border">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-foreground">Category</label>
          <select
            className="mt-1 block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
            value={filters.category}
            onChange={(e) => onFilterChange({ ...filters, category: e.target.value })}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground">Price Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Min"
              value={filters.priceRange?.min || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: { ...filters.priceRange, min: Number(e.target.value) }
              })}
            />
            <input
              type="number"
              className="mt-1 block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
              placeholder="Max"
              value={filters.priceRange?.max || ''}
              onChange={(e) => onFilterChange({
                ...filters,
                priceRange: { ...filters.priceRange, max: Number(e.target.value) }
              })}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground">Location</label>
          <select
            className="mt-1 block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
            value={filters.location}
            onChange={(e) => onFilterChange({ ...filters, location: e.target.value })}
          >
            <option value="">All Locations</option>
            {locations.map((location) => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground">Supplier</label>
          <select
            className="mt-1 block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
            value={filters.supplier}
            onChange={(e) => onFilterChange({ ...filters, supplier: e.target.value })}
          >
            <option value="">All Suppliers</option>
            {suppliers.map((supplier) => (
              <option key={supplier} value={supplier}>{supplier}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchFiltersComponent;
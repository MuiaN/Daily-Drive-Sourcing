import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface BreadcrumbItem {
  id: string;
  label: string;
  active: boolean;
}

interface Props {
  items: BreadcrumbItem[];
  onNavigate: (itemId: string) => void;
}

const SelectionBreadcrumb: React.FC<Props> = ({ items, onNavigate }) => {
  return (
    <nav className="flex items-center space-x-2 text-sm mb-6 overflow-x-auto pb-2">
      <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
        <Home className="h-4 w-4 mr-1" />
        <span>Home</span>
      </Link>
      
      <ChevronRight className="h-4 w-4 text-muted-foreground" />
      
      <Link to="/search" className="text-muted-foreground hover:text-foreground">
        Parts Search
      </Link>
      
      {items.map((item, index) => (
        <React.Fragment key={item.id}>
          <ChevronRight className="h-4 w-4 text-muted-foreground" />
          {item.active ? (
            <span className="font-medium text-foreground">{item.label}</span>
          ) : (
            <button 
              className="text-muted-foreground hover:text-foreground"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default SelectionBreadcrumb;
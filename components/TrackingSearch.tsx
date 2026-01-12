
import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';
import { COLORS } from '../constants';

interface TrackingSearchProps {
  onSearch: (id: string) => void;
  isLoading: boolean;
}

const TrackingSearch: React.FC<TrackingSearchProps> = ({ onSearch, isLoading }) => {
  const [inputValue, setInputValue] = useState('YT253370070822578');

  const handleSearch = () => {
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] border border-gray-100 p-8 mb-8">
      <div className="flex flex-col gap-4">
        <h2 className="text-base font-bold text-gray-800">Track Your Parcel</h2>
        
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-green-600" size={20} />
            <input 
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Enter tracking number"
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-300 rounded-lg outline-none focus:border-green-600 transition-all text-gray-700 text-sm"
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            />
          </div>
          <button 
            onClick={handleSearch}
            disabled={isLoading}
            className="px-10 py-3.5 bg-green-800 hover:bg-green-900 text-white font-bold rounded-lg transition-all disabled:opacity-50 flex items-center justify-center min-w-[120px]"
            style={{ backgroundColor: COLORS.hasakiGreen }}
          >
            {isLoading ? <Loader2 className="animate-spin" size={20} /> : 'Track'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default TrackingSearch;

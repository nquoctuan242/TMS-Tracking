
import React, { useState, useCallback, useEffect } from 'react';
import Header from './components/Header';
import TrackingSearch from './components/TrackingSearch';
import TrackingDetail from './components/TrackingDetail';
import { MOCK_TRACKING_DATA, COLORS } from './constants';
import { TrackingData } from './types';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(null);

  const handleSearch = useCallback((id: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setTrackingResult(MOCK_TRACKING_DATA);
      setIsLoading(false);
    }, 600);
  }, []);

  useEffect(() => {
    handleSearch('YT253370070822578');
  }, [handleSearch]);

  return (
    <div className="min-h-screen bg-[#fcfdfe] flex flex-col font-sans selection:bg-green-100 selection:text-green-900">
      <Header />
      
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <TrackingSearch onSearch={handleSearch} isLoading={isLoading} />

        <div className="space-y-6">
          {trackingResult ? (
            <TrackingDetail data={trackingResult} />
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 py-32 flex flex-col items-center justify-center text-center">
              <p className="text-gray-400 text-sm font-medium">Enter a tracking number to see details.</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-50 py-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-[2px]">
            © 2024 Hasaki Vietnam Express • Global Logistics Solution
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

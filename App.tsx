
import React, { useState, useEffect } from 'react';
import TrackingDetail from './components/TrackingDetail';
import { MOCK_TRACKING_DATA, MOCK_DOMESTIC_VN_DATA, MOCK_DOMESTIC_US_DATA, COLORS } from './constants';
import { TrackingData } from './types';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [trackingResult, setTrackingResult] = useState<TrackingData | null>(null);
  const [selectedId, setSelectedId] = useState('YT253370070822578');

  useEffect(() => {
    handleSwitch(selectedId);
  }, [selectedId]);

  const handleSwitch = (id: string) => {
    if (id === 'HKVN88220011') {
      setTrackingResult(MOCK_DOMESTIC_VN_DATA);
    } else if (id === 'HKUS77110022') {
      setTrackingResult(MOCK_DOMESTIC_US_DATA);
    } else {
      setTrackingResult(MOCK_TRACKING_DATA);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdfe] flex flex-col font-sans selection:bg-green-100 selection:text-green-900">
      {/* Integrated Branding and Selection Row */}
      <div style={{ backgroundColor: COLORS.hasakiGreen }} className="shadow-md">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            {/* Logo and Brand */}
            <div className="flex items-center">
              <div className="bg-white p-1.5 rounded-lg mr-3 flex items-center justify-center shadow-sm">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5L15 13H19L21 15V19H17.5C17.2 17.8 16.2 17 15 17C13.8 17 12.8 17.8 12.5 19H8.5C8.2 17.8 7.2 17 6 17C4.8 17 3.8 17.8 3.5 19H3V17L9 5H11Z" fill={COLORS.hasakiGreen}/>
                  <path d="M2 9H7L8 10H3L2 9Z" fill={COLORS.hasakiGreen}/>
                  <path d="M1 12H6L7 13H2L1 12Z" fill={COLORS.hasakiGreen}/>
                  <path d="M0 15H5L6 16H1L0 15Z" fill={COLORS.hasakiGreen}/>
                  <circle cx="6" cy="19" r="1.5" fill={COLORS.hasakiGreen}/>
                  <circle cx="15" cy="19" r="1.5" fill={COLORS.hasakiGreen}/>
                </svg>
              </div>
              <span className="text-lg font-black tracking-tighter uppercase text-white">
                HASAKI EXPRESS
              </span>
            </div>

            {/* Selection Box */}
            <div className="flex flex-col gap-1 w-full md:w-80">
              <label htmlFor="tracking-select" className="text-[9px] font-bold text-white/70 uppercase tracking-widest ml-1">
                Select Tracking Number
              </label>
              <div className="relative">
                <select 
                  id="tracking-select"
                  value={selectedId}
                  onChange={(e) => setSelectedId(e.target.value)}
                  className="block w-full appearance-none bg-white border-2 border-green-400 text-gray-800 py-2.5 px-4 pr-10 rounded-xl leading-tight focus:outline-none focus:border-white transition-all text-sm font-bold shadow-sm cursor-pointer"
                >
                  <option value="YT253370070822578">YT253370070822578 (VN > US)</option>
                  <option value="HKVN88220011">HKVN88220011 (VN > VN)</option>
                  <option value="HKUS77110022">HKUS77110022 (US > US)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-green-600">
                  <ChevronDown size={18} />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      <main className="flex-1 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="space-y-6">
          {trackingResult ? (
            <TrackingDetail data={trackingResult} />
          ) : (
            <div className="bg-white rounded-2xl border border-dashed border-gray-200 py-32 flex flex-col items-center justify-center text-center">
              <p className="text-gray-400 text-sm font-medium">Loading tracking details...</p>
            </div>
          )}
        </div>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 mt-10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[2px]">
              © 2024 Hasaki Vietnam Express • Global Logistics Solution
            </p>
            <div className="flex gap-8">
              <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-green-600 transition-colors uppercase tracking-widest">Privacy Policy</a>
              <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-green-600 transition-colors uppercase tracking-widest">Terms of Service</a>
              <a href="#" className="text-[10px] font-bold text-gray-400 hover:text-green-600 transition-colors uppercase tracking-widest">Contact Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

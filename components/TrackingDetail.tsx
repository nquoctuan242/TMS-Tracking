import React from 'react';
import { Copy, ExternalLink, Globe, ClipboardList, Clock, Calendar } from 'lucide-react';
import { TrackingData } from '../types';
import TrackingTimeline from './TrackingTimeline';

interface TrackingDetailProps {
  data: TrackingData;
}

const countryMap: Record<string, string> = {
  'VN': 'Vietnam',
  'US': 'United States'
};

const TrackingDetail: React.FC<TrackingDetailProps> = ({ data }) => {
  const isDomestic = data.origin === data.destination;
  const originName = countryMap[data.origin] || data.origin;
  const destinationName = countryMap[data.destination] || data.destination;

  return (
    <div className="w-full animate-in fade-in slide-in-from-bottom-2 duration-300">
      <div className="bg-white rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden p-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
          <div className="flex items-start gap-4">
            <div className="bg-green-600 p-3 rounded-lg text-white shadow-md shadow-green-100 mt-1">
              <Calendar size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h2 className="text-2xl font-bold text-green-900 tracking-tight leading-tight">{data.lastEvent}</h2>
              </div>
              <div className="flex items-center gap-1.5 text-[12px] text-green-700 font-semibold mt-1">
                <Clock size={14} className="text-green-600" />
                <span>Total Time: <b className="text-green-900">{data.calendarDays} Days</b></span>
                <span className="text-gray-300 mx-1">(</span>
                <span>Working: <b className="text-green-900">{data.workingDays} Days</b></span>
                <span className="text-gray-300">)</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all border border-gray-100">
              <ClipboardList size={14} /> Copy History
            </button>
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-gray-600 bg-gray-50 hover:bg-gray-100 px-4 py-2 rounded-lg transition-all border border-gray-100">
              <ExternalLink size={14} /> Copy Link
            </button>
          </div>
        </div>

        {/* Summary Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Tracking Number</span>
            <p className="text-sm font-bold text-gray-800 tracking-tight">{data.trackingNumber}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Order Number</span>
            <p className="text-sm font-bold text-gray-800 tracking-tight">{data.orderNumber}</p>
          </div>
          
          <div className="flex flex-col gap-1.5 p-3 rounded-lg border border-transparent transition-all">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest text-center md:text-left">Destination</span>
            <div className="flex items-center justify-center md:justify-start gap-2 text-sm font-bold text-gray-800">
              <div className="bg-white p-1 rounded border border-gray-100 shadow-sm flex items-center justify-center">
                <Globe size={14} className="text-gray-400" />
              </div>
              <span className="text-[15px]">
                {isDomestic ? destinationName : `${data.origin} — ${data.destination}`}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Timeline Section */}
        <div className="mt-6 pt-6 border-t border-gray-50">
          <TrackingTimeline history={data.history} />
        </div>
      </div>
    </div>
  );
};

export default TrackingDetail;
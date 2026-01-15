import React from 'react';
import { Copy, ExternalLink, Globe, Printer, ClipboardList, Clock, Calendar, Check, Truck, Box, MapPin } from 'lucide-react';
import { TrackingData } from '../types';
import { COLORS } from '../constants';
import TrackingTimeline from './TrackingTimeline';

interface TrackingDetailProps {
  data: TrackingData;
}

const ProgressBar: React.FC<{ status: string }> = ({ status }) => {
  const stages = [
    { label: 'Ordered', icon: Box, statusMatch: ['Order information received', 'Packed & Awaiting Pickup'] },
    { label: 'Picked Up', icon: Truck, statusMatch: ['Package Picked Up'] },
    { label: 'In Transit', icon: MapPin, statusMatch: ['Order is in transit to next hub', 'Ready for collection at hub'] },
    { label: 'Out for Delivery', icon: Truck, statusMatch: ['Out for Delivery'] },
    { label: 'Delivered', icon: Check, statusMatch: ['Delivered successfully'] }
  ];

  // Simple heuristic to find current stage
  const currentStageIndex = stages.findIndex(stage => 
    stage.statusMatch.some(m => status.includes(m))
  );

  const activeIndex = currentStageIndex === -1 ? 0 : currentStageIndex;

  return (
    <div className="mb-12 mt-6">
      <div className="flex items-center justify-between relative px-2">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full" />
        {/* Progress Line */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-green-600 -translate-y-1/2 transition-all duration-1000 rounded-full"
          style={{ width: `${(activeIndex / (stages.length - 1)) * 100}%` }}
        />
        
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isCompleted = idx <= activeIndex;
          const isCurrent = idx === activeIndex;

          return (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted ? 'bg-green-600 border-green-600 text-white shadow-md' : 'bg-white border-gray-100 text-gray-300'}
                  ${isCurrent ? 'ring-4 ring-green-50 scale-110' : ''}`}
              >
                <Icon size={18} />
              </div>
              <span className={`absolute top-12 whitespace-nowrap text-[10px] font-bold uppercase tracking-tighter
                ${isCompleted ? 'text-green-800' : 'text-gray-400'}`}>
                {stage.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const TrackingDetail: React.FC<TrackingDetailProps> = ({ data }) => {
  const isDomestic = data.origin === data.destination;

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Left Column */}
      <div className="flex-1 bg-white rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden p-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-green-600 p-2.5 rounded-lg text-white shadow-sm shadow-green-100">
              <Calendar size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-green-900 tracking-tight">{data.lastEvent}</h3>
                {isDomestic && (
                  <span className="bg-green-100 text-green-700 text-[9px] font-black px-2 py-0.5 rounded-full uppercase border border-green-200">
                    Domestic
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-[11px] text-green-700 font-medium mt-1">
                <Clock size={12} />
                <span>Total Time: <b>{data.calendarDays} Days</b></span>
                <span className="text-gray-300 mx-1">•</span>
                <span>Working: <b>{data.workingDays} Days</b></span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 mt-4 md:mt-0">
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-green-800 bg-[#f1f9f5] hover:bg-[#e0f2e9] px-4 py-2 rounded-lg transition-all border border-[#e0f2e9]">
              <Copy size={14} /> Copy History
            </button>
            <button className="flex items-center gap-1.5 text-[11px] font-bold text-green-800 bg-[#f1f9f5] hover:bg-[#e0f2e9] px-4 py-2 rounded-lg transition-all border border-[#e0f2e9]">
              <ExternalLink size={14} /> Copy Link
            </button>
          </div>
        </div>

        {/* New feature: Horizontal Progress Bar for domestic orders */}
        {isDomestic && <ProgressBar status={data.lastEvent} />}

        {/* Summary Row */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mb-10 ${isDomestic ? 'mt-4' : ''}`}>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Tracking Number</span>
            <p className="text-sm font-bold text-gray-800">{data.trackingNumber}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Order Number</span>
            <p className="text-sm font-bold text-gray-800">{data.orderNumber}</p>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Destination</span>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
              <Globe size={14} className="text-gray-400" />
              <span>{data.origin} {isDomestic ? '=' : '—'} {data.destination}</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-8 border-t border-gray-50 pt-8">
           <h4 className="text-[12px] font-bold text-gray-800 mb-6 flex items-center gap-2 uppercase tracking-widest border-l-4 border-green-600 pl-3">
            Detailed Tracking Log
          </h4>
          <TrackingTimeline history={data.history} />
        </div>
      </div>

      {/* Right Column (Sidebar) */}
      <div className="w-full lg:w-[320px] space-y-6">
        <div className="bg-[#f8fdfb] rounded-xl border border-[#e8f6ef] p-6 shadow-sm">
          <h4 className="text-[12px] font-bold text-green-800 mb-5 flex items-center gap-2 uppercase tracking-wide">
            <ClipboardList size={16} />
            ADDITIONAL NOTES
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-500 font-medium">Carrier:</span>
              <span className="font-bold text-green-800">{isDomestic ? 'Hasaki Express' : 'YunExpress Global'}</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-500 font-medium">Hotline:</span>
              <span className="font-bold text-green-800">{isDomestic ? '1900 636 900' : '+1 (949) 688-6032'}</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-500 font-medium">Email:</span>
              <span className="font-bold text-green-800 underline">support@hasaki.vn</span>
            </div>
            <div className="pt-4 border-t border-[#e8f6ef] mt-2">
              <p className="italic text-[10px] text-green-600 font-medium">
                {isDomestic ? 'Open Mon-Sun (8am - 10pm ICT)' : 'Support Hours: Mon-Fri (11am - 8pm EST)'}
              </p>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#1e293b] text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-slate-100 group">
          <Printer size={18} className="group-hover:rotate-12 transition-transform" />
          <span className="text-sm">Print Label & Receipt</span>
        </button>
      </div>
    </div>
  );
};

export default TrackingDetail;
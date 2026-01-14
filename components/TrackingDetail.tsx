import React from 'react';
import { Copy, ExternalLink, Globe, Printer, ClipboardList, Clock, Calendar, Check, Truck, Box, MapPin, Info } from 'lucide-react';
import { TrackingData } from '../types';
import { COLORS } from '../constants';
import TrackingTimeline from './TrackingTimeline';

interface TrackingDetailProps {
  data: TrackingData;
}

const ProgressBar: React.FC<{ status: string }> = ({ status }) => {
  // New status set stages based on the green image provided
  const stages = [
    { label: 'Received', icon: Box, statusMatch: ['Order information received', 'Packed & Awaiting Pickup'] },
    { label: 'Picked Up', icon: Truck, statusMatch: ['Package Picked Up'] },
    { label: 'Transit', icon: MapPin, statusMatch: ['Order is in transit to next hub', 'Ready for collection at hub'] },
    { label: 'Out for Delivery', icon: Truck, statusMatch: ['Out for Delivery'] },
    { label: 'Delivered', icon: Check, statusMatch: ['Delivered successfully'] }
  ];

  const currentStageIndex = stages.findIndex(stage => 
    stage.statusMatch.some(m => status.toLowerCase().includes(m.toLowerCase()))
  );

  // If status is "Delivered successfully", index should be the last one
  const activeIndex = status.toLowerCase().includes('delivered successfully') ? stages.length - 1 : (currentStageIndex === -1 ? 0 : currentStageIndex);

  return (
    <div className="mb-14 mt-10">
      <div className="flex items-center justify-between relative px-4">
        {/* Background Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -translate-y-1/2 rounded-full" />
        {/* Progress Line */}
        <div 
          className="absolute top-1/2 left-0 h-1 bg-green-600 -translate-y-1/2 transition-all duration-1000 ease-in-out rounded-full"
          style={{ width: `${(activeIndex / (stages.length - 1)) * 100}%` }}
        />
        
        {stages.map((stage, idx) => {
          const Icon = stage.icon;
          const isCompleted = idx <= activeIndex;
          const isCurrent = idx === activeIndex;

          return (
            <div key={idx} className="relative z-10 flex flex-col items-center">
              <div 
                className={`w-11 h-11 rounded-full flex items-center justify-center border-2 transition-all duration-300
                  ${isCompleted ? 'bg-green-600 border-green-600 text-white shadow-md' : 'bg-white border-gray-100 text-gray-300'}
                  ${isCurrent ? 'ring-4 ring-green-100 scale-110' : ''}`}
              >
                <Icon size={20} />
              </div>
              <span className={`absolute top-14 whitespace-nowrap text-[10px] font-bold uppercase tracking-tight text-center
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
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-start justify-between mb-10">
          <div className="flex items-start gap-4">
            <div className="bg-green-600 p-3 rounded-lg text-white shadow-md shadow-green-100 mt-1">
              <Calendar size={24} />
            </div>
            <div>
              <div className="flex items-center gap-3">
                <h3 className="text-2xl font-bold text-green-900 tracking-tight leading-tight">{data.lastEvent}</h3>
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
          
          {/* Destination Block - Matches Screenshot Layout */}
          <div className="flex flex-col gap-1.5 p-3 rounded-lg bg-gray-50/50 border border-transparent transition-all hover:border-gray-100">
            <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Destination</span>
            <div className="flex items-center gap-2 text-sm font-bold text-gray-800">
              <div className="bg-white p-1 rounded border border-gray-100 shadow-sm">
                <Globe size={14} className="text-gray-400" />
              </div>
              <span className="text-[15px]">{data.origin} — {data.destination}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Progress Bar: Triggers for VN-VN or US-US or any domestic */}
        {isDomestic ? (
          <ProgressBar status={data.lastEvent} />
        ) : (
          <div className="py-6 border-y border-gray-50 my-6">
            <div className="flex items-center gap-2 text-[11px] font-bold text-blue-600 uppercase tracking-widest bg-blue-50 w-fit px-3 py-1 rounded-full border border-blue-100 mb-2">
              <Info size={12} />
              International Logistics Mode
            </div>
            <p className="text-[12px] text-gray-500 font-medium">Standard international tracking set active for {data.origin}-{data.destination} route.</p>
          </div>
        )}

        {/* Timeline Section */}
        <div className="mt-12">
          <TrackingTimeline history={data.history} />
        </div>
      </div>

      {/* Right Column (Sidebar) */}
      <div className="w-full lg:w-[320px] space-y-6">
        <div className="bg-[#f8fdfb] rounded-xl border border-[#e8f6ef] p-6 shadow-sm">
          <div className="flex items-center gap-2 mb-5">
             <ClipboardList size={16} className="text-green-600" />
             <h4 className="text-[12px] font-bold text-green-900 uppercase tracking-widest">
              ADDITIONAL NOTES
            </h4>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[12px]">
              <span className="text-gray-500 font-medium">Carrier:</span>
              <span className="font-bold text-green-800">{isDomestic ? 'Hasaki Express' : 'YunExpress Global'}</span>
            </div>
            <div className="flex justify-between items-center text-[12px]">
              <span className="text-gray-500 font-medium">Hotline:</span>
              <span className="font-bold text-green-800">{isDomestic ? '1900 636 900' : '+1 (949) 688-6032'}</span>
            </div>
            <div className="flex justify-between items-center text-[12px]">
              <span className="text-gray-500 font-medium">Email:</span>
              <span className="font-bold text-green-800 border-b border-green-200">cs@hasaki.vn</span>
            </div>
            <div className="pt-4 border-t border-[#e8f6ef] mt-2">
              <p className="text-[11px] text-green-600 font-bold tracking-tight">
                {isDomestic ? 'Support Hours: Mon-Sun (8am - 10pm ICT)' : 'Support Hours: Mon-Fri (11am - 8pm EST)'}
              </p>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-3 py-4 bg-[#1e293b] text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-slate-100 group">
          <Printer size={18} className="group-hover:scale-110 transition-transform" />
          <span className="text-sm uppercase tracking-widest">Print Label & Receipt</span>
        </button>
      </div>
    </div>
  );
};

export default TrackingDetail;

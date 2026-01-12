
import React from 'react';
import { Copy, ExternalLink, Globe, Printer, ClipboardList, Clock, Calendar } from 'lucide-react';
import { TrackingData } from '../types';
import { COLORS } from '../constants';
import TrackingTimeline from './TrackingTimeline';

interface TrackingDetailProps {
  data: TrackingData;
}

const TrackingDetail: React.FC<TrackingDetailProps> = ({ data }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-in fade-in slide-in-from-bottom-2 duration-300">
      {/* Left Column */}
      <div className="flex-1 bg-white rounded-xl shadow-[0_4px_20px_-10px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden p-8">
        {/* Header Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 pb-6 border-b border-gray-50">
          <div className="flex items-center gap-4">
            <div className="bg-green-600 p-2.5 rounded-lg text-white">
              <Calendar size={22} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-green-900 tracking-tight">Delivered successfully</h3>
              <div className="flex items-center gap-1 text-[11px] text-green-700 font-medium mt-1">
                <Clock size={12} />
                <span>Total Time: <b>{data.calendarDays} Days</b></span>
                <span className="text-gray-300">(</span>
                <span>Working: <b>{data.workingDays} Days</b></span>
                <span className="text-gray-300">)</span>
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

        {/* Summary Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
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
              <span>{data.origin} — {data.destination}</span>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <TrackingTimeline history={data.history} />
      </div>

      {/* Right Column (Sidebar) */}
      <div className="w-full lg:w-[320px] space-y-6">
        <div className="bg-[#f8fdfb] rounded-xl border border-[#e8f6ef] p-6">
          <h4 className="text-[12px] font-bold text-green-800 mb-5 flex items-center gap-2 uppercase tracking-wide">
            <ClipboardList size={16} />
            Additional Notes
          </h4>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-500 font-medium">Carrier:</span>
              <span className="font-bold text-green-800">YunExpress Global</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-500 font-medium">Hotline:</span>
              <span className="font-bold text-green-800">+1 (949) 688-6032</span>
            </div>
            <div className="flex justify-between items-center text-[11px]">
              <span className="text-gray-500 font-medium">Email:</span>
              <span className="font-bold text-green-800 underline">cs@hasaki.vn</span>
            </div>
            <div className="pt-4 border-t border-[#e8f6ef] mt-2">
              <p className="italic text-[10px] text-green-600 font-medium">Support Hours: Mon-Fri (11am - 8pm EST)</p>
            </div>
          </div>
        </div>

        <button className="w-full flex items-center justify-center gap-2 py-4 bg-[#1e293b] text-white rounded-xl font-bold hover:bg-slate-900 transition-all shadow-lg shadow-slate-100">
          <Printer size={18} />
          <span className="text-sm">Print Label & Receipt</span>
        </button>
      </div>
    </div>
  );
};

export default TrackingDetail;

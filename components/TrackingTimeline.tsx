
import React from 'react';
import { CheckCircle2, MapPin, ClipboardList } from 'lucide-react';
import { TrackingEvent } from '../types';
import { COLORS } from '../constants';

interface TrackingTimelineProps {
  history: TrackingEvent[];
}

const TrackingTimeline: React.FC<TrackingTimelineProps> = ({ history }) => {
  return (
    <div className="relative mt-4">
      {history.map((event, index) => {
        const isFirst = index === 0;
        const isLast = index === history.length - 1;

        return (
          <div key={index} className="flex group relative">
            {/* Timeline Line & Dot */}
            <div className="flex flex-col items-center mr-6">
              <div 
                className={`relative z-10 flex items-center justify-center rounded-full transition-all
                  ${isFirst ? 'w-6 h-6 bg-white border-2 border-green-600' : 'w-3 h-3 bg-gray-200 mt-1.5'}`}
              >
                {isFirst && <CheckCircle2 size={18} className="text-green-600" />}
              </div>
              {!isLast && (
                <div className="w-[2px] bg-gray-100 absolute top-6 bottom-0 left-[11px]" />
              )}
            </div>

            {/* Event Content */}
            <div className={`pb-8 flex-1`}>
              <div className="flex justify-between items-start gap-4">
                <div>
                  <h4 className={`text-sm font-bold ${isFirst ? 'text-green-800' : 'text-gray-700'}`}>
                    {event.status}
                  </h4>
                  <p className="text-[11px] text-gray-400 font-medium mt-0.5">{event.date}</p>
                </div>
                
                <div className="flex items-center gap-2 text-[11px] text-gray-400 whitespace-nowrap pt-1">
                  <div className="flex items-center gap-1">
                    <MapPin size={12} className="text-gray-300" />
                    <span>{event.location}</span>
                  </div>
                  <span className="text-gray-200">|</span>
                  <span>{event.time}</span>
                </div>
              </div>

              {isFirst && (
                <div className="mt-4 p-4 bg-[#f1f9f5] rounded-lg border border-[#e0f2e9] flex items-start gap-3">
                  <div className="bg-white p-1.5 rounded-md shadow-sm">
                    <ClipboardList className="text-green-600" size={14} />
                  </div>
                  <p className="text-[11px] text-green-800 leading-relaxed font-medium">
                    Delivery successful. If you have any issues, please contact our support at{' '}
                    <a href="mailto:support@hasaki.vn" className="underline font-bold">support@hasaki.vn</a> or call{' '}
                    <span className="font-bold">+84 1900 636 900</span>.
                  </p>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TrackingTimeline;

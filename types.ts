
export interface TrackingEvent {
  date: string;
  time: string;
  location: string;
  status: string;
  icon?: string;
}

export interface TrackingData {
  trackingNumber: string;
  deliveryStatus: string;
  lastMileTracking: string;
  orderNumber: string;
  lastEvent: string;
  origin: string;
  destination: string;
  calendarDays: number;
  workingDays: number;
  history: TrackingEvent[];
}

export type StatusTab = 'All' | 'Processing' | 'Transit' | 'Delivered' | 'Not Found' | 'Alert' | 'Returned';

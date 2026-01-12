
import { TrackingData } from './types';

export const COLORS = {
  hasakiGreen: '#005e32',
  hasakiLightGreen: '#ebf3ed',
  hasakiDeepGreen: '#004a27',
  textMain: '#1e293b',
  textMuted: '#64748b',
  borderLight: '#e2e8f0'
};

export const MOCK_TRACKING_DATA: TrackingData = {
  trackingNumber: 'YT253370070822578',
  deliveryStatus: 'Delivered',
  lastMileTracking: 'GFUS01032089934403',
  orderNumber: 'S251203XR4W',
  lastEvent: 'Delivered. DoorYard.',
  origin: 'VN',
  destination: 'US',
  calendarDays: 14.3,
  workingDays: 10.3,
  history: [
    {
      date: 'Friday, December 22, 2023',
      time: '23:02:04 local time',
      location: 'DoorYard',
      status: 'Delivered successfully'
    },
    {
      date: 'Friday, December 22, 2023',
      time: '19:46:33 local time',
      location: 'Honolulu',
      status: 'Out for Delivery'
    },
    {
      date: 'Thursday, December 21, 2023',
      time: '19:41:33 local time',
      location: 'HNL01',
      status: 'Departed GOFO Delivery Station'
    },
    {
      date: 'Thursday, December 21, 2023',
      time: '17:11:40 local time',
      location: 'Honolulu',
      status: 'Arrived at GOFO Delivery Station'
    },
    {
      date: 'Wednesday, December 20, 2023',
      time: '01:34:37 local time',
      location: 'Vernon',
      status: 'In Transit to Next Facility'
    },
    {
      date: 'Monday, December 18, 2023',
      time: '19:37:11 local time',
      location: 'Vernon',
      status: 'Departed GOFO Regional Hub'
    },
    {
      date: 'Monday, December 18, 2023',
      time: '16:03:04 local time',
      location: 'Vernon',
      status: 'Arrived at GOFO Regional Hub'
    },
    {
      date: 'Sunday, December 17, 2023',
      time: '12:00:00 local time',
      location: 'US Customs',
      status: 'Clearance processing completed - Import'
    }
  ]
};

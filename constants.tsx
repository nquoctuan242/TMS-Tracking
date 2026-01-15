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
  lastEvent: 'Delivered successfully',
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
      time: '14:20:11 local time',
      location: 'Local Hub',
      status: 'In transit by local carrier'
    },
    {
      date: 'Wednesday, December 20, 2023',
      time: '09:34:37 local time',
      location: 'US Customs',
      status: 'Clearance processing completed - Import'
    },
    {
      date: 'Wednesday, December 20, 2023',
      time: '01:12:00 local time',
      location: 'US Customs',
      status: 'In clearance processing - Import'
    },
    {
      date: 'Tuesday, December 19, 2023',
      time: '18:45:00 local time',
      location: 'LAX Airport',
      status: 'International flight has arrived'
    },
    {
      date: 'Monday, December 18, 2023',
      time: '22:15:33 local time',
      location: 'SGN Airport',
      status: 'Departed from airport'
    },
    {
      date: 'Monday, December 18, 2023',
      time: '16:03:04 local time',
      location: 'SGN Airport',
      status: 'Arrived at the origin international airport'
    },
    {
      date: 'Sunday, December 17, 2023',
      time: '11:20:00 local time',
      location: 'Sort Facility',
      status: 'Shipment is in transit to next facility'
    },
    {
      date: 'Saturday, December 16, 2023',
      time: '04:10:00 local time',
      location: 'Sort Facility',
      status: 'Departed from sort facility'
    },
    {
      date: 'Friday, December 15, 2023',
      time: '21:30:00 local time',
      location: 'Sort Facility',
      status: 'Arrived at sort facility'
    },
    {
      date: 'Thursday, December 14, 2023',
      time: '15:45:00 local time',
      location: 'Warehouse',
      status: 'Package Picked Up'
    },
    {
      date: 'Thursday, December 14, 2023',
      time: '10:00:00 local time',
      location: 'Warehouse',
      status: 'Packed & Awaiting Pickup'
    },
    {
      date: 'Wednesday, December 13, 2023',
      time: '09:00:00 local time',
      location: 'System',
      status: 'Order information received'
    }
  ]
};

export const MOCK_DOMESTIC_DATA: TrackingData = {
  trackingNumber: 'HKVN88220011',
  deliveryStatus: 'In Transit',
  lastMileTracking: 'HKVN88220011',
  orderNumber: 'D240506DOM',
  lastEvent: 'Order is in transit to next hub',
  origin: 'VN',
  destination: 'VN',
  calendarDays: 2.5,
  workingDays: 2,
  history: [
    {
      date: 'Monday, May 06, 2024',
      time: '14:30:00 local time',
      location: 'HCM District 10 Hub',
      status: 'Order is in transit to next hub'
    },
    {
      date: 'Monday, May 06, 2024',
      time: '09:15:00 local time',
      location: 'HCM Central Warehouse',
      status: 'Package Picked Up'
    },
    {
      date: 'Sunday, May 05, 2024',
      time: '18:00:00 local time',
      location: 'HCM Central Warehouse',
      status: 'Packed & Awaiting Pickup'
    },
    {
      date: 'Sunday, May 05, 2024',
      time: '10:00:00 local time',
      location: 'System',
      status: 'Order information received'
    }
  ]
};
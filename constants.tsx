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
      date: 'Sunday, December 17, 2023',
      time: '11:20:00 local time',
      location: 'Sort Facility',
      status: 'Shipment is in transit to next facility'
    },
    {
      date: 'Thursday, December 14, 2023',
      time: '15:45:00 local time',
      location: 'Warehouse',
      status: 'Package Picked Up'
    },
    {
      date: 'Wednesday, December 13, 2023',
      time: '09:00:00 local time',
      location: 'System',
      status: 'Order information received'
    }
  ]
};

export const MOCK_DOMESTIC_VN_DATA: TrackingData = {
  trackingNumber: 'HKVN88220011',
  deliveryStatus: 'In Transit',
  lastMileTracking: 'HKVN88220011',
  orderNumber: 'D240506VN',
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

export const MOCK_DOMESTIC_US_DATA: TrackingData = {
  trackingNumber: 'HKUS77110022',
  deliveryStatus: 'Delivered',
  lastMileTracking: 'HKUS77110022',
  orderNumber: 'D250115US',
  lastEvent: 'Delivered successfully',
  origin: 'US',
  destination: 'US',
  calendarDays: 3.1,
  workingDays: 3,
  history: [
    {
      date: 'Wednesday, January 15, 2025',
      time: '10:45:00 local time',
      location: 'New York Residence',
      status: 'Delivered successfully'
    },
    {
      date: 'Wednesday, January 15, 2025',
      time: '07:30:00 local time',
      location: 'NY Distribution Center',
      status: 'Out for Delivery'
    },
    {
      date: 'Tuesday, January 14, 2025',
      time: '20:15:00 local time',
      location: 'NY Distribution Center',
      status: 'Ready for collection at hub'
    },
    {
      date: 'Monday, January 13, 2025',
      time: '14:20:00 local time',
      location: 'New Jersey Sort Center',
      status: 'Order is in transit to next hub'
    },
    {
      date: 'Monday, January 13, 2025',
      time: '09:10:00 local time',
      location: 'Warehouse A',
      status: 'Package Picked Up'
    },
    {
      date: 'Sunday, January 12, 2025',
      time: '10:00:00 local time',
      location: 'Warehouse A',
      status: 'Packed & Awaiting Pickup'
    },
    {
      date: 'Sunday, January 12, 2025',
      time: '08:00:00 local time',
      location: 'System',
      status: 'Order information received'
    }
  ]
};

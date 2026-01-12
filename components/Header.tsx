
import React from 'react';
import { Search, Menu, User } from 'lucide-react';
import { COLORS } from '../constants';

const CustomTruckLogo: React.FC<{ size?: number; color?: string }> = ({ size = 24, color = 'currentColor' }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 100 100" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      d="M90.8 51.5L78.2 39.4C76.8 38 74.8 37.2 72.8 37.2H58.6L52.8 54.4H52.7L46.8 71.6H50.5C50.2 73 50.1 74.5 50.1 76C50.1 82.1 55 87 61.1 87C67.2 87 72.1 82.1 72.1 76C72.1 74.5 71.9 73 71.6 71.6H79.6C79.3 73 79.2 74.5 79.2 76C79.2 82.1 84.1 87 90.2 87C96.3 87 101.2 82.1 101.2 76C101.2 72.8 99.8 69.9 97.6 67.9V56.5C97.6 54.6 96.8 52.8 95.4 51.5L90.8 51.5Z" 
      fill={color} 
      transform="translate(-10, -5)"
    />
    <path 
      d="M51.8 19.4L20.5 71.6H39.5L46.3 37.2H51.8L51.8 19.4Z" 
      fill={color} 
      transform="translate(-5, 0)"
    />
    <path d="M42.4 37.2L34.1 43.4H9.5L16.2 37.2H42.4Z" fill={color} transform="translate(0, 0)"/>
    <path d="M34.8 54.4L26.5 60.6H1.9L8.6 54.4H34.8Z" fill={color} transform="translate(0, 0)"/>
    <path d="M27.2 71.6L18.9 77.8H0L6.7 71.6H27.2Z" fill={color} transform="translate(0, 0)"/>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-green-900 shadow-md" style={{ backgroundColor: COLORS.hasakiGreen }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center cursor-pointer group">
              {/* Logo Icon Container - Custom Truck with Arrows */}
              <div className="bg-white p-1 rounded-lg mr-3 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <svg width="28" height="28" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path fill={COLORS.hasakiGreen} d="M896 512H768l-64-256H512v320h384v-64zm-512 64h128v-64H384v64zm0 128h128v-64H384v64zm0-256h128v-64H384v64zM128 448l64 64h128l-64-64H128zm64 128l64 64h128l-64-64H192zm64 128l64 64h128l-64-64H256zm128-448l64-64H128l64 64h256zm64 128l64-64H192l64 64h256zm64 128l64-64H256l64 64h256zm320-192l64 128h128V448H704l-64 128zm64 320c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm-320 0c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
                  {/* Accurate recreation of the provided logo silhouette */}
                  <g transform="translate(100, 100) scale(0.8)">
                    <path fill={COLORS.hasakiGreen} d="M100 650 L350 650 L450 150 L200 150 Z" />
                    <path fill={COLORS.hasakiGreen} d="M480 380 L800 380 L950 550 L950 750 L650 750 L650 650 L400 650 Z" />
                    <circle fill={COLORS.hasakiGreen} cx="500" cy="750" r="80" />
                    <circle fill={COLORS.hasakiGreen} cx="850" cy="750" r="80" />
                    <path fill={COLORS.hasakiGreen} d="M0 400 L300 400 L350 450 L50 450 Z" />
                    <path fill={COLORS.hasakiGreen} d="M-50 500 L250 500 L300 550 L0 550 Z" />
                    <path fill={COLORS.hasakiGreen} d="M-100 600 L200 600 L250 650 L-50 650 Z" />
                  </g>
                </svg>
                {/* Simplified high-fidelity SVG for the logo */}
                <svg className="absolute" width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 5L15 13H19L21 15V19H17.5C17.2 17.8 16.2 17 15 17C13.8 17 12.8 17.8 12.5 19H8.5C8.2 17.8 7.2 17 6 17C4.8 17 3.8 17.8 3.5 19H3V17L9 5H11Z" fill={COLORS.hasakiGreen}/>
                  <path d="M2 9H7L8 10H3L2 9Z" fill={COLORS.hasakiGreen}/>
                  <path d="M1 12H6L7 13H2L1 12Z" fill={COLORS.hasakiGreen}/>
                  <path d="M0 15H5L6 16H1L0 15Z" fill={COLORS.hasakiGreen}/>
                  <circle cx="6" cy="19" r="1.5" fill={COLORS.hasakiGreen}/>
                  <circle cx="15" cy="19" r="1.5" fill={COLORS.hasakiGreen}/>
                </svg>
              </div>
              {/* Text */}
              <span className="text-xl font-black tracking-tighter uppercase text-white">
                HASAKI EXPRESS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-white/80 hover:text-white transition-colors">
              <Search size={20} />
            </button>
            <div className="h-6 w-px bg-white/20"></div>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 hover:bg-white/10 transition-all text-white">
              <User size={16} />
              <span className="text-sm font-semibold tracking-wide">Login</span>
            </button>
            <button className="md:hidden p-2 text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

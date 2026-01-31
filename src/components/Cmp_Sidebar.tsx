import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Users, LayoutDashboard, AlertCircle } from 'lucide-react';

interface NavItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

export function Cmp_Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { name: 'Dashboard', path: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
    { name: 'Clients', path: '/admin/clients', icon: <Users className="w-5 h-5" /> },
    { name: 'Alerts', path: '/admin/alerts', icon: <AlertCircle className="w-5 h-5" /> }
  ];

  return (
    <div className="w-64 bg-white border-r border-[#E0E0E0] h-screen flex flex-col">
      <div className="px-8 py-6 border-b border-[#E0E0E0]">
        <h2 className="text-[#1A1A1A]">Studio CRM</h2>
      </div>
      
      <nav className="flex-1 px-4 py-6">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 mb-1 transition-colors ${
                isActive 
                  ? 'bg-[#6B7532] text-white' 
                  : 'text-[#666666] hover:bg-[#F5F5F5] hover:text-[#1A1A1A]'
              }`}
              style={{ borderRadius: '4px' }}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}

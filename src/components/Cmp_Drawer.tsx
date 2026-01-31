import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Image, Video, CreditCard, MessageSquare, FileText, Lightbulb, LogOut } from 'lucide-react';

interface NavItem {
  id: string;
  txt_Title: string;
  icon: React.ReactNode;
  route: string;
  txt_Badge?: string;
}

export function Cmp_Drawer() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const list_NavItems: NavItem[] = [
    { id: 'gallery', txt_Title: 'גלריה', icon: <Image className="w-5 h-5" />, route: '/client/gallery', txt_Badge: '45 נבחרו' },
    { id: 'video', txt_Title: 'וידאו', icon: <Video className="w-5 h-5" />, route: '/client/video' },
    { id: 'payments', txt_Title: 'תשלומים', icon: <CreditCard className="w-5 h-5" />, route: '/client/payments' },
    { id: 'chat', txt_Title: 'צ\'אט', icon: <MessageSquare className="w-5 h-5" />, route: '/client/chat', txt_Badge: '2 חדשים' },
    { id: 'documents', txt_Title: 'מסמכים', icon: <FileText className="w-5 h-5" />, route: '/client/documents' },
    { id: 'tips', txt_Title: 'טיפים ומאמרים', icon: <Lightbulb className="w-5 h-5" />, route: '/client/tips' }
  ];

  const handleNavigate = (route: string) => {
    navigate(route);
    setIsOpen(false);
  };

  return (
    <>
      {/* Menu Button */}
      <button
        id="btn_MenuToggle"
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-[#F5F5F5] transition-colors"
        style={{ borderRadius: '4px' }}
        aria-label="Toggle menu"
      >
        <Menu className="w-6 h-6 text-[#1A1A1A]" />
      </button>

      {/* Drawer Overlay */}
      {isOpen && (
        <div
          id="Frame_DrawerOverlay"
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer - RTL: slides from LEFT */}
      <div
        id="Frame_DrawerPanel"
        className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Drawer Header */}
          <div id="Frame_DrawerHeader" className="flex items-center justify-between px-6 py-6 border-b border-[#E0E0E0]">
            <button
              id="btn_DrawerClose"
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-[#F5F5F5] transition-colors"
              style={{ borderRadius: '4px' }}
            >
              <X className="w-5 h-5 text-[#1A1A1A]" />
            </button>
            <h2 id="txt_DrawerTitle" className="text-[#1A1A1A]">תפריט</h2>
          </div>

          {/* Navigation Items */}
          <nav id="Frame_NavItems" className="flex-1 px-4 py-6 overflow-y-auto">
            <button
              id="btn_NavDashboard"
              onClick={() => handleNavigate('/client')}
              className={`w-full text-right px-4 py-3 mb-2 transition-colors ${
                location.pathname === '/client'
                  ? 'bg-[#6B7532] text-white'
                  : 'text-[#1A1A1A] hover:bg-[#F5F5F5]'
              }`}
              style={{ borderRadius: '4px' }}
            >
              <span className="text-sm font-medium txt_NavDashboard">לוח בקרה</span>
            </button>

            <div className="my-4 border-t border-[#E0E0E0]" />

            {list_NavItems.map((item) => {
              const isActive = location.pathname === item.route;
              return (
                <button
                  key={item.id}
                  id={`btn_Nav${item.id}`}
                  onClick={() => handleNavigate(item.route)}
                  className={`w-full flex items-center justify-between px-4 py-3 mb-2 transition-colors ${
                    isActive
                      ? 'bg-[#6B7532] text-white'
                      : 'text-[#1A1A1A] hover:bg-[#F5F5F5]'
                  }`}
                  style={{ borderRadius: '4px' }}
                >
                  {item.txt_Badge && (
                    <span
                      className={`px-2 py-0.5 text-xs font-medium txt_Badge ${
                        isActive ? 'bg-white/20 text-white' : 'bg-[#6B7532] text-white'
                      }`}
                      style={{ borderRadius: '4px' }}
                    >
                      {item.txt_Badge}
                    </span>
                  )}
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium txt_NavTitle">{item.txt_Title}</span>
                    {item.icon}
                  </div>
                </button>
              );
            })}
          </nav>

          {/* Drawer Footer */}
          <div id="Frame_DrawerFooter" className="px-4 py-6 border-t border-[#E0E0E0]">
            <button
              id="btn_Logout"
              onClick={() => navigate('/login')}
              className="w-full flex items-center gap-3 justify-end px-4 py-3 text-[#666666] hover:bg-[#F5F5F5] hover:text-[#1A1A1A] transition-colors"
              style={{ borderRadius: '4px' }}
            >
              <span className="text-sm font-medium txt_Logout">התנתקות</span>
              <LogOut className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

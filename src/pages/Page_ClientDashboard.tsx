import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, Image, Video, CreditCard, MessageSquare, FileText, Lightbulb, CheckCircle, Calendar, Package } from 'lucide-react';

interface DashboardSection {
  id: string;
  txt_Title: string;
  txt_Description: string;
  icon: React.ReactNode;
  route: string;
  txt_Badge?: string;
}

export function Page_ClientDashboard() {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Gallery images for slideshow
  const list_GallerySlideshow = [
    'https://images.unsplash.com/photo-1654512721615-5622d6ede1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzY5NDQzMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1767986012138-4893f40932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlTGFnYW50fGVufDF8fHx8MTc2OTM3MzcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYnJpZGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk0MjM5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1508767618323-33eab6c1cac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG8lMjBnYWxsZXJ5fGVufDF8fHx8MTc2OTQ0MzIzNHww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1656103743142-229f0adaf068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3Njk0MDEwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1551488832-a7a60e7c966e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGV0YWlscyUyMHJpbmdzfGVufDF8fHx8MTc2OTQzNTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % list_GallerySlideshow.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const list_Sections: DashboardSection[] = [
    {
      id: 'gallery',
      txt_Title: 'גלריה',
      txt_Description: 'צפייה ובחירת תמונות מועדפות',
      icon: <Image className="w-6 h-6" />,
      route: '/client/gallery',
      txt_Badge: '45 נבחרו'
    },
    {
      id: 'video',
      txt_Title: 'וידאו',
      txt_Description: 'הורדת וידאו החתונה',
      icon: <Video className="w-6 h-6" />,
      route: '/client/video'
    },
    {
      id: 'payments',
      txt_Title: 'תשלומים',
      txt_Description: 'צפייה בסטטוס תשלום והיסטוריה',
      icon: <CreditCard className="w-6 h-6" />,
      route: '/client/payments'
    },
    {
      id: 'chat',
      txt_Title: 'צ\'אט',
      txt_Description: 'התכתבות עם הצלם',
      icon: <MessageSquare className="w-6 h-6" />,
      route: '/client/chat',
      txt_Badge: '2 חדשים'
    },
    {
      id: 'documents',
      txt_Title: 'מסמכים',
      txt_Description: 'גישה לחוזים והסכמים',
      icon: <FileText className="w-6 h-6" />,
      route: '/client/documents'
    },
    {
      id: 'tips',
      txt_Title: 'טיפים ומאמרים',
      txt_Description: 'טיפים לצילום והשראה',
      icon: <Lightbulb className="w-6 h-6" />,
      route: '/client/tips'
    }
  ];

  const txt_SelectionCurrent = 45;
  const txt_SelectionTotal = 50;
  const txt_SelectionPercent = 90;

  return (
    <div id="Page_ClientDashboard" className="h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      
      {/* Drawer - Bottom on mobile, Side on desktop */}
      <div id="Frame_Drawer" className="order-last md:order-first w-full md:w-20 h-16 md:h-auto bg-[#F5F5F5] border-t md:border-t-0 md:border-l border-[#E0E0E0] flex md:flex-col items-center justify-around md:justify-start py-0 md:py-6 px-4 md:px-0 gap-0 md:gap-6">
        <button id="btn_Menu" className="hidden md:block p-3 hover:bg-[#E0E0E0] transition-colors" style={{ borderRadius: '4px' }}>
          <Menu className="w-6 h-6 text-[#1A1A1A]" />
        </button>
        
        <div className="hidden md:block flex-1" />
        
        <button id="btn_DrawerGallery" className="p-2 md:p-3 bg-[#6B7532] text-white" style={{ borderRadius: '4px' }}>
          <Image className="w-5 h-5" />
        </button>
        <button id="btn_DrawerVideo" className="p-2 md:p-3 hover:bg-[#E0E0E0] transition-colors" style={{ borderRadius: '4px' }}>
          <Video className="w-5 h-5 text-[#666666]" />
        </button>
        <button id="btn_DrawerPayments" className="p-2 md:p-3 hover:bg-[#E0E0E0] transition-colors" style={{ borderRadius: '4px' }}>
          <CreditCard className="w-5 h-5 text-[#666666]" />
        </button>
        <button id="btn_DrawerChat" className="p-2 md:p-3 hover:bg-[#E0E0E0] transition-colors relative" style={{ borderRadius: '4px' }}>
          <MessageSquare className="w-5 h-5 text-[#666666]" />
          <span className="absolute top-0.5 md:top-1 right-0.5 md:right-1 w-2 h-2 bg-[#6B7532] rounded-full" />
        </button>
        <button id="btn_DrawerDocuments" className="p-2 md:p-3 hover:bg-[#E0E0E0] transition-colors" style={{ borderRadius: '4px' }}>
          <FileText className="w-5 h-5 text-[#666666]" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Welcome Section with Avatar */}
        <div id="Frame_Welcome" className="px-4 md:px-8 pt-4 md:pt-6 pb-3 md:pb-4 border-b border-[#E0E0E0]">
          <div className="flex items-center gap-3 md:gap-4 flex-row-reverse">
            {/* Avatar */}
            <div id="Frame_Avatar" className="w-12 h-12 md:w-16 md:h-16 bg-[#6B7532] flex items-center justify-center text-white text-lg md:text-xl font-medium" style={{ borderRadius: '4px' }}>
              ש
            </div>
            
            {/* Welcome Text */}
            <div className="flex-1 text-right">
              <h1 id="txt_Welcome" className="text-base md:text-xl text-[#1A1A1A] mb-1">
                ברוכים הבאים, <span id="txt_CoupleName" className="font-medium">שרה ומיכאל</span>
              </h1>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-4 flex-row-reverse text-xs md:text-sm text-[#666666]">
                <div className="flex items-center gap-1.5 flex-row-reverse">
                  <span id="txt_PackageName">חבילת פרימיום</span>
                  <Package className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
                <div className="flex items-center gap-1.5 flex-row-reverse">
                  <span id="txt_WeddingDate">15 בינואר 2026</span>
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Progress Bar */}
        <div id="Frame_ProjectProgress" className="px-4 md:px-8 py-3 md:py-4 bg-[#FAFAFA] border-b border-[#E0E0E0]">
          <div className="flex items-center justify-between mb-1.5 md:mb-2 flex-row-reverse">
            <span id="txt_ProjectStatus" className="text-xs md:text-sm text-[#1A1A1A]">סטטוס הפרויקט</span>
            <span id="txt_ProjectPercent" className="text-xs md:text-sm font-medium text-[#6B7532]">75% הושלם</span>
          </div>
          <div id="Frame_ProjectProgressBar" className="w-full bg-[#E0E0E0] h-1.5 md:h-2" style={{ borderRadius: '4px' }}>
            <div 
              id="Frame_ProjectProgressFill"
              className="bg-[#6B7532] h-1.5 md:h-2"
              style={{ width: '75%', borderRadius: '4px', marginRight: 'auto', marginLeft: 0 }}
            />
          </div>
          <div className="flex items-center justify-between mt-1.5 md:mt-2 flex-row-reverse text-[10px] md:text-xs text-[#666666]">
            <span id="txt_ProjectDeadline">תאריך יעד: 1 בפברואר 2026</span>
            <span id="txt_ProjectDaysLeft">7 ימים נותרו</span>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-6">
          
          {/* Photo Selection Card */}
          <div id="Frame_SelectionCard" className="mb-4 md:mb-6 p-4 md:p-6 border border-[#E0E0E0] bg-white" style={{ borderRadius: '4px' }}>
            <div className="flex items-center justify-between mb-3 md:mb-4 flex-row-reverse">
              <div className="text-right">
                <h3 id="txt_SelectionTitle" className="text-sm md:text-base text-[#1A1A1A] mb-0.5 md:mb-1 flex items-center gap-1.5 md:gap-2 flex-row-reverse">
                  <span>בחירת תמונות</span>
                  <Image className="w-4 h-4 md:w-5 md:h-5" />
                </h3>
                <p id="txt_SelectionDesc" className="text-xs md:text-sm text-[#666666]">
                  <span className="txt_SelectionCurrent">{txt_SelectionCurrent}</span>
                  {' מתוך '}
                  <span className="txt_SelectionTotal">{txt_SelectionTotal}</span>
                  {' תמונות נבחרו'}
                </p>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 text-[#6B7532] flex-row-reverse">
                <span id="txt_SelectionPercent" className="text-base md:text-lg font-medium">{txt_SelectionPercent}%</span>
                <CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
              </div>
            </div>
            <div id="Frame_SelectionProgressBar" className="w-full bg-[#F5F5F5] h-2 md:h-3" style={{ borderRadius: '4px' }}>
              <div 
                id="Frame_SelectionProgressFill"
                className="bg-[#6B7532] h-2 md:h-3 transition-all"
                style={{ width: `${txt_SelectionPercent}%`, borderRadius: '4px', marginRight: 'auto', marginLeft: 0 }}
              />
            </div>
          </div>

          {/* Gallery Slider */}
          <div id="Frame_GallerySlider" className="mb-4 md:mb-6">
            <h3 className="text-sm md:text-base text-[#1A1A1A] mb-2 md:mb-3 text-right">תמונות אחרונות</h3>
            <div className="relative h-48 md:h-64 overflow-hidden border border-[#E0E0E0]" style={{ borderRadius: '4px' }}>
              {list_GallerySlideshow.map((img_url, index) => (
                <div
                  key={index}
                  id={`Frame_Slide${index}`}
                  className="absolute inset-0 transition-opacity duration-1000"
                  style={{
                    opacity: currentSlideIndex === index ? 1 : 0
                  }}
                >
                  <img
                    id={`img_Slide${index}`}
                    src={img_url}
                    alt={`תמונת גלריה ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
              
              {/* Slideshow Controls */}
              <div id="Frame_SlideshowControls" className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex gap-1.5 md:gap-2">
                {list_GallerySlideshow.map((_, index) => (
                  <button
                    key={index}
                    id={`btn_Slide${index}`}
                    onClick={() => setCurrentSlideIndex(index)}
                    className={`w-1.5 md:w-2 h-1.5 md:h-2 transition-all ${ 
                      currentSlideIndex === index 
                        ? 'bg-[#6B7532] w-4 md:w-6' 
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    style={{ borderRadius: '4px' }}
                    aria-label={`עבור לתמונה ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dashboard Sections */}
          <div id="list_DashboardSections" className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 pb-4 md:pb-0">
            {list_Sections.map((section) => (
              <button
                key={section.id}
                id={`btn_Section_${section.id}`}
                onClick={() => navigate(section.route)}
                className="group text-right p-3 md:p-5 border border-[#E0E0E0] hover:border-[#1A1A1A] transition-all"
                style={{ borderRadius: '4px' }}
              >
                <div className="flex items-start justify-between mb-2 md:mb-3 flex-row-reverse">
                  <div className="p-1.5 md:p-2.5 bg-[#F5F5F5] group-hover:bg-[#6B7532] transition-colors" style={{ borderRadius: '4px' }}>
                    <div className="text-[#1A1A1A] group-hover:text-white transition-colors scale-75 md:scale-100">
                      {section.icon}
                    </div>
                  </div>
                  {section.txt_Badge && (
                    <span 
                      className="px-1.5 md:px-2.5 py-0.5 md:py-1 text-[10px] md:text-xs font-medium bg-[#6B7532] text-white txt_Badge"
                      style={{ borderRadius: '4px' }}
                    >
                      {section.txt_Badge}
                    </span>
                  )}
                </div>
                <h3 className="text-xs md:text-sm text-[#1A1A1A] mb-0.5 md:mb-1.5 txt_SectionTitle">{section.txt_Title}</h3>
                <p className="text-[10px] md:text-sm text-[#666666] txt_SectionDescription leading-tight">{section.txt_Description}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
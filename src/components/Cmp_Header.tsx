import React from 'react';
import { Cmp_StatusBadge } from './Cmp_StatusBadge';
import { Cmp_Drawer } from './Cmp_Drawer';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

interface Frame_HeaderProps {
  txt_ProjectName?: string;
  status?: 'in-progress' | 'completed' | 'pending' | 'overdue';
  txt_StatusText?: string;
  showBack?: boolean;
  showDrawer?: boolean;
  showWelcome?: boolean;
  txt_CoupleName?: string;
  txt_WeddingDate?: string;
  txt_Deadline?: string;
  txt_DeadlineProgress?: number;
}

export function Frame_Header({ 
  txt_ProjectName, 
  status, 
  txt_StatusText, 
  showBack,
  showDrawer = false,
  showWelcome = false,
  txt_CoupleName = 'שרה ומיכאל',
  txt_WeddingDate = '15 בינואר 2026',
  txt_Deadline = '1 בפברואר 2026',
  txt_DeadlineProgress = 75
}: Frame_HeaderProps) {
  const navigate = useNavigate();

  return (
    <div id="Frame_Header" className="bg-white border-b border-[#E0E0E0]">
      {/* Welcome Section - Full Width */}
      {showWelcome && (
        <div id="Frame_WelcomeSection" className="border-b border-[#E0E0E0] px-8 py-8">
          <div className="max-w-7xl mx-auto">
            <h1 id="txt_WelcomeMessage" className="text-[#1A1A1A] mb-6 text-right">
              ברוכה השבה, {txt_CoupleName.split('ו')[0].trim()}!
            </h1>
            
            {/* Project Info Grid */}
            <div id="Frame_ProjectInfo" className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Couple Name */}
              <div id="Frame_CoupleInfo" className="flex items-start gap-3 flex-row-reverse text-right">
                <div className="p-2 bg-[#F5F5F5]" style={{ borderRadius: '4px' }}>
                  <Calendar className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <div>
                  <p id="txt_ProjectLabel" className="text-xs text-[#666666] mb-1">פרויקט</p>
                  <p id="txt_CoupleName" className="text-sm text-[#1A1A1A] font-medium">חתונת {txt_CoupleName}</p>
                </div>
              </div>

              {/* Wedding Date */}
              <div id="Frame_WeddingDateInfo" className="flex items-start gap-3 flex-row-reverse text-right">
                <div className="p-2 bg-[#F5F5F5]" style={{ borderRadius: '4px' }}>
                  <Calendar className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <div>
                  <p id="txt_WeddingDateLabel" className="text-xs text-[#666666] mb-1">תאריך החתונה</p>
                  <p id="txt_WeddingDate" className="text-sm text-[#1A1A1A] font-medium">{txt_WeddingDate}</p>
                </div>
              </div>

              {/* Selection Deadline */}
              <div id="Frame_DeadlineInfo" className="flex items-start gap-3 flex-row-reverse text-right">
                <div className="p-2 bg-[#F5F5F5]" style={{ borderRadius: '4px' }}>
                  <Clock className="w-5 h-5 text-[#1A1A1A]" />
                </div>
                <div className="flex-1">
                  <p id="txt_DeadlineLabel" className="text-xs text-[#666666] mb-1">מועד אחרון לבחירה</p>
                  <p id="txt_Deadline" className="text-sm text-[#1A1A1A] font-medium mb-2">{txt_Deadline}</p>
                  <div id="Frame_ProgressBar" className="w-full bg-[#F5F5F5] h-1.5" style={{ borderRadius: '4px' }}>
                    <div 
                      id="Frame_ProgressFill"
                      className="bg-[#6B7532] h-1.5 transition-all"
                      style={{ width: `${txt_DeadlineProgress}%`, borderRadius: '4px', marginRight: 'auto', marginLeft: 0 }}
                    />
                  </div>
                  <p id="txt_DeadlineProgress" className="text-xs text-[#666666] mt-1">{txt_DeadlineProgress}% מהזמן שנותר</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Header */}
      <div id="Frame_NavHeader" className="px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            {showDrawer && <Cmp_Drawer />}
          </div>

          <div className="flex items-center gap-4 flex-row-reverse">
            {showBack && (
              <button 
                id="btn_Back"
                onClick={() => navigate(-1)}
                className="p-2 hover:bg-[#F5F5F5] transition-colors"
                style={{ borderRadius: '4px' }}
              >
                <ArrowRight className="w-5 h-5 text-[#1A1A1A]" />
              </button>
            )}
            {txt_ProjectName && (
              <h2 id="txt_PageTitle" className="text-[#1A1A1A]">{txt_ProjectName}</h2>
            )}
            {status && txt_StatusText && (
              <Cmp_StatusBadge status={status} text={txt_StatusText} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

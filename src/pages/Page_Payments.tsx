import React from 'react';
import { Frame_Header } from '../components/Cmp_Header';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';
import { CheckCircle, Clock } from 'lucide-react';

interface PaymentItem {
  id: string;
  txt_Description: string;
  txt_Amount: number;
  txt_Status: 'paid' | 'pending';
  txt_Date: string;
}

export function Page_Payments() {
  const txt_TotalAmount = 5000;
  const txt_PaidAmount = 3500;
  const txt_BalanceAmount = 1500;
  const txt_ProgressPercent = (txt_PaidAmount / txt_TotalAmount) * 100;

  const list_PaymentHistory: PaymentItem[] = [
    { id: '1', txt_Description: 'תשלום ראשון', txt_Amount: 1500, txt_Status: 'paid', txt_Date: '15 באוקטובר 2025' },
    { id: '2', txt_Description: 'תשלום שני', txt_Amount: 2000, txt_Status: 'paid', txt_Date: '1 בדצמבר 2025' },
    { id: '3', txt_Description: 'יתרה לתשלום', txt_Amount: 1500, txt_Status: 'pending', txt_Date: 'תאריך יעד: 28 בפברואר 2026' }
  ];

  return (
    <div id="Page_Payments" className="h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      <Frame_Header 
        txt_ProjectName="תשלומים"
        showBack
        showDrawer={true}
      />

      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-8">
        <div className="max-w-4xl mx-auto">
          {/* Payment Summary */}
          <div id="Frame_PaymentSummary" className="p-4 md:p-8 border border-[#E0E0E0] mb-4 md:mb-8" style={{ borderRadius: '4px' }}>
            <h2 id="txt_SummaryTitle" className="text-base md:text-lg text-[#1A1A1A] mb-4 md:mb-8 text-right">סיכום תשלומים</h2>
            
            <div className="grid grid-cols-3 gap-3 md:gap-8 mb-6 md:mb-8">
              <div className="text-right">
                <p className="text-xs md:text-sm text-[#666666] mb-1 md:mb-2">סה"כ חבילה</p>
                <p id="txt_TotalAmount" className="text-sm md:text-base text-[#1A1A1A]">₪{txt_TotalAmount.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-xs md:text-sm text-[#666666] mb-1 md:mb-2">שולם</p>
                <p id="txt_PaidAmount" className="text-sm md:text-base text-[#6B7532]">₪{txt_PaidAmount.toLocaleString()}</p>
              </div>
              <div className="text-right">
                <p className="text-xs md:text-sm text-[#666666] mb-1 md:mb-2">יתרה</p>
                <p id="txt_BalanceAmount" className="text-sm md:text-base text-[#1A1A1A]">₪{txt_BalanceAmount.toLocaleString()}</p>
              </div>
            </div>

            {/* Progress Bar */}
            <div id="Frame_PaymentProgress">
              <div className="flex items-center justify-between mb-1.5 md:mb-2 flex-row-reverse">
                <span className="text-xs md:text-sm text-[#666666]">התקדמות תשלום</span>
                <span id="txt_ProgressPercent" className="text-xs md:text-sm font-medium text-[#6B7532]">{txt_ProgressPercent.toFixed(0)}%</span>
              </div>
              <div id="Frame_ProgressBar" className="w-full bg-[#F5F5F5] h-1.5 md:h-2" style={{ borderRadius: '4px' }}>
                <div 
                  id="Frame_ProgressFill"
                  className="bg-[#6B7532] h-1.5 md:h-2 transition-all"
                  style={{ width: `${txt_ProgressPercent}%`, borderRadius: '4px', marginRight: 'auto', marginLeft: 0 }}
                />
              </div>
            </div>
          </div>

          {/* Payment History */}
          <div id="Frame_PaymentHistory" className="mb-4 md:mb-8">
            <h3 id="txt_HistoryTitle" className="text-sm md:text-base text-[#1A1A1A] mb-3 md:mb-6 text-right">היסטוריית תשלומים</h3>
            
            <div id="list_PaymentHistory" className="space-y-2 md:space-y-3">
              {list_PaymentHistory.map((payment) => (
                <div 
                  key={payment.id}
                  id={`Frame_Payment_${payment.id}`}
                  className="p-3 md:p-6 border border-[#E0E0E0] flex items-center justify-between flex-row-reverse"
                  style={{ borderRadius: '4px' }}
                >
                  <div className="flex items-center gap-2 md:gap-4 flex-row-reverse">
                    <div className={`p-1.5 md:p-2 ${
                      payment.txt_Status === 'paid' ? 'bg-[#6B7532]' : 'bg-[#F5F5F5]'
                    }`} style={{ borderRadius: '4px' }}>
                      {payment.txt_Status === 'paid' ? (
                        <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white" />
                      ) : (
                        <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#666666]" />
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs md:text-sm text-[#1A1A1A] mb-0.5 md:mb-1 txt_PaymentDescription">{payment.txt_Description}</p>
                      <p className="text-[10px] md:text-sm text-[#666666] txt_PaymentDate">{payment.txt_Date}</p>
                    </div>
                  </div>
                  
                  <div className="text-left">
                    <p className="text-xs md:text-sm text-[#1A1A1A] font-medium txt_PaymentAmount">₪{payment.txt_Amount.toLocaleString()}</p>
                    <p className={`text-[10px] md:text-xs mt-0.5 md:mt-1 ${
                      payment.txt_Status === 'paid' ? 'text-[#6B7532]' : 'text-[#666666]'
                    }`}>
                      {payment.txt_Status === 'paid' ? 'שולם' : 'ממתין'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Make Payment Section */}
          {txt_BalanceAmount > 0 && (
            <div id="Frame_MakePayment" className="p-4 md:p-8 bg-[#F5F5F5]" style={{ borderRadius: '4px' }}>
              <h3 id="txt_PaymentActionTitle" className="text-sm md:text-base text-[#1A1A1A] mb-1 md:mb-2 text-right">מוכנים להשלים את התשלום?</h3>
              <p id="txt_PaymentActionDesc" className="text-xs md:text-sm text-[#666666] mb-4 md:mb-6 text-right">
                עיבוד תשלום מאובטח זמין. צרו איתנו קשר לאפשרויות תשלום.
              </p>
              <Cmp_ButtonPrimary id="btn_MakePayment" variant="primary">
                בצע תשלום
              </Cmp_ButtonPrimary>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
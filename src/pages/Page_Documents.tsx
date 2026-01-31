import React from 'react';
import { Frame_Header } from '../components/Cmp_Header';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';
import { FileText, Download } from 'lucide-react';

interface Document {
  id: string;
  txt_Name: string;
  txt_Type: string;
  txt_Size: string;
  txt_UploadedDate: string;
}

export function Page_Documents() {
  const list_Documents: Document[] = [
    {
      id: '1',
      txt_Name: 'חוזה צילום חתונה',
      txt_Type: 'PDF',
      txt_Size: '245 KB',
      txt_UploadedDate: '10 באוקטובר 2025'
    },
    {
      id: '2',
      txt_Name: 'פירוט חבילת צילום',
      txt_Type: 'PDF',
      txt_Size: '180 KB',
      txt_UploadedDate: '10 באוקטובר 2025'
    },
    {
      id: '3',
      txt_Name: 'הסכם זכויות שימוש',
      txt_Type: 'PDF',
      txt_Size: '125 KB',
      txt_UploadedDate: '10 באוקטובר 2025'
    },
    {
      id: '4',
      txt_Name: 'לוח זמנים ותזמון',
      txt_Type: 'PDF',
      txt_Size: '95 KB',
      txt_UploadedDate: '15 בנובמבר 2025'
    }
  ];

  return (
    <div id="Page_Documents" className="h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      <Frame_Header 
        txt_ProjectName="מסמכים"
        showBack
        showDrawer={true}
      />

      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-4 md:mb-8 text-right">
            <h2 id="txt_DocumentsTitle" className="text-base md:text-lg text-[#1A1A1A] mb-1 md:mb-2">המסמכים שלך</h2>
            <p id="txt_DocumentsDescription" className="text-xs md:text-sm text-[#666666]">
              גישה והורדה של כל החוזים וההסכמים הקשורים לחבילת צילום החתונה שלך.
            </p>
          </div>

          {/* Documents List */}
          <div id="list_Documents" className="space-y-2 md:space-y-3">
            {list_Documents.map((doc) => (
              <div
                key={doc.id}
                id={`Frame_Document_${doc.id}`}
                className="p-3 md:p-6 border border-[#E0E0E0] hover:border-[#1A1A1A] transition-colors"
                style={{ borderRadius: '4px' }}
              >
                <div className="flex items-center justify-between flex-row-reverse gap-3">
                  <div className="flex items-center gap-2 md:gap-4 flex-row-reverse flex-1">
                    <div className="p-2 md:p-3 bg-[#F5F5F5]" style={{ borderRadius: '4px' }}>
                      <FileText className="w-4 h-4 md:w-6 md:h-6 text-[#1A1A1A]" />
                    </div>
                    
                    <div className="text-right flex-1">
                      <h3 className="text-xs md:text-sm text-[#1A1A1A] mb-0.5 md:mb-1 txt_DocumentName">{doc.txt_Name}</h3>
                      <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm text-[#666666] flex-row-reverse">
                        <span className="txt_DocumentUploadDate">הועלה {doc.txt_UploadedDate}</span>
                        <span className="hidden md:inline">•</span>
                        <span className="txt_DocumentSize">{doc.txt_Size}</span>
                        <span>•</span>
                        <span className="txt_DocumentType">{doc.txt_Type}</span>
                      </div>
                    </div>
                  </div>

                  <Cmp_ButtonPrimary id={`btn_Download_${doc.id}`} variant="ghost">
                    <Download className="w-3 h-3 md:w-4 md:h-4 ml-1 md:ml-2 inline" />
                    <span className="hidden md:inline">הורד</span>
                  </Cmp_ButtonPrimary>
                </div>
              </div>
            ))}
          </div>

          {/* Information Notice */}
          <div id="Frame_ContactNotice" className="mt-6 md:mt-12 p-4 md:p-6 bg-[#F5F5F5] text-right" style={{ borderRadius: '4px' }}>
            <h3 id="txt_NoticeTitle" className="text-sm md:text-base text-[#1A1A1A] mb-1 md:mb-2">צריכים מסמך ספציפי?</h3>
            <p id="txt_NoticeDescription" className="text-xs md:text-sm text-[#666666] mb-3 md:mb-4">
              אם אתם זקוקים למסמך שאינו מופיע כאן, אנא צרו איתנו קשר דרך הצ'אט ואנו נשלח אותו אליכם מיד.
            </p>
            <Cmp_ButtonPrimary id="btn_ContactUs" variant="ghost">
              צור קשר
            </Cmp_ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}
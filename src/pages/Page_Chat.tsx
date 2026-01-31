import React, { useState } from 'react';
import { Frame_Header } from '../components/Cmp_Header';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';
import { Send } from 'lucide-react';

interface Message {
  id: string;
  txt_Sender: 'client' | 'studio';
  txt_Text: string;
  txt_Timestamp: string;
}

export function Page_Chat() {
  const [list_Messages] = useState<Message[]>([
    {
      id: '1',
      txt_Sender: 'studio',
      txt_Text: 'שלום שרה! התמונות שלך מוכנות לצפייה. תודיעי אם יש לך שאלות.',
      txt_Timestamp: '10:30'
    },
    {
      id: '2',
      txt_Sender: 'client',
      txt_Text: 'תודה רבה! הן נראות מדהימות. אפשר לבחור יותר מ-50 תמונות?',
      txt_Timestamp: '11:45'
    },
    {
      id: '3',
      txt_Sender: 'studio',
      txt_Text: 'אני כל כך שמח ששמעת! החבילה שלך כוללת 50 בחירות, אבל אנחנו יכולים לדבר על תוספת אם את רוצה.',
      txt_Timestamp: '12:10'
    },
    {
      id: '4',
      txt_Sender: 'client',
      txt_Text: 'זה יהיה מעולה! כמה זה יעלה עבור 10 תמונות נוספות?',
      txt_Timestamp: '14:15'
    }
  ]);

  const [txt_MessageInput, setMessageInput] = useState('');

  const handleSend = () => {
    if (txt_MessageInput.trim()) {
      // In production, this would send the message to the backend
      console.log('Sending message:', txt_MessageInput);
      setMessageInput('');
    }
  };

  return (
    <div id="Page_Chat" className="h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      <Frame_Header 
        txt_ProjectName="צ'אט"
        showBack
        showDrawer={true}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-4 md:py-8">
            <div id="list_Messages" className="space-y-3 md:space-y-6">
              {list_Messages.map((message) => (
                <div
                  key={message.id}
                  id={`Frame_Message_${message.id}`}
                  className={`flex ${message.txt_Sender === 'client' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`max-w-[85%] md:max-w-lg ${message.txt_Sender === 'client' ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`inline-block p-3 md:p-4 ${
                        message.txt_Sender === 'client'
                          ? 'bg-[#6B7532] text-white'
                          : 'bg-[#F5F5F5] text-[#1A1A1A]'
                      }`}
                      style={{ borderRadius: '4px' }}
                    >
                      <p className="text-xs md:text-sm txt_MessageText">{message.txt_Text}</p>
                    </div>
                    <p className="text-[10px] md:text-xs text-[#999999] mt-1 md:mt-2 txt_MessageTimestamp">{message.txt_Timestamp}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Message Input - Fixed at bottom */}
        <div id="Frame_MessageInput" className="border-t border-[#E0E0E0] bg-white">
          <div className="max-w-4xl mx-auto px-4 md:px-8 py-3 md:py-6">
            <div className="flex gap-2 md:gap-3 flex-row-reverse">
              <Cmp_ButtonPrimary
                id="btn_SendMessage"
                onClick={handleSend}
                variant="primary"
              >
                <Send className="w-3.5 h-3.5 md:w-4 md:h-4" />
              </Cmp_ButtonPrimary>
              <input
                id="txt_MessageInput"
                type="text"
                value={txt_MessageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="הקלד הודעה..."
                className="flex-1 px-3 md:px-4 py-2 md:py-3 text-sm md:text-base bg-white border border-[#E0E0E0] text-[#1A1A1A] placeholder:text-[#999999] focus:outline-none focus:border-[#6B7532] transition-colors text-right"
                style={{ borderRadius: '4px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
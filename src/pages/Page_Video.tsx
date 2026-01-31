import React, { useState } from 'react';
import { Frame_Header } from '../components/Cmp_Header';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';
import { Download, Clock, CheckCircle, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

export function Page_Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  
  const videoStatus = 'ready'; // 'processing' | 'ready' | 'expired'
  const txt_ExpiryDate = '15 בפברואר 2026';
  const txt_DaysRemaining = 20;

  const togglePlay = () => {
    const video = document.getElementById('video_Player') as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    const video = document.getElementById('video_Player') as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    const video = document.getElementById('video_Player') as HTMLVideoElement;
    if (video) {
      if (video.requestFullscreen) {
        video.requestFullscreen();
      }
    }
  };

  return (
    <div id="Page_Video" className="h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      <Frame_Header 
        txt_ProjectName="וידאו"
        showBack
        showDrawer={true}
      />

      <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-8">
        <div className="max-w-5xl mx-auto">
          
          {/* Video Player */}
          <div id="Frame_VideoPlayer" className="mb-6 md:mb-8">
            <div className="relative bg-black aspect-video overflow-hidden" style={{ borderRadius: '4px' }}>
              <video
                id="video_Player"
                className="w-full h-full"
                poster="https://images.unsplash.com/photo-1654512721615-5622d6ede1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzY5NDQzMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
                הדפדפן שלך אינו תומך בנגן וידאו.
              </video>

              {/* Custom Video Controls */}
              <div id="Frame_VideoControls" className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 md:p-4">
                <div className="flex items-center gap-2 md:gap-4 flex-row-reverse">
                  {/* Play/Pause */}
                  <button
                    id="btn_PlayPause"
                    onClick={togglePlay}
                    className="p-1.5 md:p-2 hover:bg-white/20 transition-colors"
                    style={{ borderRadius: '4px' }}
                  >
                    {isPlaying ? (
                      <Pause className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    ) : (
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    )}
                  </button>

                  {/* Progress Bar */}
                  <div className="flex-1 h-1 bg-white/30" style={{ borderRadius: '4px' }}>
                    <div className="h-1 bg-[#6B7532] w-0" style={{ borderRadius: '4px' }} />
                  </div>

                  {/* Mute */}
                  <button
                    id="btn_Mute"
                    onClick={toggleMute}
                    className="p-1.5 md:p-2 hover:bg-white/20 transition-colors"
                    style={{ borderRadius: '4px' }}
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    )}
                  </button>

                  {/* Fullscreen */}
                  <button
                    id="btn_Fullscreen"
                    onClick={toggleFullscreen}
                    className="p-1.5 md:p-2 hover:bg-white/20 transition-colors"
                    style={{ borderRadius: '4px' }}
                  >
                    <Maximize className="w-4 h-4 md:w-5 md:h-5 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Video Status Card */}
          <div id="Frame_VideoStatus" className="p-4 md:p-8 border border-[#E0E0E0] mb-4 md:mb-6" style={{ borderRadius: '4px' }}>
            <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
              <div className="p-3 md:p-4 bg-[#6B7532]" style={{ borderRadius: '4px' }}>
                <CheckCircle className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              
              <div className="flex-1 text-right">
                <h2 id="txt_VideoTitle" className="text-base md:text-lg text-[#1A1A1A] mb-1 md:mb-2">וידאו החתונה שלכם מוכן</h2>
                <p id="txt_VideoDescription" className="text-xs md:text-sm text-[#666666] mb-4 md:mb-6">
                  הוידאו הערוך המקצועי של החתונה שלכם זמין כעת להורדה
                </p>
                
                {/* Video Details */}
                <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                  <div className="flex items-center justify-between md:justify-start gap-3 text-xs md:text-sm flex-row-reverse">
                    <span className="text-[#666666]">פורמט:</span>
                    <span id="txt_VideoFormat" className="text-[#1A1A1A] font-medium">MP4 (1080p)</span>
                  </div>
                  <div className="flex items-center justify-between md:justify-start gap-3 text-xs md:text-sm flex-row-reverse">
                    <span className="text-[#666666]">משך:</span>
                    <span id="txt_VideoDuration" className="text-[#1A1A1A] font-medium">45 דקות</span>
                  </div>
                  <div className="flex items-center justify-between md:justify-start gap-3 text-xs md:text-sm flex-row-reverse">
                    <span className="text-[#666666]">גודל קובץ:</span>
                    <span id="txt_VideoSize" className="text-[#1A1A1A] font-medium">2.4 GB</span>
                  </div>
                </div>

                <Cmp_ButtonPrimary id="btn_DownloadVideo" variant="primary">
                  <Download className="w-3.5 h-3.5 md:w-4 md:h-4 ml-2 inline" />
                  הורד וידאו
                </Cmp_ButtonPrimary>
              </div>
            </div>
          </div>

          {/* Expiry Warning */}
          <div id="Frame_ExpiryWarning" className="p-4 md:p-6 bg-[#F5F5F5] flex items-start gap-3 md:gap-4 flex-row-reverse" style={{ borderRadius: '4px' }}>
            <Clock className="w-4 h-4 md:w-5 md:h-5 text-[#666666] mt-0.5" />
            <div className="flex-1 text-right">
              <p id="txt_ExpiryTitle" className="text-xs md:text-sm text-[#1A1A1A] mb-1">
                <strong>{txt_DaysRemaining} ימים נותרו</strong>
              </p>
              <p id="txt_ExpiryDescription" className="text-xs md:text-sm text-[#666666]">
                קישור ההורדה יפוג ב-{txt_ExpiryDate}. אנא הורידו את הוידאו לפני תאריך זה.
              </p>
            </div>
          </div>

          {/* Additional Information */}
          <div id="Frame_AdditionalInfo" className="mt-6 md:mt-12 pt-6 md:pt-8 border-t border-[#E0E0E0] text-right">
            <h3 id="txt_HelpTitle" className="text-sm md:text-base text-[#1A1A1A] mb-2 md:mb-4">צריכים עזרה?</h3>
            <p id="txt_HelpDescription" className="text-xs md:text-sm text-[#666666] mb-3 md:mb-4">
              אם אתם נתקלים בבעיות בהורדת הוידאו או שאתם זקוקים להארכת תקופת הגישה, אנא צרו איתנו קשר דרך הצ'אט.
            </p>
            <Cmp_ButtonPrimary id="btn_ContactSupport" variant="ghost">
              צור קשר
            </Cmp_ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

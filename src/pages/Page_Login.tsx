import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cmp_InputEmail } from '../components/Cmp_InputText';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';

const list_CarouselImages = [
  'https://images.unsplash.com/photo-1654512721615-5622d6ede1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzY5NDQzMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1767986012138-4893f40932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc2OTM3MzcyNnww&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYnJpZGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk0MjM5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1613067532651-7075a620c900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzY5NDM1NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080'
];

export function Page_Login() {
  const navigate = useNavigate();
  const [txt_Email, setEmail] = useState('');
  const [txt_Password, setPassword] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % list_CarouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    // Mock authentication - in production this would validate credentials
    if (txt_Email.includes('admin')) {
      navigate('/admin');
    } else {
      navigate('/client');
    }
  };

  return (
    <div id="Page_Login" className="relative w-screen h-screen overflow-hidden">
      {/* Background Carousel */}
      <div id="Frame_BackgroundCarousel" className="absolute inset-0">
        {list_CarouselImages.map((img_url, index) => (
          <div
            key={index}
            id={`Frame_CarouselSlide_${index}`}
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
              backgroundImage: `url(${img_url})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        ))}
        {/* Dark overlay */}
        <div id="Frame_Overlay" className="absolute inset-0 bg-black/60" />
      </div>

      {/* Login Panel */}
      <div id="Frame_LoginContainer" className="relative z-10 flex items-center justify-center h-full">
        <div 
          id="Frame_LoginPanel"
          className="bg-white p-12 w-full max-w-md"
          style={{ borderRadius: '6px' }}
        >
          {/* Logo */}
          <div id="Frame_LoginHeader" className="mb-12 text-center">
            <h1 id="txt_AppTitle" className="text-[#1A1A1A] mb-2">מערכת ניהול סטודיו</h1>
            <p id="txt_AppSubtitle" className="text-sm text-[#666666]">פורטל צילומי חתונות</p>
          </div>

          {/* Form */}
          <div id="Frame_LoginForm" className="space-y-6">
            <Cmp_InputEmail
              id="input_Email"
              type="email"
              placeholder="כתובת אימייל"
              value={txt_Email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
            <Cmp_InputEmail
              id="input_Password"
              type="password"
              placeholder="סיסמה"
              value={txt_Password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Cmp_ButtonPrimary
              id="btn_Login"
              onClick={handleLogin}
              fullWidth
              variant="primary"
            >
              התחברות
            </Cmp_ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
}

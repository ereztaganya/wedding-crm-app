import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Page_Login } from './pages/Page_Login';
import { Page_ClientDashboard } from './pages/Page_ClientDashboard';
import { Page_AdminDashboard } from './pages/Page_AdminDashboard';
import { Page_Gallery } from './pages/Page_Gallery';
import { Page_Video } from './pages/Page_Video';
import { Page_Payments } from './pages/Page_Payments';
import { Page_Chat } from './pages/Page_Chat';
import { Page_Documents } from './pages/Page_Documents';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Page_Login />} />
        
        {/* Client Routes */}
        <Route path="/client" element={<Page_ClientDashboard />} />
        <Route path="/client/gallery" element={<Page_Gallery />} />
        <Route path="/client/video" element={<Page_Video />} />
        <Route path="/client/payments" element={<Page_Payments />} />
        <Route path="/client/chat" element={<Page_Chat />} />
        <Route path="/client/documents" element={<Page_Documents />} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<Page_AdminDashboard />} />
        <Route path="/admin/clients" element={<Page_AdminDashboard />} />
        <Route path="/admin/alerts" element={<Page_AdminDashboard />} />
      </Routes>
    </Router>
  );
}

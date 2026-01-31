-- ========================================
-- 🗄️ Supabase Schema - CRM אפליקציית צילום חתונות
-- ========================================
-- הוראות: העתק והדבק את הקוד הזה ב-Supabase SQL Editor
-- נתיב: Dashboard → SQL Editor → New Query
-- ========================================

-- Enable UUID extension (if not already enabled)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ========================================
-- 👥 טבלת משתמשים (Users)
-- ========================================
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'client' CHECK (role IN ('client', 'admin')),
  phone TEXT,
  wedding_date DATE,
  package_name TEXT,
  package_price NUMERIC,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for faster queries
CREATE INDEX idx_users_email ON users(email);
CREATE INDEX idx_users_role ON users(role);

-- RLS (Row Level Security) Policies
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Users can read their own data
CREATE POLICY "Users can view own data" ON users
  FOR SELECT
  USING (auth.uid() = id);

-- Admins can view all users
CREATE POLICY "Admins can view all users" ON users
  FOR SELECT
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ========================================
-- 📸 טבלת תמונות (Photos)
-- ========================================
CREATE TABLE photos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  category TEXT NOT NULL CHECK (category IN ('wedding', 'henna', 'savethedate')),
  subcategory TEXT NOT NULL,
  image_url TEXT NOT NULL,
  thumbnail_url TEXT,
  is_selected BOOLEAN DEFAULT FALSE,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_photos_user_id ON photos(user_id);
CREATE INDEX idx_photos_category ON photos(category);
CREATE INDEX idx_photos_subcategory ON photos(subcategory);
CREATE INDEX idx_photos_is_selected ON photos(is_selected);

-- RLS Policies
ALTER TABLE photos ENABLE ROW LEVEL SECURITY;

-- Users can view their own photos
CREATE POLICY "Users can view own photos" ON photos
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update selection status
CREATE POLICY "Users can update own photo selection" ON photos
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Admins can do everything
CREATE POLICY "Admins can manage all photos" ON photos
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ========================================
-- 💳 טבלת תשלומים (Payments)
-- ========================================
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  description TEXT NOT NULL,
  amount NUMERIC NOT NULL,
  status TEXT DEFAULT 'pending' CHECK (status IN ('paid', 'pending', 'cancelled')),
  payment_date DATE,
  payment_method TEXT,
  transaction_id TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_payments_user_id ON payments(user_id);
CREATE INDEX idx_payments_status ON payments(status);
CREATE INDEX idx_payments_payment_date ON payments(payment_date);

-- RLS Policies
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;

-- Users can view their own payments
CREATE POLICY "Users can view own payments" ON payments
  FOR SELECT
  USING (auth.uid() = user_id);

-- Admins can manage all payments
CREATE POLICY "Admins can manage all payments" ON payments
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ========================================
-- 💬 טבלת הודעות (Messages)
-- ========================================
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  sender TEXT NOT NULL CHECK (sender IN ('client', 'studio')),
  text TEXT NOT NULL,
  is_read BOOLEAN DEFAULT FALSE,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_messages_user_id ON messages(user_id);
CREATE INDEX idx_messages_timestamp ON messages(timestamp DESC);
CREATE INDEX idx_messages_is_read ON messages(is_read);

-- RLS Policies
ALTER TABLE messages ENABLE ROW LEVEL SECURITY;

-- Users can view their own messages
CREATE POLICY "Users can view own messages" ON messages
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can create their own messages
CREATE POLICY "Users can create own messages" ON messages
  FOR INSERT
  WITH CHECK (auth.uid() = user_id AND sender = 'client');

-- Admins can manage all messages
CREATE POLICY "Admins can manage all messages" ON messages
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ========================================
-- 📄 טבלת מסמכים (Documents)
-- ========================================
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  file_url TEXT NOT NULL,
  file_type TEXT DEFAULT 'PDF',
  file_size TEXT,
  description TEXT,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_documents_user_id ON documents(user_id);
CREATE INDEX idx_documents_uploaded_at ON documents(uploaded_at DESC);

-- RLS Policies
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;

-- Users can view their own documents
CREATE POLICY "Users can view own documents" ON documents
  FOR SELECT
  USING (auth.uid() = user_id);

-- Admins can manage all documents
CREATE POLICY "Admins can manage all documents" ON documents
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ========================================
-- 🎥 טבלת וידאו (Videos)
-- ========================================
CREATE TABLE videos (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  video_url TEXT NOT NULL,
  thumbnail_url TEXT,
  duration TEXT,
  file_size TEXT,
  format TEXT DEFAULT 'MP4',
  status TEXT DEFAULT 'processing' CHECK (status IN ('processing', 'ready', 'expired')),
  expiry_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_videos_user_id ON videos(user_id);
CREATE INDEX idx_videos_status ON videos(status);

-- RLS Policies
ALTER TABLE videos ENABLE ROW LEVEL SECURITY;

-- Users can view their own videos
CREATE POLICY "Users can view own videos" ON videos
  FOR SELECT
  USING (auth.uid() = user_id);

-- Admins can manage all videos
CREATE POLICY "Admins can manage all videos" ON videos
  FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM users
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- ========================================
-- 🔔 טבלת התראות (Notifications)
-- ========================================
CREATE TABLE notifications (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  message TEXT NOT NULL,
  type TEXT CHECK (type IN ('info', 'success', 'warning', 'error')),
  is_read BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indexes
CREATE INDEX idx_notifications_user_id ON notifications(user_id);
CREATE INDEX idx_notifications_is_read ON notifications(is_read);
CREATE INDEX idx_notifications_created_at ON notifications(created_at DESC);

-- RLS Policies
ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;

-- Users can view their own notifications
CREATE POLICY "Users can view own notifications" ON notifications
  FOR SELECT
  USING (auth.uid() = user_id);

-- Users can update their own notifications (mark as read)
CREATE POLICY "Users can update own notifications" ON notifications
  FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ========================================
-- 📊 Views (תצוגות מוכנות)
-- ========================================

-- תצוגה של סטטוס פרויקט
CREATE OR REPLACE VIEW project_status AS
SELECT 
  u.id as user_id,
  u.full_name,
  u.wedding_date,
  u.package_name,
  COUNT(DISTINCT p.id) as total_photos,
  COUNT(DISTINCT CASE WHEN p.is_selected THEN p.id END) as selected_photos,
  COALESCE(SUM(pay.amount), 0) as total_paid,
  COALESCE(SUM(CASE WHEN pay.status = 'pending' THEN pay.amount ELSE 0 END), 0) as balance_due
FROM users u
LEFT JOIN photos p ON u.id = p.user_id
LEFT JOIN payments pay ON u.id = pay.user_id AND pay.status IN ('paid', 'pending')
WHERE u.role = 'client'
GROUP BY u.id, u.full_name, u.wedding_date, u.package_name;

-- תצוגה של הודעות שלא נקראו
CREATE OR REPLACE VIEW unread_messages AS
SELECT 
  user_id,
  COUNT(*) as unread_count,
  MAX(timestamp) as last_message_time
FROM messages
WHERE is_read = FALSE
GROUP BY user_id;

-- ========================================
-- 🔧 Functions (פונקציות עזר)
-- ========================================

-- פונקציה לספירת תמונות נבחרות
CREATE OR REPLACE FUNCTION get_selection_count(p_user_id UUID)
RETURNS INTEGER AS $$
BEGIN
  RETURN (
    SELECT COUNT(*)
    FROM photos
    WHERE user_id = p_user_id AND is_selected = TRUE
  );
END;
$$ LANGUAGE plpgsql;

-- פונקציה לחישוב התקדמות תשלום
CREATE OR REPLACE FUNCTION get_payment_progress(p_user_id UUID)
RETURNS NUMERIC AS $$
DECLARE
  total_package NUMERIC;
  total_paid NUMERIC;
BEGIN
  SELECT package_price INTO total_package
  FROM users
  WHERE id = p_user_id;
  
  SELECT COALESCE(SUM(amount), 0) INTO total_paid
  FROM payments
  WHERE user_id = p_user_id AND status = 'paid';
  
  IF total_package > 0 THEN
    RETURN (total_paid / total_package * 100);
  ELSE
    RETURN 0;
  END IF;
END;
$$ LANGUAGE plpgsql;

-- ========================================
-- 🎯 Triggers (טריגרים אוטומטיים)
-- ========================================

-- טריגר לעדכון updated_at אוטומטי
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_photos_updated_at BEFORE UPDATE ON photos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_payments_updated_at BEFORE UPDATE ON payments
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_videos_updated_at BEFORE UPDATE ON videos
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- ========================================
-- 🌱 Seed Data (נתונים לדוגמה)
-- ========================================

-- הוסף משתמש לקוח לדוגמה
INSERT INTO users (email, full_name, role, phone, wedding_date, package_name, package_price)
VALUES 
  ('sarah@example.com', 'שרה ומיכאל', 'client', '054-1234567', '2026-01-15', 'חבילת פרימיום', 5000);

-- הוסף משתמש אדמין לדוגמה
INSERT INTO users (email, full_name, role, phone)
VALUES 
  ('admin@studio.com', 'סטודיו צילום', 'admin', '054-7654321');

-- הוסף תמונות לדוגמה (יש להחליף ב-URLs אמיתיים)
-- INSERT INTO photos (user_id, category, subcategory, image_url)
-- SELECT id, 'wedding', 'ceremony', 'https://your-storage-url.com/photo1.jpg'
-- FROM users WHERE email = 'sarah@example.com';

-- הוסף תשלומים לדוגמה
INSERT INTO payments (user_id, description, amount, status, payment_date)
SELECT 
  id, 
  'תשלום ראשון', 
  1500, 
  'paid', 
  '2025-10-15'
FROM users WHERE email = 'sarah@example.com';

INSERT INTO payments (user_id, description, amount, status, payment_date)
SELECT 
  id, 
  'תשלום שני', 
  2000, 
  'paid', 
  '2025-12-01'
FROM users WHERE email = 'sarah@example.com';

INSERT INTO payments (user_id, description, amount, status)
SELECT 
  id, 
  'יתרה לתשלום', 
  1500, 
  'pending'
FROM users WHERE email = 'sarah@example.com';

-- הוסף הודעות לדוגמה
INSERT INTO messages (user_id, sender, text, timestamp)
SELECT 
  id, 
  'studio', 
  'שלום שרה! התמונות שלך מוכנות לצפייה. תודיעי אם יש לך שאלות.', 
  NOW() - INTERVAL '4 hours'
FROM users WHERE email = 'sarah@example.com';

INSERT INTO messages (user_id, sender, text, timestamp)
SELECT 
  id, 
  'client', 
  'תודה רבה! הן נראות מדהימות. אפשר לבחור יותר מ-50 תמונות?', 
  NOW() - INTERVAL '3 hours'
FROM users WHERE email = 'sarah@example.com';

-- הוסף מסמכים לדוגמה
INSERT INTO documents (user_id, name, file_url, file_type, file_size)
SELECT 
  id, 
  'חוזה צילום חתונה', 
  'https://your-storage-url.com/contract.pdf', 
  'PDF', 
  '245 KB'
FROM users WHERE email = 'sarah@example.com';

-- ========================================
-- ✅ הסכמה הושלמה בהצלחה!
-- ========================================

-- לאחר הרצת הסקריפט, ניתן לבדוק:
-- SELECT * FROM users;
-- SELECT * FROM photos;
-- SELECT * FROM payments;
-- SELECT * FROM messages;
-- SELECT * FROM documents;
-- SELECT * FROM project_status;

-- כדי למחוק הכל ולהתחיל מחדש:
-- DROP TABLE IF EXISTS notifications CASCADE;
-- DROP TABLE IF EXISTS videos CASCADE;
-- DROP TABLE IF EXISTS documents CASCADE;
-- DROP TABLE IF EXISTS messages CASCADE;
-- DROP TABLE IF EXISTS payments CASCADE;
-- DROP TABLE IF EXISTS photos CASCADE;
-- DROP TABLE IF EXISTS users CASCADE;
-- DROP VIEW IF EXISTS project_status CASCADE;
-- DROP VIEW IF EXISTS unread_messages CASCADE;

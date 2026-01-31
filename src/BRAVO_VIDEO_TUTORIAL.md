# 🎬 מדריך וידאו טקסטואלי - ייצוא ל-Bravo Studio

## 📺 סדרת וידאו מומלצת (Step-by-Step)

---

# 🎥 וידאו #1: הגדרת Supabase (15 דקות)

## 🎯 מטרה
ליצור ולהגדיר את ה-Backend ב-Supabase עם כל הטבלאות הנדרשות.

---

## 📝 שלבים:

### שלב 1: יצירת פרויקט Supabase (2 דקות)
```
1. היכנס ל-https://supabase.com
2. לחץ "Start your project"
3. התחבר עם GitHub/Google
4. לחץ "New Project"
5. בחר ארגון או צור חדש
6. מלא פרטים:
   ├── Name: "wedding-crm"
   ├── Database Password: [שמור סיסמה חזקה]
   ├── Region: בחר הקרוב ביותר (Europe/Israel)
   └── Pricing Plan: Free (להתחלה)
7. לחץ "Create new project"
8. המתן 2-3 דקות ליצירת הפרויקט
```

**תוצאה:**
✅ פרויקט Supabase חדש נוצר

---

### שלב 2: העתקת Connection Details (1 דקה)
```
1. לחץ על Settings (בצד שמאל למטה)
2. לחץ על "API"
3. העתק והדבק במקום בטוח:
   ├── Project URL: https://xxxxx.supabase.co
   └── anon/public key: eyJhbGc...
```

**💡 טיפ:** תצטרך את הפרטים האלה ב-Bravo Studio!

---

### שלב 3: הרצת SQL Schema (10 דקות)
```
1. לחץ על "SQL Editor" (תפריט צד שמאל)
2. לחץ "+ New Query"
3. פתח את הקובץ: /supabase_schema.sql
4. העתק את כל התוכן (Ctrl+A → Ctrl+C)
5. הדבק ב-SQL Editor (Ctrl+V)
6. לחץ "Run" (או Ctrl+Enter)
7. המתן לסיום - תראה הודעה:
   "Success. No rows returned"
```

**מה קרה?**
```
✅ 7 טבלאות נוצרו:
   ├── users (משתמשים)
   ├── photos (תמונות)
   ├── payments (תשלומים)
   ├── messages (הודעות)
   ├── documents (מסמכים)
   ├── videos (וידאו)
   └── notifications (התראות)

✅ Indexes נוצרו (לביצועים)
✅ RLS Policies הוגדרו (אבטחה)
✅ Functions נוצרו (פונקציות עזר)
✅ Triggers הוגדרו (אוטומציה)
✅ Seed Data נוסף (דוגמאות)
```

---

### שלב 4: בדיקת הטבלאות (2 דקות)
```
1. לחץ על "Table Editor" (תפריט צד שמאל)
2. תראה את כל הטבלאות:
   ├── users
   ├── photos
   ├── payments
   ├── messages
   ├── documents
   ├── videos
   └── notifications

3. לחץ על "users" - תראה 2 שורות:
   ├── שרה ומיכאל (client)
   └── סטודיו צילום (admin)

4. לחץ על "payments" - תראה 3 תשלומים לדוגמה
5. לחץ על "messages" - תראה 2 הודעות לדוגמה
```

**תוצאה:**
✅ ה-Backend מוכן ומלא בנתונים לדוגמה!

---

# 🎥 וידאו #2: העלאת הקוד ל-GitHub (5 דקות)

## 🎯 מטרה
להעלות את קוד ה-React ל-GitHub כדי לחבר אותו ל-Bravo Studio.

---

## 📝 שלבים:

### שלב 1: יצירת Repository (2 דקות)
```
1. היכנס ל-https://github.com
2. לחץ על "+" למעלה → "New repository"
3. מלא פרטים:
   ├── Repository name: "wedding-crm-app"
   ├── Description: "CRM לסטודיו צילום חתונות"
   ├── Public/Private: בחר לפי העדפה
   └── Initialize: ללא README (הקוד כבר קיים)
4. לחץ "Create repository"
```

---

### שלב 2: העלאת הקוד (3 דקות)
```
באם הקוד כבר בפרויקט Figma Make:

1. לחץ על "Export" בפרויקט
2. בחר "Download as ZIP"
3. חלץ את הקבצים
4. פתח Terminal/CMD בתיקיית הפרויקט
5. הרץ פקודות:

git init
git add .
git commit -m "Initial commit - Wedding CRM"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/wedding-crm-app.git
git push -u origin main

6. רענן את דף GitHub - הקוד אמור להופיע!
```

**תוצאה:**
✅ הקוד ב-GitHub ומוכן לחיבור ל-Bravo

---

# 🎥 וידאו #3: יצירת אפליקציה ב-Bravo Studio (10 דקות)

## 🎯 מטרה
לייבא את הקוד ל-Bravo ולהגדיר את האפליקציה.

---

## 📝 שלבים:

### שלב 1: יצירת פרויקט Bravo (2 דקות)
```
1. היכנס ל-https://www.bravostudio.app
2. לחץ "Create New App"
3. בחר "Import from Code"
4. בחר "GitHub" כמקור
5. אשר חיבור ל-GitHub (אם נדרש)
6. בחר את ה-Repository: "wedding-crm-app"
7. בחר Branch: "main"
8. לחץ "Import"
9. המתן 2-3 דקות לסריקת הקוד
```

**תוצאה:**
✅ Bravo זיהה את כל הדפים והקומפוננטים!

---

### שלב 2: סקירת המבנה (3 דקות)
```
Bravo יזהה אוטומטית:

📱 Screens (דפים):
├── Page_Login
├── Page_ClientDashboard
├── Page_Gallery
├── Page_Video
├── Page_Payments
├── Page_Chat
├── Page_Documents
└── Page_AdminDashboard

🧩 Components (קומפוננטים):
├── Cmp_Header
└── Cmp_ButtonPrimary

🔘 Interactive Elements:
├── כל ה-btn_* (כפתורים)
├── כל ה-txt_* (טקסטים)
├── כל ה-img_* (תמונות)
└── כל ה-list_* (רשימות)
```

**בדוק:**
```
1. לחץ על "Screens" בתפריט
2. וודא שכל 8 הדפים מופיעים
3. לחץ על כל דף - תראה את האלמנטים שבו
```

---

### שלב 3: הגדרת Navigation (3 דקות)
```
1. לחץ על "Navigation" (תפריט למעלה)
2. הגדר Home Screen: "Page_Login"
3. חבר את הדפים:

Page_Login → (on success) → Page_ClientDashboard

Page_ClientDashboard → כפתורים:
├── btn_Section_gallery → Page_Gallery
├── btn_Section_video → Page_Video
├── btn_Section_payments → Page_Payments
├── btn_Section_chat → Page_Chat
└── btn_Section_documents → Page_Documents

4. כל דף עם "Back" → חזרה ל-Page_ClientDashboard
```

**בדוק:**
```
לחץ "Preview" → נווט בין דפים → וודא שהכל עובד
```

---

### שלב 4: הגדרת Settings (2 דקות)
```
1. לחץ על Settings (גלגל שיניים)
2. מלא פרטים:
   ├── App Name: "Wedding CRM"
   ├── App Icon: העלה לוגו (אופציונלי)
   ├── Primary Color: #6B7532 (ירוק זית)
   ├── Text Direction: RTL
   └── Language: Hebrew

3. לחץ "Save"
```

**תוצאה:**
✅ אפליקציה בסיסית פועלת ב-Bravo!

---

# 🎥 וידאו #4: חיבור Supabase ל-Bravo (15 דקות)

## 🎯 מטרה
לחבר את ה-Backend של Supabase לאפליקציה ב-Bravo.

---

## 📝 שלבים:

### שלב 1: הוספת Data Source (3 דקות)
```
1. בפרויקט Bravo, לחץ "Data"
2. לחץ "+ Add Data Source"
3. בחר "Supabase"
4. מלא פרטים (מהשלב הראשון):
   ├── Project URL: https://xxxxx.supabase.co
   └── API Key: eyJhbGc...
5. לחץ "Connect"
6. המתן - Bravo יזהה אוטומטית את כל הטבלאות
```

**תוצאה:**
```
✅ Bravo מחובר ל-Supabase!
✅ כל הטבלאות מופיעות:
   ├── users
   ├── photos
   ├── payments
   ├── messages
   ├── documents
   └── videos
```

---

### שלב 2: חיבור דף Dashboard (5 דקות)
```
1. לחץ על "Page_ClientDashboard"
2. חבר את הנתונים:

Frame_Welcome:
├── txt_CoupleName → users.full_name
├── txt_PackageName → users.package_name
└── txt_WeddingDate → users.wedding_date

Frame_ProjectProgress:
├── צור Query חדש: "payment_progress"
├── SQL:
    SELECT 
      (SUM(amount) FILTER (WHERE status='paid') / 
       MAX(u.package_price) * 100) as percent
    FROM payments p
    JOIN users u ON p.user_id = u.id
    WHERE p.user_id = {CURRENT_USER_ID}
├── txt_ProjectPercent → payment_progress.percent
└── Frame_ProjectProgressFill [width] → payment_progress.percent + "%"

Frame_SelectionCard:
├── צור Query: "photo_selection"
├── SQL:
    SELECT 
      COUNT(*) FILTER (WHERE is_selected) as selected,
      COUNT(*) as total
    FROM photos
    WHERE user_id = {CURRENT_USER_ID}
├── txt_SelectionCurrent → photo_selection.selected
├── txt_SelectionTotal → photo_selection.total
└── txt_SelectionPercent → (selected/total*100)

list_GallerySlideshow:
├── Data Source: photos
├── Filter: user_id = {CURRENT_USER_ID} AND is_selected = true
├── Limit: 5
└── img_Slide{index} → photos.image_url
```

**בדוק:**
```
לחץ "Preview" → תראה נתונים אמיתיים!
```

---

### שלב 3: חיבור דף Gallery (4 דקות)
```
1. לחץ על "Page_Gallery"
2. חבר קטגוריות (Static Data):

list_Categories:
├── Type: Static Array
└── Data:
    [
      {"id": "wedding", "txt_Name": "חתונה"},
      {"id": "henna", "txt_Name": "חינה"},
      {"id": "savethedate", "txt_Name": "סייב דה דייט"}
    ]

3. הגדר Navigation Variable:
btn_Category_{id}:
├── Action: Set Variable
├── Variable: selectedCategory
├── Value: {category.id}
└── Navigate to: SubCategories View

4. חבר תמונות:
list_GalleryGrid:
├── Data Source: photos
├── Filter: 
    user_id = {CURRENT_USER_ID} AND
    category = {selectedCategory} AND
    subcategory = {selectedSubCategory}
├── img_Photo_{id} → photos.image_url
└── Frame_Checkbox_{id} → Show if photos.is_selected

5. הגדר Toggle Action:
btn_Photo_{id}:
├── Type: Update Record
├── Table: photos
├── Record: {photo.id}
├── Field: is_selected
└── Value: NOT(current_value)
```

**בדוק:**
```
Preview → בחר קטגוריה → בחר תת-קטגוריה → בחר תמונות
```

---

### שלב 4: חיבור דפים נוספים (3 דקות)
```
Page_Payments:
├── list_PaymentHistory → payments
├── Filter: user_id = {CURRENT_USER_ID}
└── Sort: created_at DESC

Page_Chat:
├── list_Messages → messages
├── Filter: user_id = {CURRENT_USER_ID}
├── Sort: timestamp ASC
└── btn_SendMessage → Create Record in messages

Page_Documents:
├── list_Documents → documents
├── Filter: user_id = {CURRENT_USER_ID}
└── btn_Download_{id} → Open URL: document.file_url

Page_Video:
├── video_Player → videos.video_url
├── Filter: user_id = {CURRENT_USER_ID}
└── Limit: 1 (וידאו אחרון)
```

**תוצאה:**
✅ כל הדפים מחוברים ל-Backend!

---

# 🎥 וידאו #5: הגדרת Authentication (10 דקות)

## 🎯 מטרה
להגדיר התחברות משתמשים עם Supabase Auth.

---

## 📝 שלבים:

### שלב 1: הפעלת Auth ב-Supabase (2 דקות)
```
1. חזור ל-Supabase Dashboard
2. לחץ "Authentication" (תפריט צד)
3. לחץ "Providers"
4. הפעל:
   ├── Email (כבר מופעל)
   └── (אופציונלי) Google, Facebook
5. לחץ "Users" → "Invite User"
6. הזן:
   ├── Email: test@example.com
   ├── Password: Test123456
   └── Send: לא (נעשה ידנית)
7. לחץ "Create User"
```

**תוצאה:**
✅ משתמש לבדיקה נוצר

---

### שלב 2: חיבור Login ב-Bravo (5 דקות)
```
1. ב-Bravo, לחץ על "Page_Login"
2. הגדר Input Fields:

txt_Email:
├── Type: Text Input
├── Input Type: Email
└── Placeholder: "אימייל"

txt_Password:
├── Type: Text Input
├── Input Type: Password
└── Placeholder: "סיסמה"

3. הגדר Login Action:
btn_Login:
├── Type: Authenticate
├── Method: Supabase Sign In
├── Email: {txt_Email}
├── Password: {txt_Password}
├── On Success:
│   ├── Query user role:
│   │   SELECT role FROM users WHERE id = {AUTH_USER_ID}
│   ├── IF role = 'client':
│   │   Navigate to: Page_ClientDashboard
│   └── ELSE IF role = 'admin':
│       Navigate to: Page_AdminDashboard
└── On Error:
    Show Toast: "שם משתמש או סיסמה שגויים"
```

---

### שלב 3: הגדרת Session Management (3 דקות)
```
1. Settings → Authentication
2. הגדר:
   ├── Session Duration: 7 days
   ├── Auto-refresh: Enabled
   └── Remember Me: Enabled

3. הוסף Logout בכל דף:
btn_Logout (ב-Header):
├── Action: Sign Out
├── Clear Session
└── Navigate to: Page_Login
```

**בדוק:**
```
1. Preview האפליקציה
2. התחבר עם: test@example.com / Test123456
3. וודא שעברת ל-Dashboard
4. לחץ Logout
5. וודא שחזרת ל-Login
```

**תוצאה:**
✅ Authentication עובד מלא!

---

# 🎥 וידאו #6: הגדרת Permissions (RLS) (8 דקות)

## 🎯 מטרה
לוודא שכל משתמש רואה רק את המידע שלו.

---

## 📝 שלבים:

### שלב 1: בדיקת RLS (2 דקות)
```
1. Supabase → Authentication → Policies
2. וודא שכל טבלה יש לה policies:

✅ users: 
   ├── "Users can view own data"
   └── "Admins can view all users"

✅ photos:
   ├── "Users can view own photos"
   ├── "Users can update own photo selection"
   └── "Admins can manage all photos"

✅ payments, messages, documents, videos:
   ├── "Users can view own data"
   └── "Admins can manage all data"
```

**אם חסר משהו:**
```
הרץ שוב את ה-SQL Schema (מוידאו #1)
```

---

### שלב 2: בדיקת Filters ב-Bravo (3 דקות)
```
וודא שכל Query יש לו:
user_id = {CURRENT_USER_ID}

דוגמאות:
├── photos: WHERE user_id = {CURRENT_USER_ID}
├── payments: WHERE user_id = {CURRENT_USER_ID}
├── messages: WHERE user_id = {CURRENT_USER_ID}
└── documents: WHERE user_id = {CURRENT_USER_ID}
```

**איך לבדוק:**
```
1. Data → בחר Query
2. לחץ "Edit"
3. וודא שיש WHERE user_id = {CURRENT_USER_ID}
4. אם חסר - הוסף אותו
```

---

### שלב 3: בדיקת Actions (3 דקות)
```
וודא שכל Create/Update Action:
├── user_id מוגדר ל-{CURRENT_USER_ID}
└── לא מאפשר לשנות user_id של רשומות אחרות

דוגמה - Create Message:
btn_SendMessage:
├── Table: messages
├── Fields:
│   ├── user_id: {CURRENT_USER_ID} ✅ (קבוע)
│   ├── sender: 'client' ✅
│   └── text: {txt_MessageInput} ✅
└── NOT allowed to change: user_id של הודעות קיימות ✅
```

**תוצאה:**
✅ האפליקציה מאובטחת!
✅ כל משתמש רואה רק את המידע שלו!

---

# 🎥 וידאו #7: בדיקות ואופטימיזציה (12 דקות)

## 🎯 מטרה
לבדוק את כל הפיצ'רים ולשפר ביצועים.

---

## 📝 שלבים:

### שלב 1: בדיקת Responsive (3 דקות)
```
1. ב-Preview, לחץ על סמל הטלפון (למעלה)
2. בחר גדלים:
   ├── iPhone 14 Pro
   ├── iPad Pro
   └── Desktop

3. בדוק כל דף:
   ├── Page_ClientDashboard
   ├── Page_Gallery
   ├── Page_Video
   ├── Page_Payments
   ├── Page_Chat
   └── Page_Documents

4. וודא שהכל נראה טוב בכל הגדלים
```

**בעיות נפוצות:**
```
❌ טקסט חותך במובייל → הקטן font-size
❌ כפתורים צמודים → הוסף spacing
❌ תמונות מעוותות → object-fit: cover
```

---

### שלב 2: בדיקת Loading States (3 דקות)
```
1. הוסף Loading Indicators:

כל list_*:
├── Loading State: Show Skeleton
├── Empty State: "אין נתונים להצגה"
└── Error State: "שגיאה בטעינת נתונים"

דוגמה - list_GalleryGrid:
├── Loading: Show 8 skeleton boxes
├── Empty: "אין תמונות בקטגוריה זו"
└── Error: "שגיאה בטעינת גלריה. נסה שוב."
```

---

### שלב 3: אופטימיזציית Queries (3 דקות)
```
1. Data → בחר כל Query
2. בדוק Performance:

Slow Queries (>2s):
├── הוסף Indexes (ב-Supabase):
│   CREATE INDEX idx_photos_user_category 
│   ON photos(user_id, category);
│
└── הוסף Pagination:
    LIMIT 20 OFFSET {page * 20}

3. Enable Query Caching:
├── Data → Query Settings
├── Cache Duration: 5 minutes
└── Auto-refresh: On data change
```

---

### שלב 4: בדיקת Real-time (3 דקות)
```
1. הפעל Realtime ב-Supabase:
   ├── Table Editor → messages
   ├── Settings → Realtime
   └── Enable: ✅

2. ב-Bravo, הגדר Realtime:
   ├── Page_Chat → list_Messages
   ├── Data Source: messages (Realtime)
   ├── Listen to: INSERT, UPDATE
   └── Auto-refresh: ✅

3. בדיקה:
   ├── פתח 2 חלונות Preview
   ├── שלח הודעה באחד
   └── וודא שמופיעה בשני מיד
```

**תוצאה:**
✅ האפליקציה מהירה ורספונסיבית!

---

# 🎥 וידאו #8: העלאת תמונות לסטורג' (10 דקות)

## 🎯 מטרה
להגדיר אחסון תמונות ב-Supabase Storage.

---

## 📝 שלבים:

### שלב 1: יצירת Storage Bucket (2 דקות)
```
1. Supabase → Storage
2. לחץ "Create a new bucket"
3. מלא:
   ├── Name: "photos"
   ├── Public: ✅ (כדי להציג תמונות)
   └── File size limit: 5 MB
4. לחץ "Create bucket"

5. חזור ויצור Bucket נוסף:
   ├── Name: "videos"
   ├── Public: ✅
   └── File size limit: 500 MB
```

---

### שלב 2: הגדרת Policies (3 דקות)
```
1. לחץ על "photos" bucket
2. לחץ "Policies"
3. הוסף Policy:

Policy 1 - Users can upload:
├── Allowed operations: INSERT
├── Target roles: authenticated
└── Policy: user_id = auth.uid()

Policy 2 - Everyone can read:
├── Allowed operations: SELECT
├── Target roles: public
└── Policy: true (לכולם)

Policy 3 - Users can delete own:
├── Allowed operations: DELETE
├── Target roles: authenticated
└── Policy: user_id = auth.uid()
```

---

### שלב 3: העלאת תמונות לדוגמה (3 דקות)
```
1. photos bucket → "Upload file"
2. בחר תמונות לדוגמה (חתונה, חינה, וכו')
3. העלה 10-20 תמונות
4. כל תמונה תקבל URL:
   https://xxxxx.supabase.co/storage/v1/object/public/photos/image1.jpg
```

---

### שלב 4: עדכון טבלת photos (2 דקות)
```
1. SQL Editor → New Query
2. הרץ:

-- עדכן URLs לתמונות אמיתיות
UPDATE photos
SET image_url = 'https://xxxxx.supabase.co/storage/v1/object/public/photos/wedding1.jpg'
WHERE id = 'xxx-xxx-xxx';

-- חזור על זה לכל תמונה
```

**או:**
```
ב-Bravo, הוסף Upload Action:
btn_UploadPhoto:
├── Type: Upload File
├── Destination: Supabase Storage
├── Bucket: photos
├── Path: {user_id}/{category}/{filename}
└── On Success:
    Create Record in photos table with URL
```

**תוצאה:**
✅ תמונות אמיתיות מוצגות באפליקציה!

---

# 🎥 וידאו #9: Styling ו-Theming (8 דקות)

## 🎯 מטרה
להתאים את העיצוב למיתוג של הסטודיו.

---

## 📝 שלבים:

### שלב 1: הגדרת Brand Colors (2 דקות)
```
1. Bravo → Design System
2. לחץ "Colors"
3. הגדר:
   ├── Primary: #6B7532 (ירוק זית)
   ├── Background: #FFFFFF (לבן)
   ├── Text Primary: #1A1A1A (שחור)
   ├── Text Secondary: #666666 (אפור כהה)
   ├── Border: #E0E0E0 (אפור בהיר)
   └── Surface: #F5F5F5 (רקע שני)
```

---

### שלב 2: הגדרת Typography (2 דקות)
```
1. Design System → Typography
2. בחר גופן עברי:
   ├── Primary Font: "Heebo" (Google Fonts)
   └── Fallback: "Rubik", sans-serif

3. הגדר גדלים:
   ├── Heading 1: 24px / 700
   ├── Heading 2: 20px / 600
   ├── Body: 16px / 400
   ├── Small: 14px / 400
   └── Tiny: 12px / 400
```

---

### שלב 3: הגדרת Spacing (2 דקות)
```
1. Design System → Spacing
2. הגדר:
   ├── XS: 4px
   ├── S: 8px
   ├── M: 16px
   ├── L: 24px
   └── XL: 32px

3. החל על כל הדפים:
   ├── Padding: M (16px)
   ├── Gap: S (8px)
   └── Margin: L (24px)
```

---

### שלב 4: הגדרת Border Radius (2 דקות)
```
1. Design System → Borders
2. הגדר:
   ├── Default: 4px (מינימלי)
   └── Large: 6px (לכרטיסים גדולים)

3. החל על:
   ├── כפתורים: 4px
   ├── Input fields: 4px
   ├── Cards: 4px
   └── Images: 4px
```

**תוצאה:**
✅ עיצוב אחיד ומקצועי בכל האפליקציה!

---

# 🎥 וידאו #10: פרסום ל-App Stores (15 דקות)

## 🎯 מטרה
לפרסם את האפליקציה ב-iOS ו-Android.

---

## 📝 שלבים:

### שלב 1: הכנת Assets (3 דקות)
```
צור/הכן:
1. App Icon (1024x1024 px):
   ├── לוגו הסטודיו
   ├── רקע שקוף או צבע
   └── פורמט: PNG

2. Screenshots (לכל פלטפורמה):
   iOS:
   ├── 6.5" iPhone: 1242 x 2688 px (5 תמונות)
   └── 12.9" iPad: 2048 x 2732 px (5 תמונות)
   
   Android:
   ├── Phone: 1080 x 1920 px (8 תמונות)
   └── Tablet: 1200 x 1920 px (8 תמונות)

3. תיאור האפליקציה (בעברית ואנגלית):
   ├── Short: 80 תווים
   └── Full: 4000 תווים
```

---

### שלב 2: Build ב-Bravo (5 דקות)
```
1. Bravo → Publish
2. לחץ "Build App"
3. בחר פלטפורמה:
   ☑️ iOS
   ☑️ Android

4. מלא פרטים:
   ├── App Name: "Wedding CRM"
   ├── Bundle ID: com.studio.weddingcrm
   ├── Version: 1.0.0
   ├── Build Number: 1
   └── Upload Icon & Screenshots

5. לחץ "Start Build"
6. המתן 10-15 דקות
```

**תוצאה:**
```
✅ iOS: .ipa קובץ
✅ Android: .aab קובץ
```

---

### שלב 3: העלאה ל-TestFlight (iOS) (4 דקות)
```
1. פתח https://appstoreconnect.apple.com
2. לחץ "My Apps" → "+" → "New App"
3. מלא:
   ├── Platform: iOS
   ├── Name: Wedding CRM
   ├── Language: Hebrew
   ├── Bundle ID: (מהשלב הקודם)
   └── SKU: WCRM001

4. לחץ "Create"
5. לחץ "TestFlight" → Upload Build
6. בחר את קובץ ה-.ipa מ-Bravo
7. המתן לעיבוד (15-30 דקות)

8. הוסף External Testers:
   ├── לחץ "+"
   ├── הזן אימיילים של בודקים
   └── שלח הזמנות
```

---

### שלב 4: פרסום ב-App Store (iOS) (3 דקות)
```
1. לחץ "App Information"
2. מלא:
   ├── Category: Business
   ├── Content Rights: Own all rights
   └── Age Rating: 4+

3. לחץ "Pricing and Availability"
   ├── Price: Free (או בחר מחיר)
   └── Availability: כל המדינות

4. לחץ "1.0 Prepare for Submission"
5. העלה Screenshots, תיאור
6. לחץ "Submit for Review"
7. המתן 1-3 ימים לאישור
```

---

### שלב 5: פרסום ב-Google Play (Android) (3 דקות)
```
1. פתח https://play.google.com/console
2. לחץ "Create app"
3. מלא:
   ├── App name: Wedding CRM
   ├── Language: Hebrew
   ├── Type: App
   └── Free/Paid: Free

4. לחץ "Create app"
5. עבור ל-"Production" → "Create new release"
6. העלה קובץ .aab מ-Bravo
7. מלא:
   ├── Release name: 1.0.0
   ├── Release notes: "גרסה ראשונה"
   └── Upload Screenshots

8. לחץ "Review release"
9. לחץ "Start rollout to Production"
10. המתן 1-3 ימים לאישור
```

**תוצאה:**
✅ האפליקציה באוויר! 🎉

---

# 🎥 וידאו #11: Monitoring ותחזוקה (8 דקות)

## 🎯 מטרה
לעקוב אחר ביצועים ולטפל בבעיות.

---

## 📝 שלבים:

### שלב 1: הגדרת Analytics (3 דקות)
```
1. Bravo → Integrations
2. הוסף Google Analytics:
   ├── Tracking ID: G-XXXXXXXXXX
   └── Enable Events: ✅

3. הגדר Events:
   ├── Login Success
   ├── Photo Selected
   ├── Payment Made
   ├── Message Sent
   └── Document Downloaded
```

---

### שלב 2: הגדרת Error Tracking (2 דקות)
```
1. Bravo → Integrations
2. הוסף Sentry:
   ├── DSN: https://...
   └── Environment: production

3. Enable Crash Reports: ✅
```

---

### שלב 3: Monitoring ב-Supabase (3 דקות)
```
1. Supabase → Reports
2. עקוב אחר:
   ├── API Requests
   ├── Database Size
   ├── Active Users
   └── Error Rate

3. הגדר Alerts:
   ├── Email if Error Rate > 5%
   ├── Email if DB Size > 80%
   └── Email if API Response > 2s
```

**תוצאה:**
✅ מעקב מלא אחר האפליקציה!

---

# ✅ Checklist סופי

לפני השקה, וודא:

## Functionality:
- [ ] Login/Logout עובד
- [ ] כל הדפים נטענים
- [ ] Navigation עובד
- [ ] Data Binding תקין
- [ ] Actions מבצעים את המצופה
- [ ] Real-time עובד (צ'אט)
- [ ] תמונות נטענות
- [ ] וידאו מתנגן
- [ ] הורדת קבצים עובדת

## Security:
- [ ] RLS מופעל בכל הטבלאות
- [ ] Filters על user_id בכל Query
- [ ] Authentication חובה
- [ ] Passwords מוצפנות
- [ ] API Keys מוסתרים

## Design:
- [ ] RTL עובד בכל הדפים
- [ ] Responsive בכל הגדלים
- [ ] צבעים אחידים
- [ ] טיפוגרפיה עברית תקינה
- [ ] Loading States מוגדרים
- [ ] Error States מוגדרים

## Performance:
- [ ] Queries < 2s
- [ ] Images ממוטבות
- [ ] Caching מופעל
- [ ] Pagination בלולאות גדולות

## Legal:
- [ ] תנאי שימוש
- [ ] מדיניות פרטיות
- [ ] GDPR Compliance
- [ ] זכויות יוצרים

---

# 🎉 סיימת!

**האפליקציה שלך מוכנה ופועלת!**

---

*מדריך זה נוצר ל-Bravo Studio • עודכן לאחרונה: ינואר 2026*

# 🔗 דוגמאות Data Binding ל-Bravo Studio

## 📋 תוכן עניינים
1. [דף דשבורד לקוח](#דף-דשבורד-לקוח)
2. [דף גלריה](#דף-גלריה)
3. [דף וידאו](#דף-וידאו)
4. [דף תשלומים](#דף-תשלומים)
5. [דף צ'אט](#דף-צ'אט)
6. [דף מסמכים](#דף-מסמכים)
7. [Actions מורכבים](#actions-מורכבים)

---

## 🏠 דף דשבורד לקוח (Page_ClientDashboard)

### Data Sources נדרשים:
```
1. users (טבלה ראשית)
2. photos (לספירת תמונות)
3. payments (לחישוב התקדמות)
4. messages (להתראות)
```

---

### 👤 פרטי משתמש (Frame_Welcome)

**Supabase Query:**
```sql
SELECT 
  full_name,
  package_name,
  wedding_date
FROM users
WHERE id = {CURRENT_USER_ID}
LIMIT 1
```

**Data Binding ב-Bravo:**

| Element ID | Bind To | Field | Example Value |
|-----------|---------|-------|---------------|
| `txt_CoupleName` | users | full_name | "שרה ומיכאל" |
| `txt_PackageName` | users | package_name | "חבילת פרימיום" |
| `txt_WeddingDate` | users | wedding_date | "15 בינואר 2026" |
| `Frame_Avatar` | users | full_name[0] | "ש" (אות ראשונה) |

**Format Date (בעברית):**
```
Format: {day} ב{month} {year}
Example: 15 בינואר 2026
```

---

### 📊 Progress Bar של פרויקט (Frame_ProjectProgress)

**Supabase Query:**
```sql
SELECT 
  u.wedding_date,
  COALESCE(SUM(pay.amount), 0) as total_paid,
  u.package_price,
  (COALESCE(SUM(pay.amount), 0) / NULLIF(u.package_price, 0) * 100) as progress_percent
FROM users u
LEFT JOIN payments pay ON u.id = pay.user_id AND pay.status = 'paid'
WHERE u.id = {CURRENT_USER_ID}
GROUP BY u.id, u.wedding_date, u.package_price
```

**Data Binding:**

| Element ID | Bind To | Formula | Example |
|-----------|---------|---------|---------|
| `txt_ProjectPercent` | Query Result | progress_percent + "% הושלם" | "75% הושלם" |
| `Frame_ProjectProgressFill` | Query Result | width: progress_percent + "%" | width: "75%" |
| `txt_ProjectDeadline` | Query Result | wedding_date | "1 בפברואר 2026" |
| `txt_ProjectDaysLeft` | Query Result | DATEDIFF(wedding_date, NOW()) + " ימים נותרו" | "7 ימים נותרו" |

---

### 🖼️ כרטיס בחירת תמונות (Frame_SelectionCard)

**Supabase Query:**
```sql
SELECT 
  COUNT(*) FILTER (WHERE is_selected = true) as selected_count,
  COUNT(*) as total_count
FROM photos
WHERE user_id = {CURRENT_USER_ID}
```

**Data Binding:**

| Element ID | Bind To | Formula | Example |
|-----------|---------|---------|---------|
| `txt_SelectionCurrent` | Query Result | selected_count | "38" |
| `txt_SelectionTotal` | Query Result | total_count | "50" |
| `txt_SelectionPercent` | Query Result | (selected_count / total_count * 100) | "76" |
| `Frame_SelectionProgressFill` | Query Result | width: (selected_count / total_count * 100) + "%" | width: "76%" |

---

### 🎞️ Gallery Slideshow (Frame_GallerySlider)

**Supabase Query:**
```sql
SELECT 
  id,
  image_url,
  thumbnail_url
FROM photos
WHERE user_id = {CURRENT_USER_ID}
  AND is_selected = true
ORDER BY created_at DESC
LIMIT 5
```

**Data Binding:**

| Element ID | Type | Bind To | Field |
|-----------|------|---------|-------|
| `list_GallerySlideshow` | **LIST** | Query Result | (כל הרשימה) |
| `img_Slide{index}` | Image | photos | image_url |
| `btn_Slide{index}` | Button | photos | id (for navigation) |

**Auto-Slideshow Logic:**
```javascript
// ב-Bravo, הגדר Timer Action:
Timer: 3000ms (3 שניות)
Action: Next Slide
Loop: true
```

---

### 📋 כרטיסיות דשבורד (list_DashboardSections)

**Static Data (ללא Supabase):**
הנתונים האלה סטטיים ויכולים להיות מוגדרים ישירות ב-Bravo:

| Section ID | txt_Title | txt_Description | Route | txt_Badge |
|-----------|----------|----------------|-------|----------|
| gallery | בחירת תמונות | בחרו את התמונות המועדפות | /gallery | חדש |
| video | וידאו חתונה | צפו והורידו את הוידאו | /video | - |
| payments | תשלומים | עקבו אחר יתרת התשלום | /payments | - |
| chat | צ'אט | התכתבו עם הצלם | /chat | 3 (unread) |
| documents | מסמכים | הורידו חוזים ומסמכים | /documents | - |

**Data Binding:**

| Element ID | Bind To | Field |
|-----------|---------|-------|
| `list_Sections` | Static Array | sections |
| `txt_SectionTitle` | sections | txt_Title |
| `txt_SectionDescription` | sections | txt_Description |
| `btn_Section_{id}` | sections | route (Action: Navigate) |
| `txt_Badge` | sections | txt_Badge |

**Dynamic Badge (הודעות לא נקראות):**
```sql
-- Query for Chat Badge:
SELECT COUNT(*) as unread_count
FROM messages
WHERE user_id = {CURRENT_USER_ID}
  AND sender = 'studio'
  AND is_read = false
```

---

## 📸 דף גלריה (Page_Gallery)

### Data Sources:
```
1. photos (טבלת תמונות)
2. categories (רשימת קטגוריות - סטטית או מ-Supabase)
```

---

### 📂 רשימת קטגוריות (Frame_CategoriesView)

**Static Data:**
```json
[
  {
    "id": "wedding",
    "txt_Name": "חתונה",
    "subcategories_count": 4
  },
  {
    "id": "henna",
    "txt_Name": "חינה",
    "subcategories_count": 3
  },
  {
    "id": "savethedate",
    "txt_Name": "סייב דה דייט",
    "subcategories_count": 3
  }
]
```

**Data Binding:**

| Element ID | Bind To | Field | Action |
|-----------|---------|-------|--------|
| `list_Categories` | Static/DB | categories | - |
| `btn_Category_{id}` | categories | id | Navigate → SubCategories + Set Variable: selectedCategory |
| `txt_CategoryName` | categories | txt_Name | - |
| `txt_SubcategoriesCount` | categories | subcategories_count | - |

---

### 📁 תת-קטגוריות (Frame_SubCategoriesView)

**Supabase Query:**
```sql
SELECT 
  subcategory,
  COUNT(*) as photo_count
FROM photos
WHERE user_id = {CURRENT_USER_ID}
  AND category = {selectedCategory}
GROUP BY subcategory
```

**Data Binding:**

| Element ID | Bind To | Field | Action |
|-----------|---------|-------|--------|
| `list_SubCategories` | Query | subcategory | - |
| `btn_SubCategory_{id}` | subcategories | subcategory | Navigate → Photos + Set Variable: selectedSubCategory |
| `txt_SubCategoryName` | subcategories | subcategory | - |
| `txt_PhotoCount` | subcategories | photo_count | - |

---

### 🖼️ Grid תמונות (Frame_PhotosView)

**Supabase Query:**
```sql
SELECT 
  id,
  image_url,
  thumbnail_url,
  is_selected
FROM photos
WHERE user_id = {CURRENT_USER_ID}
  AND category = {selectedCategory}
  AND subcategory = {selectedSubCategory}
ORDER BY order_index, created_at
```

**Data Binding:**

| Element ID | Type | Bind To | Field | Action |
|-----------|------|---------|-------|--------|
| `list_GalleryGrid` | **LIST** | Query | photos | - |
| `img_Photo_{id}` | Image | photos | image_url OR thumbnail_url | - |
| `btn_Photo_{id}` | Button | photos | id | **Toggle** is_selected |
| `Frame_Checkbox_{id}` | Conditional | photos | is_selected | Show if TRUE |
| `Frame_Overlay_{id}` | Conditional | photos | is_selected | Opacity: 100 if TRUE |

**Action: Toggle Selection**
```
Type: Update Record
Table: photos
Record ID: {photo.id}
Field: is_selected
Value: NOT(current_value)  // Toggle
```

---

### 📊 Bottom Bar - Selection Status (Frame_BottomBar)

**Supabase Query:**
```sql
SELECT 
  COUNT(*) FILTER (WHERE is_selected = true) as selection_count
FROM photos
WHERE user_id = {CURRENT_USER_ID}
```

**Data Binding:**

| Element ID | Bind To | Formula |
|-----------|---------|---------|
| `txt_SelectionCount` | Query | selection_count |
| `txt_SelectionLimit` | Static | 50 |
| `Frame_SelectionProgressFill` | Query | width: (selection_count / 50 * 100) + "%" |
| `btn_SubmitSelection` | Query | Disabled if selection_count = 0 |

---

## 🎥 דף וידאו (Page_Video)

### Data Source:
```sql
SELECT 
  id,
  title,
  video_url,
  thumbnail_url,
  duration,
  file_size,
  format,
  status,
  expiry_date,
  EXTRACT(DAY FROM (expiry_date - CURRENT_DATE)) as days_remaining
FROM videos
WHERE user_id = {CURRENT_USER_ID}
ORDER BY created_at DESC
LIMIT 1
```

---

### 🎬 נגן וידאו (Frame_VideoPlayer)

**Data Binding:**

| Element ID | Type | Bind To | Field |
|-----------|------|---------|-------|
| `video_Player` | Video | videos | video_url |
| `video_Player[poster]` | Image | videos | thumbnail_url |
| `btn_PlayPause` | Button | - | Action: Toggle Play/Pause |
| `btn_Mute` | Button | - | Action: Toggle Mute |
| `btn_Fullscreen` | Button | - | Action: Fullscreen |

**Actions:**
```
btn_PlayPause:
  - If playing: Pause Video
  - If paused: Play Video

btn_Mute:
  - Toggle video.muted

btn_Fullscreen:
  - Request Fullscreen on video element
```

---

### 📥 פרטי וידאו (Frame_VideoStatus)

**Data Binding:**

| Element ID | Bind To | Field | Example |
|-----------|---------|-------|---------|
| `txt_VideoTitle` | videos | title | "וידאו החתונה שלכם מוכן" |
| `txt_VideoFormat` | videos | format | "MP4 (1080p)" |
| `txt_VideoDuration` | videos | duration | "45 דקות" |
| `txt_VideoSize` | videos | file_size | "2.4 GB" |
| `btn_DownloadVideo` | videos | video_url | Action: Download File |

---

### ⏰ התראת תפוגה (Frame_ExpiryWarning)

**Data Binding:**

| Element ID | Bind To | Formula |
|-----------|---------|---------|
| `txt_DaysRemaining` | videos | days_remaining + " ימים נותרו" |
| `txt_ExpiryDate` | videos | expiry_date (format: DD בMMMM YYYY) |

**Conditional Display:**
```
Show Frame_ExpiryWarning IF:
  videos.status = 'ready' AND
  videos.days_remaining <= 30
```

---

## 💳 דף תשלומים (Page_Payments)

### Data Source:
```sql
-- Payment Summary
SELECT 
  u.package_price as total_amount,
  COALESCE(SUM(p.amount) FILTER (WHERE p.status = 'paid'), 0) as paid_amount,
  u.package_price - COALESCE(SUM(p.amount) FILTER (WHERE p.status = 'paid'), 0) as balance_amount
FROM users u
LEFT JOIN payments p ON u.id = p.user_id
WHERE u.id = {CURRENT_USER_ID}
GROUP BY u.id, u.package_price
```

---

### 📊 סיכום תשלומים (Frame_PaymentSummary)

**Data Binding:**

| Element ID | Bind To | Formula |
|-----------|---------|---------|
| `txt_TotalAmount` | Query | "₪" + total_amount.toLocaleString() |
| `txt_PaidAmount` | Query | "₪" + paid_amount.toLocaleString() |
| `txt_BalanceAmount` | Query | "₪" + balance_amount.toLocaleString() |
| `txt_ProgressPercent` | Query | (paid_amount / total_amount * 100).toFixed(0) + "%" |
| `Frame_ProgressFill` | Query | width: (paid_amount / total_amount * 100) + "%" |

---

### 📜 היסטוריית תשלומים (list_PaymentHistory)

**Supabase Query:**
```sql
SELECT 
  id,
  description,
  amount,
  status,
  payment_date,
  created_at
FROM payments
WHERE user_id = {CURRENT_USER_ID}
ORDER BY 
  CASE WHEN status = 'pending' THEN 0 ELSE 1 END,
  created_at DESC
```

**Data Binding:**

| Element ID | Bind To | Field | Format |
|-----------|---------|-------|--------|
| `list_PaymentHistory` | Query | payments | - |
| `txt_PaymentDescription` | payments | description | - |
| `txt_PaymentAmount` | payments | "₪" + amount.toLocaleString() | "₪2,000" |
| `txt_PaymentDate` | payments | payment_date OR created_at | "1 בדצמבר 2025" |
| `txt_PaymentStatus` | payments | status = 'paid' ? 'שולם' : 'ממתין' | - |

**Conditional Styling:**

| Element | Condition | Style |
|---------|-----------|-------|
| Icon | status = 'paid' | CheckCircle, bg-[#6B7532] |
| Icon | status = 'pending' | Clock, bg-[#F5F5F5] |
| txt_PaymentStatus | status = 'paid' | color: #6B7532 |
| txt_PaymentStatus | status = 'pending' | color: #666666 |

---

### 💰 כפתור תשלום (Frame_MakePayment)

**Conditional Display:**
```
Show Frame_MakePayment IF:
  balance_amount > 0
```

**Action:**
```
btn_MakePayment:
  Action: Navigate to External Payment Gateway
  OR
  Action: Open Chat to discuss payment
```

---

## 💬 דף צ'אט (Page_Chat)

### Data Source:
```sql
SELECT 
  id,
  sender,
  text,
  timestamp,
  is_read
FROM messages
WHERE user_id = {CURRENT_USER_ID}
ORDER BY timestamp ASC
```

---

### 💬 רשימת הודעות (list_Messages)

**Data Binding:**

| Element ID | Type | Bind To | Field |
|-----------|------|---------|-------|
| `list_Messages` | **LIST** | Query | messages |
| `txt_MessageText` | Text | messages | text |
| `txt_MessageTimestamp` | Text | messages | timestamp (format: HH:MM) |
| `Frame_Message_{id}` | Container | messages | - |

**Conditional Styling:**

| Element | Condition | Style |
|---------|-----------|-------|
| Frame_Message | sender = 'client' | justify-start, text-right |
| Frame_Message | sender = 'studio' | justify-end, text-left |
| Message Bubble | sender = 'client' | bg-[#6B7532], text-white |
| Message Bubble | sender = 'studio' | bg-[#F5F5F5], text-[#1A1A1A] |

---

### ✍️ שליחת הודעה (Frame_MessageInput)

**Action:**
```
btn_SendMessage:
  Type: Create Record
  Table: messages
  Fields:
    - user_id: {CURRENT_USER_ID}
    - sender: 'client'
    - text: {txt_MessageInput}
    - timestamp: NOW()
  
  After Success:
    - Clear txt_MessageInput
    - Scroll to bottom of list_Messages
    - Refresh messages list
```

---

## 📄 דף מסמכים (Page_Documents)

### Data Source:
```sql
SELECT 
  id,
  name,
  file_url,
  file_type,
  file_size,
  uploaded_at
FROM documents
WHERE user_id = {CURRENT_USER_ID}
ORDER BY uploaded_at DESC
```

---

### 📋 רשימת מסמכים (list_Documents)

**Data Binding:**

| Element ID | Type | Bind To | Field | Action |
|-----------|------|---------|-------|--------|
| `list_Documents` | **LIST** | Query | documents | - |
| `txt_DocumentName` | Text | documents | name | - |
| `txt_DocumentType` | Text | documents | file_type | - |
| `txt_DocumentSize` | Text | documents | file_size | - |
| `txt_DocumentUploadDate` | Text | documents | "הועלה " + uploaded_at | - |
| `btn_Download_{id}` | Button | documents | file_url | **Action: Download** |

**Download Action:**
```
btn_Download_{id}:
  Type: Open URL
  URL: {document.file_url}
  Target: New Tab / Download
```

---

## 🎯 Actions מורכבים

### 1. בחירת תמונה עם הגבלה (Gallery)

**Logic:**
```javascript
btn_Photo_{id}:
  IF photo.is_selected = true:
    // Unselect
    Action: Update Record
    Table: photos
    Record: {photo.id}
    Field: is_selected = false
  
  ELSE IF selection_count < 50:
    // Select
    Action: Update Record
    Table: photos
    Record: {photo.id}
    Field: is_selected = true
  
  ELSE:
    // Show error
    Action: Show Toast
    Message: "הגעת למגבלת הבחירה (50 תמונות)"
    Type: warning
```

---

### 2. שליחת בחירה סופית (Gallery)

**Action:**
```
btn_SubmitSelection:
  Step 1: Validate
    - Check: selection_count > 0
    - If false: Show Toast "יש לבחור לפחות תמונה אחת"
  
  Step 2: Create Notification
    Type: Create Record
    Table: notifications
    Fields:
      - user_id: {CURRENT_USER_ID}
      - title: "בחירת תמונות נשלחה"
      - message: "בחרת {selection_count} תמונות. הצלם יעבד אותן בקרוב."
      - type: "success"
  
  Step 3: Navigate
    Target: Page_ClientDashboard
    Show Toast: "הבחירה נשלחה בהצלחה!"
```

---

### 3. Login Flow

**Action:**
```
btn_Login:
  Step 1: Authenticate
    Service: Supabase Auth
    Method: signInWithPassword
    Email: {txt_Email}
    Password: {txt_Password}
  
  Step 2: Check User Role
    Query: SELECT role FROM users WHERE id = {AUTH_USER_ID}
  
  Step 3: Navigate based on role
    IF role = 'client':
      Navigate to: Page_ClientDashboard
    ELSE IF role = 'admin':
      Navigate to: Page_AdminDashboard
    ELSE:
      Show Error: "משתמש לא מורשה"
```

---

### 4. Real-time Updates (Chat)

**Supabase Realtime:**
```javascript
// Enable Realtime on messages table
Realtime Channel: messages
Filter: user_id = {CURRENT_USER_ID}
Events: INSERT, UPDATE

On New Message:
  - Append to list_Messages
  - Scroll to bottom
  - Play notification sound (optional)
  - Update unread count badge
```

---

## 🔄 Variables ב-Bravo

### Global Variables:
```
CURRENT_USER_ID: UUID של המשתמש המחובר
selectedCategory: קטגוריה נבחרת (wedding/henna/savethedate)
selectedSubCategory: תת-קטגוריה נבחרת
selection_count: מספר תמונות נבחרות
```

### איך להשתמש:
```
Set Variable:
  Name: selectedCategory
  Value: {clicked_category.id}

Use Variable:
  Query Parameter: category = {selectedCategory}
```

---

## ✅ Checklist - Data Binding

לפני הפרסום, וודא:

- [ ] כל ה-`list_*` מחוברים למקור נתונים
- [ ] כל ה-`txt_*` מציגים נתונים דינמיים
- [ ] כל ה-`img_*` מחוברים ל-URLs תקינים
- [ ] כל ה-`btn_*` מבצעים Actions נכונים
- [ ] Conditional Display עובד (if/else)
- [ ] Filters עובדים (קטגוריות, סטטוסים)
- [ ] Real-time Updates פועלים (צ'אט)
- [ ] Navigation בין דפים תקין
- [ ] Error Handling מוגדר

---

## 🎓 Tips למתקדמים

### 1. Pagination (עימוד)
```sql
-- Add to query:
LIMIT 20 OFFSET {page * 20}
```

### 2. Search (חיפוש)
```sql
-- Add to WHERE clause:
AND name ILIKE '%' || {search_input} || '%'
```

### 3. Sorting (מיון)
```sql
-- Dynamic sorting:
ORDER BY 
  CASE WHEN {sort_by} = 'date' THEN created_at END DESC,
  CASE WHEN {sort_by} = 'name' THEN name END ASC
```

### 4. Computed Fields (שדות מחושבים)
```sql
SELECT 
  *,
  (amount_paid / amount_total * 100) as progress,
  EXTRACT(DAY FROM (due_date - CURRENT_DATE)) as days_left
FROM ...
```

---

**סיימת! כעת יש לך כל הדוגמאות לחיבור ה-Data Binding ב-Bravo Studio** 🎉

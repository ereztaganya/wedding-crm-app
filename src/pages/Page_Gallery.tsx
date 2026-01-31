import React, { useState } from 'react';
import { Frame_Header } from '../components/Cmp_Header';
import { Cmp_ButtonPrimary } from '../components/Cmp_ButtonPrimary';
import { Check, ChevronLeft } from 'lucide-react';

interface MediaItem {
  img_id: string;
  img_url: string;
  img_selected: boolean;
  category: string;
  subcategory: string;
}

interface SubCategory {
  id: string;
  txt_Name: string;
}

interface Category {
  id: string;
  txt_Name: string;
  list_SubCategories: SubCategory[];
}

export function Page_Gallery() {
  // Categories structure
  const list_Categories: Category[] = [
    {
      id: 'wedding',
      txt_Name: 'חתונה',
      list_SubCategories: [
        { id: 'ceremony', txt_Name: 'טקס' },
        { id: 'couple', txt_Name: 'זוגי' },
        { id: 'family', txt_Name: 'משפחה' },
        { id: 'reception', txt_Name: 'מסיבה' }
      ]
    },
    {
      id: 'henna',
      txt_Name: 'חינה',
      list_SubCategories: [
        { id: 'bride', txt_Name: 'כלה' },
        { id: 'guests', txt_Name: 'אורחים' },
        { id: 'decoration', txt_Name: 'עיצוב' }
      ]
    },
    {
      id: 'savethedate',
      txt_Name: 'סייב דה דייט',
      list_SubCategories: [
        { id: 'outdoor', txt_Name: 'חוץ' },
        { id: 'studio', txt_Name: 'אולפן' },
        { id: 'nature', txt_Name: 'טבע' }
      ]
    }
  ];

  const [list_MediaItems, setMediaItems] = useState<MediaItem[]>([
    // Wedding - Ceremony
    { img_id: '1', img_url: 'https://images.unsplash.com/photo-1767986012138-4893f40932d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2VyZW1vbnklMjBlbGVnYW50fGVufDF8fHx8MTc2OTM3MzcyNnww&ixlib=rb-4.1.0&q=80&w=1080', img_selected: true, category: 'wedding', subcategory: 'ceremony' },
    { img_id: '2', img_url: 'https://images.unsplash.com/photo-1613067532651-7075a620c900?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmVjZXB0aW9uJTIwdmVudWV8ZW58MXx8fHwxNzY5NDM1NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080', img_selected: false, category: 'wedding', subcategory: 'ceremony' },
    
    // Wedding - Couple
    { img_id: '3', img_url: 'https://images.unsplash.com/photo-1654512721615-5622d6ede1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHklMjBjb3VwbGV8ZW58MXx8fHwxNzY5NDQzMTUxfDA&ixlib=rb-4.1.0&q=80&w=1080', img_selected: true, category: 'wedding', subcategory: 'couple' },
    { img_id: '4', img_url: 'https://images.unsplash.com/photo-1656103743142-229f0adaf068?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwb3V0ZG9vcnxlbnwxfHx8fDE3Njk0MDEwOTN8MA&ixlib=rb-4.1.0&q=80&w=1080', img_selected: false, category: 'wedding', subcategory: 'couple' },
    
    // Wedding - Family
    { img_id: '5', img_url: 'https://images.unsplash.com/photo-1508767618323-33eab6c1cac5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG8lMjBnYWxsZXJ5fGVufDF8fHx8MTc2OTQ0MzIzNHww&ixlib=rb-4.1.0&q=80&w=1080', img_selected: true, category: 'wedding', subcategory: 'family' },
    { img_id: '6', img_url: 'https://images.unsplash.com/photo-1765871905607-3676540588b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FuZGlkJTIwbW9tZW50fGVufDF8fHx8MTc2OTQyNDk4Mnww&ixlib=rb-4.1.0&q=80&w=1080', img_selected: false, category: 'wedding', subcategory: 'family' },
    
    // Henna - Bride
    { img_id: '7', img_url: 'https://images.unsplash.com/photo-1677691257237-3294c7fd18a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYnJpZGUlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njk0MjM5MzR8MA&ixlib=rb-4.1.0&q=80&w=1080', img_selected: false, category: 'henna', subcategory: 'bride' },
    { img_id: '8', img_url: 'https://images.unsplash.com/photo-1551488832-a7a60e7c966e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGV0YWlscyUyMHJpbmdzfGVufDF8fHx8MTc2OTQzNTI1N3ww&ixlib=rb-4.1.0&q=80&w=1080', img_selected: true, category: 'henna', subcategory: 'decoration' },
    
    // Save the Date
    { img_id: '9', img_url: 'https://images.unsplash.com/photo-1606800052052-c96a74d8c2d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBvdXRkb29yJTIwcGhvdG9zaG9vdHxlbnwxfHx8fDE3Njk0NDQ5MjV8MA&ixlib=rb-4.1.0&q=80&w=1080', img_selected: true, category: 'savethedate', subcategory: 'outdoor' },
    { img_id: '10', img_url: 'https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VwbGUlMjBuYXR1cmUlMjBwaG90b3xlbnwxfHx8fDE3Njk0NDQ5NDh8MA&ixlib=rb-4.1.0&q=80&w=1080', img_selected: false, category: 'savethedate', subcategory: 'nature' }
  ]);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);

  const txt_SelectionLimit = 50;
  const txt_SelectionCount = list_MediaItems.filter(item => item.img_selected).length;

  const toggleSelection = (img_id: string) => {
    setMediaItems(items => 
      items.map(item => {
        if (item.img_id === img_id) {
          if (!item.img_selected && txt_SelectionCount >= txt_SelectionLimit) {
            return item;
          }
          return { ...item, img_selected: !item.img_selected };
        }
        return item;
      })
    );
  };

  // Filter photos based on selected category/subcategory
  const filteredPhotos = list_MediaItems.filter(item => {
    if (!selectedCategory) return false;
    if (selectedSubCategory) {
      return item.category === selectedCategory && item.subcategory === selectedSubCategory;
    }
    return item.category === selectedCategory;
  });

  const getCurrentCategory = () => list_Categories.find(cat => cat.id === selectedCategory);

  return (
    <div id="Page_Gallery" className="h-screen bg-white flex flex-col md:flex-row overflow-hidden">
      <Frame_Header 
        txt_ProjectName="גלריה"
        showBack
        showDrawer={true}
      />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Categories View */}
        {!selectedCategory && (
          <div id="Frame_CategoriesView" className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-8">
            <h2 className="text-lg md:text-xl text-[#1A1A1A] mb-4 md:mb-6 text-right">בחר קטגוריה</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
              {list_Categories.map((category) => (
                <button
                  key={category.id}
                  id={`btn_Category_${category.id}`}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group text-right p-6 md:p-8 border border-[#E0E0E0] hover:border-[#6B7532] transition-all"
                  style={{ borderRadius: '4px' }}
                >
                  <div className="flex items-center justify-between flex-row-reverse">
                    <h3 className="text-base md:text-lg text-[#1A1A1A] group-hover:text-[#6B7532] transition-colors">
                      {category.txt_Name}
                    </h3>
                    <ChevronLeft className="w-5 h-5 text-[#666666] group-hover:text-[#6B7532] transition-colors rotate-180" />
                  </div>
                  <p className="text-xs md:text-sm text-[#666666] mt-2">
                    {category.list_SubCategories.length} תתי קטגוריות
                  </p>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* SubCategories View */}
        {selectedCategory && !selectedSubCategory && (
          <div id="Frame_SubCategoriesView" className="flex-1 flex flex-col overflow-hidden">
            {/* Back to Categories */}
            <div className="px-4 md:px-8 py-3 md:py-4 border-b border-[#E0E0E0]">
              <button
                id="btn_BackToCategories"
                onClick={() => setSelectedCategory(null)}
                className="flex items-center gap-2 text-sm text-[#666666] hover:text-[#1A1A1A] transition-colors flex-row-reverse"
              >
                <span>קטגוריות</span>
                <ChevronLeft className="w-4 h-4" />
              </button>
              <h2 className="text-base md:text-lg text-[#1A1A1A] mt-2 text-right">
                {getCurrentCategory()?.txt_Name}
              </h2>
            </div>

            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {getCurrentCategory()?.list_SubCategories.map((subcategory) => {
                  const photoCount = list_MediaItems.filter(
                    item => item.category === selectedCategory && item.subcategory === subcategory.id
                  ).length;
                  
                  return (
                    <button
                      key={subcategory.id}
                      id={`btn_SubCategory_${subcategory.id}`}
                      onClick={() => setSelectedSubCategory(subcategory.id)}
                      className="group text-right p-4 md:p-6 border border-[#E0E0E0] hover:border-[#6B7532] transition-all"
                      style={{ borderRadius: '4px' }}
                    >
                      <div className="flex items-center justify-between flex-row-reverse mb-2">
                        <h3 className="text-sm md:text-base text-[#1A1A1A] group-hover:text-[#6B7532] transition-colors">
                          {subcategory.txt_Name}
                        </h3>
                        <ChevronLeft className="w-4 h-4 text-[#666666] group-hover:text-[#6B7532] transition-colors rotate-180" />
                      </div>
                      <p className="text-xs text-[#666666]">{photoCount} תמונות</p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Photos Grid View */}
        {selectedCategory && selectedSubCategory && (
          <div id="Frame_PhotosView" className="flex-1 flex flex-col overflow-hidden">
            {/* Breadcrumb Navigation */}
            <div className="px-4 md:px-8 py-3 md:py-4 border-b border-[#E0E0E0]">
              <div className="flex items-center gap-2 text-xs md:text-sm text-[#666666] flex-row-reverse">
                <button
                  id="btn_BackToSubCategories"
                  onClick={() => setSelectedSubCategory(null)}
                  className="hover:text-[#1A1A1A] transition-colors"
                >
                  {getCurrentCategory()?.txt_Name}
                </button>
                <ChevronLeft className="w-3 h-3 rotate-180" />
                <span className="text-[#1A1A1A]">
                  {getCurrentCategory()?.list_SubCategories.find(sub => sub.id === selectedSubCategory)?.txt_Name}
                </span>
              </div>
            </div>

            {/* Gallery Grid */}
            <div className="flex-1 overflow-y-auto px-4 md:px-8 py-4 md:py-6 pb-24 md:pb-28">
              <div id="list_GalleryGrid" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                {filteredPhotos.map((item) => (
                  <button
                    key={item.img_id}
                    id={`btn_Photo_${item.img_id}`}
                    onClick={() => toggleSelection(item.img_id)}
                    className="relative aspect-square group overflow-hidden border border-[#E0E0E0] hover:border-[#1A1A1A] transition-colors"
                    style={{ borderRadius: '4px' }}
                  >
                    <img
                      id={`img_Photo_${item.img_id}`}
                      src={item.img_url}
                      alt={`פריט גלריה ${item.img_id}`}
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Selection Overlay */}
                    <div 
                      id={`Frame_Overlay_${item.img_id}`}
                      className={`absolute inset-0 transition-opacity ${
                        item.img_selected ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      <div className="absolute inset-0 bg-black/30" />
                      <div 
                        id={`Frame_Checkbox_${item.img_id}`}
                        className={`absolute top-2 md:top-3 right-2 md:right-3 w-6 h-6 md:w-8 md:h-8 flex items-center justify-center ${
                          item.img_selected ? 'bg-[#6B7532]' : 'bg-white/90'
                        }`} 
                        style={{ borderRadius: '4px' }}
                      >
                        {item.img_selected && <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Sticky Bottom Bar - Only show when in photos view */}
      {selectedCategory && selectedSubCategory && (
        <div id="Frame_BottomBar" className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E0E0E0] px-4 md:px-8 py-3 md:py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 md:gap-0 flex-row-reverse">
            <div className="text-right">
              <span id="txt_SelectionStatus" className="text-xs md:text-sm text-[#666666]">
                <span className="txt_SelectionCount text-[#1A1A1A] font-medium">{txt_SelectionCount}</span>
                <span> מתוך </span>
                <span className="txt_SelectionLimit">{txt_SelectionLimit}</span>
                <span> תמונות נבחרו</span>
              </span>
              <div id="Frame_SelectionProgressBar" className="mt-1.5 md:mt-2 w-full md:w-64 bg-[#F5F5F5] h-1.5" style={{ borderRadius: '4px' }}>
                <div 
                  id="Frame_SelectionProgressFill"
                  className="bg-[#6B7532] h-1.5 transition-all"
                  style={{ 
                    width: `${(txt_SelectionCount / txt_SelectionLimit) * 100}%`,
                    borderRadius: '4px',
                    marginRight: 'auto',
                    marginLeft: 0
                  }}
                />
              </div>
            </div>
            
            <Cmp_ButtonPrimary
              id="btn_SubmitSelection"
              variant="primary"
              disabled={txt_SelectionCount === 0}
            >
              שלח בחירה
            </Cmp_ButtonPrimary>
          </div>
        </div>
      )}
    </div>
  );
}

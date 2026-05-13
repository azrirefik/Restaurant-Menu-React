import MenuItem from './MenuItem';

function MenuCategory({ 
  categoryName = "Category", 
  items = [], 
  onItemOrder 
}) {
  return (
    <section className="space-y-6">
      <div className="divider divider-start font-bold text-2xl text-base-content uppercase tracking-widest">
        {categoryName}
      </div>
      
      {items.length === 0 ? (
        <div className="alert alert-info shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>No items available in this category.</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <MenuItem 
              key={item.id} 
              {...item} 
              onOrder={onItemOrder} 
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default MenuCategory;

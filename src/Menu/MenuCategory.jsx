import MenuItem from './MenuItem';

function MenuCategory({ 
  categoryName = "Category", 
  items = [], 
  onItemOrder 
}) {
  return (
    <div className="menu-category" style={{ marginBottom: '40px' }}>
      <h2>{categoryName}</h2>
      
      {items.length === 0 ? (
        <p>No items available in this category</p>
      ) : (
        <div className="items-list">
          {items.map((item) => (
            <MenuItem 
              key={item.id} 
              {...item} 
              onOrder={onItemOrder} 
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default MenuCategory;

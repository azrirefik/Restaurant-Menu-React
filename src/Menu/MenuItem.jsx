function MenuItem({
  name = "Menu Item",
  description = "",
  price = 0,
  category = "general",
  isVegetarian = false,
  isSpicy = false,
  image = "/default-food.jpg",
  onOrder
}) {
  return (
    <div className="menu-item contact-card" style={{ textAlign: 'left' }}>
      <h3>{name}</h3>
      
      {description !== "" && (
        <p className="description">{description}</p>
      )}

      <p className="price">${price.toFixed(2)}</p>

      <div className="tags">
        {isVegetarian && <p>🌱</p>}
        {isSpicy && <p>🌶️</p>}
      </div>

      <button onClick={() => onOrder(name, price)}>
        Order Now
      </button>
    </div>
  );
}

export default MenuItem;

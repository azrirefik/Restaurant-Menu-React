import RestaurantHeader from './Menu/RestaurantHeader';
import MenuCategory from './Menu/MenuCategory';

function MenuApp() {
  const restaurantInfo = {
    name: "Fariz Maju",
    tagline: " GOAT Mamak",
    cuisine: " Anything you want bro",
    rating: 3.8
  };

  const appetizers = [
    { id: 1, name: "Garlic Bread", price: 5.5, isVegetarian: true, description: "Toasted with herbs" },
    { id: 2, name: "Spicy Wings", price: 10.0, isSpicy: true, description: "Hot and buffalo style" }
  ];

  const mains = [
    { id: 3, name: "Margherita Pizza", price: 12.0, isVegetarian: true },
    { id: 4, name: "Beef Lasagna", price: 15.5, description: "Layers of pasta and meat" },
    { id: 5, name: "Pesto Pasta", price: 13.0, isVegetarian: true, description: "Fresh basil pesto" }
  ];

  const desserts = [
    { id: 6, name: "Tiramisu", price: 8.0, description: "Traditional coffee cake" }
  ];

  const handleItemOrder = (itemName, price) => {
    alert(`Order received: ${itemName} for $${price.toFixed(2)}`);
    console.log("Processing order for:", itemName);
  };

  return (
    <div className="menu-app app-container">
      <RestaurantHeader 
        restaurantName={restaurantInfo.name}
        tagline={restaurantInfo.tagline}
        cuisine={restaurantInfo.cuisine}
        rating={restaurantInfo.rating}
      />

      <hr />

      <MenuCategory 
        categoryName="Appetizers" 
        items={appetizers} 
        onItemOrder={handleItemOrder} 
      />

      <MenuCategory 
        categoryName="Main Courses" 
        items={mains} 
        onItemOrder={handleItemOrder} 
      />

      <MenuCategory 
        categoryName="Desserts" 
        items={desserts} 
        onItemOrder={handleItemOrder} 
      />
    </div>
  );
}

export default MenuApp;

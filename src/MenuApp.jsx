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

  const drinks = [
    { id: 7, name: "Teh Tarik", price: 3.0, description: "Classic Malaysian pulled tea" },
    { id: 8, name: "Iced Milo", price: 4.5, description: "Chocolate malt drink" }
  ];

  const handleItemOrder = (itemName, price) => {
    alert(`Order received: ${itemName} for $${price.toFixed(2)}`);
    console.log("Processing order for:", itemName);
  };

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <RestaurantHeader 
          restaurantName={restaurantInfo.name}
          tagline={restaurantInfo.tagline}
          cuisine={restaurantInfo.cuisine}
          rating={restaurantInfo.rating}
        />

        <div className="grid gap-8">
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

          <MenuCategory 
            categoryName="Drinks" 
            items={drinks} 
            onItemOrder={handleItemOrder} 
          />
        </div>
      </div>
    </div>
  );
}

export default MenuApp;

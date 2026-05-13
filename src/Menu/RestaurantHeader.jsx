function RestaurantHeader({ 
  restaurantName = "Our Restaurant", 
  tagline = "Delicious food for everyone", 
  rating = 0, 
  cuisine = "International" 
}) {

  const renderStars = (num) => {
    let stars = "";
    for (let i = 0; i < Math.floor(num); i++) {
      stars += "⭐";
    }
    return stars;
  };

  return (
    <header className="restaurant-header">
      <h1>{restaurantName}</h1>
      <p>{tagline}</p>
      <p>Cuisine:{cuisine}</p>
      <div className="rating">
        {renderStars(rating)} ({rating})
      </div>
    </header>
  );
}

export default RestaurantHeader;

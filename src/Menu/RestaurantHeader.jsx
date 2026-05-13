function RestaurantHeader({ 
  restaurantName = "Our Restaurant", 
  tagline = "Delicious food for everyone", 
  rating = 0, 
  cuisine = "International" 
}) {
  return (
    <header className="hero bg-primary text-primary-content rounded-box shadow-xl p-8">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold mb-4">{restaurantName}</h1>
          <p className="text-xl opacity-90 mb-6">{tagline}</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            <span className="badge badge-secondary p-4 text-lg">{cuisine}</span>
            <div className="stats shadow bg-primary-content text-primary">
              <div className="stat py-2 px-4">
                <div className="stat-title text-primary opacity-70">Rating</div>
                <div className="stat-value text-2xl flex items-center gap-2">
                  {rating}
                  <div className="rating rating-sm">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <input 
                        key={star}
                        type="radio" 
                        name="rating-header" 
                        className="mask mask-star-2 bg-orange-400" 
                        checked={Math.floor(rating) === star}
                        readOnly
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default RestaurantHeader;

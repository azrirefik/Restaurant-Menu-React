function MenuItem({
  name = "Menu Item",
  description = "",
  price = 0,
  isVegetarian = false,
  isSpicy = false,
  onOrder
}) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300 border border-base-300">
      <div className="card-body p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="card-title text-xl font-bold">{name}</h3>
          <div className="flex gap-1">
            {isVegetarian && (
              <div className="tooltip" data-tip="Vegetarian">
                <span className="badge badge-success badge-sm p-1">🌱</span>
              </div>
            )}
            {isSpicy && (
              <div className="tooltip" data-tip="Spicy">
                <span className="badge badge-error badge-sm p-1">🌶️</span>
              </div>
            )}
          </div>
        </div>
        
        <p className="text-base-content/70 text-sm mb-4 min-h-[40px]">
          {description || "No description provided."}
        </p>

        <div className="card-actions justify-between items-center mt-auto">
          <span className="text-2xl font-bold text-primary">
            ${price.toFixed(2)}
          </span>
          <button 
            className="btn btn-primary btn-sm md:btn-md"
            onClick={() => onOrder(name, price)}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;

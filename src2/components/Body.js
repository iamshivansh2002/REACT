import { useState, useEffect } from 'react';
import restaurantList from '../utils/mockData';
import RestaurantCard from '../components/RestaurantCard';
import Shimmer from './Shimmer';

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Simulate API call using useEffect
  useEffect(() => {
    setTimeout(() => {
      setAllRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    }, 1000); // 1-second shimmer effect
  }, []);

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="res-search">
        <input
          id="search"
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <h2>No Restaurants Found</h2>
        ) : (
          filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} resData={restaurant} />
          ))
        )}  
      </div>
    </div>
  );
};

export default Body;













import reslist from '../utils/mockData';
import RestaurantCard from '../components/RestaurantCard';
import { useState } from 'react';

const Body = () => {
  const [searchText, setSearchText] = useState("Kfc");

  return (
    <div className="body">
      <div className="res-search">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}   
        />
        <button className="search">Search</button>
      </div>
      <div className="res-container">
        {reslist.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;



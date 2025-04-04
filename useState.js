import { useState } from 'react';

const ToggleExample = () => {
  const [searchText, setSearchText] = useState('Kfc');
  const [searchClicked, setSearchClicked] = useState(false);

  return (
    <div>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <h1>{searchClicked}</h1> 
      <button
        onClick={() => {
          if (searchClicked) {
            setSearchClicked(false);
          } else {
            setSearchClicked(true);
          }
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default ToggleExample;

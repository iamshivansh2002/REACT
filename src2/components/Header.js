



import { useState } from 'react';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="header">
      <div>
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?t=st=1744180742~exp=1744184342~hmac=1b87beb36c32d61841d56f35039d90bf6ead9667a0fb0eb4971e0a61e19ae1e4&w=826"
        />
      </div>

      <div className="nav-wrapper">
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li><i className="fa fa-shopping-cart"></i></li>
          </ul>
        </div>
        {isLoggedIn ? (
          <button className="login-btn" onClick={() => setIsLoggedIn(false)}>Logout</button>
        ) : (
          <button className="login-btn" onClick={() => setIsLoggedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default Header;





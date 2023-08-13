import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaCartPlus } from "react-icons/fa";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isDropdownOpen: false,
      total: 0,
    };
  }

  handleDropdown = () => {
    this.setState((prevState) => ({
      isDropdownOpen: !prevState.isDropdownOpen,
    }));
  };

  render() {
    const { cart, favorites, total } = this.props;

    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__favorite-products">
              favorites ({favorites.length})
            </div>

            <button className="header__shopping-cart" onClick={this.handleDropdown}>
              <FaCartPlus />
              cart ({cart.length && cart.length})
            </button>
            {this.state.isDropdownOpen && (
             <div className="header__dropdown-cart">
             <div className="container">
               <ul className="header__dropdown-list">
                 {cart.map((product) => {
                   return (
                     <li className="header__dropdown-item" key={product.id}>
                       <div className="header__cart-item">
                         <div className="header__cart-item--left">
                           <figure className="header__cart-item-img">
                             <img src={product.path} alt={product.name} />
                           </figure>
                           <h3 className="header__cart-item-title">{product.name}</h3>
                         </div>
                         <div className="header__cart-item--right">
                           <span className="header__cart-item-price">{"$" + product.price}</span>
                         </div>
                       </div>
                     </li>
                   );
                 })}
               </ul>
               <div className="header__cart-details">
                 <h3 className="header__total-cost-title">Total delivery cost: </h3>
                 <span className="header__total-price">{total + "$"}</span>
               </div>
             </div>
           </div>
           
            
            )}
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  cart: PropTypes.array,
  favorites: PropTypes.array,
  total: PropTypes.number,
};

Header.defaultProps = {
  cart: [],
  favorites: [],
  total: 0,
};

export default Header;

import React, { Component } from "react";
import PropTypes from "prop-types";
import Product from "./Product";

class ProductList extends Component {
  render() {
    const { products, onClick, handleFav, favorites, removeFav } = this.props;

    return (
      <div className="products-wrapper">
        {products.map((product) => {
          return (
            <Product
              key={product.SKU}
              product={product}
              onClick={onClick}
              handleFav={handleFav}
              removeFav={removeFav}
              favorites={favorites}
            />
          );
        })}
      </div>
    );
  }
}

ProductList.propTypes = {
  products: PropTypes.array,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites:  PropTypes.array,
  removeFav : PropTypes.func
};

ProductList.defaultProps = {
  products: [],
  favorites: []
};

export default ProductList;
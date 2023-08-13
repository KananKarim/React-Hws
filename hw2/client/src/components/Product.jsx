import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";

class Product extends Component {
  render() {
    const { product, onClick, handleFav, favorites, removeFav } = this.props;
    const isFavorited = favorites.includes(product.SKU);

    return (
      <article className="product-item">
        <img src={product.path} alt={product.name} />
        <header className="product__header">
          <h2 className="product__title">{product.name}</h2>
          <span
            className="product__fav"
            onClick={() => {
              isFavorited ? removeFav(product.SKU) : handleFav(product.SKU);
            }}
          >
            {isFavorited ? (
              <FaStar style={{ color: "#ff6720" }} />
            ) : (
              <FaRegStar />
            )}
          </span>
        </header>
        <footer className="product__details">
          <h4 className="product__price">{"$" + product.price}</h4>
          <button className="btn-add" onClick={() => onClick(product)}>
            add to card
          </button>
        </footer>
      </article>
    );
  }
}

Product.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
  handleFav: PropTypes.func,
  favorites: PropTypes.array,
  removeFav: PropTypes.func,
};

Product.defaultProps = {
  product: {},
  favorites: [],
};

export default Product;

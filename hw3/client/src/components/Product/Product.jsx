import "./product.scss";
import PropTypes from "prop-types";
import { FaRegStar, FaStar } from "react-icons/fa";

const Product = ({
  product,
  onClick,
  handleFav,
  favorites,
  removeFav,
  isInCart,
  handleAction
}) => {
  const isFavorited = favorites.includes(product.SKU);

  return (
    <div className="product-item">
      <img src={product.path} alt="" />
      <div className="product_header">
        <h2 className="product-title">{product.name}</h2>
        <span
          className="fav"
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
      </div>
      <div className="product-details">
        <h4 className="product-price">{"$" + product.price}</h4>
        {isInCart ? (
          <button
            className="btn-delete"
            onClick={() => {
              handleAction(product.id, "remove");
            }}
          >
            remove
          </button>
        ) : (
          <button
            className="btn-add"
            onClick={() => onClick(product, "modal1")}
          >
            add to card
          </button>
        )}
      </div>
    </div>
  );
};

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

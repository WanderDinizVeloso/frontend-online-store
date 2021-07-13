import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { title, thumbnail, price, id } = this.props;

    return (
      <li data-testid="product">
        <Link
          to={ `/product/${id}/${title}` }
          data-testid="product-detail-link"
        >
          <h2>{ title }</h2>
          <img src={ thumbnail } alt={ title } />
          <p>{ `R$ ${price}` }</p>
        </Link>
      </li>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default ProductCard;

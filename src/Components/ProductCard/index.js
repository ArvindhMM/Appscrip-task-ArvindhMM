import React, { useState } from 'react';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
 import './index.css'

const ProductCard = ({ image, title, price}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="productCard">
      <img src={image} alt = {`${title} thumbnail`} className="productImage" />
      <div className='productDetails'>
        <h3><span>Sign in</span> or Create an Account to see pricing</h3>
        <button className="like-button" onClick={toggleLike}>
            {isLiked ? <MdFavorite className="liked-icon icon" /> : <MdFavoriteBorder className='icon'/>}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;

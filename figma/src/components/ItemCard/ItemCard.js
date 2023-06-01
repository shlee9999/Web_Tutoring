import React from 'react';
import './index.css';

export const ItemCard = ({ url, title, description }) => {
  return (
    <div className='item_card'>
      <img src={url} alt='item_card' className='item_card_image' />
      <div className='item_card_text'>
        <div className='item_card_text_big'>{title}</div>
        <div className='item_card_text_small'>{description}</div>
        <button className='item_card_button'>Learn More</button>
      </div>
    </div>
  );
};

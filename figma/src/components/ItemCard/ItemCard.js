import React from 'react';
import './index.css';
import Image from '../../assets/Images/ItemCards/image_1.png';
export const ItemCard = () => {
  return (
    <div className='item_card'>
      <img src={Image} alt='image' className='item_card_image' />
      <div className='item_card_text'>
        <div className='item_card_text_big'>Logo Design</div>
        <div className='item_card_text_small'>
          Need a quality, custom logo? Our team will create a stunning, original
          design for you that will make your business stand out from the ...
        </div>
        <button className='item_card_button'>Learn More</button>
      </div>
    </div>
  );
};

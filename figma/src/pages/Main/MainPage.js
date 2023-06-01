import React from 'react';
// import { ItemCard } from '../../components/ItemCard/ItemCard';
import { HeaderSection } from './components/HeaderSection';
import { MainSection } from './components/MainSection';
import { FooterSection } from './components/FooterSection';
import './index.css';
import BackToTop from 'assets/Images/BackToTop.png';
export const MainPage = () => {
  const onClickBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 스크롤이 부드럽게 움직이게 하려면 이 옵션을 사용하세요
    });
  };
  return (
    <div className='main_page'>
      <HeaderSection />
      <MainSection />
      <FooterSection />
      <img
        src={BackToTop}
        className='back_to_top'
        alt='back_to_top'
        onClick={onClickBackToTop}
      />
    </div>
  );
};

import React from 'react';
// import { ItemCard } from '../../components/ItemCard/ItemCard';
import { HeaderSection } from './components/HeaderSection';
import { MainSection } from './components/MainSection';
import { FooterSection } from './components/FooterSection';
export const MainPage = () => {
  return (
    <div className='main_page'>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </div>
  );
};

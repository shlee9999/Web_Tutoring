import { ItemCard } from '../../../../components/ItemCard';
import './index.css';
import Graph from '../../../../assets/Images/graph.png';
import Content from '../../../../assets/Images/content.png';
export const MainSection = () => {
  return (
    <div className='main_section'>
      <div className='main_section_upper'>
        <div className='main_section_upper_title'>
          What We <span className='offer' />
        </div>
        <div className='item_cards_wrapper'>
          {/* map으로 바꾸기 */}
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
        </div>
      </div>
      <div className='main_section_lower'>
        <div className='main_section_lower_title'>
          A <span className='full-service' /> Agency
        </div>
        <div className='contents_container'>
          <div className='description_upper'>
            Every business is different and its marketing needs are too. We’ve
            developed a diverse range of specialized services to ensure success.
            We bring together exceptional, in-house expertise to deliver fast,
            effective results to elevate your business.
          </div>
          <div className='description_lower'>
            Our Expertise in Design & Development Softwares
            <br />
          </div>
          <img src={Graph} alt='graph' className='graph' />
          <div>
            <img src={Content} alt='content' className='content_image' />
          </div>
        </div>
      </div>
    </div>
  );
};

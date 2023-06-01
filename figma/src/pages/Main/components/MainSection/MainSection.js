import { ItemCard } from 'components/ItemCard';
import './index.css';
import Graph from 'assets/Images/graph.png';
import Content from 'assets/Images/content.png';
import Bench from 'assets/Images/bench.png';
import { ItemCardInfo } from 'constants/ItemCardInfo';
export const MainSection = () => {
  return (
    <div className='main_section'>
      <div className='main_section_upper'>
        <div className='main_section_upper_title'>
          What We <span className='offer' />
        </div>
        <div className='item_cards_wrapper'>
          {ItemCardInfo.map((item) => (
            <ItemCard
              url={item.url}
              title={item.title}
              description={item.description}
            />
          ))}
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
      <div className='input_container'>
        <img className='bench_image' src={Bench} alt='bench_image' />
        <div className='input_description_wrapper'>
          <p className='input_description_upper'>
            Straight from our desk, to your Inbox.
          </p>
          <p className='input_description_lower'>Subscribe to our newsletter</p>
          <div className='email_input_wrapper'>
            <input className='email_input' placeholder='Your Email' />
            <button className='subscribe_button'>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

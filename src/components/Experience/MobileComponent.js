import React from 'react';
import map from 'lodash/map';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';

import {
  CAM2_DESCRIPTION,
  CERNER_DESCRIPTION,
  VISUAL_DESCRIPTION,
} from '../constants';
import './styles.scss';

const EXPERIENCES = [CAM2_DESCRIPTION, CERNER_DESCRIPTION, VISUAL_DESCRIPTION];
SwiperCore.use([Pagination]);

function MobileComponent() {
  const renderExperience = ({ imgLink, imgAlt, timeline, bulletPoints }) => (
    <div className='experience__description__mobile' key={imgLink}>
      <img src={imgLink} alt={imgAlt} className='experience__logo__mobile' />
      <div className='experience__descriptionBottom__mobile'>
        <div className='experience__title__mobile'>
          <h3>Software Engineer</h3>
          <p>
            <small>{timeline}</small>
          </p>
        </div>
        <ul>
          {map(bulletPoints, (eachPoint) => (
            <li key={eachPoint[0]}>{eachPoint}</li>
          ))}
        </ul>
      </div>
    </div>
  );

  return (
    <div className='experience__mobile'>
      <h1>Where I've Worked</h1>
      <div className='experience__container__mobile'>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          centeredSlides
          pagination={{
            clickable: true,
          }} // Enable pagination with clickable bullets
        >
          {map(EXPERIENCES, (eachExp) => (
            <SwiperSlide key={eachExp.imgLink}>
              {renderExperience(eachExp)}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default MobileComponent;

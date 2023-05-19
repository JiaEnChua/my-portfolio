import React from 'react';
import map from 'lodash/map';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';

import Archive from './Archive';
import { ARCHIVE_DATA } from '../constants';
import './styles.scss';

SwiperCore.use([Pagination]);

function MobileComponent() {
  const renderArchive = ({ link, name, description }) => (
    <a
      href={link}
      target='_blank'
      rel='noopener noreferrer'
      style={{ textDecoration: 'none' }}
    >
      <Archive name={name} description={description} mobileSize />
    </a>
  );

  return (
    <div className='otherProjects__mobile'>
      <h1>Other Noteworthy Projects</h1>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        centeredSlides
        pagination={{
          clickable: true,
        }}
      >
        {map(ARCHIVE_DATA, (eachItem) => (
          <SwiperSlide key={eachItem.imgLink}>
            <div className='otherProjects__archive__mobile'>
              {renderArchive(eachItem)}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MobileComponent;

import { useState, useRef } from 'react';
import GalleryPagination from '../../components/GalleryPagination/GalleryPagination';
import GalleryItem from '../../modules/GalleryItem/GalleryItem';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import { useNavigate } from 'react-router-dom';
import { GalleryData } from './data';
import './GalleryPage.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import RegistrationBaner from '../../modules/RegistrationBaner/RegistrationBaner';

export interface IGalleryItem {
  title: string;
  position: {
    top: string;
    left: string;
  };
  view: 'common' | 'mirrored';
  orientation: 'common' | 'inverse';
}

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);
  const navigate = useNavigate();

  // const current = GalleryData.elite[currentSlide - 1];
  return (
    <main>
      <BtnWithArrow
        text="back to styles"
        white={true}
        onClick={() => navigate('/')}
        className="gallery_link"
      />

      {/* <GalleryItem labels={current.labels} bg={current.bg} /> */}

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
        className="gallery_swiper"
      >
        {GalleryData.elite.map((slide, index) => (
          <SwiperSlide key={index}>
            <GalleryItem bg={slide.bg} labels={slide.labels} />
          </SwiperSlide>
        ))}
      </Swiper>

      <GalleryPagination
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={4}
        swiperRef={swiperRef}
      />

      <RegistrationBaner />
    </main>
  );
};

export default GalleryPage;

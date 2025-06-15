import { useState, useRef } from 'react';
import GalleryPagination from '../../components/GalleryPagination/GalleryPagination';
import GalleryItem from '../../modules/GalleryItem/GalleryItem';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { GalleryData } from './data';
import './GalleryPage.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
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

type TStyles = 'elite' | 'vip' | 'extra';
const styles: TStyles[] = ['elite', 'vip', 'extra'];

const isValidStyle = (val: string): val is TStyles => {
  return styles.includes(val as TStyles);
};

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  const [searchParams] = useSearchParams();
  const rawStyle = searchParams.get('style');

  const style: TStyles = isValidStyle(rawStyle || '')
    ? (rawStyle as TStyles)
    : 'elite';

  const currentData = GalleryData[style];

  const navigate = useNavigate();

  return (
    <main>
      <BtnWithArrow
        text="back to styles"
        white={true}
        onClick={() => navigate('/')}
        className="gallery_link"
      />

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        className="gallery_swiper"
      >
        {currentData.map((slide, index) => (
          <SwiperSlide key={index}>
            <GalleryItem bg={slide.bg} labels={slide.labels} />
          </SwiperSlide>
        ))}
      </Swiper>

      <GalleryPagination
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={currentData.length}
        swiperRef={swiperRef}
      />

      <RegistrationBaner />
    </main>
  );
};

export default GalleryPage;

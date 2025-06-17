import { useState, useRef } from 'react';
import GalleryPagination from '../../components/GalleryPagination/GalleryPagination';
import GalleryItem from '../../modules/GalleryItem/GalleryItem';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import {
  NavLink,
  Outlet,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';
import { GalleryData } from './data';
import './GalleryPage.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import RegistrationBaner from '../../modules/RegistrationBaner/RegistrationBaner';
import CloseIcon from '../../assets/icons/close_icon';

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
      {window.innerWidth > 1023 ? (
        <BtnWithArrow
          text="back to styles"
          white={true}
          onClick={() => navigate('/')}
          className="gallery_link"
        />
      ) : (
        <NavLink to="/" className="gallery_link">
          <CloseIcon />
        </NavLink>
      )}

      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        onSwiper={swiper => (swiperRef.current = swiper)}
        onSlideChange={swiper => setCurrentSlide(swiper.activeIndex)}
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

      <RegistrationBaner className="gallery_baner" />

      <Outlet />
    </main>
  );
};

export default GalleryPage;

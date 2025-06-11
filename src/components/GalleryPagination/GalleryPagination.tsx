import './GalleryPagination.scss';
import type { Swiper as SwiperType } from 'swiper';

interface IProps {
  currentSlide: number;
  totalSlides: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
  swiperRef: React.MutableRefObject<SwiperType | null>;
}

const GalleryPagination = ({
  currentSlide,
  setCurrentSlide,
  totalSlides,
  swiperRef,
}: IProps) => {
  const onPrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(s => {
        swiperRef.current?.slideTo(s - 1);
        return s - 1;
      });
    }
  };

  const onNext = () => {
    if (currentSlide <= totalSlides - 2) {
      setCurrentSlide(s => {
        swiperRef.current?.slideTo(s + 1);
        return s + 1;
      });
    }
  };

  return (
    <div className="galleryPagination">
      <button className="galleryPagination_btn" onClick={onPrev}>
        <div className="galleryPagination_btn_tip"></div>
        <div className="galleryPagination_btn_line"></div>
      </button>
      <div className="galleryPagination_counter">
        <p className="galleryPagination_counter_number galleryPagination_counter_number-current">
          {(currentSlide + 1).toString().padStart(2, '0')}
        </p>
        <span className="galleryPagination_counter_line"></span>
        <p className="galleryPagination_counter_number">
          {totalSlides.toString().padStart(2, '0')}
        </p>
      </div>
      <button className="galleryPagination_btn" onClick={onNext}>
        <div className="galleryPagination_btn_line"></div>
        <div className="galleryPagination_btn_tip"></div>
      </button>
    </div>
  );
};

export default GalleryPagination;

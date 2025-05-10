import { useState } from 'react';
import GalleryPagination from '../../components/GalleryPagination/GalleryPagination';
import GalleryItem from '../../modules/GalleryItem/GalleryItem';

const GalleryPage = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  return (
    <main>
      <GalleryItem />

      <GalleryPagination
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
        totalSlides={4}
      />
    </main>
  );
};

export default GalleryPage;

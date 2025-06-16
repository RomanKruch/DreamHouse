import GalleryLabel from '../../components/GalleryLabel/GalleryLabel';
import { IGalleryItem } from '../../pages/GalleryPage/GalleryPage';
import { sectionBackground } from '../../helpers/sectionBackground';
import './GalleryItem.scss';
import { useState } from 'react';

interface IProps {
  labels: IGalleryItem[];
  bg: string;
}

const GalleryItem = ({ labels, bg }: IProps) => {
  const [activeLabel, setActiveLabel] = useState(0);

  const onLabelClick = (i: number) => {
    return () => setActiveLabel(i);
  };

  return (
    <div className="galleryItem" style={sectionBackground(bg, 0.6)}>
      <div className="container">
        {labels.map((item, i) => (
          <GalleryLabel
            title={item.title}
            position={item.position}
            key={`${item.title}${item.position.left}`}
            view={item.view}
            orientation={item.orientation}
            onLabelClick={onLabelClick(i)}
            isActive={activeLabel === i}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryItem;

import GalleryLabel from '../../components/GalleryLabel/GalleryLabel';
import { IGalleryItem } from '../../pages/GalleryPage/GalleryPage';
import { sectionBackground } from '../../helpers/sectionBackground';
import './GalleryItem.scss';

interface IProps {
  labels: IGalleryItem[];
  bg: string;
}

const GalleryItem = ({ labels, bg }: IProps) => {
  return (
    <div className="galleryItem" style={sectionBackground(bg, 0.6)}>
      <div className="container">
        {labels.map(item => (
          <GalleryLabel
            title={item.title}
            position={item.position}
            key={`${item.title}${item.position.left}`}
            view={item.view}
            orientation={item.orientation}
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryItem;

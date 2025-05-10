import GalleryLabel from '../../components/GalleryLabel/GalleryLabel';
import RegistrationBaner from '../RegistrationBaner/RegistrationBaner';
import './GalleryItem.scss';

interface IProps {
  title: string;
  position: {
    top: string;
    left: string;
  };
  view: 'common' | 'mirrored';
  orientation: 'common' | 'inverse';
}

const services: IProps[] = [
  {
    title: 'Dismantling and construction of interior partitions',
    position: { top: '25%', left: '20%' },
    view: 'common',
    orientation: 'common',
  },
  {
    title: 'Installation of interior doors',
    position: { top: '15%', left: '40%' },
    view: 'common',
    orientation: 'common',
  },
  {
    title: 'Aligning corners to 90 degrees',
    position: { top: '40%', left: '40%' },
    view: 'mirrored',
    orientation: 'inverse',
  },
  {
    title: 'Post-renovation cleaning',
    position: { top: '50%', left: '60%' },
    view: 'mirrored',
    orientation: 'common',
  },
  {
    title: 'Laminate flooring installation over underlayment',
    position: { top: '65%', left: '30%' },
    view: 'mirrored',
    orientation: 'common',
  },
];

const GalleryItem = () => {
  return (
    <div className="galleryItem">
      <div className="container">
        {services.map(item => (
          <GalleryLabel
            title={item.title}
            position={item.position}
            key={item.title}
            view={item.view}
            orientation={item.orientation}
          />
        ))}

        <RegistrationBaner />
      </div>
    </div>
  );
};

export default GalleryItem;

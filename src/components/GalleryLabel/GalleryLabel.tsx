import createClassName from '../../helpers/createClassName';
import { IGalleryItem } from '../../pages/GalleryPage/GalleryPage';
import './GalleryLabel.scss';

const GalleryLabel = ({ title, position, orientation, view }: IGalleryItem) => {
  return (
    <div className="galleryLabel" style={position}>
      {orientation === 'common' ? (
        <>
          <p
            className={createClassName(
              'galleryLabel_title',
              'mirrored',
              view === 'mirrored',
            )}
          >
            {title}
          </p>
          <div
            className={createClassName(
              'galleryLabel_underline',
              'mirrored',
              view === 'mirrored',
            )}
          >
            <span>
              <button className="galleryLabel_btn"></button>
            </span>
            <span></span>
          </div>
        </>
      ) : (
        <>
          <div
            className={createClassName(
              'galleryLabel_underline',
              'mirrored',
              view === 'mirrored',
            )}
          >
            <span>
              <button className="galleryLabel_btn"></button>
            </span>
            <span></span>
          </div>
          <p
            className={createClassName(
              'galleryLabel_title',
              'mirrored',
              view === 'mirrored',
            )}
          >
            {title}
          </p>
        </>
      )}
    </div>
  );
};

export default GalleryLabel;

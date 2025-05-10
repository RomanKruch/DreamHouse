import createClassName from '../../helpers/createClassName';
import './GalleryLabel.scss';

interface IProps {
  title: string;
  position: {
    top: string;
    left: string;
  };
  view: 'common' | 'mirrored';
  orientation: 'common' | 'inverse';
}

const GalleryLabel = ({ title, position, orientation, view }: IProps) => {
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

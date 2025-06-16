import createClassName from '../../helpers/createClassName';
import { IGalleryItem } from '../../pages/GalleryPage/GalleryPage';
import './GalleryLabel.scss';

interface IProps extends IGalleryItem {
  onLabelClick: () => void;
  isActive: boolean;
}

const GalleryLabel = ({
  title,
  position,
  orientation,
  view,
  onLabelClick,
  isActive,
}: IProps) => {
  return window.innerWidth > 1023 ? (
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
  ) : (
    <div className="galleryLabel">
      <span>
        <button
          className={createClassName('galleryLabel_btn', 'active', isActive)}
          onClick={onLabelClick}
        ></button>
      </span>
      <p className={createClassName('galleryLabel_title', 'active', isActive)}>
        {title}
      </p>
    </div>
  );
};

export default GalleryLabel;

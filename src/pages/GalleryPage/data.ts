import { IGalleryItem } from './GalleryPage';
import elite1 from '../../assets/gallery/elite_1.jpg';
import elite2 from '../../assets/gallery/elite_2.jpg';
import elite3 from '../../assets/gallery/elite_3.jpg';
import elite4 from '../../assets/gallery/elite_4.jpg';

interface IData {
  elite: {
    bg: string;
    labels: IGalleryItem[];
  }[];
}

export const GalleryData: IData = {
  elite: [
    {
      bg: elite1,
      labels: [
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
      ],
    },
    {
      bg: elite2,
      labels: [
        {
          title: 'Hatch installation for access to riser',
          position: { top: '18%', left: '18%' },
          view: 'common',
          orientation: 'inverse',
        },
        {
          title: 'Sink installation',
          position: { top: '45%', left: '40%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title:
            'Laying tiles on floor and walls in the bathroom (up to 5m² of floor)',
          position: { top: '30%', left: '62%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Water supply and sewage system installation',
          position: { top: '60%', left: '20%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Bathtub and shower cabin installation',
          position: { top: '70%', left: '45%' },
          view: 'mirrored',
          orientation: 'common',
        },
      ],
    },
    {
      bg: elite3,
      labels: [
        {
          title: 'Installation of drywall ceiling',
          position: { top: '15%', left: '40%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title:
            'Wall leveling with beacons, final wall finishing for wallpaper',
          position: { top: '22%', left: '60%' },
          view: 'common',
          orientation: 'inverse',
        },
        {
          title: 'Electrical installation work (according to project)',
          position: { top: '38%', left: '42%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Waterproofing of wet areas',
          position: { top: '47%', left: '10%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Installation of PVC floor skirting',
          position: { top: '70%', left: '43%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: elite4,
      labels: [
        {
          title: 'Preparing walls for wallpapering',
          position: { top: '15%', left: '20%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Stretch ceiling',
          position: { top: '13%', left: '45%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Wallpaper gluing',
          position: { top: '50%', left: '12%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Installation of low-current wiring (internet, antenna)',
          position: { top: '60%', left: '40%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title:
            'Filling the floor screed (up to 10 cm, sand concrete / expanded clay)',
          position: { top: '35%', left: '50%' },
          view: 'mirrored',
          orientation: 'common',
        },
      ],
    },
  ],
};

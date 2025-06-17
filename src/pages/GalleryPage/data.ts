import { IGalleryItem } from './GalleryPage';

interface IDataItem {
  bg: string;
  labels: IGalleryItem[];
}

interface IData {
  elite: IDataItem[];
  vip: IDataItem[];
  extra: IDataItem[];
}

export const GalleryData: IData = {
  elite: [
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186719/DreamHouse/elite_1_duidbj.jpg',
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
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186719/DreamHouse/elite_2_yvirqk.jpg',
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
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186722/DreamHouse/elite_3_hv0vhx.jpg',
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
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186722/DreamHouse/elite_4_oaip2g.jpg',
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
  vip: [
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186729/DreamHouse/vip_1_exahmk.jpg',
      labels: [
        {
          title: 'Stretch ceiling of VIP quality',
          position: { top: '15%', left: '50%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Development of an individual design project',
          position: { top: '25%', left: '20%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Installation of interior doors',
          position: { top: '37%', left: '58%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Installation of low-current wiring (internet, antenna)',
          position: { top: '49%', left: '36%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Installation of PVC or MDF floor skirting',
          position: { top: '65%', left: '15%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186729/DreamHouse/vip_2_xwe6ef.jpg',
      labels: [
        {
          title:
            'Installation of water supply and sewerage (Rehau pipes, VIP class materials)',
          position: { top: '35%', left: '37%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Installation of a hidden revision hatch with cladding in tiles',
          position: { top: '20%', left: '50%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Sink assembly',
          position: { top: '30%', left: '15%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Toilet installation',
          position: { top: '55%', left: '50%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Photo progress reports',
          position: { top: '60%', left: '27%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186730/DreamHouse/vip_3_liekxc.jpg',
      labels: [
        {
          title: 'Electrical installation work (according to the project)',
          position: { top: '12%', left: '27%' },
          view: 'common',
          orientation: 'inverse',
        },
        {
          title: 'Pass-through switches installation',
          position: { top: '20%', left: '43%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Ventilation works',
          position: { top: '20%', left: '7%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Final wall finishing: wall painting',
          position: { top: '33%', left: '55%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Final floor finishing: laminate or parquet board installation',
          position: { top: '55%', left: '23%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186731/DreamHouse/vip_4_swcgwo.jpg',
      labels: [
        {
          title: 'Ceiling cornice installation',
          position: { top: '12%', left: '45%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Relocation of heating appliances',
          position: { top: '30%', left: '60%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Replacement of heating pipes',
          position: { top: '30%', left: '10%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Creating 90-degree corners',
          position: { top: '30%', left: '35%' },
          view: 'common',
          orientation: 'inverse',
        },
        {
          title: 'Floor screed pouring (up to 10 cm, dry mix)',
          position: { top: '65%', left: '20%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186732/DreamHouse/vip_5_tvwqtv.jpg',
      labels: [
        {
          title: 'Installation of gypsum ceiling (2 layers) at one level',
          position: { top: '10%', left: '40%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Waterproofing of wet areas',
          position: { top: '30%', left: '30%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Installation of mixers (faucets)',
          position: { top: '48%', left: '50%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Tile installation with 45° edge cutting according to the project',
          position: { top: '58%', left: '18%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Bathtub installation with tile cladding',
          position: { top: '65%', left: '40%' },
          view: 'mirrored',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186733/DreamHouse/vip_6_i6xaoc.jpg',
      labels: [
        {
          title:
            'Wall leveling with beacons, final wall finishing for wallpapering',
          position: { top: '13%', left: '36%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Installation of electrical fittings',
          position: { top: '28%', left: '65%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title:
            'Dismantling and construction of interior partitions (foam blocks)',
          position: { top: '42%', left: '43%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Wall preparation for painting',
          position: { top: '25%', left: '15%' },
          view: 'common',
          orientation: 'inverse',
        },
        {
          title: 'Final cleaning service',
          position: { top: '60%', left: '20%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
  ],
  extra: [
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186720/DreamHouse/extra_1_zd8bhq.jpg',
      labels: [
        {
          title: 'Installation of interior doors',
          position: { top: '15%', left: '50%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Final wall finishing',
          position: { top: '25%', left: '30%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Waterproofing of wet areas',
          position: { top: '40%', left: '60%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Installation of mixers (faucets)',
          position: { top: '50%', left: '28%' },
          view: 'common',
          orientation: 'inverse',
        },
        {
          title: 'Final floor finishing',
          position: { top: '60%', left: '47%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186721/DreamHouse/extra_2_d90yjv.jpg',
      labels: [
        {
          title: 'Stretch ceiling of EXTRA quality ("floating" construction)',
          position: { top: '12%', left: '33%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Creating 90-degree corners',
          position: { top: '25%', left: '14%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Laying laminate, parquet and solid wood boards using two-component adhesive',
          position: { top: '38%', left: '47%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Installation of floor skirting',
          position: { top: '45%', left: '22%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title:
            'Assistance in selecting furniture, appliances, plumbing, and finishing materials',
          position: { top: '60%', left: '43%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186722/DreamHouse/extra_3_xoh5sf.jpg',
      labels: [
        {
          title: 'Installation of a hidden revision hatch with tile cladding',
          position: { top: '13%', left: '20%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Installation of lighting fixtures',
          position: { top: '23%', left: '47%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Installation of a sink of any configuration',
          position: { top: '43%', left: '55%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Installation of water supply and sewerage (Rehau pipes, EXTRA class materials)',
          position: { top: '50%', left: '27%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Installation of a water leakage control system',
          position: { top: '70%', left: '40%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186724/DreamHouse/extra_4_fdrowb.jpg',
      labels: [
        {
          title: 'Installation of air conditioning system',
          position: { top: '12%', left: '14%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Installation of ceiling skirting',
          position: { top: '15%', left: '45%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Pass-through switches installation',
          position: { top: '33%', left: '15%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Soundproofing works',
          position: { top: '45%', left: '55%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Procurement organization of all required materials',
          position: { top: '57%', left: '15%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186724/DreamHouse/extra_5_i79cqq.jpg',
      labels: [
        {
          title: 'Installation of electrical fittings',
          position: { top: '12%', left: '35%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Installation of flow or storage water heater',
          position: { top: '25%', left: '58%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Tile laying with 45-degree cuts, mosaic installation',
          position: { top: '30%', left: '17%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Installation of toilet, additional toilet, bidet installation',
          position: { top: '45%', left: '62%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Installation of bathtub with tile cladding, shower cabin installation',
          position: { top: '60%', left: '42%' },
          view: 'common',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186725/DreamHouse/extra_6_tokqw2.jpg',
      labels: [
        {
          title: 'Installation of low-voltage wiring (internet, antenna)',
          position: { top: '27%', left: '32%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Complete professional cleaning after renovation',
          position: { top: '33%', left: '68%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Replacement of heating pipes, relocation of heating devices',
          position: { top: '52%', left: '17%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title:
            'Wall leveling with beacons, final wall finishing for wallpaper',
          position: { top: '50%', left: '46%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Thermal insulation works',
          position: { top: '70%', left: '40%' },
          view: 'mirrored',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186727/DreamHouse/extra_7_itrb5j.jpg',
      labels: [
        {
          title: 'Ventilation works',
          position: { top: '13%', left: '15%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Video intercom, surveillance cameras',
          position: { top: '31%', left: '15%' },
          view: 'common',
          orientation: 'inverse',
        },
        {
          title: 'Photo and video reports on work progress',
          position: { top: '47%', left: '22%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Electrical installation works (according to project)',
          position: { top: '35%', left: '40%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Floor screed pouring',
          position: { top: '75%', left: '20%' },
          view: 'mirrored',
          orientation: 'common',
        },
      ],
    },
    {
      bg: 'https://res.cloudinary.com/drn4sj8ju/image/upload/v1750186727/DreamHouse/extra_8_b5pihp.jpg',
      labels: [
        {
          title: 'Installation of ceiling cornice',
          position: { top: '10%', left: '20%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
        {
          title: 'Wall painting, decorative plastering',
          position: { top: '25%', left: '60%' },
          view: 'mirrored',
          orientation: 'common',
        },
        {
          title: 'Dismantling and erection of interior partitions',
          position: { top: '30%', left: '15%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Development of custom design project',
          position: { top: '42%', left: '35%' },
          view: 'common',
          orientation: 'common',
        },
        {
          title: 'Engineer and designer supervision throughout the renovation',
          position: { top: '60%', left: '40%' },
          view: 'mirrored',
          orientation: 'inverse',
        },
      ],
    },
  ],
};

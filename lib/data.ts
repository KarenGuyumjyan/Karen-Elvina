import GroomHouseIcon from '@/public/icons/groom-house.svg';
import HouseIcon from '@/public/icons/house.svg';
import ChurchIcon from '@/public/icons/church.svg';
import CakeIcon from '@/public/icons/cake.svg';
import GuestsIcon from '@/public/icons/guests.svg';

export const wedding = {
  // ISO datetime used for the countdown
  dateISO: '2026-09-05T15:00:00',
  dateLabel: 'Sep 05, 2026',
  hashtag: '#KarenAndElvina',

  groom: {
    name: 'Karen',
    role: 'The Groom',
    bio: 'Son of Mr. & Mrs. Reed. A gentle soul with a fondness for old films, long walks, and the woman who stole his heart.',
    // photo:
    //   "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },

  bride: {
    name: 'Elvina',
    role: 'The Bride',
    bio: 'Daughter of Mr. & Mrs. Hayes. A dreamer who loves warm coffee, quiet mornings, and building a life full of little joys.',
    // photo:
    //   "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },

  story: [
    {
      date: 'Spring 2019',
      title: 'How We Met',
      text: 'A crowded little bookstore, two hands reaching for the same worn novel. We laughed, we talked for hours, and the world felt a little softer.',
    },
    {
      date: 'Summer 2021',
      title: 'Our First Trip',
      text: "Golden fields and endless roads. We learned each other's silences and knew, quietly, that this was home.",
    },
    {
      date: 'Winter 2024',
      title: 'The Proposal',
      text: 'Snow falling, a single candle, and a question whispered under the stars. She said yes before he finished asking.',
    },
    {
      date: 'May 2026',
      title: 'Forever Begins',
      text: 'And so we invite you to witness the beginning of the rest of our lives — together, at last.',
    },
  ],

  gallery: [
    '/images/gallery/Gallery2.JPG',
    '/images/gallery/Gallery4.JPG',
    '/images/gallery/Gallery6.JPG',
    '/images/gallery/Gallery3.JPG',
    '/images/gallery/Gallery5.JPG',
    '/images/gallery/Gallery7.JPG',
    '/images/gallery/Gallery8.JPG',
    '/images/gallery/Gallery9.JPG',
  ],

  events: [
    {
      name: 'Groom House',
      time: '10:30',
      venue: "Groom's House",
      address: 'Ara Sargsyan Street, 17A, Yerevan',
      mapUrl: 'https://yandex.com/maps/-/CTbSUWpa',
      icon: GroomHouseIcon,
    },
    {
      name: 'Bride House',
      time: '11:00',
      venue: "Bride's House",
      address: 'Aytsemnik Urartu Street, 66, Yerevan',
      mapUrl: 'https://yandex.com/maps/-/CTbnrS8B',
      icon: HouseIcon,
    },
    {
      name: 'Church Ceremony',
      time: '13:30',
      venue: 'The Church of Saint Mariam',
      address: 'District of Nork-Marash, Yerevan',
      mapUrl: 'https://yandex.com/maps/-/CTbEBMzF',
      icon: ChurchIcon,
    },
    {
      name: 'Welcoming guests',
      time: '17:30',
      icon: GuestsIcon,
    },
    {
      name: 'Restaurant Celebration',
      time: '18:00',
      venue: 'Nor-Dvin Restaurant',
      address: 'City of Ejmiatsin, Armavir Region, Ashtarak Highway 1',
      mapUrl: 'https://yandex.com/maps/-/CTbEuF6Y',
      icon: CakeIcon,
    },
  ],
};

export type WeddingEvent = (typeof wedding.events)[number];

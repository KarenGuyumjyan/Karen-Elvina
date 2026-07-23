// All translatable text for the invitation, in English and Armenian.
// Non-text data (dates, images, map URLs, icons) stays in lib/data.ts.

export type Lang = 'en' | 'hy';

export type EventText = { name: string; venue: string; address: string };

export type Dictionary = {
  langLabel: string; // label shown on the language toggle for the OTHER language
  names: { groom: string; bride: string };
  dateLabel: string;
  calendarTitle: string;
  weekdays: string[]; // Monday-first, 7 entries
  hero: { weddingOf: string };
  scroll: string;
  cover: { invites: string; open: string };
  invitation: { eyebrow: string; paragraph: string };
  countdown: {
    eyebrow: string;
    title: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
  };
  gallery: { eyebrow: string; title: string };
  dailyGuide: {
    eyebrow: string;
    title: string;
    timing: string;
    at: string;
  };
  events: {
    eyebrow: string;
    title: string;
    viewMap: string;
    items: EventText[];
  };
  rsvp: {
    eyebrow: string;
    title: string;
    deadline: string;
    fullName: string;
    namePlaceholder: string;
    guestOf: string;
    attend: string;
    accept: string;
    decline: string;
    parts: string;
    partsHint: string;
    partsRequired: string;
    partBrideHouse: string;
    partChurch: string;
    partRestaurant: string;
    guests: string;
    note: string;
    notePlaceholder: string;
    send: string;
    sending: string;
    error: string;
    thankTitle: string;
    thankText: string;
    rejectText: string;
  };
};

export const translations: Record<Lang, Dictionary> = {
  en: {
    langLabel: 'ՀԱՅ',
    names: {
      groom: 'Karen',
      bride: 'Elvina',
    },
    dateLabel: 'Sep 05, 2026',
    calendarTitle: 'September 2026',
    weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
    hero: { weddingOf: 'THE WEDDING OF' },
    scroll: 'Scroll',
    cover: { invites: 'Cordially Invites', open: 'Open' },
    invitation: {
      eyebrow: 'Cordially Invites',
      paragraph:
        'With hearts full of joy and gratitude, we invite you to share in a celebration of love as we begin our journey as husband and wife.',
    },
    countdown: {
      eyebrow: 'Save the Date',
      title: 'Counting the Moments',
      days: 'Days',
      hours: 'Hours',
      minutes: 'Min',
      seconds: 'Sec',
    },
    gallery: { eyebrow: 'Cherished Moments', title: 'Our Gallery' },
    dailyGuide: {
      eyebrow: 'Daily Guide',
      title: 'What to Expect',
      timing: 'Timing',
      at: 'at',
    },
    events: {
      eyebrow: 'When & Where',
      title: 'The Celebration',
      viewMap: 'View Map',
      items: [
        {
          name: 'Bride House',
          venue: "Bride's House",
          address: 'Aytsemnik Urartu Street, 66',
        },
        {
          name: 'Church Ceremony',
          venue: 'The Church of Saint Mariam',
          address: 'District of Nork-Marash, Yerevan, Armenia',
        },
        { name: 'Welcoming guests', venue: '', address: '' },
        {
          name: 'Restaurant Celebration',
          venue: 'Nor-Dvin Restaurant',
          address: 'City of Ejmiatsin, Armavir Region, Ashtarak Highway 1',
        },
      ],
    },
    rsvp: {
      eyebrow: 'Will You Join Us?',
      title: 'R.S.V.P.',
      deadline:
        'Kindly respond by September 16, 2026 so we can plan a wonderful day together.',
      fullName: 'Full Name',
      namePlaceholder: 'Your name',
      guestOf: 'Whose guest are you?',
      attend: 'Will you be attending?',
      accept: "With Pleasure, I'll Attend",
      decline: "Unfortunately, I Can't Attend",
      parts: 'Which events will you be attending?',
      partsHint: 'Select all that apply.',
      partsRequired: 'Please select at least one.',
      partBrideHouse: "Bride's House",
      partChurch: 'Church Wedding Ceremony',
      partRestaurant: 'Restaurant Celebration',
      guests: 'Number of Guests',
      note: 'A Note for the Couple',
      notePlaceholder: 'Share your warm wishes...',
      send: 'Send R.S.V.P.',
      sending: 'Sending...',
      error: 'Something went wrong. Please try again.',
      thankTitle: 'Thank You!',
      thankText:
        "We are incredibly happy that you will be joining us to celebrate one of the most important days of our lives together. Your response has been successfully saved.",
      rejectText:
        'Your response has been successfully saved. Although we will miss having you with us, we are truly grateful that you let us know.',
    },
  },

  hy: {
    langLabel: 'ENG',
    names: {
      groom: 'Կարեն',
      bride: 'Էլվինա',
    },
    dateLabel: '05 Սեպտեմբերի, 2026',
    calendarTitle: 'Սեպտեմբեր 2026',
    weekdays: ['Երկ', 'Երք', 'Չրք', 'Հնգ', 'Ուր', 'Շբթ', 'Կիր'],
    hero: { weddingOf: 'ՄԵՆՔ ԱՄՈՒՍՆԱՆՈՒՄ ԵՆՔ' },
    scroll: 'Ներքև',
    cover: { invites: 'Սիրով Հրավիրում Ենք', open: 'Բացել' },
    invitation: {
      eyebrow: 'Սիրով Հրավիրում Ենք',
      paragraph:
        'Ուրախությամբ և երախտագիտությամբ լի սրտերով հրավիրում ենք Ձեզ կիսելու մեր սիրո տոնակատարությունը, երբ սկսում ենք մեր համատեղ կյանքի գեղեցիկ ճանապարհը՝ որպես ամուսին և կին։',
    },
    countdown: {
      eyebrow: 'Նշեք օրը',
      title: 'Մինչև Մեր Օրը',
      days: 'Օր',
      hours: 'Ժամ',
      minutes: 'Րոպե',
      seconds: 'Վրկ',
    },
    gallery: { eyebrow: 'Սիրելի Պահեր', title: 'Մեր Պատկերասրահը' },
    dailyGuide: {
      eyebrow: 'Օրվա Ծրագիրը',
      title: 'Ինչ է սպասվում',
      timing: 'Ժամանակացույց',
      at: 'ժամը',
    },
    events: {
      eyebrow: 'Երբ և Որտեղ',
      title: 'Տոնակատարությունը',
      viewMap: 'Դիտել Քարտեզը',
      items: [
        {
          name: 'Հարսի Տուն',
          venue: 'Հարսի Տուն',
          address: 'Այծեմնիկ Ուրարտու փողոց 66, Երևան',
        },
        {
          name: 'Պսակադրություն',
          venue: 'Սուրբ Մարիամ Աստվածածին եկեղեցի',
          address: 'Նորք-Մարաշ թաղամաս, Երևան',
        },
        { name: 'Հյուրերի Դիմավորում', venue: '', address: '' },
        {
          name: 'Հարսանեկան Խնջույք',
          venue: 'Նոր-Դվին Ռեստորան',
          address: 'Աշտարակի խճուղի 1, Էջմիածին, Արմավիրի մարզ,',
        },
      ],
    },
    rsvp: {
      eyebrow: 'Միացեք մեր տոնին',
      title: 'Հաստատել Ներկայությունը',
      deadline:
        'Խնդրում ենք պատասխանել մինչև 2026 թ. Սեպտեմբերի 1-ը, որպեսզի կարողանանք միասին պլանավորել հրաշալի օրը։',
      fullName: 'Անուն Ազգանուն',
      namePlaceholder: 'Ձեր անունը',
      guestOf: 'Ո՞ւմ հյուրն եք',
      attend: 'Մասնակցելո՞ւ եք',
      accept: 'Սիրով կգամ',
      decline: 'Ցավոք, չեմ կարող',
      parts: 'Ո՞ր արարողություններին եք մասնակցելու',
      partsHint: 'Նշեք բոլոր հարմար տարբերակները։',
      partsRequired: 'Խնդրում ենք ընտրել առնվազն մեկը։',
      partBrideHouse: 'Հարսի Տուն',
      partChurch: 'Պսակադրություն',
      partRestaurant: 'Հարսանեկան Խնջույք',
      guests: 'Հյուրերի Քանակը',
      note: 'Մաղթանք Զույգին',
      notePlaceholder: 'Կիսվեք Ձեր ջերմ մաղթանքներով...',
      send: 'Ուղարկել',
      sending: 'Ուղարկվում է...',
      error: 'Ինչ-որ բան սխալ գնաց։ Խնդրում ենք նորից փորձել։',
      thankTitle: 'Շնորհակալություն պատասխանի համար:',
      thankText:
        'Մենք անչափ ուրախ ենք, որ միանալու եք մեզ՝ միասին տոնելու մեր կյանքի կարևորագույն օրը։ Ձեր պատասխանը հաջողությամբ պահպանվել է։',
      rejectText:
        'Ձեր պատասխանը հաջողությամբ պահպանվել է։ Թեև կտխրենք ձեր բացակայության համար, բայց անչափ շնորհակալ ենք տեղեկացնելու համար։',
    },
  },
};

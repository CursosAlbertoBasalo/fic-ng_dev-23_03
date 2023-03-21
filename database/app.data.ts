//  ! Full app sample data
//  * This file contains an in-memory data repository
//  * For  early stages of development.
//  * While not having a Rest API.
//  * db.json contains the same data for use with json-server

export const ACTIVITIES = [
  {
    ageCategory: 'adult',
    currency: 'USD',
    date: '2025-01-01',
    description:
      '## Rafting at the Grand Canyon\r\n Experience the **adrenaline** in this _natural wonder_.',
    id: 1,
    location: 'Grand canyon',
    maxParticipants: 10,
    minParticipants: 5,
    price: 300,
    slug: 'grand-canyon-rafting',
    state: 'published',
    title: 'Grand canyon rafting',
    userId: 2,
  },
  {
    ageCategory: 'family',
    date: '2025-03-01',
    description:
      '## Explore the Cumbre Vieja **Volcano**\n Experience the **force** of this _natural beast_ on the beautiful island of La Palma',
    id: 2,
    location: 'Cumbre Vieja',
    maxParticipants: 30,
    minParticipants: 10,
    price: 50,
    currency: 'EUR',
    slug: 'cumbre-vieja-exploration',
    state: 'published',
    title: 'Cumbre Vieja exploration',
    userId: 2,
  },
  {
    ageCategory: 'adult',
    currency: 'EUR',
    date: '2024-01-01',
    description:
      '## Hot air Ballon ride over Cappadocia\r\n Experience the **tranquility** in this _natural beauty_.',
    id: 666,
    location: 'Capadoccia',
    maxParticipants: 4,
    minParticipants: 4,
    price: 200,
    slug: 'balloon-in-cappadocia',
    state: 'cancelled',
    title: 'Balloon in Cappadocia',
    userId: 2,
  },
  {
    ageCategory: 'child',
    currency: 'USD',
    date: '2023-11-09',
    description:
      'Want you to paddleboard on **Switzerland**?\n With a surface of almost _114 square kilometers_, Lake Lucerne is a popular destination for stand-up paddlers.',
    id: 667,
    location: 'Lucerne',
    maxParticipants: 6,
    minParticipants: 4,
    price: 25,
    slug: 'stand-up-paddle-surf-in-lake-lucerne',
    state: 'published',
    title: 'Stand-up paddle surf in Lake Lucerne',
    userId: 5,
  },
  {
    ageCategory: 'adult',
    currency: 'USD',
    date: '2024-05-20',
    description:
      "## Hiking in the **Alps**\r\n Experience the **tranquility** in this _natural beauty_.\r\n\r\nIt's a _long_ way up, but the view is _worth_ it.",
    id: 668,
    location: 'French Alps',
    maxParticipants: 10,
    minParticipants: 5,
    price: 100,
    slug: 'hiking-in-the-alps',
    state: 'draft',
    title: 'Hiking in the Alps',
    userId: 5,
  },
  {
    ageCategory: 'family',
    currency: 'USD',
    date: '2022-05-20',
    description:
      "## Boat cruise in the **Danube**\r\n Experience the **tranquility** in this _big river_.\r\n\r\nIt's a dream trip between castles and mountains.",
    id: 669,
    location: 'Budapest',
    maxParticipants: 50,
    minParticipants: 10,
    price: 100,
    slug: 'boat-cruise-in-the-danube',
    state: 'finished',
    title: 'Boat cruise in the Danube',
    userId: 5,
  },
];

export const ACTIVITY_STATES = [
  {
    caption: 'Draft',
    icon: '💭',
    id: 'draft',
    userId: 1,
  },
  {
    caption: 'Published',
    icon: '📢',
    id: 'published',
    userId: 1,
  },
  {
    caption: 'Confirmed',
    icon: '✅',
    id: 'confirmed',
    userId: 1,
  },
  {
    caption: 'Finished',
    icon: '🔚 ',
    id: 'finished',
    userId: 1,
  },
  {
    caption: 'Cancelled',
    icon: '🚫',
    id: 'cancelled',
    userId: 1,
  },
];

export const AGE_CATEGORIES = [
  {
    caption: 'Adult',
    icon: '👨🏼‍🦰',
    id: 'adult',
    userId: 1,
  },
  {
    caption: 'Child',
    icon: '👦🏼',
    id: 'child',
    userId: 1,
  },
  {
    caption: 'Family',
    icon: '👨‍👩‍👧‍👦',
    id: 'family',
    userId: 1,
  },
];
export const PROGRAM_AUTHOR = {
  github: 'https://github.com/albertobasalo',
  id: 1,
  linkedIn: 'https://www.linkedin.com/in/albertobasalo/',
  name: 'Alberto Basalo',
  twitter: 'https://twitter.com/albertobasalo',
  userId: 1,
  www: 'https://www.albertobasalo.dev',
};
export const CONTACTS = [
  {
    address: 'No way 666',
    country: 'US',
    phone: '+1 (415) 555-5555',
    userId: 2,
    id: 1,
  },
  {
    address: 'Mi casa',
    country: 'ES',
    phone: '+34 555123456',
    userId: 3,
    id: 2,
  },
  {
    address: 'My home 2',
    country: 'UK',
    phone: '+44 7975777666',
    userId: 4,
    id: 3,
  },
  {
    address: '99th Avenue',
    country: 'US',
    phone: '+1 (212) 5555555',
    userId: 5,
    id: 4,
  },
];
export const PARTICIPANTS = [
  {
    acceptConditions: true,
    activityId: 1,
    id: 1,
    joinedAt: '2023-01-01',
    payedAt: '2023-01-01',
    paymentMethod: 'card',
    places: 1,
    reason: '',
    status: 'accepted',
    userId: 3,
  },
  {
    acceptConditions: true,
    activityId: 667,
    id: 2,
    joinedAt: '2023-01-01',
    payedAt: '',
    paymentMethod: 'transfer',
    places: 2,
    reason: 'Not paying on time',
    status: 'rejected',
    userId: 4,
  },
];
export const PARTICIPATION_STATES = [
  {
    caption: 'Pending',
    icon: '⏳',
    id: 'pending',
    userId: 1,
  },
  {
    caption: 'Accepted',
    icon: '✅',
    id: 'accepted',
    userId: 1,
  },
  {
    caption: 'Rejected',
    icon: '❌',
    id: 'rejected',
    userId: 1,
  },
  {
    caption: 'Cancelled',
    icon: '🚫',
    id: 'cancelled',
    userId: 1,
  },
];
export const PAYMENT_METHODS = [
  {
    caption: 'Cash',
    icon: '💵',
    id: 'cash',
    userId: 1,
  },
  {
    caption: 'Card',
    icon: '💳',
    id: 'card',
    userId: 1,
  },
  {
    caption: 'Transfer',
    icon: '🏦',
    id: 'transfer',
    userId: 1,
  },
];
export const USERS = [
  {
    email: 'lisa@actib.it',
    id: 1,
    name: 'Lisa Nadella',
    password: '$2a$10$qgO/y3C3NS38PvH4SxcbNOdT6K5IVNnAg/qcQZfcpZEy.42S1x3d6',
  },
  {
    email: 'richard@action.org',
    id: 2,
    name: 'Richard Musk',
    password: '$2a$10$qgO/y3C3NS38PvH4SxcbNOdT6K5IVNnAg/qcQZfcpZEy.42S1x3d6',
  },
  {
    email: 'jeff@acme.com',
    id: 3,
    name: 'Jeff Gates',
    password: '$2a$10$lCtDeV5VWpL4nmqwFiY8n.VRtUH4Tkm4I1kAPcUxyP21HXdNTLtDa',
  },
  {
    email: 'mark@page.me',
    id: 4,
    name: 'Mark Page',
    password: '$2a$10$C.pMT8gtyt5kSiGzv7y7w.QvHJMgz6RC9ggjYRKFHFjdU5AykLFpO',
  },
  {
    email: 'susan@alpha.ms',
    id: 5,
    name: 'Susan Yuan',
    password: '$2a$10$C.pMT8gtyt5kSiGzv7y7w.QvHJMgz6RC9ggjYRKFHFjdU5AykLFpO',
  },
];

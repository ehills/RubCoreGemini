
import { EventType } from './types';

export const EVENTS_DATA: EventType[] = [
  {
    id: 'operation-scorched-earth',
    title: 'Operation: Scorched Earth',
    date: 'Saturday, August 17, 2024',
    location: 'Hill 559, Anytown, USA',
    summary: 'A full-day Milsim event focusing on tactical objectives and teamwork. Two factions will battle for control of key zones.',
    description: 'Operation: Scorched Earth is our flagship Milsim event of the summer. Participants will be divided into two factions, each with a command structure and specific objectives. The day will involve multiple phases, from recon missions to all-out assaults on fortified positions. This is a test of endurance, strategy, and teamwork. Are you ready?',
    imageUrl: 'https://picsum.photos/seed/event1/1200/800',
    gallery: [
      'https://picsum.photos/seed/event1-gallery1/1024/768',
      'https://picsum.photos/seed/event1-gallery2/1024/768',
      'https://picsum.photos/seed/event1-gallery3/1024/768',
      'https://picsum.photos/seed/event1-gallery4/1024/768',
    ],
    gameModes: ['Milsim', 'Objective Control', 'Recon'],
    rules: [
      'Full-seal eye protection is mandatory.',
      'AEGs: Max 400 FPS w/ 0.20g BBs.',
      'Sniper Rifles: Max 500 FPS w/ 0.20g BBs (100ft MED).',
      'Red dead rag required.',
      'No blind firing.',
    ],
    facebookEventUrl: 'https://www.facebook.com/events/placeholder1/',
    requiredGear: [
      'Reliable Airsoft Replica',
      'Full-seal ANSI Z87.1+ rated Goggles',
      'Red Dead Rag',
      'Water/Hydration Carrier',
      'Faction-appropriate uniform (Tan vs. Green)',
      'Radio for communication (optional but recommended)',
    ],
  },
  {
    id: 'cqb-chaos-night-ops',
    title: 'CQB Chaos: Night Ops',
    date: 'Friday, September 6, 2024',
    location: 'The Warehouse, Metro City',
    summary: 'High-intensity, fast-paced Close Quarters Battle in our indoor arena. This is a special night-time event.',
    description: 'Experience the thrill of indoor CQB under the cover of darkness. The Warehouse will be dimly lit, with strobes and fog machines creating a chaotic and challenging environment. This event will feature fast-paced game modes like Team Deathmatch, Kill Confirmed, and Domination. Bring your tracers and flashlights!',
    imageUrl: 'https://picsum.photos/seed/event2/1200/800',
    gallery: [
        'https://picsum.photos/seed/event2-gallery1/1024/768',
        'https://picsum.photos/seed/event2-gallery2/1024/768',
        'https://picsum.photos/seed/event2-gallery3/1024/768',
    ],
    gameModes: ['Team Deathmatch', 'Kill Confirmed', 'Domination'],
    rules: [
      'Full-face protection is mandatory.',
      'All replicas: Max 350 FPS w/ 0.20g BBs.',
      'Semi-auto only inside buildings.',
      'Flashlights and tracer units highly recommended.',
      'No sound grenades before 9 PM.',
    ],
    facebookEventUrl: 'https://www.facebook.com/events/placeholder2/',
    requiredGear: [
      'CQB-legal Airsoft Replica',
      'Full-face Mask',
      'Tracer Unit (Recommended)',
      'Weapon-mounted or handheld flashlight',
      'Glow sticks for respawn indication',
    ],
  },
  {
    id: 'woodland-wars-squad-skirmish',
    title: 'Woodland Wars: Squad Skirmish',
    date: 'Sunday, September 22, 2024',
    location: 'Blackwood Forest, Outskirts',
    summary: 'A classic day of woodland airsoft. Squad-based skirmishes with varied objectives in a dense forest environment.',
    description: 'Get back to the roots of airsoft with a full day of skirmishes in Blackwood Forest. This casual, beginner-friendly event is perfect for players of all skill levels. We will be running various scenarios throughout the day, focusing on teamwork and fun. Bring your ghillie suit and your best woodland camo!',
    imageUrl: 'https://picsum.photos/seed/event3/1200/800',
    gallery: [
        'https://picsum.photos/seed/event3-gallery1/1024/768',
        'https://picsum.photos/seed/event3-gallery2/1024/768',
        'https://picsum.photos/seed/event3-gallery3/1024/768',
        'https://picsum.photos/seed/event3-gallery4/1024/768',
        'https://picsum.photos/seed/event3-gallery5/1024/768',
    ],
    gameModes: ['Capture the Flag', 'VIP Escort', 'Search and Destroy'],
    rules: [
      'Biodegradable BBs only.',
      'AEGs: Max 400 FPS w/ 0.20g BBs.',
      'Full-seal eye protection is mandatory.',
      'Respect MED (Minimum Engagement Distance) rules.',
      'Call your hits loudly and clearly.',
    ],
    facebookEventUrl: 'https://www.facebook.com/events/placeholder3/',
    requiredGear: [
      'Woodland-appropriate Airsoft Replica',
      'Eye Protection',
      'Sturdy Boots',
      'Red Dead Rag',
      'Plenty of BBs and batteries/gas',
    ],
  },
];

export const GALLERY_IMAGES = [
  'https://picsum.photos/seed/gallery1/600/400',
  'https://picsum.photos/seed/gallery2/600/400',
  'https://picsum.photos/seed/gallery3/600/400',
  'https://picsum.photos/seed/gallery4/600/400',
  'https://picsum.photos/seed/gallery5/600/400',
  'https://picsum.photos/seed/gallery6/600/400',
];

export const GAME_MODES = [
    { name: 'Woodland', description: 'Classic outdoor airsoft in forest or field environments.', icon: 'tree' },
    { name: 'CQB', description: 'Close Quarters Battle. Fast-paced action in tight, indoor environments.', icon: 'building' },
    { name: 'Custom events', description: 'Could be competition nationals focused, or handcrafted boutique story games such as Fury Forest or a mix such as our Commander Commander series.', icon: 'shield' },
    { name: 'Battle trucks, RPGs and Shields', description: 'These are just a few of our Research and Development that have been huge successes over the years', icon: 'building' },
];

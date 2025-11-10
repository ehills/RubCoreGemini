import {EventType} from './types';

// Import gallery images
import gallery1 from './assets/gallery/gallery1.jpg';
import gallery2 from './assets/gallery/gallery2.jpg';
import gallery3 from './assets/gallery/gallery3.jpg';
import gallery4 from './assets/gallery/gallery4.jpg';
import gallery5 from './assets/gallery/gallery5.jpg';
import gallery6 from './assets/gallery/gallery6.jpg';

// Import event images
import ccEventImage from './assets/events/cc-event.jpg';
import ff3EventImage from './assets/events/ff3-event.jpg';
import skirmEventImage from './assets/events/skirm-event.jpg';

export const EVENTS_DATA: EventType[] = [
    {
        id: 'command-commander-rolling-thunder',
        title: 'Commander Commander: Rolling Thunder',
        date: 'Saturday, June 1, 2024',
        location: 'Tangimoana Forest, Tangimoana',
        summary: 'Commander Commander: ROLLING THUNDER is a fast paced action packed game mode, featuring rolling timed attack on objectives, ambushes and chaos in a Ho Ree Shiet trail in the infamous Tangimoana forest.',
        description: 'Come and skirm with us for an epic weekend of madness, mayhem and beeb slingin RPG shootin action. You know Sum Ting Wong when you hear the mighty BATTLE TRUCK roars to life!\n' +
            'This may be our fastest most brutal game mode yet!\n' +
            'For the price of $40pp this includes:\n' +
            '-FIELD FEE\n' +
            '-CAMP GROUNDS\n' +
            '-FIELD LUNCH\n' +
            '-A GOOD SCRAP WITH THE ROWDIEST BASTARDS OF THE WELLINGTONIAN CLUBS\n' +
            '-Covid-24(not guaranteed, no refunds)\n' +
            'Fee to be paid by Wednesday 29/05\n' +
            '06-0513-0288070-000 RuB Core\n' +
            '(Reference Club and Callsign)\n' +
            'Camping, portaloo, BBQ and fridge available for all that want to stay the night or have a meal afterwards.\n' +
            'SATURDAY DINNER NOT SUPPLIED... But the shop is open with fish and chips etc.\n' +
            'Night games are also on the cards pending interest.\n' +
            'Look forward to seeing you there, dirtbags.\n' +
            'General timeline:\n' +
            'Arrival for over night campers from ~3pm on Fri the 31st\n' +
            'GAME ON 10:30 (Be ready to roll out at ~9:00!)\n' +
            'GAME OFF around 1600\n' +
            'Usual hang out, unwind and socials in camp Saturday night\n' +
            'RuB-1 out.',
        imageUrl: ccEventImage,
        gallery: [
            ccEventImage,
        ],
        gameModes: ['Milsim', 'Objective Control', 'Recon'],
        rules: [
            'RuB Rules (2 body, 1 head)',
        ],
        facebookEventUrl: 'https://www.facebook.com/events/2586098334896262',
        requiredGear: [
            'Full face mask recommended.',
            'Radio for communication (optional but recommended)',
            'Gun and gear suitable for woodland skirmish',
        ],
    },
    {
        id: 'fury-forest-3',
        title: 'Fury Forest 3',
        date: 'Saturday, April 8, 2023',
        location: 'Tangimoana Forest, Tangimoana',
        summary: 'In the wake of recent power struggles within Fury Forest, dust has begun to settle on a once sprawling wasteland sanctuary - factions fall back to lick their wounds, the quiet will not last forever.',
        description: 'In the wake of recent power struggles within Fury Forest, dust has begun to settle on a once sprawling wasteland sanctuary - factions fall back to lick their wounds, the quiet will not last forever.\n' +
            'Caught in the crossfire, the Fury Forest power facility has taken significant damage, causing outages to guzzoline facilities, anti-radiation sprinklers and the region\'s main trade beacon - a situation which, if not soon resolved - will surely be the end of the inhabitants of Fury Forest.\n' +
            'To make matters worse, the Ruddy Bastards - a receding population of veteran raiders local to the forest have seemingly gone insane, driven mad by a local substance.\n' +
            'Transmuting ideologies have given birth to a newfound disdain of modern technology, leading to widespread rapid disassemblement and arson throughout the region\'s network of civilian infrastructure.\n' +
            'Regardless, there is still a glimmer of hope for the residents of Fury Forest, whoever is able to restore operational power will certainly control the trade - and the Ruddy Bastards must be eliminated before local treasures are lost, forever.\n' +
            '\n' +
            'This is not a military style game, we encourage people to dress in as little camo as possible, ideally none. Webbing and vests are fine for carrying kit, but try to wear civilian clothing. There will be prizes for best dressed among other things. Points will be deducted from your team if members are spotted in “production” camouflage. Think apocalyptic/Mad max style when choosing/creating your costume.\n' +
            '\n' +
            'SCHEDULE:\n' +
            '-Fri 7th\n' +
            '1700hrs - Gates open for campers\n' +
            '-Sat 8th\n' +
            '0800hrs -Chrono opens\n' +
            '0930hrs - Convoy rolls out to zone\n' +
            '(DONT BE LATE)\n' +
            '~1700hrs - Game off\n' +
            'Dinner\n' +
            'Prizegiving\n' +
            'Party\n' +
            '-Sun 9th\n' +
            'Most likely in bed\n' +
            'Casual games but no promises\n' +
            '\n' +
            'HOW MUCH:\n' +
            '$60 Event Fee (IF STAYING OVERNIGHT)\n' +
            '$30 Event Fee (IF JUST COMING FOR DAY GAME)\n' +
            'Payable to the RUB bank account by 1/04/23\n' +
            'Bank: ANZ\n' +
            'A/C Name: RuB Core Inc\n' +
            'A/C Number: 06-0513-0288070-000\n' +
            'PLEASE USE YOUR NAME AND CLUB AS REFERENCE\n\n' +
            'WHAT IS PROVIDED:\n' +
            'On site Camping\n' +
            'Water\n' +
            'Power\n' +
            'Refrigerators\n' +
            'Cooking facilities\n' +
            'Portaloos\n' +
            'Dinner Saturday night\n\n' +
            'TEAMS:\n' +
            'Hinterland Hounds (Green)\n' +
            'Deadland Devils (Red)\n'
            ,
        imageUrl: ff3EventImage,
        gallery: [
            ff3EventImage,
        ],
        gameModes: ['Milsim', 'Objective Control', 'Themed events', 'Skirmish'],
        rules: [
            '(D.B.A.D)',
            'RuB Rules (2 body, 1 head)',
            'A weapon firing 350 FPS (1.13 Joules) or under has no M.E.D',
            'A weapon firing from 351 FPS up to 420 FPS (1.63 Joules) has a 10m M.E.D',
            'A weapon firing from 420 FPS up to 600 FPS (3.33 Joules) has a 20m M.E.D',
            'No weapon may fire over 600 FPS.',
            'NO bang kills.',
            'All grenade kills count when within a close proximity to a grenade (~2m).',
            'Knife kills including thrown knife kills count.',
            'Gun hits and ricochets are not counted.',
        ],
        facebookEventUrl: 'https://www.facebook.com/events/1760908050915238',
        requiredGear: [
            'Airsoft guns and gear, tents and camping gear.',
            'RuBcore Chefs will be preparing an awesome feed on the Saturday night, which is included in the attendance fee.',
            'Full face mask recommended.',
            'Radio for communication (optional but recommended)',
        ],
    },


    {
        id: 'Weekly skirmish',
        title: 'Weekly skirmish',
        date: 'Sunday, November 9, 2025',
        location: 'Wellington, New Zealand',
        summary: 'We try to skirm weekly depending on weather and interest. Sign up and message us on Facebook to come along.',
        description: 'Come and skirm with us in Wellington and see what RuB is all about.' +
            '\n\n' +
            '12:00pm start, games until 4ish.\n' +
            'New players / mercs welcome - if you haven\'t been here before DM and we will let you know the park up point. ' +
            'Games are usually in our pine forest and custom build CQB Arena. We also have a native bush zone dubbed the Predator Zone\n' +
            '\n' +
            'Club gear/gun bookings:\n' +
            'Club gun + kit hire = $10 (freeee for first timers)\n' +
            'Post here to make a booking, minimum of 24hr notice before game day. Cash/transfer on day or prepay as above.\n' +
            '**NOTE**\n\n' +
            'Game cancellations will be made via the appropriate channels at the following times:\n' +
            'Low numbers - Saturday evening 8pm\n' +
            'Bad weather - Sunday/Day of skirm 9am\n' +
            '***Pre-order your beebs (in bulk prefered) and pay through RuB account***' +
            '\n\n' +
            'Field fee: $10\n' +
            'Ammo sales / Gear hire:\n' +
            'BBs:\n' +
            '1kg BLS .25 = $25\n' +
            '1kg BLS .30 = $30\n' +
            'Bring cash / transfer cash on the day or pre-pay in advance (post here to confirm/get account details).\n' +

            '',
        imageUrl: skirmEventImage,
        gallery: [
            skirmEventImage,
        ],
        gameModes: ['Skirmish', 'Attack/Defend', 'CQB'],
        rules: [
            'RuB Rules (2 body, 1 head)',
        ],
        facebookEventUrl: 'https://www.facebook.com/RubCoreAirsoft/',
        requiredGear: [
            'Gear hire available (free for first timers)',
            'Full face mask recommended.',
            'Radio for communication (optional but recommended)',
            'Gun and gear suitable for woodland skirmish',
        ],
    },
];

export const GALLERY_IMAGES = [
    gallery1,
    gallery2,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
];

export const GAME_MODES = [
    {name: 'Woodland', description: 'Classic outdoor airsoft in forest or field environments.', icon: 'tree'},
    {
        name: 'CQB',
        description: 'Close Quarters Battle. Fast-paced action in tight, indoor environments.',
        icon: 'building'
    },
    {
        name: 'Custom events',
        description: 'Could be competition nationals focused, or handcrafted boutique story games such as Fury Forest or a mix such as our Commander Commander series.',
        icon: 'shield'
    },
    {
        name: 'Battle trucks, RPGs and Shields',
        description: 'These are just a few of our Research and Development that have been huge successes over the years',
        icon: 'building'
    },
];

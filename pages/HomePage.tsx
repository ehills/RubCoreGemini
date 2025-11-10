import { HashLink } from 'react-router-hash-link';
import bannerImage from '../assets/banner.jpg';
import sevensImage from '../assets/sevens.jpg';
import React from 'react';
import EventCard from '../components/EventCard';
import Seo from '../components/Seo';
import { EVENTS_DATA, GALLERY_IMAGES, GAME_MODES } from '../constants';
import { ShieldIcon, BuildingIcon, TreeIcon, BoltIcon, FacebookIcon, InstagramIcon, YoutubeIcon, MailIcon } from '../components/icons';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  shield: ShieldIcon,
  building: BuildingIcon,
  tree: TreeIcon,
  bolt: BoltIcon,
};

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      <Seo
        title="RuB Core Airsoft | Wellington"
        description="Join RuB Core Airsoft, in Wellington, New Zealand, the premier airsoft community for players of all skill levels. We host Milsim, CQB, and woodland events. Teamwork, strategy, and pure action await."
        imageUrl={sevensImage}
      />

      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black overflow-hidden">
          <img
            src={bannerImage}
            alt="RuB Core in action"
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4">
            RuB Core Airsoft
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white">
            Join RuB Core Airsoft, the premier airsoft community for players of all skill levels.
            "Always outnumbered, never outgunned!"
          </p>
          <HashLink
            smooth
            to="/#events"
            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-8 rounded-md text-lg uppercase tracking-wider transition-transform duration-300 transform hover:scale-105"
          >
            See our recent Events
          </HashLink>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight sm:text-4xl mb-4">The Ruddy Bastards</h2>
                <p className="text-lg text-gray-300 mb-4">
                    We are an airsoft club with an emphasis on fighting hard and fast,
                    having a good time and building a strong network of members who
                    stand beside one another.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                    Founded in 2004 by a bunch of board gamers armed with springers and a lone AEG,
                    RuB Core Airsoft established itself as a leading club within the NZ airsoft
                    community from the very start.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                    RuB Core plays across multiple locations throughout the Wellington region,
                    offering diverse terrain from urban close-quarter battles to expansive outdoor
                    fields where we host annual events bringing in large numbers of players from
                    across the country, along with our signature Battle Truck, in-house manufactured RPGs
                    and everything else required for a truly unforgettable experience.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                    Whether you're a seasoned player or new to the sport, our club welcomes all people at
                    all levels.
                </p>

                <p className="text-lg text-gray-300 mb-4">
                    So if you are looking for hard and fast skirms, good sportsmanship and teamwork
                    join us for a game play experience that will leave you wanting more; see you on the field.
                </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-2xl">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/Qc1O9WoTVdU"
                  title="RuB Core Airsoft in action"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Play Section */}
      <section id="how-we-play" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight sm:text-4xl mb-12">How We Play</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {GAME_MODES.map((mode, index) => {
              const Icon = iconMap[mode.icon];
              return (
                <div key={mode.name} className="bg-dark-secondary p-8 rounded-lg animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                  <Icon className="h-12 w-12 mx-auto mb-4 text-brand-primary" />
                  <h3 className="text-xl font-bold mb-2 text-white">{mode.name}</h3>
                  <p className="text-gray-400">{mode.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Events Section */}
      <section id="events" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight sm:text-4xl text-center mb-12">
            Recent Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EVENTS_DATA.map((event, index) => (
              <div key={event.id} className="animate-fade-in-up" style={{ animationDelay: `${0.2 * (index + 1)}s` }}>
                <EventCard event={event} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight sm:text-4xl text-center mb-12">
            Action Gallery
          </h2>
          <div  className="grid grid-cols-2 gap-4">
                <a  href="https://instagram.com/rubcoreairsoft"
                    target="_blank"
                    rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300"
                >
                    <InstagramIcon className="w-6 h-6 mr-3"/>Instagram
                </a>
                <a
                    href="https://www.youtube.com/@rubcoreairsoft6149"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300"
                >
                    <YoutubeIcon className="w-6 h-6 mr-3"/> YouTube
                </a>
            </div>
          <hr className="my-8 border-t border-gray-700" />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`RuB Core action gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & FAQ Section */}
      <section id="contact" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight sm:text-4xl text-center mb-12">
            Contact & FAQ
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* FAQ */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">Frequently Asked Questions</h3>
              <div>
                <h4 className="font-semibold text-lg text-brand-primary mb-1">Do I need my own equipment to play?</h4>
                <p className="text-gray-400">Not at all! We have a full range of rental gear available, and your first games free!. We have guns, masks, vests, etc. Just let us know on the Facebook event or message us.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-brand-primary mb-1">What is the minimum age to play?</h4>
                <p className="text-gray-400">The minimum age to play is 18.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-brand-primary mb-1">Are newplayers welcome on event days?</h4>
                <p className="text-gray-400">Yes! Please just message us or let us know on the event.</p>
              </div>
            </div>
            {/* Contact CTA */}
            <div className="bg-dark-tertiary p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-4 text-center">How to join, or come to a game?</h3>
              <p className="text-gray-300 mb-6 text-center">
                We are active on our Facebook chat so please send us a message. Join our facebook group, ask questions, and connect with a club member.
              </p>
                <div className="space-y-3">
                    <a
                        href="https://www.facebook.com/RubCoreAirsoft/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300 w-full"
                    >
                        <FacebookIcon className="w-6 h-6 mr-3"/>
                        Facebook
                    </a>
                    <h3 className="text-center">OR</h3>
                    <a
                        href="mailto:romeouniformbravo@gmail.com"
                        className="flex items-center justify-center bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300 w-full"
                    >
                        <MailIcon className="w-6 h-6 mr-3"/>
                        Email Us
                    </a>

                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Link } from 'react-router-dom';
import EventCard from '../components/EventCard';
import { EVENTS_DATA, GALLERY_IMAGES, GAME_MODES } from '../constants';
import { ShieldIcon, BuildingIcon, TreeIcon, BoltIcon, FacebookIcon } from '../components/icons';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
    shield: ShieldIcon,
    building: BuildingIcon,
    tree: TreeIcon,
    bolt: BoltIcon,
};

const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] flex items-center justify-center text-center text-white">
        <div className="absolute inset-0 bg-black overflow-hidden">
          <img
            src="https://picsum.photos/seed/hero/1920/1080"
            alt="Airsoft players in action"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tighter mb-4">
            Experience the Adrenaline
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-light-secondary">
            Join RuB Core Airsoft, the premier airsoft community for players of all skill levels.
            Teamwork, strategy, and pure action await.
          </p>
          <Link
            to="/#events"
            className="bg-brand-primary hover:bg-brand-secondary text-white font-bold py-4 px-8 rounded-md text-lg uppercase tracking-wider transition-transform duration-300 transform hover:scale-105"
          >
            See Upcoming Events
          </Link>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-dark-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h2 className="text-3xl font-extrabold text-brand-primary tracking-tight sm:text-4xl mb-4">Who We Are</h2>
              <p className="text-lg text-gray-300 mb-4">
                Viper Tactical is more than just an airsoft club; we are a community built on sportsmanship, integrity, and a shared passion for the sport. Founded in 2015, our mission is to provide a safe, exciting, and inclusive environment for airsoft players.
              </p>
              <p className="text-lg text-gray-300">
                Whether you're a seasoned veteran with a custom-built HPA rifle or a newcomer renting gear for the first time, you'll find a welcoming squad here. We organize regular events, from casual weekend skirmishes to large-scale Milsim operations.
              </p>
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                <img src="https://picsum.photos/seed/aboutus/800/600" alt="Team members posing" className="rounded-lg shadow-2xl"/>
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
                            <Icon className="h-12 w-12 mx-auto mb-4 text-brand-primary"/>
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
            Upcoming Events
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
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {GALLERY_IMAGES.map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                  alt={`Gallery image ${index + 1}`}
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
                <h4 className="font-semibold text-lg text-brand-secondary mb-1">Do I need my own equipment to play?</h4>
                <p className="text-gray-400">Not at all! We have a full range of rental gear available, including rifles, masks, and protective vests. Just select the rental package when you sign up for an event.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-brand-secondary mb-1">What is the minimum age to participate?</h4>
                <p className="text-gray-400">The minimum age to play is 13. All players under 18 must have a waiver signed by a parent or legal guardian. Players 18 and over can sign for themselves.</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg text-brand-secondary mb-1">Are walk-on players welcome on event days?</h4>
                <p className="text-gray-400">Yes, walk-ons are generally welcome. However, we highly recommend pre-registering online to guarantee your spot, especially for larger Milsim operations as they can sell out.</p>
              </div>
            </div>
            {/* Contact CTA */}
            <div className="bg-dark-tertiary p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Have More Questions?</h3>
              <p className="text-gray-300 mb-6">
                Our community is most active on our Facebook page. Join the conversation, ask questions, and connect with fellow players.
              </p>
              <a
                href="#"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md text-lg transition-colors duration-300"
              >
                <FacebookIcon className="w-6 h-6 mr-3" />
                Visit our Facebook Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
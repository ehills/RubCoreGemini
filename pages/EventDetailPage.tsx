
import React from 'react';
import { useParams } from 'react-router-dom';
import { EVENTS_DATA } from '../constants';
import { EventType } from '../types';
import { CalendarIcon, MapPinIcon, CheckIcon } from '../components/icons';

const EventDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const event = EVENTS_DATA.find((e) => e.id === id);

  if (!event) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-primary">Event Not Found</h1>
          <p className="mt-4 text-lg text-gray-300">Sorry, we couldn't find the event you're looking for.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in-up">
      <div className="relative h-[40vh] md:h-[50vh]">
        <img src={event.imageUrl} alt={event.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-primary to-transparent"></div>
        <div className="absolute bottom-0 left-0 container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">{event.title}</h1>
          <div className="flex flex-col sm:flex-row sm:items-center text-lg text-gray-300 mt-2 space-y-2 sm:space-y-0 sm:space-x-6">
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 mr-2 text-brand-primary" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center">
              <MapPinIcon className="w-5 h-5 mr-2 text-brand-primary" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand-primary mb-4">Event Description</h2>
            <p className="text-lg text-gray-300 whitespace-pre-line">{event.description}</p>

            <h2 className="text-2xl font-bold text-brand-primary mt-12 mb-4">Event Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {event.gallery.map((imgSrc, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                  <img src={imgSrc} alt={`${event.title} gallery image ${index + 1}`} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-3 border-b-2 border-dark-tertiary pb-2">Game Modes</h3>
              <div className="flex flex-wrap gap-2">
                {event.gameModes.map(mode => (
                  <span key={mode} className="bg-dark-tertiary text-light-secondary text-sm font-medium px-3 py-1 rounded-full">{mode}</span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-3 border-b-2 border-dark-tertiary pb-2">Key Rules</h3>
              <ul className="space-y-2">
                {event.rules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-brand-primary mb-3 border-b-2 border-dark-tertiary pb-2">Required Gear</h3>
              <ul className="space-y-2">
                {event.requiredGear.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 mr-2 text-orange-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailPage;

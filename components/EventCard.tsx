
import React from 'react';
import { Link } from 'react-router-dom';
import { EventType } from '../types';
import { CalendarIcon, MapPinIcon } from './icons';

interface EventCardProps {
  event: EventType;
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-dark-secondary rounded-lg overflow-hidden shadow-lg hover:shadow-brand-primary/20 transition-all duration-300 transform hover:-translate-y-1 group">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={event.imageUrl} alt={event.title} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-2xl font-bold text-white tracking-tight">{event.title}</h3>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-gray-400 mb-2">
          <CalendarIcon className="w-5 h-5 mr-2 text-brand-primary" />
          <span>{event.date}</span>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPinIcon className="w-5 h-5 mr-2 text-brand-primary" />
          <span>{event.location}</span>
        </div>
        <p className="text-gray-300 mb-6">{event.summary}</p>
        <Link 
          to={`/events/${event.id}`} 
          className="inline-block w-full text-center bg-brand-primary text-white font-bold py-3 px-6 rounded-md group-hover:bg-brand-secondary transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default EventCard;

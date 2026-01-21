import { Camera, Users, Calendar, Settings } from 'react-feather';
import { ReactNode } from 'react';

interface Service {
  title: string;
  description: string;
  icon: ReactNode;
}

export const services: { whatIDo: string; typesOfServices: Service[] } = {
  whatIDo: 'What I do',
  typesOfServices: [
    {
      title: 'Media & Shoots',
      description:
        'Professional styling and hand-doubling for TV, film, and commercial photography. Guaranteed perfect pours for every take.',
      icon: <Camera size={32} />,
    },
    {
      title: 'Training & Workshops',
      description:
        'One-on-one or group sessions tailored to all skill levels. From milk texturing fundamentals to advanced latte art designs.',
      icon: <Users size={32} />,
    },
    {
      title: 'Events & Pop-ups',
      description:
        'Elevate your event with a premium coffee bar. Full service pop-up solutions for corporate events, weddings, and private parties.',
      icon: <Calendar size={32} />,
    },
    {
      title: 'Consultancy',
      description:
        'Expert advice on workflow efficiency, equipment selection, and menu development for new and existing cafes.',
      icon: <Settings size={32} />,
    },
  ],
};

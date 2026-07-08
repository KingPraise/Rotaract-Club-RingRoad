import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { 
  Users, 
  CheckCircle2, 
  Heart, 
  Calendar, 
  ExternalLink, 
  Menu, 
  X,
  ChevronLeft,
  ChevronRight,
  Award,
  BookOpen,
  Briefcase,
  Clock,
  Globe,
  Facebook,
  Instagram,
  Leaf,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Stethoscope,
  Activity,
  GraduationCap,
  Info,
  Twitter,
  User,
  Zap,
  Sun,
  Moon,
  Sparkles,
  Crown,
  Star,
  ArrowRight,
  Trophy,
  HandshakeIcon
} from 'lucide-react';

// --- Types ---

import AdetekFellowshipImage from './assets/images/regenerated_image_1779307884960.jpg';
import GalleryImage1 from './assets/images/regenerated_image_1779308147307.jpg';
import GalleryImage2 from './assets/images/regenerated_image_1779308148373.jpg';
import GalleryImage3 from './assets/images/regenerated_image_1779308149745.jpg';
import GalleryImage4 from './assets/images/regenerated_image_1779308150513.jpg';
import GalleryImage5 from './assets/images/regenerated_image_1779308151224.jpg';
import GalleryImage6 from './assets/images/regenerated_image_1779308152032.jpg';
import GalleryImage7 from './assets/images/regenerated_image_1779308152663.jpg';

import AlamuImage from './assets/images/alamu-headshot.jpeg';
import FaithImage from './assets/images/faith-headshot.jpeg';
import JumaiImage from './assets/images/jumai-headshot.jpeg';
import PresidentUnveilingImage from './assets/images/president_unveiling.jpg';
import HandoverImage from './assets/images/handover.jpeg';

interface Event {
  month: string;
  day: string;
  title: string;
  lead: string;
  time: string;
  location: string;
  description: string;
}

interface BlogPost {
  id: string;
  category: string;
  date: string;
  title: string;
  image: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  content: string[];
  quote?: string;
  gallery?: string[];
  instagramUrl?: string;
}

// --- Components ---

// --- Constants ---

const ROTARY_LOGO_URL = "https://lh3.googleusercontent.com/d/1KhjvMbsUSVOEgaZXIryHet41wxmzBhyW";

const EVENTS: Event[] = [
  { 
    month: 'JUL', 
    day: '12', 
    title: 'Official Handing Over Ceremony', 
    lead: 'Rtr. Peleyeju Timilehin Omotayo',
    time: '3:00 PM',
    location: 'Ibadan (RSVP for venue)',
    description: 'The official transition of leadership for the 2026-2027 Rotary year, featuring inductions, awards, and networking.'
  },
  { 
    month: 'MAY', 
    day: '10', 
    title: 'Fellowship Meeting: Youth at the Forefront of Change', 
    lead: 'Rtn Dr. Kunle Awotiku',
    time: '4:00 PM - 6:00 PM',
    location: 'Meeting Venue: Panthers Hub, Familusi Avenue, Iyaganku, Ibadan.',
    description: 'A transformative session with Rtn Dr. Kunle Awotiku discussing the pivotal role of youth in driving societal growth and sustainable change.'
  },
  { 
    month: 'MAY', 
    day: '24', 
    title: 'Joint Fellowship with Selected Rotaract Clubs', 
    lead: 'Rtr. Risqat Adejumo',
    time: '4:00 PM',
    location: 'Rotary House Iyaganku, Ibadan',
    description: 'A grand gathering of various Rotaract clubs in Ibadan for networking, collaboration, and shared fellowship at the prestigious Rotary House.'
  },
  { 
    month: 'JUN', 
    day: '13', 
    title: 'Service Outreach: Omi Adio', 
    lead: 'Rtr. Toffy',
    time: '9:00 AM - 3:00 PM',
    location: 'Omi Adio Primary School',
    description: 'Hands-on community project involving the renovation of classroom facilities and a vocational workshop for adult residents of the Omi Adio settlement.'
  },
];

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'joint-fellowship-bodija-2026',
    category: 'Joint Fellowship',
    date: 'May 20, 2026',
    title: 'Youths Creating Lasting Impact: Special Joint Fellowship at Bodija',
    image: AdetekFellowshipImage,
    author: {
      name: 'Rtr. Popoola Samuel',
      role: 'Immediate Past President',
      image: 'https://lh3.googleusercontent.com/d/1KaCnXu6se4o7ojq5Jj-WTYUhQpUm6mML'
    },
    content: [
      "Yesterday’s joint fellowship was a powerful reminder that young people are not just the future of service — we are the force driving impact today. 💫",
      "The Rotary Club of Nigeria – Next Generation, and the Rotaract Club of the University of Ibadan, in collaboration with the Rotaract Club of Ibadan Ring Road, successfully hosted an impactful and powerful fellowship session focusing on youth leadership, service, and sustainable community impact.",
      "The theme of the evening, \"The Involvement of Youths (Rotaractors and Young Rotarians) in Creating Lasting Impact Projects,\" sparked passionate discussions. From insightful conversations to inspiring moments of connection, we explored the vital role Rotaractors and Young Rotarians play in creating sustainable and lasting community projects. 🌍✨",
      "Our esteemed guest speaker, Rtn. Kazeem Akinade Olanrewaju — President of the Rotary D9126 Alumni Association and District Chair of Rotary Alumni — shared invaluable, highly motivating insights. A huge thank you to him for sharing these valuable insights and inspiring us toward greater service, excellence, and leadership.",
      "The fellowship, held at No. 45, Adetek House, Beside Danest Hotel, Adeyi Avenue, Bodija, Ibadan, was attended by numerous passionate young headers. Together with the Rotaract Club of University of Ibadan and Rotary Club of Nigeria – Next Generation, we continue to strengthen the bond of fellowship, leadership, and service above self. 🤝❤️",
      "Here are some highlights from an amazing and impactful evening. 📸 Thank you to everyone whose presence added immense value and contributed to the success of this special gathering.",
      "📞 R.S.V.P: Tomi Adeyi – 07060576764, Olasunkanmi Afreeka - 08139038322"
    ],
    quote: "Young people are not just the future of service — we are the force driving impact today. Together, we create sustainable community projects that last.",
    gallery: [
      GalleryImage1,
      GalleryImage2,
      GalleryImage3,
      GalleryImage4,
      GalleryImage5,
      GalleryImage6,
      GalleryImage7
    ]
  },
  {
    id: 'diaper-drive-2025',
    category: 'Service Project',
    date: 'July 28, 2025',
    title: 'Rotaract Club of Ibadan Ring Road Lights up Oja-Igbo Community with Diaper Drive Project',
    image: 'https://lh3.googleusercontent.com/d/1MU-MwzJF8lQ3lxoInnl8YAnYeOiPm0fz',
    author: {
      name: 'Rtr. Popoola Samuel',
      role: 'Immediate Past President',
      image: 'https://lh3.googleusercontent.com/d/1KaCnXu6se4o7ojq5Jj-WTYUhQpUm6mML'
    },
    content: [
      "In a heartwarming display of service and compassion and an effort to promote maternal and child health, the Rotaract Club of Ibadan Ring-Road (CB) recently brought joy and relief to nursing mothers by providing essential baby care items while empowering mothers with practical childcare knowledge.",
      "The project held on Saturday 26th of July, 2025, at Teslim Folarin Compound in Kosodo Community, Oja Igbo, Ibadan, aimed to support nursing mothers by providing essential baby care items, promoting hygiene practices, and offering educational sessions on effective child care practices.",
      "The project saw the active participation of dedicated volunteers and members who worked tirelessly to ensure its success. The team impacted over 60 nursing mothers and pregnant women from the Oja Igbo community. The project aims to improve hygiene management among nursing mothers, sensitize them on effective child care practices, and provide them with basic sanitary and baby care materials such as diapers, soaps, and toiletries.",
      "The ‘Diaper a Baby Outreach’ featured engaging activities such as a hygiene management talk to educate mothers on best practices, the distribution of diapers to alleviate caregiving burdens, the distribution of toiletries to ensure proper hygiene, and the provision of liquid soaps to promote cleanliness and sanitation.",
      "The outreach made a significant impact on the lives of the beneficiaries by equipping them with knowledge and resources to better care for their babies. It also fostered a strong bond between the Rotaract Club of Ibadan Ring Road and the Kosodo community. The heartfelt appreciation of the beneficiaries towards the organizers, donors, and supporters highlighted the positive effect of the project on the community.",
      "Several nursing mothers expressed their gratitude for the support and resources provided, emphasizing the difference the diapers, toiletries, and liquid soaps would make in their daily caregiving routines. They praised the hygiene management talk for its informative and empowering content, acknowledging the Rotaract Club’s dedication to their well-being and that of their children.",
      "The President of the Rotaract Club of Ibadan RingRoad Rtr Popoola Olalekan Samuel commended the team for the successful execution of the outreach, emphasizing the club’s commitment to improving maternal and child health in the community. Expressing pride in the impactful work done, Popoola Samuel thanked the volunteers, donors, and community members for their support and contributions, calling for continued collaboration to further enhance the well-being of residents.",
      "In conclusion, the ‘Diaper a Baby Outreach’ exemplified the power of community engagement and support in promoting health and well-being. By empowering mothers and nurturing futures, the Rotaract Club of Ibadan RingRoad has demonstrated its dedication to making a positive difference in the lives of those in need."
    ],
    quote: "The energy of our volunteers and the smiles of the mothers we served remind us why our compassion is our guiding light.",
    gallery: [
      'https://lh3.googleusercontent.com/d/1wZTZjLEB9ciOWnbTQfq5gyY4RPlrI-T6',
      'https://lh3.googleusercontent.com/d/1txgEebOsTPfXneK9MCkS8M2dZfSKLoYm',
      'https://lh3.googleusercontent.com/d/1gcgc_h57shOraqsRY0ov6k2nDE-Uk4ZL',
      'https://lh3.googleusercontent.com/d/1-CagTBjgAwS1OgqET_vnOJRobtGzijpZ',
      'https://lh3.googleusercontent.com/d/1gR37pPQUCql7v9wHlq1CTH4flNjbmOT5',
      'https://lh3.googleusercontent.com/d/1MU-MwzJF8lQ3lxoInnl8YAnYeOiPm0fz',
    ]
  },
  {
    id: 'kunle-awotiku-2026',
    category: 'Keynote Session',
    date: 'May 10, 2026',
    title: 'Youth at the Forefront of Change: An Evening with Rtn Dr. Kunle Awotiku',
    image: 'https://lh3.googleusercontent.com/d/1LquqOjoKiYEQ1ZJztSZDGhl6kUuYWucB',
    author: {
      name: 'Rtn Dr. Kunle Awotiku',
      role: 'Guest Speaker',
      image: 'https://lh3.googleusercontent.com/d/1CXhS8JH1mAVmDG0iOhRgkRSj_qwM6gNq'
    },
    content: [
      "Our most recent fellowship meeting held on the 10th of May was nothing short of legendary. We had the honor of hosting Rtn Dr. Kunle Awotiku, who shared profound insights on how young leaders can navigate the complexities of community service and professional excellence.",
      "The session, titled \"Youth at the Forefront of Change,\" challenged us to look beyond immediate rewards and focus on building sustainable systems that empower the next generation. Rtn Dr. Kunle emphasized that Rotaract isn't just about projects; it's about the leadership development that happens within us as we serve.",
      "Members engaged in a robust Q&A session, discussing strategies for membership retention and impactful project execution in the current economic climate of Ibadan."
    ],
    quote: "The energy of the youth is the engine of societal transformation.",
    instagramUrl: "https://www.instagram.com/p/DYK4_gMChPW/",
    gallery: [
      'https://lh3.googleusercontent.com/d/1r63rxdXn5eA27lxVWITnP8GKyxlD3WiT',
      'https://lh3.googleusercontent.com/d/1ePjhCgAG6CAEnT8V78rHh9gbimuJff9E',
      'https://lh3.googleusercontent.com/d/1KR1CJoT6vPl1u4xcAjgjw2dikIzJP8bn',
      'https://lh3.googleusercontent.com/d/1p5kDJATK3OzXz8iEGpHIWzZ4OCR7wcKs',
      'https://lh3.googleusercontent.com/d/1xp2g5B3I5tma4__G_iFZuT86Eu6DsKqZ',
      'https://lh3.googleusercontent.com/d/1iluekjIHzQfcBRYHtv2zemwReWggBExT',
      'https://lh3.googleusercontent.com/d/1hBaM5XqwuIIM0D2z-5MeCZ5jGd0jnapT',
      'https://lh3.googleusercontent.com/d/1QOYN4MR1077V-thbON23VxsRj--CWlAW',
      'https://lh3.googleusercontent.com/d/1LquqOjoKiYEQ1ZJztSZDGhl6kUuYWucB',
      'https://lh3.googleusercontent.com/d/1qXY2J9B5WFPI5MdCYnhR8rx2864hAJsi'
    ]
  }
];

const isPastEvent = (month: string, day: string) => {
  const monthMap: { [key: string]: number } = { 'MAY': 4, 'JUN': 5 }; // JS months are 0-indexed
  const now = new Date();
  const eventDate = new Date(2026, monthMap[month], parseInt(day), 23, 59, 59);
  return now > eventDate;
};

const Marquee = () => {
  const announcements = [
    "🎉 HANDING OVER CEREMONY · Sunday, July 12, 2026 · 3:00 PM · From President Popoola Olalekan to President Peleyeju Timilehin Omotayo · New Rotary Year 2026–2027",
    "🌟 Welcome to the NEW Rotary Year 2026–2027 · Meet our New Board of Directors · Leading with Purpose, Serving with Passion"
  ];
  
  return (
    <div className="bg-rotaract-cranberry text-white py-2 overflow-hidden whitespace-nowrap border-b border-white/10 z-[60] relative">
      <div className="flex animate-marquee gap-10">
        {[...announcements, ...announcements, ...announcements, ...announcements].map((text, i) => (
          <span key={i} className="text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-rotaract-secondary rounded-full"></span>
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

const DonationModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="relative bg-white dark:bg-dark-surface w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl z-10 p-8 text-center transition-colors duration-300"
        >
          <button onClick={onClose} className="absolute top-6 right-6 text-gray-400 hover:text-brand-dark dark:hover:text-dark-text-primary transition-colors">
            <X size={24} />
          </button>
          <div className="w-16 h-16 bg-rotaract-cranberry/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart size={32} className="text-rotaract-cranberry fill-rotaract-cranberry" />
          </div>
          <h3 className="text-2xl font-black text-brand-dark dark:text-dark-text-primary mb-2 tracking-tight transition-colors">Support Our Service</h3>
          <p className="text-brand-muted dark:text-dark-text-secondary text-sm mb-8 leading-relaxed transition-colors">
            Your contributions help us fund life-changing projects in our community. Every donation makes a real difference.
          </p>
          
          <div className="bg-brand-bg dark:bg-dark-bg p-6 rounded-2xl border border-gray-100 dark:border-dark-border text-left space-y-4 transition-colors duration-300">
            <div>
              <div className="text-[10px] font-black text-rotaract-cranberry uppercase tracking-widest mb-1">Bank Name</div>
              <div className="text-lg font-black text-brand-dark dark:text-dark-text-primary">Union Bank</div>
            </div>
            <div>
              <div className="text-[10px] font-black text-rotaract-cranberry uppercase tracking-widest mb-1">Account Number</div>
              <div className="text-2xl font-black text-brand-dark dark:text-dark-text-primary tracking-tighter">0206400663</div>
            </div>
            <div>
              <div className="text-[10px] font-black text-rotaract-cranberry uppercase tracking-widest mb-1">Account Name</div>
              <div className="text-sm font-bold text-brand-dark dark:text-dark-text-primary">Rotaract Club Of Ibadan Ring Road</div>
            </div>
          </div>
          
          <button 
            onClick={onClose}
            className="w-full mt-8 bg-rotaract-cranberry text-white py-4 rounded-xl font-bold hover:bg-opacity-90 transition-all shadow-lg"
          >
            I've Made a Donation
          </button>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Modal = ({ isOpen, onClose, event }: { isOpen: boolean, onClose: () => void, event: Event | null }) => {
  if (!isOpen || !event) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-dark/80 backdrop-blur-sm"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative bg-white dark:bg-dark-surface w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl z-10 transition-colors duration-300"
        >
          <div className="bg-rotaract-cranberry p-8 text-white relative">
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-rotaract-secondary dark:bg-rotaract-cranberry text-white px-4 py-2 rounded-xl font-black text-xl shadow-sm">
                {event.day} {event.month}
              </div>
              <span className="text-white/60 font-bold uppercase tracking-widest text-xs">Upcoming Event</span>
            </div>
            <h3 className="text-3xl font-black leading-tight italic">{event.title}</h3>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-rotaract-secondary dark:text-rotaract-cranberry uppercase tracking-widest flex items-center gap-1.5">
                  <Clock size={12} /> Time
                </div>
                <div className="text-sm font-bold text-brand-dark dark:text-dark-text-primary">{event.time}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-rotaract-secondary dark:text-rotaract-cranberry uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin size={12} /> Venue
                </div>
                <div className="text-sm font-bold text-brand-dark dark:text-dark-text-primary">{event.location}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-bold text-rotaract-secondary dark:text-rotaract-cranberry uppercase tracking-widest flex items-center gap-1.5">
                <Info size={12} /> About this event
              </div>
              <p className="text-sm text-brand-muted dark:text-dark-text-secondary leading-relaxed transition-colors">
                {event.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 dark:border-dark-border flex items-center justify-between transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-pink-50 dark:bg-rotaract-cranberry/10 flex items-center justify-center text-rotaract-cranberry">
                  <User size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-muted dark:text-dark-text-secondary uppercase tracking-widest leading-none mb-1">Coordinated By</div>
                  <div className="text-xs font-black text-brand-dark dark:text-dark-text-primary transition-colors">{event.lead}</div>
                </div>
              </div>
              <a 
                href="https://wa.me/2347033604513" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-rotaract-cranberry text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-opacity-90 transition-all"
              >
                RSVP Now
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Navbar = ({ setView, currentView, darkMode, setDarkMode }: { 
  setView: (v: 'home' | 'blog') => void, 
  currentView: string,
  darkMode: boolean,
  setDarkMode: (v: boolean) => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDonation, setShowDonation] = useState(false);

  const [isThemeScrolled, setIsThemeScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      const themeSection = document.getElementById('year-theme');
      if (themeSection) {
        const rect = themeSection.getBoundingClientRect();
        // Check if we reached the section (accounting for navbar height roughly)
        setIsThemeScrolled(window.scrollY + 100 > themeSection.offsetTop);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', view: 'home' },
    { name: 'About', href: '#about', view: 'home' },
    { name: 'Leadership', href: '#handover', view: 'home' },
    { name: 'Impact', href: '#impact-report', view: 'home' },
    { name: 'Projects', href: '#projects', view: 'home' },
    { name: 'Events', href: '#events', view: 'home' },
    { name: 'Blog', href: '#blog', view: 'blog' },
  ];

  return (
    <>
      <Marquee />
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? `${isThemeScrolled ? 'md:shadow-sm' : 'shadow-sm'} py-4 h-16 flex items-center` : 'bg-transparent py-8 h-24 md:h-32 flex items-center'}`} style={{ top: '2.5rem' }}>
        <div className="max-w-7xl mx-auto px-10 w-full flex justify-between items-center bg-white rounded-2xl py-2 shadow-2xl transition-all duration-500">
          <button 
            onClick={() => setView('home')} 
            className="flex items-center gap-4 group"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Rotaract Club Of Ibadan Ring Road" 
                className="w-[190px] h-[100px] object-contain relative z-10 transition-all duration-500 scale-[1.25] md:scale-[1.35] origin-left group-hover:scale-[1.35] md:group-hover:scale-[1.45]"
                referrerPolicy="no-referrer"
              />
            </div>
          </button>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium text-sm text-black mr-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={(e) => {
                  if (link.view === 'blog') {
                    e.preventDefault();
                    setView('blog');
                  } else if (currentView === 'blog') {
                     // If on blog page and clicking a home section link
                     setView('home');
                  }
                }}
                className={`transition-colors text-black hover:text-rotaract-cranberry ${scrolled ? 'text-black/90 dark:text-black/90 hover:text-rotaract-cranberry' : 'text-black/80 hover:text-rotaract-cranberry'} ${currentView === link.view && link.view === 'blog' ? 'text-rotaract-cranberry font-black' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setShowDonation(true)}
              className="bg-rotaract-cranberry text-white px-6 py-2.5 rounded-xl font-bold shadow-md hover:scale-105 transition-all text-xs uppercase tracking-widest"
            >
              Donate
            </button>
            <a href="https://wa.me/2347033604513" target="_blank" rel="noopener noreferrer" className="bg-rotaract-secondary text-white px-6 py-2.5 rounded-xl font-bold shadow-md hover:scale-105 transition-all text-xs uppercase tracking-widest">
              Join Us
            </a>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-black/5 text-black hover:bg-black/10 transition-all shadow-sm"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-black bg-black/5 rounded-lg"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} className="text-black" /> : <Menu size={24} className="text-black mr-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-white dark:bg-dark-surface shadow-2xl py-10 flex flex-col items-center gap-8 md:hidden border-t border-gray-50 dark:border-dark-border"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => {
                    setIsOpen(false);
                    if (link.view === 'blog') {
                      e.preventDefault();
                      setView('blog');
                    } else if (currentView === 'blog') {
                      setView('home');
                    }
                  }}
                  className="text-brand-dark font-bold text-lg"
                >
                  {link.name}
                </a>
              ))}
              <button 
                onClick={() => {
                  setIsOpen(false);
                  setShowDonation(true);
                }}
                className="bg-rotaract-cranberry text-white px-10 py-3 rounded-xl font-bold text-lg shadow-lg"
              >
                Donate
              </button>
              <a href="https://wa.me/2347033604513" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="bg-rotaract-secondary text-white px-10 py-3 rounded-xl font-bold text-lg shadow-lg">
                Join Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <DonationModal isOpen={showDonation} onClose={() => setShowDonation(false)} />
    </>
  );
};

const Hero = ({ setView }: { setView: (v: 'home' | 'blog') => void }) => {
  return (
    <section id="home" className="relative min-h-[700px] md:h-[90vh] bg-rotaract-cranberry flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://lh3.googleusercontent.com/d/1z1oMmY4poNs_YQk4QOWQfGcQxTDSY5c5" 
          alt="Rotaract Club of Ibadan Ring Road members during a fellowship session" 
          className="w-full h-full object-cover object-[50%_15%]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-rotaract-cranberry/80 dark:bg-dark-bg/90 backdrop-blur-[2px] transition-all duration-700"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rotaract-cranberry dark:from-dark-bg via-rotaract-cranberry/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-dark-bg via-transparent to-transparent opacity-20"></div>
      </div>

      <div className="absolute inset-0 opacity-10 z-1" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-10 items-center z-10 py-20 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <span className="inline-block bg-rotaract-secondary text-white text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-6 uppercase">
            Youth Leadership
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-white italic">
            Young Leaders. <br/>Real Service. <br/>Lasting Impact.
          </h1>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed font-light">
            Rotaract empowers young professionals to take action in their communities and lead meaningful change.
          </p>
          <div className="flex gap-4">
            <button onClick={() => setView('blog')} className="bg-white text-rotaract-cranberry px-8 py-3 rounded-xl font-bold flex items-center shadow-lg hover:bg-gray-50 transition-all">
              Read Our Blog <span className="ml-2">→</span>
            </button>
            <a href="#projects" className="border-2 border-white/30 text-white px-8 py-3 rounded-xl font-bold hover:bg-white/10 transition-all">
              Our Projects
            </a>
          </div>
        </motion.div>
        {/* Rest of the Hero component remains basically the same */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
          style={{ perspective: "1200px" }}
        >
          <motion.div 
            className="relative w-72 h-72 md:w-[650px] md:h-[650px]"
            animate={{ 
              rotateY: [0, 360],
              rotateX: [5, -5, 5],
            }}
            transition={{ 
              rotateY: { duration: 25, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 10, repeat: Infinity, ease: "easeInOut" }
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-rotaract-secondary/20 rounded-full blur-[100px] animate-pulse"></div>
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(20px)" }}>
              <img 
                src={ROTARY_LOGO_URL}
                alt="3D Rotary Wheel"
                className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(30,41,59,0.6)]"
                style={{ height: '650px', width: '650px' }}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl z-20 pointer-events-none">
            <div className="text-rotaract-secondary font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">Service</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
        <ChevronRight size={32} className="rotate-90 text-white" />
      </div>
    </section>
  );
};

const Impact = () => {
  const stats = [
    { value: 50, label: 'Members', suffix: '+' },
    { value: 12, label: 'Projects', suffix: '+' },
    { value: 1000, label: 'Lives Impacted', suffix: '+' },
    { value: 6, label: 'Years', suffix: '+' },
  ];

  const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.floor(latest));
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.5 });

    useEffect(() => {
      if (isInView) {
        animate(count, value, { duration: 2, ease: "easeOut" });
      }
    }, [isInView, count, value]);

    return (
      <span ref={ref}>
        <motion.span>{rounded}</motion.span>
        {suffix}
      </span>
    );
  };

  return (
    <section id="impact" className="bg-rotaract-cranberry dark:bg-dark-surface h-auto py-12 md:h-28 md:py-0 flex items-center justify-around px-12 border-b border-white/10 dark:border-dark-border shadow-inner relative overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto w-full flex flex-wrap md:flex-nowrap items-center justify-around gap-8 relative z-10">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-12 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-black text-rotaract-secondary dark:text-rotaract-cranberry tracking-tighter drop-shadow-sm transition-colors">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase font-bold text-white/70 dark:text-dark-text-secondary tracking-widest mt-0.5">{stat.label}</div>
            </div>
            {i < stats.length - 1 && (
              <div className="hidden md:block h-8 w-px bg-white/20 dark:bg-dark-border"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const YearTheme = () => {
  return (
    <section id="year-theme" className="py-24 bg-white dark:bg-dark-bg overflow-hidden relative border-b border-gray-50 dark:border-dark-border transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rotaract-cranberry/30 to-transparent"></div>
      <div className="max-w-6xl mx-auto px-12 text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="relative"
        >
          <div className="text-[10px] md:text-sm font-black uppercase tracking-[0.5em] text-rotaract-cranberry/40 dark:text-rotaract-cranberry/60 mb-8 transition-colors">
            Presidential Theme 2026–2027
          </div>
          
          <div className="relative group max-w-5xl mx-auto">
            <div className="absolute -inset-8 bg-rotaract-secondary/10 dark:bg-rotaract-cranberry/10 rounded-[60px] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img 
              src="https://lh3.googleusercontent.com/d/1dUz4XUgxVp_mBvCRomrW4DsYpoKhigHr" 
              alt="Unite for Good Theme" 
              className="w-full max-w-4xl mx-auto h-auto rounded-[48px] shadow-2xl relative z-10 transition-all duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="mt-12 text-rotaract-cranberry font-bold tracking-[0.2em] text-xs md:text-sm border-t border-rotaract-cranberry/10 dark:border-rotaract-cranberry/20 pt-8 inline-block transition-colors">
            STRENGTH IN UNITY · IMPACT THROUGH SERVICE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-brand-bg/50 dark:bg-dark-bg/50 overflow-hidden relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-rotaract-cranberry/5 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-rotaract-secondary dark:text-rotaract-cranberry mb-4">The Foundation</h2>
            <h3 className="text-4xl font-extrabold text-brand-dark dark:text-dark-text-primary mb-8 leading-[1.2] tracking-tight">
              Rooted in Service, <br />
              <span className="text-rotaract-cranberry italic">Part of the Global Rotary Family.</span>
            </h3>
            <div className="space-y-6 text-brand-muted dark:text-dark-text-secondary leading-relaxed text-sm lg:text-base">
              <p>
                Rotaract empowers young professionals like us through the mentorship and global reach of Rotary International to tackle the most pressing humanitarian challenges, starting right here in Ibadan.
              </p>
              <div className="pt-6 flex items-center gap-8 opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src={ROTARY_LOGO_URL} 
                  alt="Rotary International Logo" 
                  className="h-14 md:h-16 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="h-10 w-px bg-gray-200"></div>
                <div className="text-[11px] font-bold text-brand-muted uppercase tracking-[0.2em] leading-tight">
                  Sponsor Club: <br /> Rotary Club of Ibadan Ring Road
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col justify-center items-center text-center p-12 bg-white dark:bg-dark-surface rounded-[40px] border border-gray-50 dark:border-dark-border shadow-sm relative overflow-hidden group transition-colors duration-300">
               <div className="absolute inset-0 bg-rotaract-cranberry/5 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
               <div className="italic font-serif text-3xl md:text-5xl text-rotaract-cranberry mb-4 relative z-10">"Impact through Unity"</div>
               <div className="text-rotaract-secondary dark:text-dark-text-secondary font-bold text-xs uppercase tracking-[0.3em] relative z-10">Our Guiding Principle</div>
            </div>
            <div className="bg-white dark:bg-dark-surface p-8 rounded-3xl border-l-4 border-rotaract-secondary shadow-sm flex items-start gap-6 hover:shadow-md transition-all duration-300">
              <div className="w-12 h-12 bg-pink-50 dark:bg-rotaract-cranberry/10 rounded-lg flex items-center justify-center shrink-0">
                <Globe size={20} className="text-rotaract-cranberry" />
              </div>
              <div>
                <div className="font-bold text-rotaract-cranberry text-lg">Global Connectivity</div>
                <p className="text-xs lg:text-sm text-brand-muted dark:text-dark-text-secondary mt-2 font-medium">As Rotaractors, we are part of District 9126, connecting with thousands of fellow changemakers across Nigeria and the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const PresidentialUnveiling = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Hide this section after July 31, 2026
  if (new Date() > new Date('2026-07-31T23:59:59')) {
    return null;
  }

  const highlights = [
    { icon: BookOpen, label: 'Annual Report', desc: '2025/2026 Year' },
    { icon: Users, label: 'Induction', desc: 'New Members' },
    { icon: HandshakeIcon, label: 'Handing Over', desc: 'Official Ceremony' },
    { icon: Trophy, label: 'Awards', desc: 'Presentation' },
    { icon: Heart, label: 'Fellowship', desc: '& Networking' },
  ];

  return (
    <section id="handover" ref={ref} className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-[#0a0a1a] via-[#0f172a] to-[#0a0a1a]">
      {/* Animated background patterns */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-rotaract-cranberry/30 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-rotaract-secondary/10 rounded-full blur-[200px]"></div>
      </div>
      
      {/* Snowy Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none snow-bg opacity-80"></div>

      <div className="absolute inset-0 opacity-5 z-0" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-6">
            <Sparkles size={14} className="animate-pulse" />
            New Rotary Year 2026–2027
            <Sparkles size={14} className="animate-pulse" />
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-4">
            A New Era of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 italic">
              Leadership
            </span>
          </h2>
          <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto leading-relaxed font-medium">
            Honouring Service. Inspiring the Future. The torch of leadership passes to a new generation of changemakers.
          </p>
        </motion.div>

        {/* Presidents Side-by-Side */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20 max-w-5xl mx-auto">
          {/* Outgoing President */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-rotaract-cranberry/20 to-transparent rounded-[40px] blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="relative bg-white/[0.04] backdrop-blur-md border border-white/10 rounded-[40px] p-8 md:p-10 text-center hover:border-white/20 transition-all duration-500">
              <div className="text-[10px] font-black uppercase tracking-[0.3em] text-rotaract-cranberry/70 mb-6">Outgoing President · 2025/2026</div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-rotaract-cranberry to-rotaract-secondary rounded-full opacity-30 scale-110 group-hover:scale-125 transition-transform duration-700"></div>
                <img
                  src="https://lh3.googleusercontent.com/d/1KaCnXu6se4o7ojq5Jj-WTYUhQpUm6mML"
                  alt="Rtr. Popoola Olalekan Samuel"
                  className="w-full h-full rounded-full object-cover object-[50%_15%] border-4 border-white/10 relative z-10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-tight">Popoola Olalekan</h3>
              <p className="text-white/40 text-xs font-bold uppercase tracking-[0.2em] mb-4">Samuel</p>
              <p className="text-white/50 text-xs leading-relaxed italic max-w-xs mx-auto">
                "A year of impact, growth, and unwavering service to our community."
              </p>
            </div>
          </motion.div>

          {/* Incoming President */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-transparent rounded-[40px] blur-xl group-hover:blur-2xl transition-all"></div>
            <div className="absolute -inset-[2px] bg-gradient-to-br from-amber-400/50 via-yellow-300/30 to-amber-500/50 rounded-[41px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative bg-white/[0.06] backdrop-blur-md border border-amber-500/20 rounded-[40px] p-8 md:p-10 text-center hover:border-amber-400/40 transition-all duration-500">
              <div className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber-400 mb-6">
                <Crown size={14} className="animate-pulse" />
                Incoming President · 2026/2027
                <Crown size={14} className="animate-pulse" />
              </div>
              <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-30 scale-110 group-hover:scale-125 transition-transform duration-700 animate-pulse"></div>
                <div className="absolute -inset-3 border-2 border-amber-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
                <img
                  src="https://lh3.googleusercontent.com/d/1M4yQ3oJ5Mhlbq7JBfvWMOMutiL9qhPd9"
                  alt="Rtr. Peleyeju Timilehin Omotayo"
                  className="w-full h-full rounded-full object-cover object-[50%_15%] border-4 border-amber-400/30 relative z-10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-yellow-200 mb-1 tracking-tight">Peleyeju Timilehin</h3>
              <p className="text-amber-400/60 text-xs font-bold uppercase tracking-[0.2em] mb-4">Omotayo</p>
              <p className="text-white/50 text-xs leading-relaxed italic max-w-xs mx-auto">
                "Leading with purpose. Serving with passion. Inspiring impact."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Central Handover Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex flex-col items-center gap-4 bg-gradient-to-br from-amber-500/10 via-white/[0.03] to-amber-500/10 border border-amber-500/20 backdrop-blur-md rounded-[32px] px-10 py-8">
            <div className="flex items-center gap-6">
              <div className="text-right">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">From</div>
                <div className="text-white font-black text-sm">Popoola</div>
              </div>
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg shadow-amber-500/20">
                <HandshakeIcon size={28} className="text-white" />
              </div>
              <div className="text-left">
                <div className="text-[10px] font-bold text-white/30 uppercase tracking-widest">To</div>
                <div className="text-amber-400 font-black text-sm">Peleyeju</div>
              </div>
            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-amber-500/30 to-transparent"></div>
            <div className="flex items-center gap-3">
              <Calendar size={16} className="text-amber-400" />
              <span className="text-white font-black text-sm tracking-tight">Sunday, July 12, 2026</span>
              <span className="text-white/30">·</span>
              <Clock size={16} className="text-amber-400" />
              <span className="text-white font-black text-sm tracking-tight">3:00 PM</span>
            </div>
          </div>
        </motion.div>

        {/* Handover Event Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="max-w-4xl mx-auto mb-16 md:mb-20"
        >
          <div className="relative group rounded-[40px] overflow-hidden shadow-2xl shadow-black/50 border border-white/10 hover:border-amber-500/30 transition-all duration-700">
            <img
              src={HandoverImage}
              alt="Handing Over Ceremony - From Popoola Olalekan to Peleyeju Timilehin Omotayo"
              className="w-full h-auto object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>

        {/* Event Highlights Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-10">
            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">Ceremony Highlights</h4>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + i * 0.1 }}
                className="bg-white/[0.03] backdrop-blur-sm border border-white/5 rounded-2xl p-5 text-center hover:bg-white/[0.06] hover:border-amber-500/20 transition-all duration-500 group"
              >
                <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/20 transition-colors">
                  <h.icon size={18} className="text-amber-400" />
                </div>
                <div className="text-[10px] font-black text-white uppercase tracking-widest mb-1">{h.label}</div>
                <div className="text-[9px] font-bold text-white/30 uppercase tracking-wider">{h.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <a
              href="https://wa.me/2347033604513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-yellow-500 text-black px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl shadow-amber-500/20 hover:scale-105 hover:shadow-amber-500/40 transition-all duration-300"
            >
              RSVP for Handover Ceremony
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Board = () => {
  const members = [
    {
      name: 'Rtr. Peleyeju Timilehin Omotayo',
      role: 'President',
      isLead: true,
      bio: 'Cybersecurity specialist and visionary leader committed to driving impactful service. Leading with purpose to build a stronger, more connected Rotaract family.',
      image: 'https://lh3.googleusercontent.com/d/1M4yQ3oJ5Mhlbq7JBfvWMOMutiL9qhPd9',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Tunmininu Akinsuroju',
      role: 'Vice President',
      isLead: false,
      bio: 'Professional Medical Laboratory Scientist and exceptional leader driving impact, inspiring change, and upholding the spirit of service.',
      image: 'https://lh3.googleusercontent.com/d/1A5vVn0UoRR4-c9M8S0DSBx2vsar1qPcV',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Adejumo Risqat',
      role: 'Treasurer & Secretary',
      isLead: false,
      bio: 'Tech professional at Red Cloud Technology and dedicated commercial vegetable farmer. Managing today, planning tomorrow with accountability and organizational heart.',
      image: 'https://lh3.googleusercontent.com/d/1DbiwRkwEQliLC7nc6IsJ4BoN58WJtZ5b',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Popoola Olamilekan',
      role: 'Project Director',
      isLead: false,
      bio: 'Project Manager and civic leader. Driving impact, creating change, and building a better tomorrow through community-centered service projects.',
      image: 'https://lh3.googleusercontent.com/d/1KaCnXu6se4o7ojq5Jj-WTYUhQpUm6mML',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Oluwatofunmi Tejumola',
      role: 'Public Image Director',
      isLead: false,
      bio: 'Professional graphics designer and branding expert. Telling our story, inspiring our world, and building a brand that reflects our impact.',
      image: 'https://lh3.googleusercontent.com/d/14Hj_7paRO9z7xisi_sRWeoqTH21bt0cl',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Taiwo King Praise',
      role: 'Assistant Public Image Director',
      isLead: false,
      bio: 'Software Engineer and founder of Code Dynasty ICT Solutions. Amplifying our voice, showcasing our impact, and strengthening our digital presence.',
      image: 'https://lh3.googleusercontent.com/d/1bNFqh6QwRGF8fP7quxX-j11FglcuapJw',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Odufuwa Omotoke',
      role: 'SAA & Membership Director',
      isLead: false,
      bio: 'Student entrepreneur and perfume specialist. Upholding order, building connections, and strengthening our Rotaract family.',
      image: 'https://lh3.googleusercontent.com/d/1pJJjNLmXWtcN00M9KVZWSpoUM1fb1VSz',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Justinah Olawuyi',
      role: 'Admin & Welfare Director',
      isLead: false,
      bio: 'Event planner stewarding care, championing well-being, and building a supportive Rotaract family for all members.',
      image: 'https://lh3.googleusercontent.com/d/12M1PmqcMGEtvlwNdXYyXBiCUmlCQPUdN',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Alayande Damilola',
      role: 'Club Advisor',
      isLead: false,
      bio: 'Graphics designer, businessman, and filmmaker. Guiding with wisdom, inspiring with purpose, and empowering the next generation of leaders.',
      image: 'https://lh3.googleusercontent.com/d/1vMg6TVs3TGzTLmOdl_chjwlykbE92DkH',
      imagePos: 'object-[50%_15%]'
    },
    {
      name: 'Rtr. Alamu Micheal',
      role: 'Club Learning Facilitator',
      isLead: false,
      bio: 'Passionate educator and growth advocate. Fostering knowledge, building capacity, and empowering members to become better leaders.',
      image: AlamuImage,
      imagePos: 'object-[50%_20%]'
    },
    {
      name: 'Rtr. Miracle Faith Chiwetalu',
      role: 'Assistant Secretary',
      isLead: false,
      bio: 'Organized in purpose, reliable in service. Supporting administrative excellence and ensuring the seamless running of club operations.',
      image: FaithImage,
      imagePos: 'object-[50%_42%]'
    },
    {
      name: 'Rtr. Aderinto Jumai',
      role: 'Assistant Membership Director',
      isLead: false,
      bio: 'Connecting people, growing membership, and nurturing a welcoming environment for every Rotaractor in our community.',
      image: JumaiImage,
      imagePos: 'object-[50%_42%]'
    },
  ];

  return (
    <section id="board" className="py-24 bg-white dark:bg-dark-bg border-t border-gray-50 dark:border-dark-border relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-rotaract-cranberry/20 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-rotaract-secondary dark:text-rotaract-cranberry mb-3">Leadership</h2>
          <h3 className="text-4xl font-extrabold text-rotaract-cranberry tracking-tight italic">The 2026–2027 Board of Directors</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true, amount: 0.1 }}
              className={`bg-brand-bg/30 dark:bg-dark-surface/50 rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col items-center p-8 text-center border border-gray-100 dark:border-dark-border hover:border-rotaract-cranberry/30 ${m.isLead ? 'md:col-span-2 lg:col-span-3 bg-gradient-to-br from-rotaract-cranberry/5 to-amber-500/5 dark:from-rotaract-cranberry/10 dark:to-amber-500/10 border-amber-500/20' : ''}`}
            >
              <div className="relative mb-6">
                <div className={`absolute inset-0 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 ${m.isLead ? 'bg-gradient-to-br from-amber-400/30 to-rotaract-cranberry/30' : 'bg-rotaract-cranberry/20'}`}></div>
                {m.isLead && <div className="absolute -inset-3 border-2 border-amber-400/20 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>}
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className={`${m.isLead ? 'w-40 h-40' : 'w-32 h-32'} rounded-full object-cover ${m.imagePos} border-4 ${m.isLead ? 'border-amber-400/30' : 'border-white dark:border-dark-bg'} shadow-lg relative z-10 group-hover:border-rotaract-secondary transition-colors`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                {m.isLead && (
                  <div className="absolute -top-2 -right-2 z-20 w-10 h-10 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                    <Crown size={18} className="text-white" />
                  </div>
                )}
              </div>
              <h4 className={`${m.isLead ? 'text-2xl' : 'text-xl'} font-black text-brand-dark dark:text-dark-text-primary mb-1 group-hover:text-rotaract-cranberry transition-colors`}>{m.name}</h4>
              <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-4 px-4 py-1 rounded-full ${m.isLead ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-white' : 'bg-rotaract-cranberry/10 text-rotaract-cranberry'}`}>
                {m.role}
              </p>
              <p className="text-xs text-brand-muted dark:text-dark-text-secondary leading-relaxed italic px-2">
                "{m.bio}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ImpactReport = () => {
  const images = [
    { url: 'https://lh3.googleusercontent.com/d/1wZTZjLEB9ciOWnbTQfq5gyY4RPlrI-T6', caption: 'Beneficiaries with the packages' },
    { url: 'https://lh3.googleusercontent.com/d/1txgEebOsTPfXneK9MCkS8M2dZfSKLoYm', caption: 'Training on proper diaper use' },
    { url: 'https://lh3.googleusercontent.com/d/1gcgc_h57shOraqsRY0ov6k2nDE-Uk4ZL', caption: 'Welcome address by Project Director' },
    { url: 'https://lh3.googleusercontent.com/d/1-CagTBjgAwS1OgqET_vnOJRobtGzijpZ', caption: 'Club members and Volunteers' },
    { url: 'https://lh3.googleusercontent.com/d/1gR37pPQUCql7v9wHlq1CTH4flNjbmOT5', caption: 'Interview Session with Beneficiary' },
    { url: 'https://lh3.googleusercontent.com/d/1MU-MwzJF8lQ3lxoInnl8YAnYeOiPm0fz', caption: 'Photo Splash: Mission Accomplished' },
  ];

  return (
    <section id="impact-report" className="py-24 bg-brand-bg dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-rotaract-secondary/5 dark:bg-rotaract-cranberry/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rotaract-cranberry/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>

      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-rotaract-secondary dark:text-rotaract-cranberry mb-4">Recent Outreach Success</h2>
              <h3 className="text-5xl md:text-6xl font-black text-rotaract-cranberry mb-8 leading-[1.1] tracking-tighter">
                Diaper a Baby <br />
                <span className="text-rotaract-secondary dark:text-dark-text-primary italic underline decoration-rotaract-cranberry/10 underline-offset-8">Outreach 2024</span>
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
                <div className="p-8 bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm rounded-[40px] border border-white dark:border-dark-border shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl font-black text-rotaract-cranberry">60</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 dark:text-dark-text-secondary tracking-widest mt-2 px-1">Beneficiaries</div>
                </div>
                <div className="p-8 bg-white/60 dark:bg-dark-surface/60 backdrop-blur-sm rounded-[40px] border border-white dark:border-dark-border shadow-sm hover:shadow-md transition-all">
                  <div className="text-4xl font-black text-rotaract-cranberry">15</div>
                  <div className="text-[10px] uppercase font-bold text-gray-400 dark:text-dark-text-secondary tracking-widest mt-2 px-1">Volunteers</div>
                </div>
                <div className="p-8 bg-rotaract-cranberry rounded-[40px] shadow-lg md:col-span-1 col-span-2 flex flex-col justify-center">
                  <div className="text-xs font-black text-rotaract-secondary uppercase tracking-[0.2em] mb-1 italic">Venue</div>
                  <div className="text-[10px] text-white/90 leading-tight font-medium">Teslim Folarin Compound, Oja Igbo, Ibadan</div>
                </div>
              </div>

              <div className="space-y-8 text-brand-muted dark:text-dark-text-secondary leading-relaxed">
                <div className="relative pl-8 border-l-2 border-rotaract-secondary/30">
                  <p className="text-lg font-medium text-brand-dark/80 dark:text-dark-text-primary/80 italic">
                    "This project was aimed at supporting nursing mothers by promoting hygiene and providing essential baby care items."
                  </p>
                  <p className="mt-4 text-sm">
                    Under the Maternal and Child Health focus area, we provided essential materials including diapers, soaps, and toiletries to 60 mothers in the Kosodo community.
                  </p>
                </div>
                
                <div className="bg-white/80 dark:bg-dark-surface/80 backdrop-blur-md p-10 rounded-[50px] border border-white dark:border-dark-border shadow-sm transition-colors duration-300">
                  <h4 className="text-sm font-black text-rotaract-cranberry mb-6 uppercase tracking-[0.4em] flex items-center gap-3">
                    <Heart size={14} className="text-rotaract-secondary dark:text-rotaract-cranberry fill-rotaract-secondary dark:fill-rotaract-cranberry" />
                    Key Activities
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {[
                      'Hygiene Management Talk', 
                      'Diaper Distribution', 
                      'Toiletry Essential Kits', 
                      'Effective Childcare Session'
                    ].map((h, i) => (
                      <li key={i} className="flex items-center gap-4 text-xs font-bold text-brand-dark dark:text-dark-text-primary px-4 py-3 bg-gray-50/50 dark:bg-dark-bg/20 rounded-2xl">
                        <CheckCircle2 size={14} className="text-rotaract-secondary dark:text-rotaract-cranberry shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h4 className="text-[10px] font-black text-rotaract-cranberry/50 mb-4 uppercase tracking-[0.6em] text-center lg:text-left">Project Snapshot Gallery</h4>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                {images.map((img, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group relative h-56 md:h-64 rounded-[40px] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all"
                  >
                    <img 
                      src={img.url} 
                      alt={`Rotaract Ibadan Ring Road Project: ${img.caption}`}
                      className="w-full h-full object-cover object-[50%_15%] transition-transform duration-1000 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-rotaract-cranberry/90 via-rotaract-cranberry/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                      <div className="h-1 w-12 bg-rotaract-secondary mb-3 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
                      <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] leading-tight transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{img.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-12 p-12 bg-white rounded-[60px] border border-gray-100 shadow-xl relative group">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-brand-bg rounded-full -mr-16 -mt-16 group-hover:bg-rotaract-secondary/10 transition-colors"></div>
                 <div className="flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-pink-50 rounded-2xl flex items-center justify-center">
                       <Award size={28} className="text-rotaract-cranberry" />
                    </div>
                    <div>
                       <h4 className="text-2xl font-black text-rotaract-cranberry tracking-tight italic">Legacy of Impact</h4>
                       <p className="text-[10px] font-bold text-rotaract-secondary uppercase tracking-widest">Post-Project Reflection</p>
                    </div>
                 </div>
                 <p className="text-sm md:text-base text-brand-muted leading-relaxed font-medium">
                   "Beyond material support, this engagement fostered a strong relationship between the club and the community, equipping Kosodo mothers with knowledge for healthier generations."
                 </p>
                 <div className="mt-10 flex items-center justify-between">
                    <div className="flex flex-col">
                       <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Approved By</span>
                       <span className="text-sm font-bold text-rotaract-cranberry">Rtr. Popoola Samuel</span>
                    </div>
                    <div className="h-12 w-12 rounded-2xl bg-rotaract-secondary flex items-center justify-center shadow-lg transform rotate-6">
                       <p className="text-white font-black text-lg">9126</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
const Projects = () => {
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  const projects = [
    { 
      title: 'Ibadan Hunger Walk', 
      icon: Globe, 
      color: 'border-rotaract-secondary',
      detailed: 'Raising awareness on food insecurity and distributing "Box of Love" relief items to vulnerable families in Molete, Bode, Popoyemoja, and Idi Arere communities.',
      gallery: [
        'https://lh3.googleusercontent.com/d/11YY6Jm2IBcZqdOQDAKlbJHoRTBQlvxZr',
        'https://lh3.googleusercontent.com/d/1TPe-uaKmtNRn0pCDI_GpR-W3jfxgP6pY',
        'https://lh3.googleusercontent.com/d/1AG7pAwb-UgK-N73ID75jooqSaxWYD8MZ',
        'https://lh3.googleusercontent.com/d/1H5wtWEzJCrYAHXirnV9JrUHbB1cmJyit',
        'https://lh3.googleusercontent.com/d/1QRgu6Zrvl_ArgJMYrVNPgAQSWyjcb1oy',
        'https://lh3.googleusercontent.com/d/1dEyeeOyuOoOjb-iIZCeu5rxAYmIow09o',
        'https://lh3.googleusercontent.com/d/1syJRCWXYplL6j-0pehS0BSNo4Almq4Dl',
        'https://lh3.googleusercontent.com/d/1avFGCeZQaWCeEyG2pqJ0ypGNiKnSC802',
        'https://lh3.googleusercontent.com/d/19LFAxBrln5KUu6NQbR5Enrf2Gn9Odubn',
        'https://lh3.googleusercontent.com/d/1Mmm5bXwj94WmIv_VM8b-l9qy9ambepJ3',
        'https://lh3.googleusercontent.com/d/1mQprBtn3ABrhMrNog69PqxrvubHFkGln',
        'https://lh3.googleusercontent.com/d/1vT6Hmz4_D6YCrgOgzbnHuOAxdz-9hueH',
        'https://lh3.googleusercontent.com/d/1bM3sjVWp7SMwyH0Nt5DBz1gm7ExVajnp',
        'https://lh3.googleusercontent.com/d/1fp7GlG7zbUaaLBtMqmckSrOJw0qmVBY_',
        'https://lh3.googleusercontent.com/d/1XN2Jp39AE5EeT4TSw44uOLvkYh8wVDGU'
      ]
    },
      { 
        title: 'Polio Eradication', 
        icon: Activity, 
        color: 'border-rotaract-secondary',
        detailed: 'Sensitizing 200+ traders at Aleshinloye Market on immunization and empowering women with economic support tools during World Polio Day 2025.',
      gallery: [
        'https://lh3.googleusercontent.com/d/14RKp30I8hJaOuYfI8uGKl_CRmHlWWf0I',
        'https://lh3.googleusercontent.com/d/19C06QHm2-8955cgEGQUvll-Viv5p_VCM',
        'https://lh3.googleusercontent.com/d/1GpuDoTL9LPk-_ROgMOh6HOlCuEwWxjnl',
        'https://lh3.googleusercontent.com/d/1HvmW2qTI1q-KEWXHn8dEfiJpTDM5dx-P',
        'https://lh3.googleusercontent.com/d/1KQjFDZTPWijCinsJw-uqa8fPuU3BxbMd',
        'https://lh3.googleusercontent.com/d/1Wpm1JMl5ObnIdHiTyTob9tQRWfvDpeq7',
        'https://lh3.googleusercontent.com/d/1Y9oa3kXB9ZzsNWGo_m-pKLIIoWdjdxSX',
        'https://lh3.googleusercontent.com/d/1ahwVsaqo-Q9hy2F10PVlGNHtwF8zvE24',
        'https://lh3.googleusercontent.com/d/1ii0O_Y4AC5Ue9mVgUcE6fADzec1uXhJb',
        'https://lh3.googleusercontent.com/d/1vMHFhs6zYiEPxspCNRVdpQKjo5iZM6vJ'
      ]
    },
    { 
      title: 'Pad a Girl Child', 
      icon: GraduationCap, 
      color: 'border-rotaract-secondary',
      detailed: 'Promoting menstrual hygiene awareness and health education for secondary school girls to encourage attendance and self-confidence.',
      gallery: [
        'https://lh3.googleusercontent.com/d/1QT3PE1PnAatMEmLLdHOUQ1AI9nwPiva0',
        'https://lh3.googleusercontent.com/d/1B9H_sRaSycxJu3qHdKZVor9r9IoSphlc',
        'https://lh3.googleusercontent.com/d/11ZEpBCPYxpGAkojkfeix3VTo2Ma49XjC',
        'https://lh3.googleusercontent.com/d/1W8r0uQ0kBqMZcJmSTsCEUz2K0Q5ZbzYI',
        'https://lh3.googleusercontent.com/d/12nOGCrpkoKScTZJX8tj7z9k1byCrzsz7',
        'https://lh3.googleusercontent.com/d/11_wosoeTaNNa5chanrvCXtz7kQirAYtH',
        'https://lh3.googleusercontent.com/d/1roizUOw36lfVIWHsZXhaQ13RBiUKw2YN'
      ]
    },
      { 
        title: 'Education Outreach', 
        icon: BookOpen, 
        color: 'border-rotaract-secondary',
        detailed: 'Menstrual health and career education for secondary school girls through our "Pad a Girl Child" initiative, impacting over 150 students.',
      gallery: [
        'https://lh3.googleusercontent.com/d/12NbYW8NLtNp_Is56140YEBllkd3ItqSV',
        'https://lh3.googleusercontent.com/d/1VggVqeYVXTDxhivhbAsChx6qSul36EdL',
        'https://lh3.googleusercontent.com/d/1o2B1CN8PTjw2fi_3t8YlrA0qMEDuajHP',
        'https://lh3.googleusercontent.com/d/1NlTcOHNXSIilERCjrvNOlRFoQ1m3fO3f',
        'https://lh3.googleusercontent.com/d/17DxFVmCIhd_7ukLHGXFIKRs5mKNZ1K8t',
        'https://lh3.googleusercontent.com/d/14mqJ8Jk5UhL5RcA6NBSaF4nKXblC8NQl',
        'https://lh3.googleusercontent.com/d/1TaAf5fAgat2-fjklamthtU17BvxiVJyo',
        'https://lh3.googleusercontent.com/d/1TCyqU8upzIuEmCuylh83HGCgmW-VMI_k',
        'https://lh3.googleusercontent.com/d/1rTz4MXmqrSiWM96rHcXG0WSez0WO6BoN',
        'https://lh3.googleusercontent.com/d/10WYSPGIAQbBM6y2fUjBSlDLLOQC_DABi'
      ]
    },
    { 
      title: 'Peace Advocacy', 
      icon: Heart, 
      color: 'border-rotaract-secondary',
      detailed: 'Community advocacy walk from Dugbe to Mokola promoting peace, unity, and conflict prevention through constructive dialogue and awareness.',
      gallery: [
        'https://lh3.googleusercontent.com/d/1-acaJy0AFFRSvfVTzSRRqQedm4QtyoOV',
        'https://lh3.googleusercontent.com/d/17rQG63P3vZEe1BXy1bQuenDlZTBtHLSK',
        'https://lh3.googleusercontent.com/d/1bA4w8vDEbpaYQVrMd1EfMyaAdssS5hYs',
        'https://lh3.googleusercontent.com/d/1f6j0GWMOWCLgD-XVfXR22W2_Z0AjXJVH',
        'https://lh3.googleusercontent.com/d/1T0zjyWGI7wd9ixMr6BP8EepYot3pVJ7S'
      ]
    },
      { 
        title: 'Vocational Support', 
        icon: Zap, 
        color: 'border-rotaract-secondary',
        detailed: 'We organize quarterly skills-acquisition workshops for local artisans, teaching financial literacy and digital marketing.',
      gallery: [
        'https://lh3.googleusercontent.com/d/1iSw2Xih87ejFc7OB39Wke9NT1ryCh1ZD',
        'https://lh3.googleusercontent.com/d/1Jui0otzszP7J36JAMAJHf-0lNJoSiRRD',
        'https://lh3.googleusercontent.com/d/1rKHUgLcFF372vmn6m8E04i5a5mA6ApIj',
        'https://lh3.googleusercontent.com/d/1d217F9LLaKYxvkxNxsSlnDUas0PyLzk1',
        'https://lh3.googleusercontent.com/d/1PVtHGRuYzb2rBp0PaeFU9q4BM6OhBdVD',
        'https://lh3.googleusercontent.com/d/1QWckRxWy5EnGMl7lyALi2WpoUpJOWBCA',
        'https://lh3.googleusercontent.com/d/1j0pKo1l5EAEnvJAOB0o4Eyc9tbIjCeJ2'
      ]
    },
  ];

  const openGallery = (imgs: string[]) => {
    setActiveGallery(imgs);
    setCurrentImgIndex(0);
  };

  const nextImg = () => {
    if (!activeGallery) return;
    setCurrentImgIndex((prev) => (prev + 1) % activeGallery.length);
  };

  const prevImg = () => {
    if (!activeGallery) return;
    setCurrentImgIndex((prev) => (prev - 1 + activeGallery.length) % activeGallery.length);
  };

  return (
    <section id="projects" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="absolute bottom-0 right-0 w-full h-1/2 bg-rotaract-cranberry/[0.02] dark:bg-white/[0.01] -skew-y-2 translate-y-12"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-rotaract-cranberry/40 dark:text-rotaract-cranberry/60 mb-10 text-center md:text-left">Impact in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              onClick={() => p.gallery && openGallery(p.gallery)}
              className={`bg-brand-bg/40 dark:bg-dark-surface/40 p-8 md:p-10 rounded-[40px] border-t-8 ${p.color.replace('border-', 'border-t-')} shadow-sm group hover:shadow-2xl transition-all flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 text-center md:text-left ${p.gallery ? 'cursor-pointer' : ''} border border-gray-100 dark:border-dark-border hover:bg-white dark:hover:bg-dark-surface`}
            >
              <div className="w-16 h-16 bg-white dark:bg-dark-bg rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-rotaract-cranberry group-hover:text-white transition-all duration-500">
                <p.icon className="text-rotaract-cranberry group-hover:text-white transition-colors" size={32} />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                  <h3 className="text-2xl font-black text-rotaract-cranberry tracking-tight italic group-hover:text-brand-dark dark:group-hover:text-dark-text-primary transition-colors">{p.title}</h3>
                  {p.gallery && <div className="text-[8px] font-black bg-rotaract-secondary text-white px-3 py-1 rounded-full uppercase tracking-widest not-italic shadow-sm">View Work</div>}
                </div>
                <p className="text-sm lg:text-base text-brand-muted dark:text-dark-text-secondary leading-relaxed font-medium">
                  {p.detailed}
                </p>
                {p.gallery && <p className="mt-4 text-[10px] font-black text-rotaract-secondary dark:text-rotaract-cranberry uppercase tracking-widest group-hover:underline">Click to view project photos →</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeGallery && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-rotaract-cranberry/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
          >
            <button 
              onClick={() => setActiveGallery(null)}
              className="absolute top-8 right-8 text-white hover:text-rotaract-secondary transition-colors p-2"
            >
              <X size={40} />
            </button>
            
            <div className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video flex items-center justify-center">
              <button 
                onClick={(e) => { e.stopPropagation(); prevImg(); }}
                className="absolute left-0 md:-left-20 z-10 text-white hover:text-rotaract-secondary transition-all transform hover:scale-110 p-4"
              >
                <ChevronLeft size={48} />
              </button>
              
              <motion.div 
                key={currentImgIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="w-full h-full relative rounded-[40px] overflow-hidden shadow-2xl border-4 border-white/10"
              >
                <img 
                  src={activeGallery[currentImgIndex]} 
                  alt="Rotaract Club of Ibadan Ring Road community project gallery" 
                  className="w-full h-full object-cover object-[50%_15%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
                  {activeGallery.map((_, idx) => (
                    <div 
                      key={idx} 
                      className={`h-1.5 transition-all duration-300 rounded-full ${idx === currentImgIndex ? 'w-8 bg-rotaract-secondary' : 'w-2 bg-white/30'}`}
                    ></div>
                  ))}
                </div>
              </motion.div>

              <button 
                onClick={(e) => { e.stopPropagation(); nextImg(); }}
                className="absolute right-0 md:-right-20 z-10 text-white hover:text-rotaract-secondary transition-all transform hover:scale-110 p-4"
              >
                <ChevronRight size={48} />
              </button>

              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-white/50 text-xs font-black uppercase tracking-[0.4em]">
                {currentImgIndex + 1} / {activeGallery.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const ClubGallery = () => {
  const galleryImages = [
    'https://lh3.googleusercontent.com/d/1Lc4V7lBBCTbOWnGDqsAMeWUXESpYsEag',
    'https://lh3.googleusercontent.com/d/1-Lx4wnWXwre3Lz1yKq5AvTuk1NUrSo5k',
    'https://lh3.googleusercontent.com/d/1G133nAnn-RZZ2qmh9d6TLBzUjlkgkMAI',
    'https://lh3.googleusercontent.com/d/1NhnELEIHI6VEIV6lXq_rUSMFbeaUkFJi',
    'https://lh3.googleusercontent.com/d/15K78Gb-AYCSPdt6Z5bm6LGYmweUC97lO',
    'https://lh3.googleusercontent.com/d/1PVtHGRuYzb2rBp0PaeFU9q4BM6OhBdVD',
    'https://lh3.googleusercontent.com/d/1Jui0otzszP7J36JAMAJHf-0lNJoSiRRD',
    'https://lh3.googleusercontent.com/d/1QWckRxWy5EnGMl7lyALi2WpoUpJOWBCA',
    'https://lh3.googleusercontent.com/d/1j0pKo1l5EAEnvJAOB0o4Eyc9tbIjCeJ2',
    'https://lh3.googleusercontent.com/d/1rKHUgLcFF372vmn6m8E04i5a5mA6ApIj',
    'https://lh3.googleusercontent.com/d/1d217F9LLaKYxvkxNxsSlnDUas0PyLzk1',
  ];

  return (
    <section id="gallery" className="py-24 bg-white dark:bg-dark-bg overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-rotaract-secondary dark:text-rotaract-cranberry mb-4">Our Fellowship</h2>
            <h3 className="text-4xl md:text-5xl font-black text-rotaract-cranberry leading-tight tracking-tighter transition-colors">
              Moments of Service <br />
              <span className="text-rotaract-secondary dark:text-dark-text-primary italic">Captured in Time</span>
            </h3>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center gap-4 text-[10px] font-black text-gray-400 dark:text-dark-text-secondary uppercase tracking-widest transition-colors">
              <span className="w-12 h-px bg-gray-200 dark:bg-dark-border"></span>
              {galleryImages.length} Moments Shared
            </div>
          </div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 bg-gray-50 dark:bg-dark-surface border border-transparent dark:border-dark-border"
            >
              <img 
                src={src} 
                alt={`Rotaract Ibadan Ring Road fellowship and community service moment ${index + 1}`}
                className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-rotaract-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Blog = ({ setView }: { setView: (v: 'home' | 'blog') => void }) => {
  const [activePostId, setActivePostId] = useState(BLOG_POSTS[0].id);
  const activePost = BLOG_POSTS.find(p => p.id === activePostId) || BLOG_POSTS[0];

  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Filter events dynamically
  const upcomingEvents = EVENTS.filter(e => !isPastEvent(e.month, e.day));

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const { db, collection, addDoc, serverTimestamp, handleFirestoreError, OperationType } = await import('./firebase');
      const path = 'newsletter_subscribers';
      try {
        await addDoc(collection(db, path), {
          email: email,
          subscribedAt: serverTimestamp()
        });
        setSubscribed(true);
      } catch (err) {
        handleFirestoreError(err, OperationType.WRITE, path);
      }
    } catch (err) {
      console.error('Failed to subscribe:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg/10 dark:bg-dark-bg/10 relative transition-colors duration-300">
      <div className="absolute top-0 right-0 w-full h-[500px] bg-rotaract-cranberry/[0.03] dark:bg-white/[0.01] -skew-y-3 origin-top-right"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Blog Header */}
        <div className="mb-20 text-center lg:text-left">
          <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-rotaract-secondary dark:text-rotaract-cranberry mb-4">Official Blog</h2>
          <h3 className="text-4xl md:text-6xl font-black text-rotaract-cranberry tracking-tighter italic leading-tight">
            Fellowship Tales & <br />
            <span className="text-rotaract-secondary dark:text-dark-text-primary">Future Impact</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Main Content: Post Detail */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-4 mb-8">
              <span className="h-px w-8 bg-rotaract-secondary"></span>
              <h4 className="text-xs font-black uppercase tracking-widest text-rotaract-secondary">{activePost.category}</h4>
            </div>

            <motion.div
               key={activePost.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               className="mb-12"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-black bg-rotaract-cranberry text-white px-3 py-1 rounded-full uppercase tracking-[0.2em]">{activePost.category}</span>
                <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{activePost.date}</span>
              </div>
              <h1 className="text-3xl md:text-5xl font-black text-brand-dark dark:text-dark-text-primary leading-tight mb-8 tracking-tighter italic transition-colors duration-300">
                {activePost.title}
              </h1>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-12 rounded-[30px] md:rounded-[40px] overflow-hidden shadow-2xl border-4 border-white dark:border-dark-surface transition-colors duration-300"
              >
                <img 
                  src={activePost.image} 
                  alt={activePost.title} 
                  className="w-full h-[250px] sm:h-[350px] md:h-[400px] object-cover object-top"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </motion.div>
              
              <div className="flex items-center gap-4 mb-12 p-6 bg-brand-bg dark:bg-dark-surface rounded-3xl border border-gray-100 dark:border-dark-border transition-colors duration-300">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-rotaract-cranberry/20 flex items-center justify-center shrink-0">
                   <img 
                     src={activePost.author.image} 
                     className="w-full h-full object-cover" 
                     alt={activePost.author.name}
                     referrerPolicy="no-referrer"
                     loading="lazy"
                   />
                </div>
                <div>
                  <div className="text-[10px] font-black text-rotaract-cranberry uppercase tracking-widest">{activePost.author.role}</div>
                  <div className="text-xl font-black text-brand-dark dark:text-dark-text-primary">{activePost.author.name}</div>
                </div>
              </div>
            </motion.div>

            <article className="prose prose-lg dark:prose-invert max-w-none text-brand-muted dark:text-dark-text-secondary font-medium leading-relaxed mb-16 transition-colors duration-300">
              {activePost.quote && (
                <p className="text-xl text-brand-dark dark:text-dark-text-primary font-bold italic mb-8 border-l-4 border-rotaract-secondary dark:border-rotaract-cranberry pl-6 transition-colors duration-300">
                  "{activePost.quote}"
                </p>
              )}
              
              {activePost.content.map((paragraph, i) => (
                <p key={i} className="mb-6">{paragraph}</p>
              ))}
              
              {activePost.gallery && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-12">
                  {activePost.gallery.map((url, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ scale: 1.02 }}
                      className="aspect-square rounded-2xl overflow-hidden shadow-md border-2 border-white dark:border-dark-surface transition-colors duration-300"
                    >
                      <img src={url} alt={`Gallery image ${i+1}`} className="w-full h-full object-cover object-top" referrerPolicy="no-referrer" loading="lazy" />
                    </motion.div>
                  ))}
                </div>
              )}

              {activePost.instagramUrl && (
                <div className="bg-rotaract-cranberry text-white p-8 md:p-12 rounded-[30px] md:rounded-[40px] shadow-2xl relative overflow-hidden my-12">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <h3 className="text-2xl font-black mb-4 italic">Catch the Highlights</h3>
                  <p className="text-white/80 text-sm mb-6 max-w-md">We shared the key takeaways and energetic moments of this meeting on our Instagram page. Don't miss out on the video reels!</p>
                  <a 
                    href={activePost.instagramUrl}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-white text-rotaract-cranberry px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-black text-xs md:text-sm uppercase tracking-widest hover:scale-105 transition-all shadow-lg text-center"
                  >
                    <Instagram size={18} /> View Post on Instagram
                  </a>
                </div>
              )}
            </article>

            {/* Newsletter Section */}
            <section className="bg-rotaract-secondary p-8 md:p-12 rounded-[30px] md:rounded-[50px] text-white text-center shadow-xl">
              <h2 className="text-2xl font-black mb-4 italic text-white">Stay in the Fellowship</h2>
              <p className="text-white/70 text-sm mb-8 max-w-sm mx-auto font-medium">Subscribe to our monthly newsletter to get project updates, fellowship invitations, and leadership tips directly in your inbox.</p>
              
              {subscribed ? (
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="bg-white/20 p-6 rounded-2xl border border-white/30"
                >
                   <CheckCircle2 className="mx-auto mb-2 text-white" />
                   <p className="text-lg font-black italic text-white">Successfully Subscribed!</p>
                </motion.div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-white/10 border border-white/20 rounded-2xl px-6 py-4 placeholder:text-white/40 focus:outline-none focus:bg-white/20 transition-all text-white font-bold text-sm md:text-base"
                  />
                  <button 
                    disabled={submitting}
                    className="bg-rotaract-cranberry px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-rotaract-cranberry transition-all shadow-lg disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
                  >
                    {submitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              )}
            </section>
          </div>

          {/* Sidebar: Upcoming Events & More Posts */}
          <aside className="lg:border-l lg:border-gray-100 dark:lg:border-dark-border lg:pl-12 transition-colors duration-300">
            <div className="sticky top-40 space-y-12">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px w-8 bg-rotaract-cranberry"></span>
                  <h4 className="text-xs font-black uppercase tracking-widest text-rotaract-cranberry">Other Stories</h4>
                </div>
                <div className="space-y-4">
                  {BLOG_POSTS.filter(p => p.id !== activePost.id).map((post) => (
                    <button 
                      key={post.id}
                      onClick={() => {
                        setActivePostId(post.id);
                        window.scrollTo(0, 0);
                      }}
                      className="w-full text-left p-4 rounded-2xl bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:border-rotaract-secondary transition-all group flex gap-4 items-center shadow-sm"
                    >
                      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0">
                        <img src={post.image} className="w-full h-full object-cover" alt="" referrerPolicy="no-referrer" />
                      </div>
                      <div>
                        <h5 className="text-[10px] font-black text-brand-dark dark:text-dark-text-primary group-hover:text-rotaract-cranberry transition-colors line-clamp-2 italic">{post.title}</h5>
                        <p className="text-[8px] text-gray-400 dark:text-dark-text-secondary font-bold uppercase tracking-widest mt-1">{post.date}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className="h-px w-8 bg-rotaract-cranberry"></span>
                  <h4 className="text-xs font-black uppercase tracking-widest text-rotaract-cranberry">Upcoming Events</h4>
                </div>
                <div className="space-y-6">
                  {upcomingEvents.map((e, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="group"
                    >
                      <div className="flex items-start gap-4 p-6 rounded-3xl bg-brand-bg dark:bg-dark-bg border border-transparent hover:border-rotaract-secondary hover:bg-white dark:hover:bg-dark-surface hover:shadow-xl transition-all cursor-pointer">
                        <div className="flex-shrink-0 w-12 h-12 bg-white dark:bg-dark-bg rounded-xl flex flex-col items-center justify-center text-rotaract-cranberry group-hover:bg-rotaract-cranberry group-hover:text-white transition-all shadow-sm">
                          <span className="text-[8px] uppercase font-bold tracking-tighter">{e.month}</span>
                          <span className="text-xl font-black leading-none">{e.day}</span>
                        </div>
                        <div>
                          <h5 className="text-sm font-black text-brand-dark dark:text-dark-text-primary group-hover:text-rotaract-cranberry transition-colors line-clamp-2 italic mb-2">{e.title}</h5>
                          <div className="flex flex-col gap-1">
                            <div className="text-[10px] text-brand-muted dark:text-dark-text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
                              <Clock size={10} className="text-rotaract-secondary dark:text-rotaract-cranberry" /> {e.time}
                            </div>
                            <div className="text-[10px] text-brand-muted dark:text-dark-text-secondary font-bold uppercase tracking-widest flex items-center gap-1.5">
                              <MapPin size={10} className="text-rotaract-secondary dark:text-rotaract-cranberry" /> {e.location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="p-8 bg-rotaract-cranberry/5 dark:bg-rotaract-cranberry/20 rounded-3xl border border-rotaract-cranberry/10 transition-colors duration-300">
                <h4 className="text-xs font-black text-rotaract-cranberry uppercase tracking-widest mb-4 italic">Next General Meeting</h4>
                <p className="text-sm text-brand-muted dark:text-dark-text-secondary mb-6 leading-relaxed">
                  Join us for our next planning session. Your ideas drive our impact.
                </p>
                <a 
                  href="https://wa.me/2347040430580"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-rotaract-cranberry text-white py-4 rounded-2xl font-bold text-xs uppercase tracking-widest shadow-lg hover:scale-105 transition-all text-center block"
                >
                  Contact Secretary
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

const Events = ({ setView }: { setView: (v: 'home' | 'blog') => void }) => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const upcomingEvents = EVENTS.filter(e => !isPastEvent(e.month, e.day));
  const pastEvents = EVENTS.filter(e => isPastEvent(e.month, e.day));
  
  return (
    <section id="events" className="py-24 bg-brand-bg dark:bg-dark-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-baseline lg:items-start gap-12 lg:gap-20">
          <div className="w-full lg:w-1/3 text-center lg:text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-rotaract-secondary dark:text-rotaract-cranberry mb-4">The Calendar</h2>
            <h3 className="text-4xl font-extrabold text-rotaract-cranberry mb-6 tracking-tight italic">Join the Fellowship</h3>
            <p className="text-sm text-brand-muted dark:text-dark-text-secondary leading-relaxed font-medium max-w-sm mx-auto lg:mx-0 transition-colors">We meet regularly and serve passionately. Click an event to learn more about how you can participate.</p>
            <button 
              onClick={() => setView('blog')}
              className="mt-8 text-rotaract-cranberry font-black uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all mx-auto lg:mx-0"
            >
              Read Meeting Reports <ChevronRight size={14} />
            </button>
          </div>
          
          <div className="w-full lg:w-2/3 space-y-12">
            {/* Upcoming Section */}
            {upcomingEvents.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-rotaract-cranberry">Upcoming Events</h4>
                  <div className="h-px flex-1 bg-rotaract-cranberry/10 dark:bg-rotaract-cranberry/20"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {upcomingEvents.map((e, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      onClick={() => setSelectedEvent(e)}
                      className="flex items-center gap-6 p-4 rounded-[28px] bg-white dark:bg-dark-surface border border-gray-100 dark:border-dark-border hover:shadow-xl transition-all group cursor-pointer"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-pink-50 dark:bg-rotaract-cranberry/10 rounded-2xl flex flex-col items-center justify-center text-rotaract-cranberry group-hover:bg-rotaract-cranberry group-hover:text-white transition-all transform group-hover:scale-105 shadow-sm">
                        <span className="text-[10px] uppercase font-bold tracking-tighter">{e.month}</span>
                        <span className="text-2xl font-black leading-none">{e.day}</span>
                      </div>
                      <div>
                        <div className="text-base font-black text-brand-dark dark:text-dark-text-primary group-hover:text-rotaract-secondary dark:group-hover:text-rotaract-cranberry transition-colors italic transition-colors">{e.title}</div>
                        <div className="text-[10px] text-brand-muted dark:text-dark-text-secondary font-bold uppercase tracking-widest mt-1">Lead: {e.lead}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Past Section */}
            {pastEvents.length > 0 && (
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-300 dark:text-gray-600">Recently Passed</h4>
                  <div className="h-px flex-1 bg-gray-100 dark:bg-dark-border"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pastEvents.map((e, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      onClick={() => setSelectedEvent(e)}
                      className="flex items-center gap-6 p-4 rounded-[28px] bg-white/50 dark:bg-dark-surface/50 border border-transparent dark:border-dark-border hover:bg-white dark:hover:bg-dark-surface hover:shadow-lg transition-all group cursor-pointer grayscale opacity-70 hover:grayscale-0 hover:opacity-100"
                    >
                      <div className="flex-shrink-0 w-16 h-16 bg-gray-100 dark:bg-dark-bg rounded-2xl flex flex-col items-center justify-center text-gray-400 dark:text-gray-600 group-hover:bg-rotaract-cranberry group-hover:text-white transition-all">
                        <span className="text-[10px] uppercase font-bold tracking-tighter">{e.month}</span>
                        <span className="text-2xl font-black leading-none">{e.day}</span>
                      </div>
                      <div>
                        <div className="text-base font-black text-gray-400 dark:text-gray-500 group-hover:text-brand-dark dark:group-hover:text-dark-text-primary transition-colors italic line-through decoration-rotaract-secondary/20">{e.title}</div>
                        <div className="text-[10px] text-gray-300 dark:text-gray-600 font-bold uppercase tracking-widest mt-1 italic">Event Concluded</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)} event={selectedEvent} />
    </section>
  );
};

const JoinUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:racibadan.ringroad@gmail.com?subject=Join Us Inquiry from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
  };

  return (
    <section id="join" className="py-24 bg-white dark:bg-dark-bg relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 right-0 w-96 h-96 bg-rotaract-secondary/5 dark:bg-rotaract-cranberry/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rotaract-cranberry/5 blur-[120px] rounded-full -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-[#d91e5c] rounded-[60px] p-8 md:p-20 text-white shadow-2xl relative overflow-hidden transition-colors duration-300">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-[#000000] mb-6 transition-colors">Be the Change</h2>
              <h3 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight italic">
                Every Hand Joined <br />
                <span className="text-[#000000]">Strengthens Ibadan.</span>
              </h3>
              <p className="text-lg text-[#ffffff] mb-10 leading-relaxed font-light transition-colors">
                Join our fellowship of young leaders dedicated to service, integrity, and sustainable impact. Your presence makes our collective voice louder.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rotaract-secondary dark:text-rotaract-cranberry">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#000000]">Email Us</div>
                    <div className="text-sm font-bold">racibadan.ringroad@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-rotaract-secondary dark:text-rotaract-cranberry">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase tracking-widest text-[#000000]">Call / WhatsApp</div>
                    <div className="text-sm font-bold">+234 703 360 4513</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-dark-bg rounded-[40px] p-8 md:p-12 text-brand-dark dark:text-dark-text-primary shadow-inner transition-colors duration-300">
              {submitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-50 dark:bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h4 className="text-2xl font-black mb-2 italic">Ready to Serve!</h4>
                  <p className="text-brand-muted dark:text-dark-text-secondary text-sm px-4">Your application has been initiated. If your email client didn't open, please email us directly.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-rotaract-cranberry font-black uppercase tracking-[0.2em] text-xs hover:underline"
                  >
                    Send Another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                      <input 
                        type="text" 
                        required
                        className="w-full bg-brand-bg dark:bg-dark-surface border border-gray-100 dark:border-dark-border rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-rotaract-secondary dark:focus:border-rotaract-cranberry transition-colors"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                      <input 
                        type="email" 
                        required
                        className="w-full bg-brand-bg dark:bg-dark-surface border border-gray-100 dark:border-dark-border rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-rotaract-secondary dark:focus:border-rotaract-cranberry transition-colors"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Phone Number</label>
                    <input 
                      type="tel" 
                      required
                      className="w-full bg-brand-bg dark:bg-dark-surface border border-gray-100 dark:border-dark-border rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-rotaract-secondary dark:focus:border-rotaract-cranberry transition-colors"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Message / Why Join?</label>
                    <textarea 
                      rows={4}
                      className="w-full bg-brand-bg dark:bg-dark-surface border border-gray-100 dark:border-dark-border rounded-2xl px-6 py-4 text-sm font-bold focus:outline-none focus:border-rotaract-secondary dark:focus:border-rotaract-cranberry resize-none transition-colors"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                    ></textarea>
                  </div>
                  <button className="w-full bg-rotaract-cranberry text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl hover:scale-[1.02] transition-all mt-4">
                    Send Membership Inquiry
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const InstagramFeed = () => {
  return null;
};

const Footer = ({ setView }: { setView: (v: 'home' | 'blog') => void }) => {
  return (
    <footer className="bg-[#ae0039] py-20 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rotaract-cranberry/40 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-12 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left relative">
            <button onClick={() => setView('home')} className="absolute -left-6 top-0 bottom-0 w-1 bg-rotaract-secondary dark:bg-rotaract-cranberry hidden md:block rounded-full opacity-50 cursor-pointer"></button>
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter leading-tight mb-2 italic">
              Rotaract Club Of <br />
              <span className="text-[#000000] italic">Ibadan Ring Road</span>
            </h3>
            <p className="text-[10px] font-black text-white uppercase tracking-[0.6em] flex items-center justify-center md:justify-start gap-2">
              <span className="w-8 h-px bg-gray-600 dark:bg-dark-border hidden md:block"></span>
              Rotary International
            </p>
            <p className="text-[10px] font-black text-gray-300 dark:text-dark-text-secondary uppercase tracking-[0.4em] flex items-center justify-center md:justify-start gap-2 mt-4">
              <MapPin size={10} className="text-rotaract-secondary dark:text-rotaract-cranberry" />
              Meeting Venue: Panthers Hub, Familusi Avenue, Iyaganku, Ibadan.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 text-[10px] font-black uppercase tracking-widest text-white">
            <button onClick={() => setView('home')} className="hover:text-rotaract-secondary dark:hover:text-rotaract-cranberry transition-colors text-white">Home</button>
            <button onClick={() => setView('blog')} className="hover:text-rotaract-secondary dark:hover:text-rotaract-cranberry transition-colors text-white">Blog</button>
            <a href="https://wa.me/2347033604513" target="_blank" rel="noopener noreferrer" className="hover:text-rotaract-secondary dark:hover:text-rotaract-cranberry transition-colors text-white">Join Us</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=100094041052461" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-rotaract-secondary hover:text-white transition-all shadow-sm">
              <Facebook size={20} />
            </a>
            <a href="https://twitter.com/racib_ringroad" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-rotaract-secondary hover:text-white transition-all shadow-sm">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/racib.ringroad/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-rotaract-secondary hover:text-white transition-all shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="mailto:racibadan.ringroad@gmail.com" className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-white hover:bg-rotaract-secondary hover:text-white transition-all shadow-sm">
              <Mail size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-white font-bold uppercase tracking-[0.2em] border-t border-white/5 dark:border-dark-border pt-12">
          <div>© 2026 Rotaract Club Of Ibadan Ring Road. District 9126</div>
          <div className="flex items-center gap-2 text-white font-bold">
            <span className="w-1.5 h-1.5 bg-rotaract-secondary dark:bg-rotaract-cranberry rounded-full"></span>
            Developed by Code Dynasty
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const [view, setView] = useState<'home' | 'blog'>('home');
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('darkMode') === 'true' || 
             (!('darkMode' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [darkMode]);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  return (
    <div className="font-sans text-brand-dark dark:text-dark-text-primary bg-white dark:bg-dark-bg subpixel-antialiased transition-colors duration-300">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-rotaract-secondary z-[100] origin-left shadow-[0_0_15px_#1E293B]"
        style={{ scaleX }}
      />
      
      <Navbar 
        setView={setView} 
        currentView={view} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      
      <main>
        {view === 'home' ? (
          <>
            <Hero setView={setView} />
            <Impact />
            <PresidentialUnveiling />
            <YearTheme />
            <About />
            <Board />
            <ImpactReport />
            <Projects />
            <ClubGallery />
            <Events setView={setView} />
            <JoinUs />
          </>
        ) : (
          <Blog setView={setView} />
        )}
      </main>

      <Footer setView={setView} />
    </div>
  );
}




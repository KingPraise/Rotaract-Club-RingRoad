import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { 
  Users, 
  CheckCircle2, 
  Heart, 
  Calendar, 
  ExternalLink, 
  Menu, 
  X, 
  ChevronRight, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  Twitter, 
  MessageSquare,
  Award,
  Zap,
  Globe,
  Briefcase,
  BookOpen,
  Leaf,
  Stethoscope,
  Info,
  Clock,
  User
} from 'lucide-react';

// --- Types ---

interface Event {
  month: string;
  day: string;
  title: string;
  lead: string;
  time: string;
  location: string;
  description: string;
}

// --- Components ---

// --- Constants ---

const ROTARY_LOGO_URL = "https://rotary-ribi.org/upimages/PageMainPics/4_Wheel2013_Transp_1200.png";

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
          className="relative bg-white w-full max-w-lg rounded-[32px] overflow-hidden shadow-2xl z-10"
        >
          <div className="bg-rotary-blue p-8 text-white relative">
            <button onClick={onClose} className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors">
              <X size={24} />
            </button>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-rotaract-gold text-white px-4 py-2 rounded-xl font-black text-xl">
                {event.day} {event.month}
              </div>
              <span className="text-white/60 font-bold uppercase tracking-widest text-xs">Upcoming Event</span>
            </div>
            <h3 className="text-3xl font-black leading-tight italic">{event.title}</h3>
          </div>
          
          <div className="p-8 space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-rotaract-gold uppercase tracking-widest flex items-center gap-1.5">
                  <Clock size={12} /> Time
                </div>
                <div className="text-sm font-bold text-brand-dark">{event.time}</div>
              </div>
              <div className="space-y-1">
                <div className="text-[10px] font-bold text-rotaract-gold uppercase tracking-widest flex items-center gap-1.5">
                  <MapPin size={12} /> Venue
                </div>
                <div className="text-sm font-bold text-brand-dark">{event.location}</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] font-bold text-rotaract-gold uppercase tracking-widest flex items-center gap-1.5">
                <Info size={12} /> About this event
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                {event.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-rotary-blue">
                  <User size={20} />
                </div>
                <div>
                  <div className="text-[10px] font-bold text-brand-muted uppercase tracking-widest leading-none mb-1">Coordinated By</div>
                  <div className="text-xs font-black text-brand-dark">{event.lead}</div>
                </div>
              </div>
              <button className="bg-rotary-blue text-white px-6 py-2.5 rounded-full font-bold text-sm shadow-md hover:bg-opacity-90 transition-all">
                RSVP Now
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Board', href: '#board' },
    { name: 'Projects', href: '#projects' },
    { name: 'Events', href: '#events' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm py-4 h-20 flex items-center border-b border-gray-100' : 'bg-transparent py-6 h-24 flex items-center'}`}>
      <div className="max-w-7xl mx-auto px-10 w-full flex justify-between items-center">
        <a href="#home" className={`text-2xl font-extrabold tracking-tight ${scrolled ? 'text-rotary-blue' : 'text-white'}`}>
          Rotaract <span className="text-rotaract-gold">Ring Road</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`transition-colors hover:text-rotaract-gold ${scrolled ? 'text-brand-muted hover:text-rotary-blue' : 'text-white/80 hover:text-white'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#donate" className="bg-rotaract-gold text-white px-6 py-2.5 rounded-full font-bold shadow-md hover:scale-105 transition-all">
            Donate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} className={scrolled ? 'text-brand-dark' : 'text-white'} /> : <Menu size={24} className={scrolled ? 'text-brand-dark' : 'text-white'} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white shadow-2xl py-10 flex flex-col items-center gap-8 md:hidden border-t border-gray-50"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-brand-dark font-bold text-lg"
              >
                {link.name}
              </a>
            ))}
            <a href="#donate" onClick={() => setIsOpen(false)} className="bg-rotaract-gold text-white px-10 py-3 rounded-full font-bold text-lg shadow-lg">
              Donate
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[700px] md:h-[80vh] bg-rotary-blue flex items-center overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
      
      <div className="max-w-7xl mx-auto px-12 grid md:grid-cols-2 gap-10 items-center z-10 py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md"
        >
          <span className="inline-block bg-rotaract-gold text-rotary-blue text-[10px] font-bold tracking-widest px-3 py-1 rounded mb-6 uppercase">
            Service Above Self · Ibadan, Nigeria
          </span>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-[1.1] mb-6 tracking-tight text-white italic">
            Young Leaders. <br/>Real Service. <br/>Lasting Impact.
          </h1>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed font-light">
            Rotaract Club of Ring Road Ibadan empowers young professionals to take action in their communities and lead meaningful change.
          </p>
          <div className="flex gap-4">
            <a href="#about" className="bg-white text-rotary-blue px-8 py-3 rounded-lg font-bold flex items-center shadow-lg hover:bg-gray-50 transition-all">
              Learn More <span className="ml-2">→</span>
            </a>
            <a href="#projects" className="border-2 border-white/30 text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10 transition-all">
              Our Projects
            </a>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
          style={{ perspective: "1200px" }}
        >
          <motion.div 
            className="relative w-72 h-72 md:w-[450px] md:h-[450px]"
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
            {/* Soft Glow Background */}
            <div className="absolute inset-0 bg-rotaract-gold/20 rounded-full blur-[100px] animate-pulse"></div>
            
            {/* The 3D Wheel (Layered for Depth) */}
            <div className="absolute inset-0 flex items-center justify-center" style={{ transform: "translateZ(20px)" }}>
              <img 
                src={ROTARY_LOGO_URL}
                alt="3D Rotary Wheel"
                className="w-full h-full object-contain filter drop-shadow-[0_0_50px_rgba(247,168,27,0.6)]"
                style={{ 
                  filter: 'contrast(1.1) brightness(1.1)',
                }}
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Orbital Rings */}
            <div className="absolute inset-0 opacity-20" style={{ transform: "rotateX(75deg) translateZ(-50px)" }}>
              <div className="w-full h-full border-[1px] border-white rounded-full"></div>
            </div>
            <div className="absolute inset-0 opacity-10" style={{ transform: "rotateY(75deg) translateZ(50px)" }}>
              <div className="w-full h-full border-[1px] border-white rounded-full"></div>
            </div>

            {/* Floating Service Particles */}
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 bg-white rounded-full"
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.5
                }}
                style={{
                  top: `${20 + i * 15}%`,
                  left: `${10 + i * 20}%`,
                  boxShadow: "0 0 15px white",
                  transform: `translateZ(${30 + i * 20}px)`
                }}
              />
            ))}
          </motion.div>
          
          {/* Static Center Badge Overlay (Optional: Fixed in 2D space relative to parent) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-2xl z-20 pointer-events-none">
            <div className="text-rotaract-gold font-black text-[10px] md:text-xs tracking-[0.3em] uppercase">Service</div>
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
    { value: 5, label: 'Years', suffix: '+' },
  ];

  const Counter = ({ value, suffix }: { value: number, suffix: string }) => {
    const [count, setCount] = useState(0);
    const nodeRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const end = value;
          const duration = 1500;
          const increment = end / (duration / 16);
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      }, { threshold: 0.5 });

      if (nodeRef.current) observer.observe(nodeRef.current);
      return () => observer.disconnect();
    }, [value]);

    return <span ref={nodeRef}>{count}{suffix}</span>;
  };

  return (
    <section id="impact" className="bg-rotaract-gold h-auto py-10 md:h-24 md:py-0 flex items-center justify-around px-12 border-b border-white/10">
      <div className="max-w-7xl mx-auto w-full flex flex-wrap md:flex-nowrap items-center justify-around gap-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center gap-8 md:gap-12 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-black text-rotary-blue tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-[10px] uppercase font-bold text-rotary-blue/70 tracking-widest mt-0.5">{stat.label}</div>
            </div>
            {i < stats.length - 1 && (
              <div className="hidden md:block h-8 w-px bg-rotary-blue/20"></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-xs font-bold uppercase tracking-widest text-rotaract-gold mb-4">The Foundation</h2>
            <h3 className="text-4xl font-extrabold text-brand-dark mb-8 leading-[1.2] tracking-tight">
              Rooted in Service, <br />
              <span className="text-rotary-blue italic">Part of the Global Rotary Family.</span>
            </h3>
            <div className="space-y-6 text-brand-muted leading-relaxed text-sm lg:text-base">
              <p>
                Rotaract Club of Ring Road Ibadan is a service organization sponsored by the Rotary Club of Ring Road, Ibadan. As part of Rotary International, we are members of a global network of 1.4 million neighbors, friends, and leaders who see a world where people unite and take action to create lasting change.
              </p>
              <p>
                Our partnership with Rotary International gives us the mentorship, resources, and global reach to tackle the most pressing humanitarian challenges, starting right here in Ibadan. We share the Rotary vision of building a better world through service, fellowship, and integrity.
              </p>
              <div className="pt-6 flex items-center gap-8 opacity-80 filter grayscale hover:grayscale-0 transition-all duration-500">
                <img 
                  src={ROTARY_LOGO_URL} 
                  alt="Rotary International Logo" 
                  className="h-10 md:h-12 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div className="h-10 w-px bg-gray-200"></div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-tight">
                  Official Sponsor of <br /> Rotaract Club of Ibadan Ring Road
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 gap-6">
            <div className="flex flex-col justify-center items-center text-center p-12 bg-brand-bg rounded-[40px] border border-gray-50 shadow-sm relative overflow-hidden group">
               <div className="absolute inset-0 bg-rotary-blue/5 scale-0 group-hover:scale-100 transition-transform duration-700 rounded-full"></div>
               <div className="italic font-serif text-3xl md:text-5xl text-rotary-blue mb-4 relative z-10">"Service Above Self"</div>
               <div className="text-rotaract-gold font-bold text-xs uppercase tracking-[0.3em] relative z-10">The Universal Rotary Motto</div>
            </div>
            <div className="bg-white p-8 rounded-3xl border-l-4 border-rotaract-gold shadow-sm flex items-start gap-6 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0">
                <Globe size={20} className="text-rotary-blue" />
              </div>
              <div>
                <div className="font-bold text-rotary-blue text-lg">Global Connectivity</div>
                <p className="text-xs lg:text-sm text-brand-muted mt-2 font-medium">As Rotaractors, we are part of District 9126, connecting with thousands of fellow changemakers across Nigeria and the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Board = () => {
  const members = [
    { 
      name: 'Rtr. Popoola Samuel', 
      role: 'President', 
      isLead: true, 
      bio: 'A Poultry Site Engineer and Publisher dedicated to leading the club with excellence and vision.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Samuel&backgroundColor=b6e3f4'
    },
    { 
      name: 'Rtr. Taiwo King Praise', 
      role: 'Vice President & Secretary', 
      isLead: false, 
      bio: 'Software Engineer and founder of Code Dynasty ICT solutions. A Mathematics graduate and strategic administrator.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Praise&backgroundColor=c0aede'
    },
    { 
      name: 'Rtr. Adejemo Risqat', 
      role: 'Immediate Past President & Project Director', 
      isLead: false, 
      bio: 'Transitioning leader, tech professional at Red Cloud Technology, and dedicated commercial vegetable farmer.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Risqat&backgroundColor=ffdfbf'
    },
    { 
      name: 'Rtr. Akinsoroju Tunmininu', 
      role: 'Treasurer', 
      isLead: false, 
      bio: 'Professional Medical Laboratory Scientist ensuring the club\'s financial integrity and transparent reporting.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tunmininu&backgroundColor=d1d4f9'
    },
    { 
      name: 'Rtr. Oluwatofunmi Tejumola', 
      role: 'Club Trainer', 
      isLead: false, 
      bio: 'Professional graphics designer and branding expert dedicated to membership development and training.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tejumola&backgroundColor=ffd5dc'
    },
    { 
      name: 'Rtr. Ayanfe Adesanya', 
      role: 'Public Relations Media Officer', 
      isLead: false, 
      bio: 'Chairman of LD Groups and brand voice expert, leading our external communications and public image.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ayanfe&backgroundColor=b6e3f4'
    },
    { 
      name: 'Rtr. Pelayanju Omotayo', 
      role: 'Public Media Officer', 
      isLead: false, 
      bio: 'Cybersecurity and Penetration Hacking specialist focusing on our digital outreach and platform security.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Omotayo&backgroundColor=c0aede'
    },
    { 
      name: 'Rtr. Justinah Olawuyi', 
      role: 'Club Welfare Officer', 
      isLead: false, 
      bio: 'Final-year student dedicated to the holistic well-being and social support of all club members.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Justinah&backgroundColor=ffdfbf'
    },
    { 
      name: 'Rtr. Oluwatoke Anita', 
      role: 'Club Admin', 
      isLead: false, 
      bio: 'Student entrepreneur and perfume specialist managing our administrative core and member coordination.',
      image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Anita&backgroundColor=ffd5dc'
    },
  ];

  return (
    <section id="board" className="py-24 bg-brand-bg border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-12">
        <div className="text-center mb-16">
          <h2 className="text-xs font-bold uppercase tracking-widest text-rotaract-gold mb-3">Leadership</h2>
          <h3 className="text-4xl font-extrabold text-rotary-blue tracking-tight italic">The 2025–2026 Board of Directors</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {members.map((m, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 * i }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-xl transition-all group flex flex-col items-center p-8 text-center border-t-8 border-transparent hover:border-rotaract-gold"
            >
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-rotary-blue/10 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                <img 
                  src={m.image} 
                  alt={m.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg relative z-10"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-black text-brand-dark mb-1">{m.name}</h4>
              <p className={`text-xs font-bold uppercase tracking-widest mb-4 px-4 ${m.isLead ? 'text-rotaract-gold' : 'text-rotary-blue'}`}>
                {m.role}
              </p>
              <p className="text-xs text-brand-muted leading-relaxed italic px-2">
                "{m.bio}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    { 
      title: 'Health & Wellness', 
      icon: Stethoscope, 
      color: 'border-rotaract-gold',
      detailed: 'We provide annual health screenings, drug donations, and sanitation awareness in Ibadan settlements like Odo-Ona and Oluyole.' 
    },
    { 
      title: 'Education Outreach', 
      icon: BookOpen, 
      color: 'border-rotary-blue',
      detailed: 'Our "Project Read" initiative provides stationary, textbooks, and reading glasses to over 500 primary school students annually.' 
    },
    { 
      title: 'Environmental Action', 
      icon: Leaf, 
      color: 'border-rotaract-gold',
      detailed: 'Monthly city-wide cleaning campaigns and our "Green Ibadan" tree-planting project to combat local climate issues.' 
    },
    { 
      title: 'Vocational Support', 
      icon: Zap, 
      color: 'border-rotary-blue',
      detailed: 'We organize quarterly skills-acquisition workshops for local artisans, teaching financial literacy and digital marketing.' 
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <h2 className="text-xs font-bold uppercase tracking-widest text-rotaract-gold mb-10">Impact in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`bg-brand-bg p-10 rounded-[40px] border-l-8 ${p.color} shadow-sm group hover:shadow-md transition-all flex items-start gap-8`}
            >
              <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <p.icon className="text-rotary-blue" size={32} />
              </div>
              <div>
                <div className="font-black text-rotary-blue text-2xl group-hover:text-rotaract-gold transition-colors mb-2 italic">
                  {p.title}
                </div>
                <p className="text-sm lg:text-base text-brand-muted leading-relaxed font-medium">
                  {p.detailed}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Events = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  
  const events: Event[] = [
    { 
      month: 'MAY', 
      day: '10', 
      title: 'Club Strategic Meeting', 
      lead: 'Rtr. King Praise',
      time: '4:00 PM - 6:00 PM',
      location: 'Jogor Centre, Ibadan',
      description: 'Our monthly general assembly to discuss administrative updates, fiscal reports, and finalize planning for our upcoming "Educate a Girl" project.'
    },
    { 
      month: 'MAY', 
      day: '24', 
      title: 'Joint District Fellowship', 
      lead: 'Rtr. Risqat',
      time: '6:30 PM - 9:00 PM',
      location: 'Premier Hotel, Ibadan',
      description: 'A networking and cultural exchange evening with Rotaractors from District 9126. Expect keynote speakers on leadership and local social impact.'
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

  return (
    <section id="events" className="py-24 bg-brand-bg">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex items-center gap-10">
          <div className="w-1/3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-rotaract-gold mb-4">The Calendar</h2>
            <h3 className="text-4xl font-extrabold text-rotary-blue mb-6 tracking-tight italic">Join the Fellowship</h3>
            <p className="text-sm text-brand-muted leading-relaxed font-medium">We meet regularly and serve passionately. Click an event to learn more about how you can participate.</p>
          </div>
          <div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {events.map((e, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setSelectedEvent(e)}
                className="flex items-center gap-6 p-4 rounded-[28px] bg-white border border-gray-100 hover:shadow-xl transition-all group cursor-pointer"
              >
                <div className="flex-shrink-0 w-16 h-16 bg-blue-50 rounded-2xl flex flex-col items-center justify-center text-rotary-blue group-hover:bg-rotary-blue group-hover:text-white transition-all transform group-hover:scale-105">
                  <span className="text-[10px] uppercase font-bold tracking-tighter">{e.month}</span>
                  <span className="text-2xl font-black leading-none">{e.day}</span>
                </div>
                <div>
                  <div className="text-base font-black text-brand-dark group-hover:text-rotaract-gold transition-colors italic">{e.title}</div>
                  <div className="text-[10px] text-brand-muted font-bold uppercase tracking-widest mt-1">Lead: {e.lead}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Modal isOpen={!!selectedEvent} onClose={() => setSelectedEvent(null)} event={selectedEvent} />
    </section>
  );
};

const Donate = () => {
  return (
    <section id="donate" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-12">
        <div className="bg-brand-dark rounded-[48px] p-16 text-white text-center shadow-2xl relative overflow-hidden flex flex-col md:row items-center justify-between gap-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rotaract-gold/30 -mr-32 -mt-32 rounded-full blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-rotary-blue/30 -ml-32 -mb-32 rounded-full blur-[80px]"></div>
          
          <div className="text-left md:w-3/5 relative z-10">
            <h2 className="text-[10px] font-bold uppercase tracking-[0.4em] text-rotaract-gold mb-4">Invest in our Future</h2>
            <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter leading-tight">Every Seed We Plant <br /><span className="text-rotaract-gold italic">Changes a Life in Ibadan.</span></h3>
            <p className="text-base text-gray-400 leading-relaxed font-light">Join our mission to provide clean water, quality education, and medical access. 100% of your donations go directly to project execution.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 w-full md:w-auto relative z-10">
            <button className="bg-rotaract-gold text-white px-12 py-5 rounded-full font-black text-lg shadow-xl hover:bg-[#e09818] transition-all transform hover:-translate-y-1">
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-12">
        <div className="flex flex-col md:row justify-between items-center gap-12 mb-16">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-black text-rotary-blue tracking-tighter mb-2">Rotaract Ring Road</h3>
            <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.4em]">Service Above Self · Ibadan</p>
          </div>

          <div className="flex gap-6">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-rotaract-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-rotaract-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
              <Linkedin size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-rotaract-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
              <Twitter size={20} />
            </a>
            <a href="https://wa.me/2348100000000" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-dark hover:bg-rotaract-gold hover:text-white transition-all transform hover:-translate-y-1 shadow-sm">
              <MessageSquare size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col md:row justify-between items-center gap-6 text-[10px] text-gray-300 font-bold uppercase tracking-[0.2em] border-t border-gray-50 pt-12">
          <div>© 2026 Rotaract Club of Ring Road Ibadan. District 9126</div>
          <div className="flex items-center gap-2 text-rotary-blue">
            <span className="w-1.5 h-1.5 bg-rotaract-gold rounded-full shadow-[0_0_8px_#F7A81B]"></span>
            Affiliated with Rotary International
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="font-sans text-brand-dark bg-white subpixel-antialiased">
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-rotaract-gold z-[100] origin-left shadow-[0_0_15px_#F7A81B]"
        style={{ scaleX }}
      />
      
      <Navbar />
      
      <main>
        <Hero />
        <Impact />
        <About />
        <Board />
        <Projects />
        <Events />
        <Donate />
      </main>

      <Footer />
    </div>
  );
}




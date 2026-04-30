import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, User, BookOpen, Star, History as HistoryIcon, Menu, X, MapPin, Briefcase, GraduationCap, Utensils, Mountain, Image as ImageIcon, ChevronDown, ChevronUp, Globe, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

// GitHub Image Base URL
const GITHUB_ASSETS = 'https://raw.githubusercontent.com/colindxu2027/Colin-Detzel-GH-Assignment/main/src/assets';

// Image Mapping
const images = {
  hero: `${GITHUB_ASSETS}/professional-headshot.jpg`,
  xavier: `${GITHUB_ASSETS}/xavier-university-campus.jpg`,
  cintas: `${GITHUB_ASSETS}/cintas-center-gameday.jpg`,
  covCath: `${GITHUB_ASSETS}/covington-catholic-campus.jpg`,
  skyline: `${GITHUB_ASSETS}/cincinnati-skyline.jpg`,
  redsLogo: `${GITHUB_ASSETS}/cincinnati-reds-logo.jpg`,
  gabp: `${GITHUB_ASSETS}/great-american-ballpark.jpg`,
  aflacLogo: `${GITHUB_ASSETS}/aflac-logo.jpg`,
  aflacExp: `${GITHUB_ASSETS}/aflac-professional-experience.jpg`,
  mailwiseLogo: `${GITHUB_ASSETS}/mailwise-solutions-logo.jpg`,
  mailwiseExp: `${GITHUB_ASSETS}/mailwise-solutions-team-acheivement.jpg`,
  rocky: `${GITHUB_ASSETS}/rocky-mountains-jpg.jpg`,
  appalachian: `${GITHUB_ASSETS}/appalachian-mountains.jpg`,
  travelMtns: `${GITHUB_ASSETS}/traveling-mountains.jpg`,
  masters: `${GITHUB_ASSETS}/me-at-masters.jpg`,
  stats: `${GITHUB_ASSETS}/my-physical-stats.jpg`,
  family: `${GITHUB_ASSETS}/my-family.jpg`,
  turtle: `${GITHUB_ASSETS}/pet-turtle.jpg`,
  food: `${GITHUB_ASSETS}/favorite-food.jpg`
};

// Reusable Image Placeholder Component
const ImagePlaceholder = ({ label, className = "h-48" }) => (
  <div className={`w-full ${className} bg-slate-200 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 gap-2 group hover:bg-slate-100 hover:border-xavier-navy hover:text-xavier-navy transition-all`}>
    <ImageIcon className="w-8 h-8 opacity-50" />
    <span className="text-xs font-bold uppercase tracking-widest text-center px-4 leading-tight">{label}</span>
  </div>
);

// Standard Image Component with Error Handling
const SafeImage = ({ src, alt, className }) => (
  <div className="relative w-full h-full overflow-hidden rounded-xl">
    <img 
      src={src} 
      alt={alt} 
      className={`${className} w-full h-full object-cover transition-transform duration-500 hover:scale-105`}
      onError={(e) => {
        e.target.style.display = 'none';
        e.target.nextSibling.style.display = 'flex';
      }}
    />
    <div style={{display: 'none'}} className="w-full h-full">
      <ImagePlaceholder label={alt} className={className} />
    </div>
  </div>
);

// Page Components
const HomePage = () => (
  <div className="space-y-12 animate-fadeIn">
    <section className="relative overflow-hidden bg-xavier-navy text-white rounded-3xl shadow-2xl">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-16 space-y-6 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-serif text-white">Colin Detzel</h1>
          <p className="text-xl md:text-2xl text-xavier-silver font-light italic leading-relaxed">
            Xavier University Class of 2027
          </p>
          <div className="h-1 w-20 bg-xavier-silver mx-auto md:mx-0"></div>
          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            A Business Management student and Cincinnati native with a passion for sports, travel, and professional growth.
          </p>
        </div>
        <div className="p-8 md:p-12 flex justify-center h-[400px] md:h-[500px]">
          <SafeImage src={images.hero} alt="Colin Detzel Professional Headshot" className="w-full h-full rounded-3xl shadow-2xl border-4 border-white/10" />
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
    
    <div className="grid md:grid-cols-3 gap-8">
      <Link to="/about" className="bg-white p-8 rounded-xl shadow-md border-b-4 border-xavier-navy hover:shadow-xl transition-all">
        <h3 className="text-xl font-serif text-xavier-navy mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Rising senior at Xavier University pursuing a major in Business Management with a minor in Political Economy.
        </p>
      </Link>
      <Link to="/history" className="bg-white p-8 rounded-xl shadow-md border-b-4 border-xavier-navy hover:shadow-xl transition-all">
        <h3 className="text-xl font-serif text-xavier-navy mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Experience
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Currently interning with the Cincinnati Reds in Gameday Sales and Service, building on a background in sales and operations.
        </p>
      </Link>
      <Link to="/facts" className="bg-white p-8 rounded-xl shadow-md border-b-4 border-xavier-navy hover:shadow-xl transition-all">
        <h3 className="text-xl font-serif text-xavier-navy mb-4 flex items-center gap-2">
          <Star className="w-5 h-5" /> Fun Facts
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          From raising a pet turtle to breaking 80 on the golf course, explore some unique tidbits about my life.
        </p>
      </Link>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="space-y-16 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-6">
      <h1 className="text-4xl text-xavier-navy font-serif">The Story So Far</h1>
    </header>
    
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-8 text-slate-700 leading-relaxed text-lg">
        <section className="space-y-4">
          <h2 className="text-2xl font-serif text-xavier-navy">Cincinnati Roots & Xavier Tradition</h2>
          <p>
            I was born on October 22, 2004, and grew up in Cincinnati. For as long as I can remember, I have been a huge Xavier basketball fan. Getting to attend Xavier now is truly a full circle moment for me!
          </p>
        </section>

        <div className="grid grid-cols-2 gap-4 h-64">
          <SafeImage src={images.cintas} alt="Cintas Center Gameday" className="rounded-xl shadow-md" />
          <SafeImage src={images.skyline} alt="Cincinnati Skyline View" className="rounded-xl shadow-md" />
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif text-xavier-navy">A Lifelong Passion for Sports</h2>
          <p>
            Sports have been a big hobby of mine my entire life. Whether it be playing basketball with my friends or watching a Cincinnati Bengals game, I love anything and everything about the competitive spirit of sports!
          </p>
        </section>
        
        <div className="bg-slate-100 p-8 rounded-2xl border-l-8 border-xavier-navy italic relative overflow-hidden">
          <div className="relative z-10">
            "I have been blessed enough to travel to almost 25 states in my life and soon to be 3 countries. I am lucky enough to be traveling to France and Spain in a matter of weeks!"
          </div>
          <MapPin className="absolute right-4 bottom-4 w-24 h-24 text-xavier-navy/5 -rotate-12" />
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-xavier-navy text-white p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-xl font-serif flex items-center gap-2 text-white">
            <ImageIcon className="w-5 h-5 text-xavier-silver" /> Exploration
          </h3>
          <div className="h-40">
            <SafeImage src={images.rocky} alt="Rocky Mountains Snapshot" className="rounded-lg border-2 border-white/20" />
          </div>
          <div className="h-40">
            <SafeImage src={images.appalachian} alt="Appalachian Trail Photo" className="rounded-lg border-2 border-white/20" />
          </div>
          <p className="text-sm text-xavier-silver leading-relaxed italic text-center">
            Upcoming: Paris & Barcelona
          </p>
        </div>
      </div>
    </div>
  </div>
);

const HistoryPage = () => {
  const [expandedJob, setExpandedJob] = useState(null);

  const jobs = [
    { 
      id: 'reds',
      company: "Cincinnati Reds", 
      role: "Gameday Sales & Service Intern", 
      tag: "CURRENT",
      logo: images.redsLogo,
      img: images.gabp,
      caption: "Great American Ball Park",
      details: "In my current role with the MLB's Cincinnati Reds, I am continuing to build my teamwork and sales skills while focusing on customer service."
    },
    { 
      id: 'aflac',
      company: "Aflac", 
      role: "Sales Intern | Summer 2024",
      logo: images.aflacLogo,
      img: images.aflacExp,
      caption: "Professional Experience at Aflac",
      details: "Interning at Aflac introduced me to the world of sales and taught me plenty of valuable lessons in goal-setting and cold outreach."
    },
    { 
      id: 'mailwise',
      company: "Mailwise Solutions", 
      role: "Utility Worker | 2023 - Present",
      logo: images.mailwiseLogo,
      img: images.mailwiseExp,
      caption: "Team Achievement at Mailwise",
      details: "Sharpening organizational skills at this family-owned business. Successfully helped package over 1 million pieces of mail in Oct 2025."
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      <header className="border-b-2 border-xavier-navy pb-6">
        <h1 className="text-4xl text-xavier-navy font-serif">Academic & Professional Journey</h1>
      </header>
      
      <div className="grid md:grid-cols-2 gap-16">
        <div className="space-y-12">
          <h2 className="text-2xl font-serif flex items-center gap-3 text-slate-800 border-l-4 border-xavier-navy pl-4">
            Education
          </h2>
          
          <div className="space-y-12">
            <div className="group">
              <div className="h-48 mb-4">
                <SafeImage src={images.xavier} alt="Xavier University Campus" className="rounded-xl group-hover:shadow-lg transition-all" />
              </div>
              <h3 className="text-xl font-bold text-xavier-navy">Xavier University</h3>
              <p className="text-slate-500 font-medium italic">B.S. Business Management</p>
              <p className="text-sm text-slate-400 font-bold mb-2">Class of 2027</p>
            </div>

            <div className="group">
              <div className="h-48 mb-4">
                <SafeImage src={images.covCath} alt="Covington Catholic Campus" className="rounded-xl group-hover:shadow-lg transition-all" />
              </div>
              <h3 className="text-xl font-bold text-slate-700">Covington Catholic High School</h3>
              <p className="text-slate-500 font-medium italic">Park Hills, Kentucky</p>
              <p className="text-sm text-slate-400 font-bold mb-2">Graduated 2023</p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          <h2 className="text-2xl font-serif flex items-center gap-3 text-slate-800 border-l-4 border-xavier-navy pl-4">
            Experience
          </h2>
          
          <div className="space-y-6">
            {jobs.map((job) => (
              <button 
                key={job.id} 
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                className={`w-full text-left flex flex-col p-6 rounded-xl transition-all border ${expandedJob === job.id ? 'bg-white shadow-lg border-xavier-navy' : 'hover:bg-white hover:shadow-md border-transparent hover:border-slate-100'}`}
              >
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 flex-shrink-0">
                    <SafeImage src={job.logo} alt="Logo" className="rounded-lg h-16 w-16" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xavier-navy text-sm uppercase tracking-wider">{job.company}</h3>
                        {job.tag && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">{job.tag}</span>}
                      </div>
                      {expandedJob === job.id ? <ChevronUp className="w-4 h-4 text-xavier-navy" /> : <ChevronDown className="w-4 h-4 text-slate-300" />}
                    </div>
                    <p className="text-xs text-slate-500 italic">{job.role}</p>
                  </div>
                </div>
                
                {expandedJob === job.id && (
                  <div className="mt-6 pt-6 border-t border-slate-100 animate-slideDown">
                    <div className="h-32 mb-4">
                      <SafeImage src={job.img} alt={job.caption} className="rounded-lg h-32 w-full" />
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">{job.details}</p>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const FunFactsPage = () => (
  <div className="space-y-16 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-6">
      <h1 className="text-4xl text-xavier-navy font-serif">A Little More About Me</h1>
    </header>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { title: "Physical Stats", desc: "I am a very tall person, 6'6\" to be exact, and I also wear size 16 shoes!", img: images.stats, icon: <User className="text-xavier-navy" /> },
        { title: "Family", desc: "Oldest of three. My brother is a rising sophomore at Xavier too!", img: images.family, icon: <HistoryIcon className="text-xavier-navy" /> },
        { title: "Golf Achievements", desc: "I've broken 80 on 18 holes and attended the Masters twice!", img: images.masters, icon: <Target className="text-xavier-navy" /> },
        { title: "Favorite Meal", desc: "Cheeseburger with a fried egg and bacon + ice-cold lemonade.", img: images.food, icon: <Utensils className="text-xavier-navy" /> },
        { title: "Unique Childhood", desc: "My siblings and I raised a pet turtle together growing up.", img: images.turtle, icon: <Mountain className="text-xavier-navy" /> },
        { title: "Travel Reach", desc: "I have stood in both the Rocky Mountains and the Appalachians.", img: images.travelMtns, icon: <Globe className="text-xavier-navy" /> }
      ].map((fact, i) => (
        <div key={i} className="bg-white overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="h-48">
            <SafeImage src={fact.img} alt={fact.title} className="h-48 w-full border-b" />
          </div>
          <div className="p-6 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-50 rounded-lg group-hover:bg-xavier-navy group-hover:text-white transition-colors">
                {fact.icon}
              </div>
              <h3 className="text-lg font-serif text-xavier-navy">{fact.title}</h3>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed">{fact.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

function ScrollToTop() {
  const { pathname } = window.location;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-xavier-navy selection:text-white font-sans">
        <nav className="bg-xavier-navy text-white sticky top-0 z-50 shadow-lg border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
            <Link to="/" className="text-3xl font-serif tracking-tighter hover:text-xavier-silver transition-colors text-white">
              CD
            </Link>
            
            <div className="hidden md:flex gap-10 font-medium uppercase text-xs tracking-[0.2em]">
              <Link to="/" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1 text-white">Home</Link>
              <Link to="/about" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1 text-white">About</Link>
              <Link to="/history" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1 text-white">History</Link>
              <Link to="/facts" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1 text-white">Fun Facts</Link>
            </div>

            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-xavier-blue px-6 py-8 space-y-6 border-t border-white/10 animate-slideDown shadow-2xl">
              <Link to="/" className="block text-lg hover:text-xavier-silver text-white" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block text-lg hover:text-xavier-silver text-white" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/history" className="block text-lg hover:text-xavier-silver text-white" onClick={() => setIsMenuOpen(false)}>History</Link>
              <Link to="/facts" className="block text-lg hover:text-xavier-silver text-white" onClick={() => setIsMenuOpen(false)}>Fun Facts</Link>
            </div>
          )}
        </nav>

        <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/facts" element={<FunFactsPage />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-slate-400 py-16 mt-20 border-t border-slate-800">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="space-y-4">
              <p className="font-serif text-white text-3xl mb-4 tracking-tighter">Colin Detzel</p>
              <p className="text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
                Senior at Xavier University pursuing Business Management and Political Economy. 
              </p>
            </div>
            
            <div className="flex flex-col gap-3 text-sm">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-2">Quick Links</h4>
              <Link to="/" className="hover:text-white transition-colors">Home</Link>
              <Link to="/about" className="hover:text-white transition-colors">About Me</Link>
              <Link to="/history" className="hover:text-white transition-colors">Experience</Link>
              <Link to="/facts" className="hover:text-white transition-colors">Fun Facts</Link>
            </div>

            <div className="space-y-6">
              <h4 className="text-white font-bold uppercase tracking-widest text-xs">Connect</h4>
              <div className="flex justify-center md:justify-start gap-4">
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-xavier-navy hover:text-white transition-all cursor-pointer shadow-inner">
                  <span className="sr-only">LinkedIn</span>
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-xavier-navy hover:text-white transition-all cursor-pointer shadow-inner">
                  <span className="sr-only">GitHub</span>
                  <HistoryIcon className="w-5 h-5 text-white" />
                </div>
              </div>
              <p className="text-xs">© 2026 Xavier University Portfolio</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

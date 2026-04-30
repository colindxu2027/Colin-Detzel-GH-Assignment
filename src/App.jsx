import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, User, BookOpen, Star, History as HistoryIcon, Menu, X, MapPin, Briefcase, GraduationCap, Utensils, Mountain, Image as ImageIcon, ChevronDown, ChevronUp } from 'lucide-react';
import { useState, useEffect } from 'react';

// Reusable Image Placeholder Component
const ImagePlaceholder = ({ label, className = "h-48" }) => (
  <div className={`w-full ${className} bg-slate-200 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 gap-2 group hover:bg-slate-100 hover:border-xavier-navy hover:text-xavier-navy transition-all`}>
    <ImageIcon className="w-8 h-8 opacity-50" />
    <span className="text-xs font-bold uppercase tracking-widest text-center px-2">{label}</span>
  </div>
);

// Page Components
const HomePage = () => (
  <div className="space-y-12 animate-fadeIn">
    <section className="relative overflow-hidden bg-xavier-navy text-white rounded-3xl shadow-2xl">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-16 space-y-6 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-serif">Colin Detzel</h1>
          <p className="text-xl md:text-2xl text-xavier-silver font-light italic leading-relaxed">
            Xavier University Class of 2027
          </p>
          <div className="h-1 w-20 bg-xavier-silver mx-auto md:mx-0"></div>
          <p className="text-lg text-slate-300">
            Aspiring Sports & Real Estate Professional based in Cincinnati, Ohio.
          </p>
        </div>
        <div className="p-8 md:p-12">
          <ImagePlaceholder label="Professional Headshot" className="h-80 md:h-96 shadow-2xl" />
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
    
    <div className="grid md:grid-cols-2 gap-8">
      <Link to="/about" className="bg-white p-8 rounded-xl shadow-md border-t-4 border-xavier-navy group hover:shadow-xl transition-all block">
        <h2 className="text-2xl mb-4 flex items-center gap-2 font-serif text-xavier-navy">
          <User className="w-6 h-6" /> Personal Profile
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Born and raised in Cincinnati, I am a rising senior at Xavier University with a deep-rooted passion for our community and sports culture.
        </p>
        <span className="mt-4 inline-block text-xavier-navy font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">Learn more →</span>
      </Link>
      <Link to="/history" className="bg-white p-8 rounded-xl shadow-md border-t-4 border-xavier-navy group hover:shadow-xl transition-all block">
        <h2 className="text-2xl mb-4 flex items-center gap-2 font-serif text-xavier-navy">
          <Star className="w-6 h-6" /> Professional Focus
        </h2>
        <ul className="space-y-3 text-slate-600">
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-xavier-navy mt-2"></div>
            <span>Business Management & Political Economy</span>
          </li>
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-xavier-navy mt-2"></div>
            <span>Sports Industry Enthusiast</span>
          </li>
        </ul>
        <span className="mt-4 inline-block text-xavier-navy font-bold text-sm uppercase tracking-wider group-hover:translate-x-2 transition-transform">View Experience →</span>
      </Link>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="space-y-16 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-6 flex justify-between items-end">
      <h1 className="text-4xl text-xavier-navy font-serif">About Me & My Passions</h1>
      <span className="text-slate-400 text-sm hidden md:block">Cincinnati → The World</span>
    </header>
    
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-8 text-slate-700 leading-relaxed text-lg">
        <p>
          I have been a huge Xavier basketball fan and have been going to games for as long as I can remember, so getting to attend Xavier now is a full circle moment for me!
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <ImagePlaceholder label="Xavier Gameday Photo" className="h-64" />
          <ImagePlaceholder label="Cincinnati Skyline" className="h-64" />
        </div>

        <p>
          Sports have been the heartbeat of my life. Whether it's a high-stakes Cincinnati Bengals game or a casual pickup basketball session with friends, I find energy and community in athletic competition.
        </p>
        
        <div className="bg-slate-100 p-8 rounded-2xl border-l-8 border-xavier-navy italic relative overflow-hidden">
          <div className="relative z-10">
            "I have been blessed enough to travel to almost 25 states and soon to be 3 countries. I am lucky enough to be traveling to France and Spain in a matter of weeks!"
          </div>
          <MapPin className="absolute right-4 bottom-4 w-24 h-24 text-xavier-navy/5 -rotate-12" />
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-xavier-navy text-white p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-xl font-serif flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-xavier-silver" /> Travel Gallery
          </h3>
          <ImagePlaceholder label="Rocky Mountains" className="h-40 bg-white/10 border-white/20 text-white/40" />
          <ImagePlaceholder label="Appalachians" className="h-40 bg-white/10 border-white/20 text-white/40" />
          <p className="text-sm text-xavier-silver leading-relaxed italic text-center">
            Upcoming: Paris & Barcelona 2026
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
      img: "Great American Ball Park",
      details: "Building teamwork and sales skills while focusing on customer service. Ensuring every fan's experience is memorable as the season continues!"
    },
    { 
      id: 'aflac',
      company: "Aflac", 
      role: "Sales Intern | Summer 2024",
      img: "Professional Experience",
      details: "Mastered the world of sales, set and achieved high-level goals, and pushed boundaries by engaging directly with potential clients about insurance needs."
    },
    { 
      id: 'mailwise',
      company: "Mailwise Solutions", 
      role: "Utility Worker | 2023 - Present",
      img: "Team Achievement",
      details: "Sharpening organizational and teamwork skills in direct mail advertising. Successfully helped package and distribute over 1 million pieces of mail in October 2025."
    }
  ];

  return (
    <div className="space-y-16 animate-fadeIn">
      <header className="border-b-2 border-xavier-navy pb-6">
        <h1 className="text-4xl text-xavier-navy font-serif">Academic & Professional Journey</h1>
      </header>
      
      <div className="grid md:grid-cols-2 gap-16">
        {/* Education */}
        <div className="space-y-12">
          <h2 className="text-2xl font-serif flex items-center gap-3 text-slate-800 border-l-4 border-xavier-navy pl-4">
            Education
          </h2>
          
          <div className="space-y-12">
            <div className="group">
              <ImagePlaceholder label="Xavier University Campus" className="h-40 mb-4 group-hover:border-xavier-navy transition-all" />
              <h3 className="text-xl font-bold text-xavier-navy">Xavier University</h3>
              <p className="text-slate-500 font-medium italic">B.S. Business Management | Minor: Political Economy</p>
              <p className="text-sm text-slate-400 font-bold">Class of 2027</p>
            </div>

            <div className="group">
              <ImagePlaceholder label="Covington Catholic Photo" className="h-40 mb-4" />
              <h3 className="text-xl font-bold text-slate-700">Covington Catholic High School</h3>
              <p className="text-slate-500 font-medium italic">Park Hills, KY</p>
              <p className="text-sm text-slate-400 font-bold">2019 - 2023</p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-12">
          <h2 className="text-2xl font-serif flex items-center gap-3 text-slate-800 border-l-4 border-xavier-navy pl-4">
            Experience
          </h2>
          
          <div className="space-y-4">
            <p className="text-slate-400 text-xs italic mb-4">Click each card to expand details</p>
            {jobs.map((job) => (
              <button 
                key={job.id} 
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                className={`w-full text-left flex gap-4 p-4 rounded-xl transition-all border ${expandedJob === job.id ? 'bg-white shadow-lg border-xavier-navy' : 'hover:bg-white hover:shadow-md border-transparent hover:border-slate-100'}`}
              >
                <div className="w-20 h-20 flex-shrink-0">
                  <ImagePlaceholder label="Logo" className="h-20 text-[8px]" />
                </div>
                <div className="flex-grow space-y-1">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <h3 className="font-bold text-xavier-navy text-sm uppercase tracking-wider">{job.company}</h3>
                      {job.tag && <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-bold">{job.tag}</span>}
                    </div>
                    {expandedJob === job.id ? <ChevronUp className="w-4 h-4 text-xavier-navy" /> : <ChevronDown className="w-4 h-4 text-slate-300" />}
                  </div>
                  <p className="text-xs text-slate-500 italic">{job.role}</p>
                  
                  {expandedJob === job.id && (
                    <div className="mt-4 pt-4 border-t border-slate-100 animate-slideDown">
                      <p className="text-sm text-slate-600 leading-relaxed italic">{job.details}</p>
                    </div>
                  )}
                </div>
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
      <h1 className="text-4xl text-xavier-navy font-serif">Quick Tidbits & Fun Facts</h1>
    </header>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { 
          title: "The Masters", 
          desc: "I've had the incredible luck of attending the Masters Golf Tournament twice.", 
          img: "Augusta National Photo",
          icon: <Star className="text-xavier-navy" /> 
        },
        { 
          title: "Physical Stat", 
          desc: "I stand tall at 6'6\" and wear size 16 shoes!", 
          img: "Tall Perspective Photo",
          icon: <User className="text-xavier-navy" /> 
        },
        { 
          title: "Golf Life", 
          desc: "I've broken 80 on 18 holes. Always down for a round!", 
          img: "Golf Course Action Shot",
          icon: <BookOpen className="text-xavier-navy" /> 
        },
        { 
          title: "Favorite Meal", 
          desc: "Cheeseburger with a fried egg and bacon + ice-cold lemonade.", 
          img: "Delicious Burger Photo",
          icon: <Utensils className="text-xavier-navy" /> 
        },
        { 
          title: "Family First", 
          desc: "Oldest of three. My brother is a fellow Musketeer!", 
          img: "Sibling Photo at Xavier",
          icon: <HistoryIcon className="text-xavier-navy" /> 
        },
        { 
          title: "Unique Roots", 
          desc: "Raised a pet turtle with my siblings growing up.", 
          img: "Pet Turtle Photo",
          icon: <Mountain className="text-xavier-navy" /> 
        }
      ].map((fact, i) => (
        <div key={i} className="bg-white overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <ImagePlaceholder label={fact.img} className="h-40 rounded-none border-0 border-b" />
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
        {/* Navigation */}
        <nav className="bg-xavier-navy text-white sticky top-0 z-50 shadow-lg border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
            <Link to="/" className="text-3xl font-serif tracking-tighter hover:text-xavier-silver transition-colors">
              CD
            </Link>
            
            <div className="hidden md:flex gap-10 font-medium uppercase text-xs tracking-[0.2em]">
              <Link to="/" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">Home</Link>
              <Link to="/about" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">About</Link>
              <Link to="/history" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">History</Link>
              <Link to="/facts" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">Fun Facts</Link>
            </div>

            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden bg-xavier-blue px-6 py-8 space-y-6 border-t border-white/10 animate-slideDown shadow-2xl">
              <Link to="/" className="block text-lg hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block text-lg hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/history" className="block text-lg hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>History</Link>
              <Link to="/facts" className="block text-lg hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>Fun Facts</Link>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/facts" element={<FunFactsPage />} />
          </Routes>
        </main>

        {/* Footer */}
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
                  <Briefcase className="w-5 h-5" />
                </div>
                <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-xavier-navy hover:text-white transition-all cursor-pointer shadow-inner">
                  <span className="sr-only">GitHub</span>
                  <HistoryIcon className="w-5 h-5" />
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

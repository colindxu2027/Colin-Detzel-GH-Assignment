import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, User, BookOpen, Star, History as HistoryIcon, Menu, X, MapPin, Briefcase, GraduationCap, Utensils, Mountain, Image as ImageIcon, ChevronDown, ChevronUp, Globe, Target } from 'lucide-react';
import { useState, useEffect } from 'react';

// Reusable Image Placeholder Component
const ImagePlaceholder = ({ label, className = "h-48" }) => (
  <div className={`w-full ${className} bg-slate-200 border-2 border-dashed border-slate-300 rounded-xl flex flex-col items-center justify-center text-slate-400 gap-2 group hover:bg-slate-100 hover:border-xavier-navy hover:text-xavier-navy transition-all`}>
    <ImageIcon className="w-8 h-8 opacity-50" />
    <span className="text-xs font-bold uppercase tracking-widest text-center px-4 leading-tight">{label}</span>
  </div>
);

// Page Components
const HomePage = () => (
  <div className="space-y-12 animate-fadeIn">
    <section className="relative overflow-hidden bg-xavier-navy text-white rounded-3xl shadow-2xl">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-16 space-y-6 z-10 text-center md:text-left">
          <h1 className="text-5xl md:text-8xl font-serif">Colin Detzel</h1>
          <p className="text-xl md:text-2xl text-xavier-silver font-light italic leading-relaxed">
            Xavier University Class of 2027
          </p>
          <div className="h-1 w-20 bg-xavier-silver mx-auto md:mx-0"></div>
          <p className="text-lg text-slate-300 leading-relaxed max-w-lg">
            A Business Management student and Cincinnati native with a passion for sports, travel, and professional growth in the sports and real estate industries.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Link to="/about" className="bg-white text-xavier-navy px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-xavier-silver transition-colors">About Me</Link>
            <Link to="/history" className="border-2 border-white/20 px-6 py-3 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">My Journey</Link>
          </div>
        </div>
        <div className="p-8 md:p-12">
          <ImagePlaceholder label="Professional Headshot" className="h-80 md:h-96 shadow-2xl" />
        </div>
      </div>
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
    
    <div className="grid md:grid-cols-3 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-md border-b-4 border-xavier-navy">
        <h3 className="text-xl font-serif text-xavier-navy mb-4 flex items-center gap-2">
          <GraduationCap className="w-5 h-5" /> Education
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Rising senior at Xavier University pursuing a major in Business Management with a minor in Political Economy.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md border-b-4 border-xavier-navy">
        <h3 className="text-xl font-serif text-xavier-navy mb-4 flex items-center gap-2">
          <Briefcase className="w-5 h-5" /> Experience
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Currently interning with the Cincinnati Reds in Gameday Sales and Service, building on a background in sales and operations.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md border-b-4 border-xavier-navy">
        <h3 className="text-xl font-serif text-xavier-navy mb-4 flex items-center gap-2">
          <Globe className="w-5 h-5" /> Travel
        </h3>
        <p className="text-slate-600 text-sm leading-relaxed">
          Traveled to 25 states and soon to be 3 countries, with an upcoming trip to France and Spain this summer.
        </p>
      </div>
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
            I was born on October 22, 2004, and grew up in Cincinnati. For as long as I can remember, I have been a huge Xavier basketball fan. Getting to attend Xavier now is truly a full circle moment for me! While I love Cincinnati and have enjoyed growing up in such a neat area, I hope to one day move somewhere where the weather is warm year-round.
          </p>
        </section>

        <div className="grid grid-cols-2 gap-4">
          <ImagePlaceholder label="Cintas Center Gameday" className="h-64" />
          <ImagePlaceholder label="Cincinnati Skyline View" className="h-64" />
        </div>

        <section className="space-y-4">
          <h2 className="text-2xl font-serif text-xavier-navy">A Lifelong Passion for Sports</h2>
          <p>
            Sports have been a big hobby of mine my entire life. Whether it be playing basketball with my friends or watching a Cincinnati Bengals game, I love anything and everything about the competitive spirit of sports! Hanging out with friends is also a priority for me; no matter what the activity may be, I enjoy the time I get to spend with them.
          </p>
        </section>
        
        <div className="bg-slate-100 p-8 rounded-2xl border-l-8 border-xavier-navy italic relative overflow-hidden">
          <div className="relative z-10">
            "I have been blessed enough to travel to almost 25 states in my life and soon to be 3 countries. I do not take these experiences for granted, and I'm excited to explore France and Spain in a matter of weeks!"
          </div>
          <MapPin className="absolute right-4 bottom-4 w-24 h-24 text-xavier-navy/5 -rotate-12" />
        </div>
      </div>

      <div className="space-y-8">
        <div className="bg-xavier-navy text-white p-8 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-xl font-serif flex items-center gap-2">
            <ImageIcon className="w-5 h-5 text-xavier-silver" /> Exploration
          </h3>
          <ImagePlaceholder label="Rocky Mountains Snapshot" className="h-40 bg-white/10 border-white/20 text-white/40" />
          <ImagePlaceholder label="Appalachian Trail Photo" className="h-40 bg-white/10 border-white/20 text-white/40" />
          <p className="text-sm text-xavier-silver leading-relaxed italic text-center">
            Expanding my horizons, one state at a time.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-serif text-xavier-navy mb-3">Future Goals</h3>
          <p className="text-sm text-slate-600">
            When I graduate in 2027, I hope to launch a career in either the sports or real estate industry, combining my business management background with my passion for professional environments.
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
      details: "In my current role with the MLB's Cincinnati Reds, I am continuing to build my teamwork and sales skills while focusing on customer service. My goal is to ensure every fan has a positive experience at the ballpark, and I look forward to working with the organization as the season continues!"
    },
    { 
      id: 'aflac',
      company: "Aflac", 
      role: "Sales Intern | Summer 2024",
      img: "Professional Experience",
      details: "Interning at Aflac introduced me to the world of sales and taught me plenty of valuable lessons. I had to set goals for myself and prepare my own strategies to achieve them. This experience pushed me out of my comfort zone, allowing me to become comfortable approaching strangers and discussing insurance solutions."
    },
    { 
      id: 'mailwise',
      company: "Mailwise Solutions", 
      role: "Utility Worker | 2023 - Present",
      img: "Team Achievement",
      details: "I started this position as a high school senior in March 2023 and continue to work here part-time today. At this family-owned business, no day is the same. I've sharpened my organizational skills and teamwork, highlighted by a major achievement in October 2025 where we packaged and distributed over 1 million pieces of mail!"
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
              <ImagePlaceholder label="Xavier University Campus" className="h-48 mb-4 group-hover:border-xavier-navy transition-all" />
              <h3 className="text-xl font-bold text-xavier-navy">Xavier University</h3>
              <p className="text-slate-500 font-medium italic">B.S. Business Management | Minor: Political Economy</p>
              <p className="text-sm text-slate-400 font-bold mb-2">Class of 2027</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                I am currently working towards my degree with an expected graduation in the Spring of 2027. My studies focus on the intersection of management and political economy.
              </p>
            </div>

            <div className="group">
              <ImagePlaceholder label="Covington Catholic Photo" className="h-48 mb-4" />
              <h3 className="text-xl font-bold text-slate-700">Covington Catholic High School</h3>
              <p className="text-slate-500 font-medium italic">Park Hills, Kentucky</p>
              <p className="text-sm text-slate-400 font-bold mb-2">Graduated 2023</p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Attending Covington Catholic was four of the best years of my life. I forever value the friendships and experiences I made at this institution.
              </p>
            </div>
          </div>
        </div>

        {/* Experience */}
        <div className="space-y-12">
          <h2 className="text-2xl font-serif flex items-center gap-3 text-slate-800 border-l-4 border-xavier-navy pl-4">
            Experience
          </h2>
          
          <div className="space-y-6">
            <p className="text-slate-400 text-xs italic mb-4">Click each card to expand my role details and achievements.</p>
            {jobs.map((job) => (
              <button 
                key={job.id} 
                onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                className={`w-full text-left flex flex-col p-6 rounded-xl transition-all border ${expandedJob === job.id ? 'bg-white shadow-lg border-xavier-navy' : 'hover:bg-white hover:shadow-md border-transparent hover:border-slate-100'}`}
              >
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 flex-shrink-0">
                    <ImagePlaceholder label="Logo" className="h-16 text-[8px]" />
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
                    <ImagePlaceholder label={job.img} className="h-32 mb-4 bg-slate-50" />
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
        { 
          title: "Physical Stats", 
          desc: "I am a very tall person, 6'6\" to be exact, and I also wear size 16 shoes!", 
          img: "Tall Perspective Photo",
          icon: <User className="text-xavier-navy" /> 
        },
        { 
          title: "Family", 
          desc: "I am the oldest of three. My brother is a rising sophomore at Xavier, and my sister is a senior at McNicholas High School.", 
          img: "Family & Siblings Photo",
          icon: <HistoryIcon className="text-xavier-navy" /> 
        },
        { 
          title: "Golf Achievements", 
          desc: "I've been lucky enough to break 80 on 18 holes of golf. I've also attended the Masters twice!", 
          img: "Golf & Masters Photo",
          icon: <Target className="text-xavier-navy" /> 
        },
        { 
          title: "Favorite Meal", 
          desc: "My favorite food is a cheeseburger with a fried egg and bacon, plus an ice-cold lemonade.", 
          img: "Favorite Food Snapshot",
          icon: <Utensils className="text-xavier-navy" /> 
        },
        { 
          title: "Unique Childhood", 
          desc: "Growing up, my siblings and I raised a pet turtle together, which was a pretty unique experience.", 
          img: "Pet Turtle Memory",
          icon: <Mountain className="text-xavier-navy" /> 
        },
        { 
          title: "Travel Reach", 
          desc: "I have stood in both the Rocky Mountains and the Appalachian Mountains during my travels.", 
          img: "Mountain Landscapes",
          icon: <Globe className="text-xavier-navy" /> 
        }
      ].map((fact, i) => (
        <div key={i} className="bg-white overflow-hidden rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <ImagePlaceholder label={fact.img} className="h-48 rounded-none border-0 border-b" />
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

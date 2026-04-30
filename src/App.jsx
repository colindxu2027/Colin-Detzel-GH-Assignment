import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, User, BookOpen, Star, History as HistoryIcon, Menu, X, MapPin, Briefcase, GraduationCap, Utensils, Mountain } from 'lucide-react';
import { useState } from 'react';

// Page Components
const HomePage = () => (
  <div className="space-y-8 animate-fadeIn">
    <section className="relative overflow-hidden text-center py-24 bg-xavier-navy text-white rounded-2xl shadow-xl px-4">
      <div className="relative z-10">
        <h1 className="text-5xl md:text-8xl mb-6 font-serif">Colin Detzel</h1>
        <p className="text-xl md:text-3xl text-xavier-silver max-w-3xl mx-auto font-light italic leading-relaxed">
          "Xavier University Class of 2027 • Aspiring Sports & Real Estate Professional"
        </p>
      </div>
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
    </section>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-xavier-navy group hover:shadow-lg transition-all">
        <h2 className="text-2xl mb-4 flex items-center gap-2 font-serif text-xavier-navy">
          <User className="w-6 h-6" /> Personal Profile
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Born and raised in Cincinnati, I am a rising senior at Xavier University with a deep-rooted passion for our community and sports culture. From lifelong fan to current student, my journey has come full circle.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-xavier-navy group hover:shadow-lg transition-all">
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
          <li className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-xavier-navy mt-2"></div>
            <span>Sales & Customer Service Specialist</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="space-y-16 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-6">
      <h1 className="text-4xl text-xavier-navy font-serif">About Me & My Passions</h1>
    </header>
    
    <div className="grid lg:grid-cols-3 gap-12">
      <div className="lg:col-span-2 space-y-6 text-slate-700 leading-relaxed text-lg">
        <p>
          I have been a huge Xavier basketball fan and have been going to games for as long as I can remember, so getting to attend Xavier now is a full circle moment for me! Growing up in Cincinnati has been an incredible experience, though I hope to one day move somewhere where the weather is warm year-round.
        </p>
        <p>
          Sports have been the heartbeat of my life. Whether it's a high-stakes Cincinnati Bengals game or a casual pickup basketball session with friends, I find energy and community in athletic competition.
        </p>
        <div className="bg-slate-100 p-6 rounded-lg border-l-4 border-xavier-navy italic">
          "I have been blessed enough to travel to almost 25 states and soon to be 3 countries. I am lucky enough to be traveling to France and Spain in a matter of weeks!"
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-xavier-navy text-white p-8 rounded-xl shadow-lg">
          <h3 className="text-xl font-serif mb-4 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-xavier-silver" /> Exploration
          </h3>
          <p className="text-sm text-xavier-silver leading-relaxed">
            Travel is one of my greatest teachers. Exploring diverse landscapes—from the Rocky Mountains to the Appalachians—has shaped my perspective on the world.
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center">
            <BookOpen className="mx-auto mb-2 text-xavier-navy" />
            <span className="text-xs font-bold uppercase tracking-wider">Learning</span>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm border border-slate-200 text-center">
            <Star className="mx-auto mb-2 text-xavier-navy" />
            <span className="text-xs font-bold uppercase tracking-wider">Sports</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const HistoryPage = () => (
  <div className="space-y-16 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-6">
      <h1 className="text-4xl text-xavier-navy font-serif">Academic & Professional Journey</h1>
    </header>
    
    <div className="grid md:grid-cols-2 gap-12">
      {/* Education */}
      <div className="space-y-8">
        <h2 className="text-2xl font-serif flex items-center gap-3 text-slate-800">
          <GraduationCap className="text-xavier-navy" /> Education
        </h2>
        
        <div className="relative pl-8 border-l-2 border-xavier-navy space-y-8">
          <div className="relative">
            <div className="absolute w-4 h-4 bg-xavier-navy rounded-full -left-[41px] top-1.5 border-4 border-white"></div>
            <h3 className="text-xl font-bold text-xavier-navy">Xavier University</h3>
            <p className="text-slate-500 font-medium italic">B.S. Business Management | Minor: Political Economy</p>
            <p className="text-sm text-slate-400 font-bold mb-2">Class of 2027</p>
            <p className="text-slate-600 leading-relaxed">
              Focusing on leadership and economic structures. Aiming for a Spring 2027 graduation.
            </p>
          </div>

          <div className="relative">
            <div className="absolute w-4 h-4 bg-xavier-silver rounded-full -left-[41px] top-1.5 border-4 border-white"></div>
            <h3 className="text-xl font-bold text-slate-700">Covington Catholic High School</h3>
            <p className="text-slate-500 font-medium italic">Park Hills, KY</p>
            <p className="text-sm text-slate-400 font-bold mb-2">2019 - 2023</p>
            <p className="text-slate-600 leading-relaxed">
              Four transformative years that built the foundation for my lifelong friendships and academic drive.
            </p>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="space-y-8">
        <h2 className="text-2xl font-serif flex items-center gap-3 text-slate-800">
          <Briefcase className="text-xavier-navy" /> Experience
        </h2>
        
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 hover:border-xavier-navy transition-colors">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-bold text-xavier-navy uppercase tracking-wide">Cincinnati Reds</h3>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-bold">CURRENT</span>
            </div>
            <p className="text-slate-500 italic text-sm mb-3">Gameday Sales and Service Intern (MLB)</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Honing teamwork and sales skills while ensuring every fan has a premium gameday experience.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-xavier-navy uppercase tracking-wide">Aflac</h3>
            <p className="text-slate-500 italic text-sm mb-3">Sales Intern | Summer 2024</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Pushed outside my comfort zone to master cold outreach and goal-setting strategies in the insurance sector.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h3 className="text-lg font-bold text-xavier-navy uppercase tracking-wide">Mailwise Solutions</h3>
            <p className="text-slate-500 italic text-sm mb-3">Utility Worker | Mar 2023 - Present</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Key achievement: Helped package and distribute over 1 million pieces of mail in Oct 2025 for this family-owned business.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const FunFactsPage = () => (
  <div className="space-y-16 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-6">
      <h1 className="text-4xl text-xavier-navy font-serif">Quick Tidbits & Fun Facts</h1>
    </header>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        { 
          title: "Physical Stat", 
          desc: "I stand tall at 6'6\" and wear size 16 shoes!", 
          icon: <User className="text-xavier-navy" /> 
        },
        { 
          title: "The Masters", 
          desc: "I've had the incredible luck of attending the Masters Golf Tournament twice.", 
          icon: <Star className="text-xavier-navy" /> 
        },
        { 
          title: "Family", 
          desc: "Oldest of three. My brother is a rising sophomore at Xavier too!", 
          icon: <HistoryIcon className="text-xavier-navy" /> 
        },
        { 
          title: "Favorite Meal", 
          desc: "A cheeseburger with a fried egg and bacon, paired with ice-cold lemonade.", 
          icon: <Utensils className="text-xavier-navy" /> 
        },
        { 
          title: "Golf Achievement", 
          desc: "I've broken 80 on 18 holes. If you're up for a round, let's connect!", 
          icon: <BookOpen className="text-xavier-navy" /> 
        },
        { 
          title: "Unique Pet", 
          desc: "My siblings and I raised a turtle together growing up.", 
          icon: <Mountain className="text-xavier-navy" /> 
        }
      ].map((fact, i) => (
        <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all flex flex-col items-center text-center space-y-4">
          <div className="p-3 bg-slate-50 rounded-full">{fact.icon}</div>
          <h3 className="text-lg font-serif text-xavier-navy">{fact.title}</h3>
          <p className="text-slate-600 text-sm leading-relaxed">{fact.desc}</p>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50 selection:bg-xavier-navy selection:text-white">
        {/* Navigation */}
        <nav className="bg-xavier-navy text-white sticky top-0 z-50 shadow-lg border-b border-white/5">
          <div className="max-w-6xl mx-auto px-4 py-5 flex justify-between items-center">
            <Link to="/" className="text-3xl font-serif tracking-tighter hover:text-xavier-silver transition-colors">
              CD
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-10 font-medium uppercase text-xs tracking-[0.2em]">
              <Link to="/" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">Home</Link>
              <Link to="/about" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">About</Link>
              <Link to="/history" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">History</Link>
              <Link to="/facts" className="hover:text-xavier-silver transition-colors border-b-2 border-transparent hover:border-xavier-silver pb-1">Fun Facts</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden p-2 hover:bg-white/10 rounded-lg" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
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

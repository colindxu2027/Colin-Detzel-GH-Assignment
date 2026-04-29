import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Home, User, BookOpen, Star, History as HistoryIcon, Menu, X } from 'lucide-react';
import { useState } from 'react';

// Page Components
const HomePage = () => (
  <div className="space-y-8 animate-fadeIn">
    <section className="text-center py-20 bg-xavier-navy text-white rounded-2xl shadow-xl px-4">
      <h1 className="text-5xl md:text-7xl mb-6 font-serif">Colin Detzel</h1>
      <p className="text-xl md:text-2xl text-xavier-silver max-w-2xl mx-auto font-light italic">
        "A mix of life, hobbies, and the journey so far."
      </p>
    </section>
    
    <div className="grid md:grid-cols-2 gap-8">
      <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-xavier-navy">
        <h2 className="text-2xl mb-4 flex items-center gap-2">
          <User className="text-xavier-navy" /> About the Site
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Welcome to my personal corner of the internet. This site is built with React and Tailwind CSS, 
          designed to give you a glimpse into my life at Xavier University and beyond.
        </p>
      </div>
      <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-xavier-navy">
        <h2 className="text-2xl mb-4 flex items-center gap-2">
          <Star className="text-xavier-navy" /> Quick Highlights
        </h2>
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li>Xavier University Student</li>
          <li>Avid Tech Enthusiast</li>
          <li>Bengals Fan (Who Dey!)</li>
        </ul>
      </div>
    </div>
  </div>
);

const AboutPage = () => (
  <div className="space-y-12 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-4">
      <h1 className="text-4xl text-xavier-navy">About Me & My Hobbies</h1>
    </header>
    
    <div className="prose prose-lg max-w-none text-slate-700">
      <p>
        I'm a student at Xavier University, where I'm currently focusing on my studies and 
        building the foundation for my professional career. I enjoy the blend of tradition 
        and innovation that Xavier provides.
      </p>
      
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {[
          { title: 'Technology', desc: 'Exploring the latest in web dev and AI.', icon: <BookOpen /> },
          { title: 'Sports', desc: 'Die-hard Cincinnati Bengals fan.', icon: <Star /> },
          { title: 'Learning', desc: 'Always looking for the next thing to master.', icon: <HistoryIcon /> }
        ].map((hobby, i) => (
          <div key={i} className="bg-xavier-navy text-white p-6 rounded-lg shadow-lg hover:transform hover:-translate-y-2 transition-all">
            <div className="mb-4">{hobby.icon}</div>
            <h3 className="text-xl mb-2 font-serif">{hobby.title}</h3>
            <p className="text-xavier-silver text-sm">{hobby.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HistoryPage = () => (
  <div className="space-y-12 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-4">
      <h1 className="text-4xl text-xavier-navy">Work & School History</h1>
    </header>
    
    <div className="space-y-8">
      <div className="relative pl-8 border-l-2 border-xavier-navy">
        <div className="absolute w-4 h-4 bg-xavier-navy rounded-full -left-[9px] top-1"></div>
        <h3 className="text-2xl font-serif text-xavier-navy">Xavier University</h3>
        <p className="text-slate-500 italic">Student | Current</p>
        <p className="mt-4 text-slate-600">
          Pursuing my degree and engaging with the vibrant campus community.
        </p>
      </div>
      
      <div className="relative pl-8 border-l-2 border-xavier-silver">
        <div className="absolute w-4 h-4 bg-xavier-silver rounded-full -left-[9px] top-1"></div>
        <h3 className="text-2xl font-serif text-slate-700">Previous Experience</h3>
        <p className="text-slate-500 italic">Various Roles</p>
        <p className="mt-4 text-slate-600">
          Building skills in communication, technical problem-solving, and teamwork.
        </p>
      </div>
    </div>
  </div>
);

const FunFactsPage = () => (
  <div className="space-y-12 animate-fadeIn">
    <header className="border-b-2 border-xavier-navy pb-4">
      <h1 className="text-4xl text-xavier-navy">Fun Facts</h1>
    </header>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "I'm a huge Bengals fan - Who Dey!",
        "I love building and designing websites.",
        "Xavier University is where I call home.",
        "I prefer clean, executive-style designs.",
        "I'm always learning new technologies.",
        "I enjoy the mix of life, hobbies, and facts!"
      ].map((fact, i) => (
        <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex items-start gap-4">
          <span className="bg-xavier-navy text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold">
            {i + 1}
          </span>
          <p className="text-slate-700 pt-1">{fact}</p>
        </div>
      ))}
    </div>
  </div>
);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="bg-xavier-navy text-white sticky top-0 z-50 shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-serif tracking-tight hover:text-xavier-silver transition-colors">
              CD
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8 font-medium uppercase text-sm tracking-widest">
              <Link to="/" className="hover:text-xavier-silver transition-colors">Home</Link>
              <Link to="/about" className="hover:text-xavier-silver transition-colors">About</Link>
              <Link to="/history" className="hover:text-xavier-silver transition-colors">History</Link>
              <Link to="/facts" className="hover:text-xavier-silver transition-colors">Fun Facts</Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-xavier-blue px-4 py-6 space-y-4 border-t border-white/10 animate-slideDown">
              <Link to="/" className="block hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="block hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/history" className="block hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>History</Link>
              <Link to="/facts" className="block hover:text-xavier-silver" onClick={() => setIsMenuOpen(false)}>Fun Facts</Link>
            </div>
          )}
        </nav>

        {/* Main Content */}
        <main className="flex-grow max-w-6xl mx-auto w-full px-4 py-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/history" element={<HistoryPage />} />
            <Route path="/facts" element={<FunFactsPage />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-400 py-12 mt-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="font-serif text-white text-xl mb-4">Colin Detzel</p>
            <p className="text-sm">© 2026 Xavier University Student Portfolio</p>
            <div className="mt-6 flex justify-center gap-6">
              {/* Social Placeholders */}
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-xavier-navy hover:text-white transition-all cursor-pointer">
                <span className="sr-only">LinkedIn</span>
                in
              </div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-xavier-navy hover:text-white transition-all cursor-pointer">
                <span className="sr-only">GitHub</span>
                gh
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

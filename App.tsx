
import React, { useState, useEffect, useRef } from 'react';

// --- Types ---
interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveLink: string;
  githubLink: string;
}

interface GalleryItem {
  src: string;
  title: string;
}

// --- Constants ---
const PROJECTS: Project[] = [
  {
    title: "Sici Technologies",
    description: "A corporate website for IT solutions company with modern design and responsive layout.",
    image: "https://ik.imagekit.io/4awlyo9bf/images/WEBSITE/sici.png",
    tags: ["HTML", "CSS", "JavaScript", "WordPress"],
    liveLink: "https://sicitechnologies.com/",
    githubLink: "#"
  },
  {
    title: "Eduzone Frontend",
    description: "An educational platform frontend with course listings, user dashboard, and interactive features.",
    image: "https://ik.imagekit.io/4awlyo9bf/images/WEBSITE/eduzone.png",
    tags: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    liveLink: "https://nayanchauhan2015.github.io/Eduzone_frontend/",
    githubLink: "https://github.com/nayanchauhan2015/Eduzone_frontend"
  },
  {
    title: "3D Portfolio",
    description: "An interactive 3D portfolio website showcasing projects with immersive animations and effects.",
    image: "https://ik.imagekit.io/4awlyo9bf/images/WEBSITE/first_portfolio.png?updatedAt=1751300808023",
    tags: ["HTML", "CSS", "JavaScript", "Three.js"],
    liveLink: "https://nayanchauhan2015.github.io/my3dportfolio/",
    githubLink: "https://github.com/nayanchauhan2015/my3dportfolio"
  }
];

const GALLERY_IMAGES: GalleryItem[] = [
  { src: "https://ik.imagekit.io/4awlyo9bf/images/LOGO/1.png", title: "LOGO" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/LOGO/12.png", title: "LOGO" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/LOGO/4.png", title: "LOGO" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/LOGO/5.png", title: "LOGO" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/LOGO/6.png", title: "LOGO" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/POST/17.png", title: "Fashion Instagram Post" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/POST/15.png", title: "Fashion Instagram Post" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/POST/18.png", title: "Fashion Instagram Post" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/POST/7.png", title: "Fashion Instagram Post" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/POST/5.png", title: "Fashion Instagram Post" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/POST/2.png", title: "Food Instagram Post" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/POST/1.png", title: "Food Instagram Post" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/UIUX/post%20size%20.png", title: "Figma App UI" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/WEBSITE/sici.png", title: "Website Landing Page" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/WEBSITE/eduzone.png", title: "Website Landing Page" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/PRODUCTS/1.png", title: "Product Packaging" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/PRODUCTS/2.png", title: "Product Packaging" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/PRODUCTS/3.png", title: "Product Packaging" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/PRODUCTS/4.png", title: "Product Packaging" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/PRODUCTS/5.png", title: "Product Packaging" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/1.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/2.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/3.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/4.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/5.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/6.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/7.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/8.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/9.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/CARDS/10.png", title: "Business Card Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(7).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(8).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(15).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(6).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(2).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(4).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(13).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(1).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(10).png", title: "T-shirt Design" },
  { src: "https://ik.imagekit.io/4awlyo9bf/images/MOCKUPS/LL1%20(12).png", title: "T-shirt Design" },
];

const MENU_ITEMS = ['Home', 'About', 'Experience', 'Projects', 'Gallery', 'Education', 'Contact'];

// --- Components ---

const Card3D: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;
    
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  return (
    <div 
      ref={cardRef} 
      className={`card-3d relative transition-transform duration-200 overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="card-shine"></div>
      {children}
    </div>
  );
};

const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className }) => {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`section-reveal ${visible ? 'visible' : ''} ${className}`}>
      {children}
    </section>
  );
};

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

  return (
    <div className="min-h-screen text-slate-100 selection:bg-primary/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="fixed top-6 right-6 z-50 lg:hidden">
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="glass-card w-12 h-12 rounded-full flex items-center justify-center text-primary active:scale-90 transition-transform"
        >
          <i className="ri-menu-3-line ri-xl"></i>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} lg:hidden`}>
        <div className="absolute inset-0 bg-dark/95 backdrop-blur-xl"></div>
        <div className="relative p-8 flex flex-col h-full">
          <div className="flex justify-end mb-12">
            <button onClick={closeMenu} className="text-primary hover:rotate-90 transition-transform p-2">
              <i className="ri-close-line ri-2x"></i>
            </button>
          </div>
          <nav className="flex flex-col space-y-8 text-3xl font-bold">
            {MENU_ITEMS.map((item, i) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item)}
                className="hover:text-primary transition-colors flex items-center group"
              >
                <span className="text-slate-600 mr-4 text-sm font-mono">0{i+1}</span>
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Desktop Navigation */}
      <header className="hidden lg:block fixed top-6 left-1/2 -translate-x-1/2 z-40 w-full max-w-5xl px-4">
        <nav className="glass-card px-10 py-4 rounded-full flex items-center justify-between border-white/5">
          <div 
            onClick={(e) => scrollToSection(e, 'home')}
            className="text-xl font-bold tracking-tighter cursor-pointer"
          >
            <span className="gradient-text">Nayan</span>
          </div>
          <div className="flex space-x-8">
            {MENU_ITEMS.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item)}
                className="text-slate-400 hover:text-white text-sm font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="flex space-x-4">
             <a href="https://github.com/Nayan9687" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <i className="ri-github-fill"></i>
             </a>
             <a href="https://www.linkedin.com/in/nayan-chauhan-50334230b" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                <i className="ri-linkedin-fill"></i>
             </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center relative py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block glass-card px-4 py-1.5 rounded-full text-xs font-bold text-primary mb-8 border-primary/20 animate-pulse">
               AVAILABLE FOR WORK
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tighter leading-tight">
               CHAUHAN <span className="gradient-text">NAYAN</span>
            </h1>
            <h2 className="text-xl md:text-3xl text-slate-400 font-medium mb-10 tracking-[0.3em] uppercase">
               Front-End Developer
            </h2>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
              Applying UI/UX design, HTML/CSS, and visual creativity to deliver impactful digital solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="bg-primary hover:bg-primary/80 text-white px-10 py-4 rounded-button font-bold transition-all shadow-lg shadow-primary/20 hover:scale-105 active:scale-95"
              >
                Explore Work
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="glass-card text-white px-10 py-4 rounded-button font-bold hover:bg-white/10 transition-all border-white/10"
              >
                Let's Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <Section id="about" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-2/5">
               <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <Card3D className="glass-card rounded-2xl p-2 relative overflow-hidden">
                    <img src="https://ik.imagekit.io/4awlyo9bf/images/my_photo_Last.png" alt="Profile" className="w-full rounded-xl grayscale hover:grayscale-0 transition-all duration-700" />
                  </Card3D>
               </div>
               
               <div className="mt-12 space-y-8">
                  {[
                    { icon: 'ri-phone-line', label: 'Call', value: '8200701016' },
                    { icon: 'ri-mail-line', label: 'Email', value: 'nayanchauhan11111@gmail.com' },
                    { icon: 'ri-map-pin-line', label: 'Locate', value: 'Nadiad, Gujarat' }
                  ].map((item) => (
                    <div key={item.label} className="flex items-center group">
                      <div className="w-12 h-12 glass-card rounded-xl flex items-center justify-center text-primary mr-5 group-hover:bg-primary group-hover:text-white transition-all">
                        <i className={`${item.icon} ri-lg`}></i>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">{item.label}</p>
                        <p className="font-semibold text-slate-200">{item.value}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="w-full lg:w-3/5">
              <h2 className="text-4xl font-bold mb-4">The <span className="gradient-text">Expertise</span></h2>
              <p className="text-slate-400 mb-12 text-lg">Specializing in building modern web interfaces and compelling brand designs.</p>
              
              <div className="space-y-8 mb-16">
                {[
                  { name: 'HTML', progress: '90%' },
                  { name: 'CSS', progress: '80%' },
                  { name: 'JavaScript', progress: '60%' },
                  { name: 'WordPress', progress: '70%' },
                  { name: 'Graphics Designing', progress: '70%' }
                ].map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-3 text-sm font-bold uppercase tracking-widest text-slate-300">
                      <span>{skill.name}</span>
                      <span>{skill.progress}</span>
                    </div>
                    <div className="skill-bar">
                      <div className="skill-progress" style={{ width: skill.progress }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold mb-8 uppercase tracking-widest text-slate-500">Internships</h2>
              <div className="space-y-12 relative pl-6">
                <div className="timeline-line"></div>
                <div className="relative">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-bold text-white">TATA Strive | Anand</h4>
                  <p className="text-primary font-mono text-sm mb-3">Java Full Stack Developer - 2023</p>
                  <p className="text-slate-400">Developed applications using Java, Spring Boot, and React.js.</p>
                </div>
                <div className="relative">
                  <div className="timeline-dot"></div>
                  <h4 className="text-xl font-bold text-white">Kathan Technologies | Nadiad</h4>
                  <p className="text-primary font-mono text-sm mb-3">Front-end Development - 2022</p>
                  <p className="text-slate-400">Focused on building responsive web interfaces and client workflows.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className="py-24 bg-dark/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tight mb-4">Journey</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-16 relative pl-8">
            <div className="timeline-line"></div>
            {[
              {
                title: "Graphic Designer & Shopify",
                company: "Kuhluh Clothing Brand | Pune",
                duration: "2024-2025 [6 months]",
                points: ["Created brand identity materials", "Managed Shopify store customizations", "Optimized conversion performance"]
              },
              {
                title: "WordPress Developer & Designer",
                company: "E6Websolutions | Pune",
                duration: "2023-2024 [1 Year]",
                points: ["Developed WordPress client sites", "Customized themes/plugins", "Created marketing assets"]
              }
            ].map((exp, idx) => (
              <div key={idx} className="relative group">
                <div className="timeline-dot group-hover:scale-150 transition-transform"></div>
                <Card3D className="glass-card p-10 rounded-2xl border-white/10 hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.title}</h3>
                      <h4 className="text-sm font-bold text-slate-500 uppercase tracking-[0.2em]">{exp.company}</h4>
                    </div>
                    <div className="mt-4 md:mt-0 glass-card px-4 py-1.5 rounded-full text-xs font-mono text-primary">
                      {exp.duration}
                    </div>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center text-slate-400">
                        <i className="ri-arrow-right-s-line text-primary mr-2"></i>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </Card3D>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <h2 className="text-5xl font-bold mb-4">Selected <span className="gradient-text">Projects</span></h2>
              <p className="text-slate-400 text-lg">Digital experiences built with code and creativity.</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project, idx) => (
              <Card3D key={idx} className="glass-card rounded-3xl group flex flex-col h-full overflow-hidden border-white/5">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/40 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                       {project.tags.slice(0, 2).map(t => <span key={t} className="text-[10px] uppercase font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded-md">{t}</span>)}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <p className="text-slate-400 text-sm mb-10 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex gap-4">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex-1 bg-white text-dark py-3 rounded-xl font-bold text-center text-sm hover:bg-primary hover:text-white transition-all shadow-xl shadow-white/5">
                       Live View
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-12 h-12 glass-card rounded-xl flex items-center justify-center hover:text-primary transition-colors">
                       <i className="ri-github-line ri-lg"></i>
                    </a>
                  </div>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery Section */}
      <Section id="gallery" className="py-24 bg-dark/40">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4">Visual <span className="gradient-text">Design</span></h2>
            <p className="text-slate-400">Branding, UI/UX, and creative graphics.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {GALLERY_IMAGES.slice(0, 12).map((item, idx) => (
              <div 
                key={idx} 
                onClick={() => setIsGalleryOpen(true)}
                className="group relative h-48 cursor-pointer overflow-hidden rounded-xl glass-card flex items-center justify-center bg-slate-900/50"
              >
                <div className="absolute inset-0 opacity-20 blur-xl scale-150 pointer-events-none">
                  <img src={item.src} alt="" className="w-full h-full object-cover" />
                </div>
                <img src={item.src} alt={item.title} className="max-w-full max-h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20">
                  <i className="ri-eye-line text-white ri-2x"></i>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <button 
              onClick={() => setIsGalleryOpen(true)}
              className="glass-card text-white px-10 py-4 rounded-button font-bold hover:bg-primary transition-all border-white/10"
            >
              Enter Full Gallery
            </button>
          </div>
        </div>
      </Section>

      {/* Gallery Modal */}
      {isGalleryOpen && (
        <div className="fixed inset-0 z-[100] bg-dark/95 backdrop-blur-2xl flex flex-col animate-fade-in overflow-hidden">
          <div className="container mx-auto h-full flex flex-col p-6">
            <div className="flex justify-between items-center mb-10">
              <div>
                <h3 className="text-4xl font-bold gradient-text leading-tight">Project Showcase</h3>
                <p className="text-slate-500 text-sm mt-2">All designs displayed in their original proportions.</p>
              </div>
              <button onClick={() => setIsGalleryOpen(false)} className="text-slate-400 hover:text-white transition-all hover:rotate-90">
                <i className="ri-close-circle-fill ri-3x"></i>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pr-4 custom-scrollbar pb-24">
              <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
                {GALLERY_IMAGES.map((img, i) => (
                  <div key={i} className="masonry-item glass-card rounded-2xl overflow-hidden group hover:border-primary/50 transition-all duration-300">
                    <div className="relative">
                      <img src={img.src} alt={img.title} className="w-full h-auto block" />
                      <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end">
                         <p className="text-white font-bold text-sm tracking-widest uppercase">{img.title}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Education Section */}
      <Section id="education" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20">Academic <span className="gradient-text">Pathway</span></h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 gap-8">
            {[
              {
                degree: "Bachelor Engineering (IT)",
                institute: "Sardar Patel College of Engineering",
                duration: "2018 - 2022",
                grade: "7.23 CGPA"
              },
              {
                degree: "HSC [12 TH]",
                institute: "NIOS",
                duration: "2017",
                grade: "61.00%"
              }
            ].map((edu, idx) => (
              <Card3D key={idx} className="glass-card p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-16 h-16 glass-card rounded-full flex items-center justify-center text-primary shrink-0">
                   <i className="ri-graduation-cap-line ri-2x"></i>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold text-white">{edu.degree}</h3>
                    <span className="text-primary font-mono text-xs">{edu.duration}</span>
                  </div>
                  <p className="text-slate-400 font-medium mb-2">{edu.institute}</p>
                  <span className="inline-block glass-card px-3 py-1 rounded-md text-[10px] font-bold text-secondary border-secondary/20 uppercase tracking-widest">
                    Score: {edu.grade}
                  </span>
                </div>
              </Card3D>
            ))}
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-24 bg-dark/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto glass-card rounded-[2rem] overflow-hidden border-white/5">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/3 bg-gradient-to-br from-primary/20 to-secondary/20 p-12 backdrop-blur-md">
                <h3 className="text-3xl font-bold mb-12">Let's <span className="gradient-text">Sync</span></h3>
                <div className="space-y-12">
                   {[
                     { icon: 'ri-mail-send-line', label: 'E-MAIL', value: 'nayanchauhan11111@gmail.com' },
                     { icon: 'ri-whatsapp-line', label: 'CHAT', value: '+91 8200701016' }
                   ].map(c => (
                     <div key={c.label}>
                       <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{c.label}</p>
                       <div className="flex items-center text-lg font-bold hover:text-primary transition-colors cursor-pointer">
                         <i className={`${c.icon} mr-3`}></i>
                         {c.value}
                       </div>
                     </div>
                   ))}
                </div>
              </div>
              
              <div className="w-full lg:w-2/3 p-12">
                <form className="space-y-8" onSubmit={e => e.preventDefault()}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 tracking-[0.2em] ml-2">YOUR NAME</label>
                        <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all" placeholder="John Doe" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-[10px] font-bold text-slate-500 tracking-[0.2em] ml-2">EMAIL ADDRESS</label>
                        <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all" placeholder="john@example.com" />
                     </div>
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-500 tracking-[0.2em] ml-2">MESSAGE</label>
                      <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 focus:border-primary focus:outline-none transition-all resize-none" placeholder="How can I help you?"></textarea>
                   </div>
                   <button className="w-full bg-primary hover:bg-primary/80 py-5 rounded-xl font-bold text-white transition-all shadow-xl shadow-primary/10">
                      Blast Off
                   </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
           <div 
             onClick={(e) => scrollToSection(e, 'home')}
             className="text-xl font-bold tracking-tighter cursor-pointer"
           >
             CHAUHAN <span className="gradient-text">NAYAN</span>
           </div>
           <div className="flex space-x-6">
              {['linkedin', 'github', 'instagram'].map(p => (
                <a key={p} href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center text-slate-400 hover:text-primary hover:border-primary transition-all">
                  <i className={`ri-${p}-line`}></i>
                </a>
              ))}
           </div>
           <p className="text-slate-600 text-xs font-mono">&copy; 2025 ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

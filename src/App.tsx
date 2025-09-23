import React, { useState, useEffect, useRef } from 'react';
import { 
  Cloud, 
  Code, 
  Server, 
  Download, 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  CheckCircle, 
  Calendar,
  ArrowRight,
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Award,
  Zap,
  Shield,
  Database,
  GitBranch,
  Terminal,
  Layers,
  Settings,
  Eye,
  Star,
  Phone,
  MessageCircle
} from 'lucide-react';
import TechSkills from './components/TechSkills';
import ResumeModal from './components/ResumeModal';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [easterEggCount, setEasterEggCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  const [isLogoAnimating, setIsLogoAnimating] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isClicking, setIsClicking] = useState(false);
  const [mouseSpeed, setMouseSpeed] = useState(0);
  const lastMousePos = useRef({ x: 0, y: 0 });
  const lastTime = useRef(Date.now());
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Custom cursor effect
  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime.current;
      const deltaX = e.clientX - lastMousePos.current.x;
      const deltaY = e.clientY - lastMousePos.current.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const speed = distance / (deltaTime || 1);
      
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setMouseSpeed(speed);
      
      // Create particle trail based on speed
      if (speed > 0.5) {
        createParticle(e.clientX, e.clientY, Math.min(speed * 2, 10));
      }
      
      lastMousePos.current = { x: e.clientX, y: e.clientY };
      lastTime.current = currentTime;
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);
      createRipple(e.clientX, e.clientY);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  const createParticle = (x: number, y: number, intensity: number) => {
    const colors = [
      'rgba(255,0,0,0.8)',
      'rgba(255,165,0,0.8)',
      'rgba(255,255,0,0.8)',
      'rgba(0,255,0,0.8)',
      'rgba(0,255,255,0.8)',
      'rgba(0,0,255,0.8)',
      'rgba(128,0,255,0.8)',
      'rgba(255,0,255,0.8)'
    ];
    
    const numParticles = Math.min(Math.floor(intensity), 5);
    
    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      const size = Math.random() * 8 + 4;
      const color = colors[Math.floor(Math.random() * colors.length)];
      const offsetX = (Math.random() - 0.5) * 30;
      const offsetY = (Math.random() - 0.5) * 30;
      
      particle.className = 'particle';
      particle.style.left = `${x + offsetX - size/2}px`;
      particle.style.top = `${y + offsetY - size/2}px`;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
      particle.style.boxShadow = `0 0 ${size * 2}px ${color}`;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 1000);
    }
  };

  const createRipple = (x: number, y: number) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${x - 50}px`;
    ripple.style.top = `${y - 60}px`;
    document.body.appendChild(ripple);

    setTimeout(() => {
      document.body.removeChild(ripple);
    }, 600);
  };

  // Dark mode toggle
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Easter egg logic
  const easterEggMessages = [
    "🚀 Welcome to the SinghOps universe!",
    "☁️ Where Infrastructure meets Innovation!",
    "⚡ Automation is our superpower!",
    "🔧 Building the future, one deployment at a time!",
    "🌟 You've discovered the secret of scalable systems!"
  ];

  const typeWriter = (text: string, callback?: () => void) => {
    setTypedText('');
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length) {
        clearInterval(timer);
        if (callback) callback();
      }
    }, 50);
  };

  const triggerConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const handleLogoClick = () => {
    setIsLogoAnimating(true);
    setTimeout(() => setIsLogoAnimating(false), 300);
    
    setEasterEggCount(prev => prev + 1);
    
    if (easterEggCount >= 4) {
      const randomMessage = easterEggMessages[Math.floor(Math.random() * easterEggMessages.length)];
      setShowEasterEgg(true);
      typeWriter(randomMessage, () => {
        triggerConfetti();
        // Play a subtle sound effect (optional)
        try {
          const audio = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmwhBSuBzvLZiTYIG2m98OScTgwOUarm7blmGgU7k9n1unEiBC13yO/eizEIHWq+8+OWT');
          audio.volume = 0.1;
          audio.play().catch(() => {}); // Ignore errors if audio fails
        } catch (e) {
          // Ignore audio errors
        }
      });
      setTimeout(() => {
        setShowEasterEgg(false);
        setTypedText('');
      }, 5000);
      setEasterEggCount(0);
    }
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const downloadResume = () => {
    // Simulate resume download
    const link = document.createElement('a');
    link.href = '#'; // Replace with actual resume URL
    link.download = 'Gursimran_Singh_Resume.pdf';
    link.click();
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-black text-white' : 'bg-white text-gray-800'}`}>
      {/* Tech Background */}
      <div className="tech-background fixed inset-0 -z-10">
        <div className="geometric-shape shape-1"></div>
        <div className="geometric-shape shape-2"></div>
        <div className="geometric-shape shape-3"></div>
        <div className="geometric-shape shape-4"></div>
        <div className="geometric-shape shape-5"></div>
        <div className="geometric-shape shape-6"></div>
        <div className="digital-wave"></div>
      </div>

      {/* Custom Cursor */}
      <div 
        className={`custom-cursor ${isClicking ? 'cursor-clicking' : ''}`}
        style={{
          left: `${cursorPosition.x - 10}px`,
          top: `${cursorPosition.y - 10}px`,
        }}
      >
        <div className="cursor-dot bg-gradient-to-r from-purple-400 to-blue-500"></div>
      </div>
      <div 
        className={`cursor-trail ${isClicking ? 'cursor-trail-clicking' : ''}`}
        style={{
          left: `${cursorPosition.x - 20}px`,
          top: `${cursorPosition.y - 20}px`,
        }}
      ></div>

      {/* Easter Egg Animation */}
      {showEasterEgg && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="bg-black/50 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-4">
            <div className="text-center">
              <div className="text-4xl mb-4 animate-bounce">🚀</div>
              <div 
                className="text-2xl font-bold bg-gradient-to-r from-[#0891b2] to-[#1b99b8] bg-clip-text text-transparent animate-pulse"
                style={{
                  backgroundImage: 'linear-gradient(45deg, #0891b2, #1b99b8, #0891b2)',
                  backgroundSize: '200% 200%',
                  animation: 'gradient 2s ease infinite, pulse 1s ease-in-out infinite'
                }}
              >
                {typedText}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed top-4 left-4 right-4 z-40 transition-all duration-300 ${isDarkMode ? 'bg-gray-900/20 border-gray-700/30 shadow-cyan-500/10' : 'bg-white/20 border-gray-200/30 shadow-cyan-500/10'} backdrop-blur-md border rounded-3xl shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <button onClick={handleLogoClick} className="flex items-center space-x-2 group">
                <img 
                  src="/pc.png" 
                  alt="SinghOps Logo" 
                  className="h-12 w-12 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 object-cover"
                />
                <span className={`text-xl font-bold transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>SinghOps</span>
              </button>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hero')} className={`transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Home</button>
              <button onClick={() => scrollToSection('about')} className={`transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>About</button>
              <button onClick={() => scrollToSection('projects')} className={`transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Projects</button>
              <button onClick={() => scrollToSection('skills')} className={`transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Skills</button>
              <button onClick={() => scrollToSection('blog')} className={`transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Blog</button>
              <button onClick={() => scrollToSection('contact')} className={`transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Contact</button>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isDarkMode ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
              >
                {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 animate-fadeIn">
              <div className="flex flex-col space-y-2">
                <button onClick={() => scrollToSection('hero')} className={`text-left py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Home</button>
                <button onClick={() => scrollToSection('about')} className={`text-left py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>About</button>
                <button onClick={() => scrollToSection('projects')} className={`text-left py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Projects</button>
                <button onClick={() => scrollToSection('skills')} className={`text-left py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Skills</button>
                <button onClick={() => scrollToSection('blog')} className={`text-left py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Blog</button>
                <button onClick={() => scrollToSection('contact')} className={`text-left py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}>Contact</button>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  className={`flex items-center space-x-2 py-2 transition-colors ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}
                >
                  {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                  <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Interactive Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className={`max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <div className="sticky top-0 flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700 bg-inherit">
              <h2 className="text-2xl font-bold">Interactive Resume</h2>
              <div className="flex space-x-2">
                <button
                  onClick={downloadResume}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-blue-700 hover:bg-blue-800'} text-white`}
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => setIsResumeOpen(false)}
                  className={`p-2 rounded-lg transition-all duration-200 hover:scale-110 ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-8">
              {/* Resume Header */}
              <div className="text-center">
                <h1 className="text-3xl font-bold mb-2">Gursimran Singh</h1>
                <p className="text-xl text-cyan-600 mb-4">Cloud & DevOps Engineer</p>
                <div className="flex justify-center space-x-4 text-sm">
                  <span>gursimran@singhops.net</span>
                  <span>•</span>
                  <span>LinkedIn: gursimran-singh-269ba5224</span>
                  <span>•</span>
                  <span>GitHub: gursimran531</span>
                </div>
              </div>

              {/* Experience Section */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold border-b pb-2">Professional Experience</h2>
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg transition-all duration-200 hover:scale-[1.02] ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-50 hover:bg-gray-100'}`}>
                    <h3 className="text-lg font-semibold">Founder & Cloud Engineer</h3>
                    <p className="text-cyan-600 font-medium">SinghOps • 2023 - Present</p>
                    <ul className="mt-2 space-y-1 text-sm list-disc list-inside">
                      <li>Built scalable cloud infrastructure using Terraform and AWS services</li>
                      <li>Implemented CI/CD pipelines with GitHub Actions for automated deployments</li>
                      <li>Designed and deployed containerized applications using Docker and AWS ECS</li>
                      <li>Created Infrastructure as Code solutions for multi-tier architectures</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Skills Section */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">Technical Skills</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cloud Platforms</h3>
                    <div className="flex flex-wrap gap-1">
                      {['AWS', 'EC2', 'S3', 'Lambda', 'RDS', 'VPC'].map(skill => (
                        <span key={skill} className={`px-2 py-1 text-xs rounded transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">DevOps Tools</h3>
                    <div className="flex flex-wrap gap-1">
                      {['Terraform', 'Docker', 'GitHub Actions', 'CI/CD', 'Ansible'].map(skill => (
                        <span key={skill} className={`px-2 py-1 text-xs rounded transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-green-900 text-green-200' : 'bg-green-100 text-green-800'}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Programming</h3>
                    <div className="flex flex-wrap gap-1">
                      {['Python', 'JavaScript', 'Bash', 'YAML', 'JSON'].map(skill => (
                        <span key={skill} className={`px-2 py-1 text-xs rounded transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-purple-900 text-purple-200' : 'bg-purple-100 text-purple-800'}`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <h2 className="text-2xl font-bold border-b pb-2">Certifications</h2>
                <div className="space-y-2">
                  {[
                    'AWS Cloud Practitioner',
                    'AWS Solutions Architect Associate',
                    'AWS Developer Associate'
                  ].map(cert => (
                    <div key={cert} className={`flex items-center space-x-2 p-2 rounded transition-all duration-200 hover:scale-[1.02] ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'}`}>
                      <Award className="h-5 w-5 text-yellow-500" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className={`pt-20 min-h-screen flex items-center relative overflow-hidden ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-gray-800' : 'bg-gradient-to-br from-gray-50 to-white'}`}>
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className={`absolute top-20 left-10 w-20 h-20 border-2 rounded-full animate-pulse ${isDarkMode ? 'border-cyan-400' : 'border-blue-700'}`}></div>
          <div className={`absolute top-40 right-20 w-16 h-16 border-2 rounded-lg rotate-45 animate-spin-slow ${isDarkMode ? 'border-cyan-400' : 'border-cyan-500'}`}></div>
          <div className={`absolute bottom-40 left-1/4 w-12 h-12 border-2 rounded-full animate-bounce ${isDarkMode ? 'border-cyan-400' : 'border-blue-700'}`}></div>
          <div className={`absolute bottom-20 right-1/3 w-24 h-24 border-2 rounded-lg rotate-12 animate-pulse ${isDarkMode ? 'border-cyan-400' : 'border-cyan-500'}`}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-8 animate-fadeInUp">
              <div className="inline-flex items-center justify-center w-32 h-32 rounded-2xl mb-6 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <img 
                  src="/profile.jpg" 
                  alt="Gursimran Singh" 
                  className="h-32 w-32 rounded-xl object-cover image-rendering-crisp-edges"
                  style={{
                    imageRendering: 'crisp-edges',
                    filter: 'contrast(1.1) brightness(1.05) saturate(1.1)',
                    backfaceVisibility: 'hidden',
                    transform: 'translateZ(0)'
                  }}
                />
              </div>
            </div>
            
            <h1 className={`text-4xl md:text-6xl font-bold mb-6 leading-tight animate-fadeInUp animation-delay-200 -mt-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Gursimran Singh
              <span className="block text-2xl md:text-3xl font-normal mt-2 text-gray-300">
                Cloud & DevOps Engineer
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-cyan-600 font-medium mb-12 animate-fadeInUp animation-delay-400">
              Infrastructure as Code. Automation as Standard.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp animation-delay-600">
              <button 
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold flex items-center justify-center space-x-2 ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'}`}
              >
                <Code className="h-5 w-5" />
                <span>View Projects</span>
              </button>
              
              <button 
                onClick={() => scrollToSection('blog')}
                className={`border px-8 py-4 rounded-lg transition-all duration-200 hover:scale-105 font-semibold flex items-center justify-center space-x-2 ${isDarkMode ? 'border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-800' : 'border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50'}`}
              >
                <ExternalLink className="h-5 w-5" />
                <span>Read Blog</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className={`h-6 w-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-400'}`} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>About Me</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <p className={`text-lg leading-relaxed mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                I'm an AWS-certified Cloud & DevOps Engineer passionate about building scalable, 
                automated infrastructure solutions. As the founder of SinghOps, I specialize in 
                Infrastructure as Code, CI/CD pipelines, and cloud automation.
              </p>
              
              <p className={`text-lg leading-relaxed mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                My expertise spans across AWS services, containerization, automation tools, and 
                modern DevOps practices. I believe in making infrastructure deployment as simple 
                and reliable as possible through code and automation.
              </p>

              <div className="flex flex-wrap gap-3">
                {['AWS', 'Terraform', 'Docker', 'GitHub Actions', 'CI/CD', 'Infrastructure as Code'].map((skill, index) => (
                  <a
                    href={
                      skill === 'AWS' ? 'https://aws.amazon.com' :
                      skill === 'Terraform' ? 'https://www.terraform.io' :
                      skill === 'Docker' ? 'https://www.docker.com' :
                      skill === 'GitHub Actions' ? 'https://github.com/features/actions' :
                      skill === 'CI/CD' ? 'https://about.gitlab.com/topics/ci-cd/' :
                      'https://en.wikipedia.org/wiki/Infrastructure_as_code'
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    key={skill}
                    className={`inline-block px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 hover:scale-105 animate-fadeInUp cursor-pointer ${isDarkMode ? 'bg-blue-900 text-blue-200 hover:bg-blue-800' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </a>
                ))}
              </div>
            </div>

            <div className={`p-8 rounded-2xl animate-fadeInRight ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
              <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Certifications</h3>
              
              <div className="space-y-4">
                {[
                  { name: 'AWS Cloud Practitioner', desc: 'Foundation level certification', url: 'https://www.credly.com/badges/318a797a-ac9a-435e-b7f4-1159a05266ed/public_url' },
                  { name: 'AWS Solutions Architect Associate', desc: 'Architecture and design expertise', url: 'https://www.credly.com/badges/933b51a0-c260-470b-9556-1b4cacd12b99/public_url' },
                  { name: 'AWS Developer Associate', desc: 'Application development on AWS', url: 'https://www.credly.com/badges/15643c17-b769-4190-b5b8-24a81464787c/public_url' }
                ].map((cert, index) => (
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={cert.name}
                    className={`flex items-start space-x-3 p-3 rounded-lg transition-all duration-200 hover:scale-[1.02] animate-fadeInUp cursor-pointer ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-white hover:shadow-md'}`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 animate-pulse" />
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{cert.name}</h4>
                      <p className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{cert.desc}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Projects & Case Studies</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Server,
                title: 'Terraform 3-Tier AWS Architecture',
                description: 'Complete Infrastructure as Code implementation with multi-AZ deployment, Application Load Balancer, NAT Gateway, and RDS database setup.',
                tags: ['Terraform', 'AWS', 'VPC', 'RDS', 'ALB'],
                color: 'blue'
              },
              {
                icon: Code,
                title: 'AWS Lex Chatbot',
                description: 'Intelligent chatbot implementation using AWS Lex with natural language processing and integration with backend services.',
                tags: ['AWS Lex', 'Lambda', 'API Gateway', 'DynamoDB'],
                color: 'green'
              },
              {
                icon: GitBranch,
                title: 'CI/CD Pipeline with GitHub Actions',
                description: 'Fully automated CI/CD pipeline with testing, building, and deployment stages using GitHub Actions and AWS services.',
                tags: ['GitHub Actions', 'Docker', 'AWS ECS', 'ECR'],
                color: 'purple'
              },
              {
                icon: Cloud,
                title: 'AI-Powered Business Website with Bolt',
                description: 'Complete business website created entirely using AI and Bolt.new - no manual coding required. Showcases the power of AI-driven development.',
                tags: ['Bolt.new', 'AI Development', 'React', 'No-Code'],
                color: 'cyan'
              }
            ].map((project, index) => (
              <div 
                key={project.title}
                className={`p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fadeInUp group ${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <project.icon className={`h-8 w-8 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${isDarkMode ? 'text-cyan-400' : 'text-blue-700'}`} />
                  <h3 className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
                </div>
                
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tag}
                      className={`px-2 py-1 rounded text-xs font-medium transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      style={{ animationDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <button className={`flex items-center space-x-1 font-medium transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-700 hover:text-blue-800'}`}>
                    <a 
                      href={
                        project.title === 'Terraform 3-Tier AWS Architecture' ? 'https://github.com/gursimran531/Terraform-Projects.git' :
                        project.title === 'CI/CD Pipeline with GitHub Actions' ? 'https://github.com/gursimran531/CI-CD-Pipeline-AWS-Project.git' :
                        project.title === 'AWS Lex Chatbot' ? 'https://github.com/gursimran531/Lex-Chat-Project.git' :
                        project.title === 'AI-Powered Business Website with Bolt' ? 'https://github.com/gursimran531/bhujhang_website.git' :
                        'https://github.com/gursimran531'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                  </button>
                  <button className={`flex items-center space-x-1 font-medium transition-all duration-200 hover:scale-105 ${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'}`}>
                    <a 
                      href={
                        project.title === 'Terraform 3-Tier AWS Architecture' ? 'https://github.com/gursimran531/Terraform-Projects.git' :
                        project.title === 'CI/CD Pipeline with GitHub Actions' ? 'https://github.com/gursimran531/CI-CD-Pipeline-AWS-Project.git' :
                        project.title === 'AWS Lex Chatbot' ? 'https://github.com/gursimran531/Lex-Chat-Project.git' :
                        project.title === 'AI-Powered Business Website with Bolt' ? 'https://github.com/gursimran531/bhujhang_website.git' :
                        'https://github.com/gursimran531'
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Documentation</span>
                    </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Skills & Technologies</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Cloud,
                title: 'Cloud Platforms',
                description: 'AWS services, cloud architecture, and scalable solutions',
                skills: ['AWS', 'EC2', 'S3', 'Lambda', 'RDS'],
                color: 'blue'
              },
              {
                icon: Code,
                title: 'Infrastructure as Code',
                description: 'Automated infrastructure provisioning and management',
                skills: ['Terraform', 'CloudFormation', 'Ansible'],
                color: 'cyan'
              },
              {
                icon: Server,
                title: 'CI/CD & Automation',
                description: 'Continuous integration and deployment pipelines',
                skills: ['GitHub Actions', 'Docker', 'Kubernetes', 'Jenkins'],
                color: 'green'
              }
            ].map((skill, index) => (
              <div 
                key={skill.title}
                className={`text-center animate-fadeInUp group`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                  skill.color === 'blue' ? (isDarkMode ? 'bg-blue-900' : 'bg-blue-100') :
                  skill.color === 'cyan' ? (isDarkMode ? 'bg-cyan-900' : 'bg-cyan-100') :
                  (isDarkMode ? 'bg-green-900' : 'bg-green-100')
                }`}>
                  <skill.icon className={`h-10 w-10 ${
                    skill.color === 'blue' ? (isDarkMode ? 'text-blue-400' : 'text-blue-700') :
                    skill.color === 'cyan' ? (isDarkMode ? 'text-cyan-400' : 'text-cyan-600') :
                    (isDarkMode ? 'text-green-400' : 'text-green-600')
                  }`} />
                </div>
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{skill.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{skill.description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {skill.skills.map((s, skillIndex) => (
                    <span 
                      key={s}
                      className={`px-2 py-1 rounded text-xs transition-all duration-200 hover:scale-105 ${isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-700'}`}
                      style={{ animationDelay: `${skillIndex * 100}ms` }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Tech Skills Marquee Section */}
          <TechSkills />
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Latest Blog Posts</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                category: 'AWS • DevOps',
                title: 'Building Scalable Infrastructure with Terraform',
                description: 'Learn how to create reusable, scalable infrastructure using Terraform modules and best practices.',
                readTime: '5 min read'
              },
              {
                category: 'CI/CD • GitHub Actions',
                title: 'Automated Deployments with GitHub Actions',
                description: 'Complete guide to setting up automated CI/CD pipelines for cloud applications.',
                readTime: '8 min read'
              },
              {
                category: 'Docker • Containerization',
                title: 'Docker Best Practices for Production',
                description: 'Essential Docker practices for building secure, efficient containers in production environments.',
                readTime: '6 min read'
              }
            ].map((post, index) => (
              <div 
                key={post.title}
                className={`p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] animate-fadeInUp group cursor-pointer ${isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white'}`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-cyan-600 text-sm font-medium mb-2">{post.category}</div>
                <h3 className={`text-xl font-bold mb-3 group-hover:text-cyan-600 transition-colors ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{post.title}</h3>
                <p className={`mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{post.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>{post.readTime}</span>
                  <ArrowRight className={`h-4 w-4 transition-all duration-200 group-hover:translate-x-1 ${isDarkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center animate-fadeInUp">
            <a 
              href="https://blog.singhops.net"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'}`}
            >
              <span>Read More on blog.singhops.net</span>
              <ExternalLink className="h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fadeInUp">
            <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Let's Connect</h2>
            <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-fadeInLeft">
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Get in Touch</h3>
              <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Interested in discussing cloud infrastructure, DevOps practices, or potential collaborations? 
                I'd love to hear from you!
              </p>

              <div className="space-y-6">
                {[
                  { icon: Mail, title: 'Email', value: 'gursimran@singhops.net', href: 'mailto:gursimran@singhops.net' },
                  { icon: Linkedin, title: 'LinkedIn', value: 'www.linkedin.com/in/gursimran-singh-269ba5224', href: 'https://www.linkedin.com/in/gursimran-singh-269ba5224' },
                  { icon: Github, title: 'GitHub', value: 'github.com/gursimran531', href: 'https://github.com/gursimran531' }
                ].map((contact, index) => (
                  <div 
                    key={contact.title}
                    className={`flex items-center space-x-4 animate-fadeInUp group`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`p-3 rounded-lg transition-all duration-300 group-hover:scale-110 ${isDarkMode ? 'bg-gray-700' : 'bg-blue-100'}`}>
                      <contact.icon className={`h-6 w-6 ${isDarkMode ? 'text-cyan-400' : 'text-blue-700'}`} />
                    </div>
                    <div>
                      <h4 className={`font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{contact.title}</h4>
                      <a 
                        href={contact.href} 
                        target={contact.title !== 'Email' ? '_blank' : undefined}
                        rel={contact.title !== 'Email' ? 'noopener noreferrer' : undefined}
                        className={`transition-colors hover:scale-105 inline-block ${isDarkMode ? 'text-gray-300 hover:text-cyan-400' : 'text-gray-600 hover:text-blue-700'}`}
                      >
                        {contact.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button 
                  onClick={downloadResume}
                  className={`px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 hover:shadow-lg font-semibold flex items-center space-x-2 ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-cyan-600 hover:bg-cyan-700 text-white'}`}
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>

            <div className="animate-fadeInRight">
              <form onSubmit={handleSubmit} className={`p-8 rounded-2xl ${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <h3 className={`text-xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Send a Message</h3>
                
                <div className="space-y-6">
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                      rows={5}
                      className={`w-full px-4 py-3 border rounded-lg transition-all duration-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent ${isDarkMode ? 'bg-gray-600 border-gray-500 text-white placeholder-gray-400' : 'bg-white border-gray-300'}`}
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className={`w-full py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-lg font-semibold ${isDarkMode ? 'bg-cyan-600 hover:bg-cyan-700 text-white' : 'bg-blue-700 hover:bg-blue-800 text-white'}`}
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Footer */}
      <footer className="bg-black/80 backdrop-blur-sm border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Contact Information */}
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {/* Email */}
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <a href="mailto:gursimran@singhops.net" className="font-body hover:underline">
                    gursimran@singhops.net
                  </a>
                </div>
                
                {/* Canada Phone & WhatsApp */}
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-green-400" />
                  <div className="font-body">
                    <a href="tel:+16475103345" className="hover:underline">+1 647 510 3345</a>
                    <span className="text-gray-500 ml-2">(Canada)</span>
                  </div>
                </div>
                
                {/* WhatsApp */}
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <MessageCircle className="w-5 h-5 text-green-500" />
                  <a href="https://wa.me/16475103345" target="_blank" rel="noopener noreferrer" className="font-body hover:underline">
                    WhatsApp: +1 647 510 3345
                  </a>
                </div>
                
                {/* India Phone */}
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Phone className="w-5 h-5 text-orange-400" />
                  <div className="font-body">
                    <a href="tel:+917589424446" className="hover:underline">+91 7589 424 446</a>
                    <span className="text-gray-500 ml-2">(India)</span>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                  <a href="https://www.linkedin.com/in/gursimran-singh-269ba5224" target="_blank" rel="noopener noreferrer" className="font-body hover:underline">
                    linkedin.com
                  </a>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-display text-xl font-bold text-white mb-6">Quick Links</h3>
              <div className="space-y-3">
                <a href="#about" className="block text-gray-300 hover:text-white transition-colors font-body hover:underline">
                  About Me
                </a>
                <a href="#resume" className="block text-gray-300 hover:text-white transition-colors font-body hover:underline">
                  Resume
                </a>
                <a href="https://github.com/gursimran531" target="_blank" rel="noopener noreferrer" className="block text-gray-300 hover:text-white transition-colors font-body hover:underline">
                  GitHub Projects
                </a>
                <a href="mailto:gursimran@singhops.net" className="block text-gray-300 hover:text-white transition-colors font-body hover:underline">
                  Hire Me
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-400 font-body">
              © 2024 SinghOps - Gursimran Singh. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={() => setIsResumeModalOpen(false)} 
      />
    </div>
  );
}

export default App;
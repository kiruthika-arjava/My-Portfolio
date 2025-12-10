import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Github, Linkedin, ExternalLink, Star, Sparkles, ArrowRight } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './App.css';

// Initialize EmailJS
emailjs.init('EyY7IJGhHURMNFuEs');

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [imageClicked, setImageClicked] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            transition: 'all 0.3s ease'
          }}
        ></div>
        
        {/* Blinking Circles */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-ping" style={{animationDuration: '2s'}}></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-pink-500 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-40 w-5 h-5 bg-cyan-500 rounded-full animate-ping" style={{animationDuration: '2.5s', animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-20 w-4 h-4 bg-blue-500 rounded-full animate-ping" style={{animationDuration: '3.5s', animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 left-10 w-3 h-3 bg-green-500 rounded-full animate-ping" style={{animationDuration: '2.8s', animationDelay: '2s'}}></div>
        <div className="absolute top-60 right-60 w-4 h-4 bg-yellow-500 rounded-full animate-ping" style={{animationDuration: '3.2s', animationDelay: '0.8s'}}></div>
        <div className="absolute bottom-60 left-60 w-3 h-3 bg-red-500 rounded-full animate-ping" style={{animationDuration: '2.3s', animationDelay: '2.5s'}}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-10 left-1/4 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-purple-300 rounded-full animate-bounce" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-pink-300 rounded-full animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-bounce" style={{animationDuration: '4.5s', animationDelay: '1.8s'}}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold">
              <span className="text-white">Kiruthika</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">.dev</span>
            </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
            
            <button
              className="md:hidden p-2 text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-white/10">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl relative z-10">
          <div className="relative mb-8">
            <div 
              className={`w-40 h-40 mx-auto relative cursor-pointer transition-all duration-300 ${imageClicked ? 'animate-pulse' : 'hover:scale-105'}`}
              onClick={() => {
                setImageClicked(true);
                setTimeout(() => setImageClicked(false), 800);
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-spin ${imageClicked ? 'shadow-2xl shadow-purple-500/50' : ''}`} style={{animationDuration: '8s'}}></div>
              <div className="absolute inset-2 bg-black rounded-full"></div>
              <img 
                src="/WhatsApp Image 2025-09-11 at 00.14.04_cd3915fb.jpg" 
                alt="Kiruthika M.G" 
                className="absolute inset-4 w-32 h-32 object-cover rounded-full"
              />
              {imageClicked && (
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/30 to-pink-400/30 rounded-full animate-ping"></div>
              )}
            </div>
            <div className="absolute -top-4 -right-4">
              <Sparkles className={`text-yellow-400 ${imageClicked ? 'animate-spin text-cyan-400' : 'animate-pulse'}`} size={24} />
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6">
            <span className="block text-white">CREATIVE</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 animate-pulse">
              DEVELOPER
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Transforming ideas into stunning digital experiences
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button
              onClick={() => scrollToSection('projects')}
              className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
            >
              Explore Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <Star className="text-purple-400" size={20} />
        </div>
        <div className="absolute bottom-20 right-10 animate-bounce" style={{animationDelay: '1s'}}>
          <Star className="text-pink-400" size={16} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              ABOUT <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">ME</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  Currently pursuing B.Sc. Computer Science at Nachiappa Swamigal Arts and Science College. 
                  My journey began with Hope3 Foundation, where I discovered my passion for creating digital magic.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  I specialize in crafting immersive web experiences that blend cutting-edge technology 
                  with intuitive design. Every line of code tells a story.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-3 text-purple-300">🎓 Education</h3>
                <p className="text-gray-300">B.Sc. Computer Science<br />Nachiappa Swamigal Arts and Science College</p>
              </div>
              
              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-300">⚡ Experience</h3>
                <p className="text-gray-300">
                  <a href="https://www.hope3.org/" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors underline">
                    Hope3 Foundation
                  </a> (2024 - Present)<br />Advanced web development & AI technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              TECH <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">STACK</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'HTML5', glow: 'shadow-orange-500/50', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
              { name: 'CSS3', glow: 'shadow-blue-500/50', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
              { name: 'JavaScript', glow: 'shadow-yellow-500/50', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
              { name: 'React', glow: 'shadow-cyan-500/50', url: 'https://react.dev' },
              { name: 'Tailwind', glow: 'shadow-teal-500/50', url: 'https://tailwindcss.com' },
              { name: 'C/C++', glow: 'shadow-gray-500/50', url: 'https://cplusplus.com' },
              { name: 'Databases', glow: 'shadow-green-500/50', url: 'https://www.mysql.com' },
              { name: 'shadcn/ui', glow: 'shadow-purple-500/50', url: 'https://ui.shadcn.com' }
            ].map((skill, index) => (
              <div key={skill.name} className="group">
                <a href={skill.url} target="_blank" rel="noopener noreferrer" className="block">
                  <div className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:shadow-2xl ${skill.glow} transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer`}>
                    <div className="text-4xl mb-4">💎</div>
                    <h3 className="font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              FEATURED <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">WORK</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'AI Study Agent',
                description: 'Next-gen learning assistant with AI-powered personalization and adaptive algorithms.',
                image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop',
                tech: ['AI', 'React', 'Node.js']
              },
              {
                title: 'Crew Call',
                description: 'Revolutionary communication platform for seamless event management and collaboration.',
                image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop',
                tech: ['React', 'WebRTC', 'Socket.io']
              },
              {
                title: 'Flower Boutique',
                description: 'Elegant e-commerce experience with immersive design and smooth interactions.',
                image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
                tech: ['HTML', 'CSS', 'JavaScript']
              },
              {
                title: 'Smart Calculator',
                description: 'Advanced calculator with beautiful UI and enhanced mathematical capabilities.',
                image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
                tech: ['JavaScript', 'CSS3', 'HTML5']
              },
              {
                title: 'Interactive Game',
                description: 'Engaging gaming experience with smooth animations and responsive controls.',
                image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop',
                tech: ['Canvas', 'JavaScript', 'CSS']
              },
              {
                title: 'No-Code Portfolio',
                description: 'Professional showcase built with modern no-code tools and creative design.',
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
                tech: ['Wix', 'Canva', 'Design'],
                link: 'https://cutekirthi80.wixsite.com/kirthi-folio-2'
              }
            ].map((project, index) => (
              <div key={project.title} className="group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 transform hover:-translate-y-4">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                      >
                        View Live <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '15+', label: 'Projects Completed', icon: '🚀' },
              { number: '2+', label: 'Years Learning', icon: '📚' },
              { number: '8+', label: 'Technologies', icon: '⚡' },
              { number: '100%', label: 'Passion', icon: '❤️' }
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:bg-white/10 transition-all duration-500 transform hover:scale-110 hover:rotate-3">
                  <div className="text-3xl mb-2 group-hover:animate-bounce">{stat.icon}</div>
                  <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              LET'S <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">CONNECT</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-white">Ready to collaborate?</h3>
                <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                  Let's create something extraordinary together. I'm always excited to work on innovative projects.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <span className="text-gray-300">kiruthika33.work@gmail.com</span>
                  </div>
                  
                  <a 
                    href="https://www.linkedin.com/in/mg-kiruthika-b89034379/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center">
                      <Linkedin className="text-white" size={20} />
                    </div>
                    <span className="text-gray-300">LinkedIn Profile</span>
                  </a>
                  
                  <a 
                    href="https://github.com/dashboard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-900 rounded-xl flex items-center justify-center">
                      <Github className="text-white" size={20} />
                    </div>
                    <span className="text-gray-300">GitHub Profile</span>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8">
              <form className="space-y-6" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target as HTMLFormElement;
                const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                try {
                  const result = await emailjs.sendForm(
                    'service_j0m2ryk',
                    'template_d48cb48', 
                    form,
                    'EyY7IJGhHURMNFuEs'
                  );
                  
                  if (result.status === 200) {
                    alert('✅ Message sent successfully to kiruthika33.work@gmail.com!');
                    form.reset();
                  }
                } catch (error) {
                  console.error('EmailJS Error:', error);
                  alert('❌ Failed to send message. Please try the mailto option.');
                  
                  // Fallback to mailto
                  const formData = new FormData(form);
                  const name = formData.get('name');
                  const email = formData.get('email');
                  const subject = formData.get('subject');
                  const message = formData.get('message');
                  const mailtoLink = `mailto:kiruthika33.work@gmail.com?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  window.location.href = mailtoLink;
                } finally {
                  submitBtn.textContent = 'Send Message';
                  submitBtn.disabled = false;
                }
              }}>
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="Your Name" 
                  required
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                />
                <input 
                  type="email" 
                  name="from_email"
                  placeholder="Your Email" 
                  required
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                />
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  required
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300"
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows={5} 
                  required
                  className="w-full p-4 bg-white/5 border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:border-purple-500 focus:outline-none transition-all duration-300 resize-vertical"
                />
                <button 
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-2xl font-bold hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            Crafted with <span className="text-red-500">♥</span> by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-bold">
              Kiruthika M.G
            </span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;

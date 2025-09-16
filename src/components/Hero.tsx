import { ArrowDown, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import heroImage from '@/assets/hero-workspace.jpg';
import profilePhoto from '@/assets/profile-photo.png';
import { ProfileToggle } from '@/components/ProfileToggle';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const Hero = () => {
  const [showProfile, setShowProfile] = useState(true);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Modern developer workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-32 right-24 w-24 h-24 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-12 w-16 h-16 bg-primary/5 rounded-full blur-md animate-float" style={{ animationDelay: '4s' }} />

      {/* Profile Toggle */}
      <ProfileToggle onToggle={setShowProfile} />

      {/* Content */}
      <div className="relative z-10 container-apple section-padding text-center">
        <div className="animate-fade-in-up">
          {/* Profile Picture */}
          {showProfile && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="mb-8"
            >
              <Avatar className="w-32 h-32 mx-auto ring-4 ring-primary/20 hover:ring-primary/40 transition-all duration-300">
                <AvatarImage src={profilePhoto} alt="SaiTeja Pachikarri" className="object-cover" />
                <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                  SP
                </AvatarFallback>
              </Avatar>
            </motion.div>
          )}

          {/* Greeting */}
          <div className="glass-card inline-block px-6 py-3 mb-8 rounded-full">
            <p className="text-sm font-medium text-primary">Hello, I'm</p>
          </div>

          {/* Name */}
          <h1 className="heading-hero mb-6">
            SaiTeja
            <br />
            Pachikarri
          </h1>

          {/* Role */}
          <div className="heading-secondary mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Computer Science Student & Full-Stack Developer
          </div>

          {/* Description */}
          <p className="text-body-large max-w-3xl mx-auto mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Passionate about crafting elegant solutions and building impactful applications. 
            Specializing in Flutter, Node.js, and modern web technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button className="btn-primary hover-glow">
              <span className="flex items-center gap-2">
                View My Work
                <ExternalLink size={18} />
              </span>
            </button>
            <button className="btn-secondary">
              <span className="flex items-center gap-2">
                <Mail size={18} />
                Get In Touch
              </span>
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
            <a 
              href="https://github.com/saiteja" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full hover-lift"
            >
              <Github size={24} className="text-foreground" />
            </a>
            <a 
              href="https://linkedin.com/in/saiteja-pachikarri" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card p-4 rounded-full hover-lift"
            >
              <Linkedin size={24} className="text-foreground" />
            </a>
            <a 
              href="mailto:saitej1129@gmail.com"
              className="glass-card p-4 rounded-full hover-lift"
            >
              <Mail size={24} className="text-foreground" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={20} className="animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
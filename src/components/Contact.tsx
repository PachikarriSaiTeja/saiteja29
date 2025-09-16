import { Mail, MessageCircle, MapPin, Phone, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const codingProfiles = [
  { name: "LeetCode", url: "https://leetcode.com/saiteja", icon: "LC", stats: "500+ problems solved" },
  { name: "CodeChef", url: "https://codechef.com/users/saiteja", icon: "CC", stats: "3★ rating" },
  { name: "HackerRank", url: "https://hackerrank.com/saiteja", icon: "HR", stats: "Gold badges" },
  { name: "GeeksforGeeks", url: "https://auth.geeksforgeeks.org/user/saiteja", icon: "GG", stats: "Top contributor" }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    const mailtoLink = `mailto:saitej1129@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
    window.location.href = mailtoLink;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="section-padding">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="glass-card inline-block px-6 py-3 mb-6 rounded-full">
            <p className="text-sm font-medium text-primary">Get In Touch</p>
          </div>
          <h2 className="heading-primary mb-6">Let's Work Together</h2>
          <p className="text-body max-w-2xl mx-auto">
            Ready to bring your ideas to life? Whether it's a new project, collaboration, 
            or just a conversation about technology, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-secondary mb-4">Send a Message</h3>
              <p className="text-body mb-8">
                Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-card rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 glass-card rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 glass-card rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-card rounded-2xl border-0 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="Tell me about your project or how we can work together..."
                />
              </div>

              <button type="submit" className="btn-primary w-full hover-glow">
                <span className="flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </span>
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-secondary mb-4">Contact Information</h3>
              <p className="text-body mb-8">
                Prefer direct contact? Feel free to reach out through any of these channels.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <a 
                href="mailto:saitej1129@gmail.com"
                className="glass-card rounded-2xl p-6 hover-lift block"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground">saitej1129@gmail.com</p>
                  </div>
                </div>
              </a>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">Kakinada, Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-500/10 text-blue-600 rounded-2xl">
                    <MessageCircle size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">Response Time</h4>
                    <p className="text-muted-foreground">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/saiteja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-2xl hover-lift"
                >
                  <Github size={24} className="text-foreground" />
                </a>
                <a 
                  href="https://linkedin.com/in/saiteja-pachikarri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card p-4 rounded-2xl hover-lift"
                >
                  <Linkedin size={24} className="text-foreground" />
                </a>
              </div>
            </div>

            {/* Coding Profiles */}
            <div>
              <h4 className="font-medium text-foreground mb-4">Coding Profiles</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {codingProfiles.map((profile) => (
                  <a 
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-card rounded-2xl p-4 hover-lift block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center font-bold text-sm">
                        {profile.icon}
                      </div>
                      <div className="flex-1">
                        <h5 className="font-medium text-foreground text-sm">{profile.name}</h5>
                        <p className="text-xs text-muted-foreground">{profile.stats}</p>
                      </div>
                      <ExternalLink size={16} className="text-muted-foreground" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
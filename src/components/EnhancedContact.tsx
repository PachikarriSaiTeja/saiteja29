import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Send, CheckCircle, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'saitej1129@gmail.com',
    href: 'mailto:saitej1129@gmail.com',
    color: 'text-blue-500'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/PachikarriSaiTeja',
    href: 'https://github.com/PachikarriSaiTeja',
    color: 'text-gray-500'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/sai-teja-pachikarri',
    href: 'https://linkedin.com/in/sai-teja-pachikarri',
    color: 'text-blue-600'
  }
];

const codingProfiles = [
  { name: 'LeetCode', url: 'https://leetcode.com/u/saitej1129/', color: 'bg-orange-500' },
  { name: 'GeeksforGeeks', url: 'https://geeksforgeeks.org/user/22a91ajlup/', color: 'bg-green-600' },
  { name: 'CodeChef', url: 'https://codechef.com/users/saiteja1129', color: 'bg-amber-600' },
  { name: 'HackerRank', url: 'https://hackerrank.com/profile/22A91A05E9', color: 'bg-emerald-600' }
];

export const EnhancedContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "I'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={ref} className="section-padding bg-glass-subtle">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary mb-4">Let's Connect</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? Let's start a conversation!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="glass-card border-0"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="glass-card border-0"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                    className="glass-card border-0"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows={5}
                    required
                    className="glass-card border-0 resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full glass-card hover:glass-card-hover"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info & Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors group"
                  >
                    <div className={`p-3 rounded-full bg-white/10 ${info.color} group-hover:scale-110 transition-transform`}>
                      <info.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                    <ExternalLink className="h-4 w-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Coding Profiles */}
            <Card className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-6">Coding Profiles</h3>
              <div className="grid grid-cols-2 gap-4">
                {codingProfiles.map((profile, index) => (
                  <motion.a
                    key={profile.name}
                    href={profile.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="group"
                  >
                    <Badge 
                      className={`w-full justify-center py-3 px-4 ${profile.color} text-white hover:scale-105 transition-transform cursor-pointer`}
                    >
                      <span className="flex items-center gap-2">
                        {profile.name}
                        <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                    </Badge>
                  </motion.a>
                ))}
              </div>
            </Card>

            {/* Availability Status */}
            <Card className="glass-card p-8">
              <div className="flex items-center gap-3 mb-4">
                <CheckCircle className="h-6 w-6 text-green-500" />
                <h3 className="text-xl font-bold">Available for Opportunities</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                Currently seeking internships and entry-level positions in software development.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Full-time</Badge>
                <Badge variant="outline">Internships</Badge>
                <Badge variant="outline">Remote</Badge>
                <Badge variant="outline">Freelance</Badge>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ExternalLink, Github, Search, Star, Users, Calendar } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Hoot',
    description: 'A Flutter-based group project designed to improve communication skills with interactive dictation and sentence construction modules.',
    longDescription: 'Developed comprehensive communication enhancement platform featuring real-time feedback mechanisms, collaborative learning environment, and data-driven progress tracking.',
    tech: ['Flutter', 'Node.js', 'MongoDB'],
    category: 'Mobile App',
    featured: true,
    status: 'Live',
    team: '4 members',
    duration: '2 months',
    features: [
      'Real-time dictation feedback',
      'Sentence reconstruction challenges',
      'Progress tracking dashboard',
      'Team collaboration tools'
    ],
    github: 'https://github.com/PachikarriSaiTeja/hoot',
    demo: '#',
    image: '/api/placeholder/600/400',
  },
  {
    id: 2,
    title: 'LEEZ',
    description: 'A mobile rental platform that streamlines the process of browsing, requesting, and managing item rentals with real-time availability.',
    longDescription: 'Comprehensive rental management system featuring secure payment integration, real-time inventory tracking, and intelligent matching algorithms.',
    tech: ['Flutter', 'Firebase', 'Node.js'],
    category: 'Mobile App',
    featured: true,
    status: 'Development',
    team: '3 members',
    duration: '3 months',
    features: [
      'Real-time availability tracking',
      'Secure payment integration',
      'User rating and review system',
      'Geolocation-based search'
    ],
    github: 'https://github.com/PachikarriSaiTeja/leez',
    demo: '#',
    image: '/api/placeholder/600/400',
  },
];

const categories = ['All', 'Mobile App', 'Web App', 'API', 'Tools'];

export const ProjectShowcase = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const filteredProjects = projects.filter(project => {
    const matchesCategory = activeCategory === 'All' || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tech.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section ref={ref} className="section-padding bg-glass-subtle">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary mb-4">Featured Projects</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions built with modern technologies and best practices
          </p>
        </motion.div>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search projects, technologies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 glass-card border-0"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category)}
                size="sm"
                className="glass-card hover:glass-card-hover"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="glass-card hover:glass-card-hover transition-all duration-300 overflow-hidden group cursor-pointer h-full"
                    onClick={() => setSelectedProject(selectedProject === project.id ? null : project.id)}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl font-bold text-primary/20">{project.title[0]}</div>
                  </div>
                  {project.featured && (
                    <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </Badge>
                  )}
                  <Badge 
                    variant="secondary" 
                    className={`absolute top-4 right-4 ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex gap-2">
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {selectedProject === project.id ? project.longDescription : project.description}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {project.team}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {project.duration}
                    </div>
                  </div>

                  {selectedProject === project.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      transition={{ duration: 0.3 }}
                      className="mb-4"
                    >
                      <h4 className="font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <div className="h-1 w-1 bg-primary rounded-full" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
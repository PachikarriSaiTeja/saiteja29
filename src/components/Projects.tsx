import { ExternalLink, Github, Smartphone, Globe, Database, Users } from 'lucide-react';

const projects = [
  {
    title: "Hoot",
    description: "A comprehensive social media platform with real-time messaging, user profiles, and content sharing capabilities. Built with modern mobile-first architecture.",
    longDescription: "Hoot revolutionizes social connectivity with its intuitive interface and powerful features. The app includes real-time chat, story sharing, user discovery, and advanced content management systems.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Socket.io", "Firebase Auth"],
    features: ["Real-time messaging", "User profiles", "Content sharing", "Push notifications"],
    category: "Mobile App",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=focalpoint",
    githubUrl: "https://github.com/saiteja/hoot",
    liveUrl: "https://hoot-demo.com",
    status: "Live",
    users: "1000+"
  },
  {
    title: "LEEZ",
    description: "An innovative e-commerce platform with advanced inventory management, payment integration, and analytics dashboard for modern businesses.",
    longDescription: "LEEZ empowers businesses with a complete e-commerce solution featuring inventory tracking, payment processing, order management, and comprehensive analytics.",
    technologies: ["Flutter", "Firebase", "Node.js", "Stripe API", "Cloud Functions"],
    features: ["Payment integration", "Inventory tracking", "Analytics dashboard", "Order management"],
    category: "E-commerce",
    icon: Globe,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=focalpoint",
    githubUrl: "https://github.com/saiteja/leez",
    liveUrl: "https://leez-platform.com",
    status: "Beta",
    users: "500+"
  },
  {
    title: "Portfolio Analytics",
    description: "A comprehensive dashboard for tracking portfolio performance, market trends, and investment insights with real-time data visualization.",
    longDescription: "Advanced analytics platform that provides deep insights into investment portfolios with machine learning-powered predictions and risk assessment tools.",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js", "AWS Lambda"],
    features: ["Real-time tracking", "Performance analytics", "Risk assessment", "Market insights"],
    category: "Web App",
    icon: Database,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=focalpoint",
    githubUrl: "https://github.com/saiteja/portfolio-analytics",
    liveUrl: "https://analytics-demo.com",
    status: "Development",
    users: "Coming Soon"
  }
];

const Projects = () => {
  return (
    <section className="section-padding">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="glass-card inline-block px-6 py-3 mb-6 rounded-full">
            <p className="text-sm font-medium text-primary">Featured Work</p>
          </div>
          <h2 className="heading-primary mb-6">Projects & Innovations</h2>
          <p className="text-body max-w-2xl mx-auto">
            A showcase of impactful applications and innovative solutions that demonstrate 
            expertise in full-stack development and user-centered design.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-32">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Project Image */}
                <div className={`${!isEven ? 'lg:col-start-2' : ''}`}>
                  <div className="relative group">
                    <div className="glass-card rounded-3xl overflow-hidden hover-lift">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-80 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Project Status Badge */}
                      <div className="absolute top-6 left-6">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-400' :
                          project.status === 'Beta' ? 'bg-orange-500/20 text-orange-400' :
                          'bg-blue-500/20 text-blue-400'
                        }`}>
                          {project.status}
                        </span>
                      </div>

                      {/* Users Badge */}
                      <div className="absolute top-6 right-6">
                        <div className="glass-card px-3 py-1 rounded-full">
                          <span className="flex items-center gap-1 text-xs font-medium">
                            <Users size={12} />
                            {project.users}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <div className="space-y-6">
                    {/* Category & Icon */}
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 text-primary rounded-xl">
                        <IconComponent size={20} />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="heading-primary">{project.title}</h3>

                    {/* Description */}
                    <p className="text-body">{project.longDescription}</p>

                    {/* Features */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Key Features</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-3">
                      <h4 className="font-medium text-foreground">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span 
                            key={tech}
                            className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center justify-center"
                      >
                        <span className="flex items-center gap-2">
                          <ExternalLink size={18} />
                          View Live Demo
                        </span>
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary inline-flex items-center justify-center"
                      >
                        <span className="flex items-center gap-2">
                          <Github size={18} />
                          View Source
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
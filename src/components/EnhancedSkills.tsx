import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Code, Database, Smartphone, Globe, Server, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: 'Programming Languages',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'Dart', 'SQL'],
    color: 'text-blue-500',
  },
  {
    icon: Globe,
    title: 'Frontend Development',
    skills: ['Flutter', 'HTML/CSS', 'React', 'Tailwind CSS'],
    color: 'text-green-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    skills: ['Node.js', 'Spring Boot', 'REST APIs', 'MongoDB'],
    color: 'text-purple-500',
  },
  {
    icon: Database,
    title: 'Database & Cloud',
    skills: ['MongoDB', 'SQL', 'Firebase', 'AWS'],
    color: 'text-orange-500',
  },
  {
    icon: Wrench,
    title: 'Tools & Technologies',
    skills: ['Git/GitHub', 'Postman', 'VSCode', 'Android Studio'],
    color: 'text-red-500',
  },
  {
    icon: Smartphone,
    title: 'Concepts & Methodologies',
    skills: ['SDLC/STLC', 'DSA', 'OOP', 'Full Stack Architecture'],
    color: 'text-cyan-500',
  },
];

export const EnhancedSkills = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section ref={ref} className="section-padding">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-primary mb-4">Technical Expertise</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.title}
                  variant={activeCategory === index ? 'default' : 'outline'}
                  onClick={() => setActiveCategory(index)}
                  className="glass-card hover:glass-card-hover transition-all duration-300"
                >
                  <IconComponent className={`h-4 w-4 mr-2 ${category.color}`} />
                  {category.title}
                </Button>
              );
            })}
        </div>

        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-8"
        >
          <div className="flex items-center mb-6">
            {(() => {
              const IconComponent = skillCategories[activeCategory].icon;
              return <IconComponent className={`h-8 w-8 mr-4 ${skillCategories[activeCategory].color}`} />;
            })()}
            <h3 className="text-2xl font-bold">{skillCategories[activeCategory].title}</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skillCategories[activeCategory].skills.map((skill, skillIndex) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
              >
                <Badge 
                  variant="secondary" 
                  className="px-4 py-2 text-sm hover:scale-105 transition-transform duration-200 cursor-default"
                >
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
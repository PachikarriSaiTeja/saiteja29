import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

const experiences = [
  {
    id: 1,
    title: 'Technical Hub Intern',
    company: 'Technical Hub',
    duration: 'June 2024 - July 2024',
    location: 'Remote',
    type: 'Internship',
    description: 'Worked on Hoot, a Flutter-based group communication enhancement project.',
    achievements: [
      'Developed Dictation and Sentence Construction modules using Flutter',
      'Implemented real-time feedback mechanisms with Node.js backend',
      'Utilized MongoDB for storing user attempts and progress tracking',
      'Collaborated in agile team environment with full-stack approach'
    ],
    skills: ['Flutter', 'Node.js', 'MongoDB', 'Team Collaboration'],
    status: 'completed'
  },
  {
    id: 2,
    title: 'Java & DSA Trainee',
    company: 'GUVI C2C Program',
    duration: 'June 2024 - July 2024',
    location: 'Online',
    type: 'Training Program',
    description: 'Intensive program focused on Java programming and Data Structures & Algorithms.',
    achievements: [
      'Mastered core Java programming concepts and OOP principles',
      'Solved 100+ coding challenges across various difficulty levels',
      'Improved problem-solving skills through structured mentorship',
      'Completed regular assessments with consistent performance'
    ],
    skills: ['Java', 'Data Structures', 'Algorithms', 'Problem Solving'],
    status: 'completed'
  }
];

export const InteractiveTimeline = () => {
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
          <h2 className="heading-primary mb-4">Professional Experience</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            My journey through internships and training programs that shaped my technical expertise
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-6 w-4 h-4 bg-primary rounded-full ring-4 ring-background z-10" />

                {/* Content */}
                <div className="flex-1 md:max-w-lg">
                  <Card className="glass-card hover:glass-card-hover transition-all duration-300 p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge 
                          variant="secondary" 
                          className={`mb-2 ${exp.status === 'completed' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'}`}
                        >
                          {exp.type}
                        </Badge>
                        <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Building className="h-4 w-4" />
                          {exp.company}
                        </div>
                      </div>
                      <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                    </div>

                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4">{exp.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Key Achievements:</h4>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="h-1.5 w-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const stats = [
  { icon: Code, value: '50+', label: 'Projects Completed', color: 'text-blue-500' },
  { icon: Coffee, value: '1000+', label: 'Hours of Coding', color: 'text-amber-500' },
  { icon: Lightbulb, value: '20+', label: 'Technologies Mastered', color: 'text-green-500' },
  { icon: Users, value: '5+', label: 'Team Collaborations', color: 'text-purple-500' },
];

export const InteractiveStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
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
          <h2 className="heading-primary mb-4">Portfolio Stats</h2>
          <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
            Numbers that reflect my journey as a developer
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 text-center hover:glass-card-hover group cursor-pointer"
            >
              <div className="mb-4">
                <stat.icon className={`h-12 w-12 mx-auto ${stat.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-3xl font-bold mb-2"
              >
                {stat.value}
              </motion.div>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
import { Code2, Database, Globe, Smartphone, Server, Brain } from 'lucide-react';

const skillCategories = [
  {
    category: "Programming Languages",
    icon: Code2,
    skills: ["C", "C++", "Java", "Python", "Dart", "JavaScript", "SQL"],
    color: "bg-primary/10 text-primary"
  },
  {
    category: "Frontend Development",
    icon: Globe,
    skills: ["React", "Flutter", "HTML5", "CSS3", "Tailwind CSS", "Responsive Design"],
    color: "bg-emerald-500/10 text-emerald-600"
  },
  {
    category: "Mobile Development", 
    icon: Smartphone,
    skills: ["Flutter", "Dart", "Firebase", "Mobile UI/UX", "Cross-platform"],
    color: "bg-blue-500/10 text-blue-600"
  },
  {
    category: "Backend Development",
    icon: Server,
    skills: ["Node.js", "Spring Boot", "Express.js", "REST APIs", "Microservices"],
    color: "bg-orange-500/10 text-orange-600"
  },
  {
    category: "Databases & Cloud",
    icon: Database,
    skills: ["MongoDB", "Firebase", "MySQL", "AWS", "Cloud Architecture"],
    color: "bg-purple-500/10 text-purple-600"
  },
  {
    category: "Core Concepts",
    icon: Brain,
    skills: ["Data Structures", "Algorithms", "OOP", "SDLC", "STLC", "Problem Solving"],
    color: "bg-rose-500/10 text-rose-600"
  }
];

const Skills = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="glass-card inline-block px-6 py-3 mb-6 rounded-full">
            <p className="text-sm font-medium text-primary">Technical Expertise</p>
          </div>
          <h2 className="heading-primary mb-6">Skills & Technologies</h2>
          <p className="text-body max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and programming languages 
            that I use to build scalable, efficient, and user-friendly applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid-apple grid-auto-fit">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.category}
                className="glass-card rounded-3xl p-8 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-2xl ${category.color}`}>
                    <IconComponent size={24} />
                  </div>
                  <h3 className="heading-secondary text-xl">{category.category}</h3>
                </div>

                {/* Skills List */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skill}
                      className="px-3 py-1.5 bg-accent/50 text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/70 transition-colors"
                      style={{ animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Skill Level Indicator */}
                <div className="mt-6">
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Proficiency</span>
                    <span>Advanced</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-primary to-primary/70"
                      style={{ width: '85%' }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "5+", label: "Technologies Mastered" },
            { number: "2", label: "Years Experience" },
            { number: "100%", label: "Dedication" }
          ].map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="heading-primary text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
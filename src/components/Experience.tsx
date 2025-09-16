import { Calendar, MapPin, Award, Code, Users, TrendingUp } from 'lucide-react';

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Technical Hub",
    period: "2023 - Present",
    location: "Remote",
    description: "Developed and maintained web applications using modern frameworks, collaborated with cross-functional teams to deliver high-quality software solutions.",
    achievements: [
      "Built 5+ responsive web applications using React and Node.js",
      "Improved application performance by 40% through optimization",
      "Mentored junior developers in best practices",
      "Implemented CI/CD pipelines reducing deployment time by 60%"
    ],
    technologies: ["React", "Node.js", "MongoDB", "AWS", "Docker"],
    type: "internship",
    icon: Code
  },
  {
    role: "Software Development Trainee",
    company: "GUVI C2C Program", 
    period: "2023",
    location: "Chennai, India",
    description: "Intensive training program focusing on full-stack development, data structures, algorithms, and modern software engineering practices.",
    achievements: [
      "Completed 200+ hours of intensive coding bootcamp",
      "Built and deployed 3 major projects using MERN stack",
      "Achieved top 10% ranking in cohort of 500+ students",
      "Received certification in Full Stack Development"
    ],
    technologies: ["JavaScript", "React", "Express.js", "MongoDB", "Git"],
    type: "training",
    icon: Award
  },
  {
    role: "Computer Science Student",
    company: "Aditya Engineering College",
    period: "2021 - 2025",
    location: "Kakinada, India",
    description: "Pursuing BTech in Computer Science Engineering with focus on AI, ML, Data Mining, and Neural Networks. Maintaining strong academic performance.",
    achievements: [
      "Maintaining CGPA of 8.42/10",
      "Active member of coding club and tech societies",
      "Participated in 10+ hackathons and coding competitions",
      "Led team projects in AI and Machine Learning"
    ],
    technologies: ["Python", "Java", "C++", "AI/ML", "Data Structures"],
    type: "education",
    icon: Users
  }
];

const certifications = [
  { name: "AWS Certified Cloud Practitioner", issuer: "Amazon Web Services", year: "2023" },
  { name: "Cisco Networking Academy", issuer: "Cisco", year: "2023" },
  { name: "NDG Linux Unhatched", issuer: "Cisco", year: "2023" },
  { name: "CPA Programming Essentials", issuer: "Cisco", year: "2022" },
  { name: "PCAP Certified Associate", issuer: "Python Institute", year: "2022" }
];

const Experience = () => {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-apple">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="glass-card inline-block px-6 py-3 mb-6 rounded-full">
            <p className="text-sm font-medium text-primary">Professional Journey</p>
          </div>
          <h2 className="heading-primary mb-6">Experience & Education</h2>
          <p className="text-body max-w-2xl mx-auto">
            A timeline of professional growth, learning experiences, and achievements 
            that have shaped my expertise in software development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20" />

          <div className="space-y-16">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div key={exp.company} className="relative flex gap-8">
                  {/* Timeline Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 glass-card rounded-2xl flex items-center justify-center">
                      <IconComponent size={24} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="glass-card rounded-3xl p-8 hover-lift">
                      {/* Header */}
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                        <div>
                          <h3 className="heading-secondary mb-2">{exp.role}</h3>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <span className="font-medium text-primary">{exp.company}</span>
                            <div className="flex items-center gap-1">
                              <Calendar size={16} />
                              <span className="text-sm">{exp.period}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={16} />
                              <span className="text-sm">{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 lg:mt-0">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                            exp.type === 'internship' ? 'bg-emerald-500/20 text-emerald-400' :
                            exp.type === 'training' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-purple-500/20 text-purple-400'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-body mb-6">{exp.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="font-medium text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp size={18} />
                          Key Achievements
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.achievements.map((achievement, achievementIndex) => (
                            <div key={achievementIndex} className="flex items-start gap-3">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium text-foreground mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="px-3 py-1 bg-accent/50 text-accent-foreground rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-32">
          <div className="text-center mb-12">
            <h3 className="heading-secondary mb-4">Certifications & Awards</h3>
            <p className="text-body max-w-xl mx-auto">
              Professional certifications that validate expertise in cloud computing, 
              networking, and programming technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={cert.name}
                className="glass-card rounded-2xl p-6 hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 text-primary rounded-xl flex-shrink-0">
                    <Award size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground mb-1">{cert.name}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                    <span className="text-xs font-medium text-primary">{cert.year}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code2, Palette, TrendingUp } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical',
    icon: Code2,
    color: 'primary',
    skills: [
      { name: 'Python', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'PHP', level: 75 },
      { name: 'React', level: 88 },
      { name: 'HTML/CSS', level: 95 },
      { name: 'Firebase', level: 80 },
      { name: 'MySQL/MariaDB', level: 78 },
    ],
  },
  {
    title: 'Design',
    icon: Palette,
    color: 'secondary',
    skills: [
      { name: 'Photoshop', level: 90 },
      { name: 'Illustrator', level: 85 },
      { name: 'InDesign', level: 80 },
      { name: 'Figma', level: 92 },
      { name: 'Canva', level: 95 },
      { name: 'Motion Graphics', level: 75 },
    ],
  },
  {
    title: 'Marketing',
    icon: TrendingUp,
    color: 'primary',
    skills: [
      { name: 'Social Media Strategy', level: 88 },
      { name: 'Branding & Storytelling', level: 85 },
      { name: 'AI Marketing Tools', level: 82 },
      { name: 'Content Creation', level: 90 },
      { name: 'Analytics', level: 78 },
    ],
  },
];

const SkillBar = ({ name, level, delay, color }: { name: string; level: number; delay: number; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay, ease: 'easeOut' }}
          className={`h-full rounded-full ${color === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}
          style={{
            boxShadow: `0 0 20px ${color === 'secondary' ? 'hsl(var(--secondary) / 0.5)' : 'hsl(var(--primary) / 0.5)'}`,
          }}
        />
      </div>
    </div>
  );
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="skills" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="floating-orb w-96 h-96 bg-secondary/20 -bottom-48 -left-48"
          animate={{ x: [0, 40, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
        <motion.div
          className="floating-orb w-64 h-64 bg-primary/20 top-20 right-20"
          animate={{ x: [0, -20, 0], y: [0, 40, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            My Expertise
          </span>
          <h2 className="section-title">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A comprehensive toolkit spanning development, design, and digital marketing
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="card-glass group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`p-3 rounded-xl ${category.color === 'secondary' ? 'bg-secondary/20' : 'bg-primary/20'} group-hover:scale-110 transition-transform`}>
                  <category.icon className={`w-6 h-6 ${category.color === 'secondary' ? 'text-secondary' : 'text-primary'}`} />
                </div>
                <h3 className="text-xl font-display font-bold">{category.title}</h3>
              </div>

              <div>
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={categoryIndex * 0.2 + skillIndex * 0.1}
                    color={category.color}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

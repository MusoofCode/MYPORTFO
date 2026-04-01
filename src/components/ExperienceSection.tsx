import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Users, Clock } from 'lucide-react';
import { Tilt3DCard } from './Tilt3DCard';

const experiences = [
  {
    title: 'Freelance Graphic & Social Media Designer',
    company: 'Self-Employed',
    period: '2022 - Present',
    icon: Palette,
    responsibilities: [
      'Designed brand identities, logos, and marketing materials for 20+ clients',
      'Created engaging social media content that increased client engagement by 150%',
      'Developed comprehensive visual strategies aligned with brand objectives',
      'Managed end-to-end design projects from concept to delivery',
    ],
    metrics: [
      { label: 'Clients', value: '20+' },
      { label: 'Engagement Increase', value: '150%' },
    ],
  },
  {
    title: 'Online Tech Instructor',
    company: 'Digital Education Platforms',
    period: '2023 - Present',
    icon: Users,
    responsibilities: [
      'Taught web development and design fundamentals to 100+ students',
      'Created comprehensive course materials and video tutorials',
      'Provided mentorship and code reviews for aspiring developers',
      'Achieved 4.8/5 average student satisfaction rating',
    ],
    metrics: [
      { label: 'Students', value: '100+' },
      { label: 'Rating', value: '4.8/5' },
    ],
  },
];

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <section id="experience" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.div
          className="floating-orb w-96 h-96 bg-secondary/15 -bottom-48 right-0"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
        />
        <motion.div
          className="floating-orb w-64 h-64 bg-primary/10 top-20 left-10"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
      </motion.div>

      <div ref={ref} className="section-container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            Professional Experience
          </span>
          <h2 className="section-title">
            Work <span className="gradient-text">History</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Building impactful solutions across design, development, and education
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60, rotateY: index % 2 === 0 ? -5 : 5 }}
              animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.2, type: 'spring', stiffness: 80 }}
            >
              <Tilt3DCard className="card-glass h-full group" intensity={5}>
                {/* Header */}
                <div className="flex items-start gap-4 mb-6">
                  <motion.div
                    className="p-4 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors"
                    whileHover={{ rotate: 10, scale: 1.1 }}
                  >
                    <exp.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-display font-bold mb-1">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                    <div className="flex items-center gap-2 mt-2 text-muted-foreground text-sm">
                      <Clock className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="space-y-3 mb-6">
                  {exp.responsibilities.map((resp, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                      <span className="text-sm">{resp}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Metrics */}
                <div className="flex gap-4 pt-4 border-t border-border/50">
                  {exp.metrics.map((metric) => (
                    <div key={metric.label} className="flex-1 text-center">
                      <div className="text-2xl font-display font-bold gradient-text">
                        {metric.value}
                      </div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

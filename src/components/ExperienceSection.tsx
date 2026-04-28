import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Palette, Users, Clock, Code2, Briefcase, Mail, Download, ArrowRight } from 'lucide-react';
import { Tilt3DCard } from './Tilt3DCard';

const experiences = [
  {
    title: 'CEO & Founder',
    company: 'MusoofSofts (IT Solutions Company)',
    period: '2024 - Present',
    icon: Briefcase,
    responsibilities: [
      'Founded and lead an IT solutions company delivering web, mobile, and branding services',
      'Oversee product strategy, client relationships, and team operations end-to-end',
      'Architect scalable software solutions tailored for SMEs and startups',
      'Drive business growth through digital marketing and innovative tech offerings',
    ],
    metrics: [
      { label: 'Role', value: 'CEO' },
      { label: 'Focus', value: 'IT Solutions' },
    ],
  },
  {
    title: 'Software Developer',
    company: 'Bluekom Fiber',
    period: '2025 - Present',
    icon: Code2,
    responsibilities: [
      'Develop and maintain internal software systems powering fiber network operations',
      'Build responsive web applications with React, TypeScript, and modern backend stacks',
      'Integrate APIs, databases, and authentication flows for secure customer portals',
      'Collaborate with cross-functional teams to ship features and optimize performance',
    ],
    metrics: [
      { label: 'Stack', value: 'Full-Stack' },
      { label: 'Industry', value: 'Telecom' },
    ],
  },
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
        {/* Timeline Layout */}
        <div className="relative">
          {/* Vertical spine line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 md:-translate-x-1/2 bg-gradient-to-b from-primary/60 via-primary/40 to-secondary/40"
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: isLeft ? -80 : 80 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 70 }}
                  className={`relative flex items-center ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: 'spring' }}
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
                  >
                    <span className="absolute w-8 h-8 rounded-full bg-primary/30 animate-ping" />
                    <span className="relative w-5 h-5 rounded-full bg-primary border-4 border-background shadow-[0_0_20px_hsl(var(--primary))]" />
                  </motion.div>

                  {/* Spacer for desktop alternating */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`w-full pl-14 md:pl-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Tilt3DCard className="card-glass group relative" intensity={5}>
                      {/* Date badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-semibold tracking-wide">
                          <Clock className="w-3 h-3" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-5">
                        <motion.div
                          className="p-3 rounded-2xl bg-primary/20 group-hover:bg-primary/30 transition-colors flex-shrink-0"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          <exp.icon className="w-6 h-6 text-primary" />
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg md:text-xl font-display font-bold mb-1 leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-primary font-medium text-sm">{exp.company}</p>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2.5 mb-5">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-muted-foreground"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <span className="text-sm">{resp}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Metrics */}
                      <div className="flex gap-4 pt-4 border-t border-border/50">
                        {exp.metrics.map((metric) => (
                          <div key={metric.label} className="flex-1 text-center">
                            <div className="text-xl font-display font-bold gradient-text">
                              {metric.value}
                            </div>
                            <div className="text-xs text-muted-foreground">{metric.label}</div>
                          </div>
                        ))}
                      </div>
                    </Tilt3DCard>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 md:mt-24"
        >
          <div className="card-glass relative overflow-hidden text-center max-w-3xl mx-auto py-10 px-6 md:py-12 md:px-10">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
                Like what you've seen so far?
              </h3>
              <p className="text-muted-foreground mb-7 max-w-xl mx-auto">
                Let's build something impactful together — reach out or grab my CV to learn more about my work.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-semibold shadow-[0_8px_30px_hsl(var(--primary)/0.35)] hover:shadow-[0_12px_40px_hsl(var(--primary)/0.5)] transition-shadow"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <motion.a
                  href="/Mustafa_CV.pdf"
                  download
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-primary/30 text-foreground font-semibold hover:border-primary/60 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

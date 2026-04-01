import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

const educationItems = [
  {
    title: 'BSc Software Engineering',
    institution: 'Gollis University',
    year: '2025',
    icon: GraduationCap,
    type: 'degree',
    description: 'Graduated with high academic performance, focusing on software development and system design.',
  },
  {
    title: 'AI Training Program',
    institution: 'Taiwan ICDF',
    year: '2024',
    icon: Award,
    type: 'certification',
    description: 'Comprehensive training in artificial intelligence and machine learning applications.',
  },
  {
    title: 'Digital Marketing Certification',
    institution: 'Professional Development',
    year: '2023',
    icon: Award,
    type: 'certification',
    description: 'Certified in digital marketing strategies, SEO, and social media management.',
  },
  {
    title: 'Responsive Web Design',
    institution: 'FreeCodeCamp',
    year: '2023',
    icon: BookOpen,
    type: 'certification',
    description: 'Completed comprehensive web design curriculum with hands-on projects.',
  },
  {
    title: 'Graphic Design Certifications',
    institution: 'Various Platforms',
    year: '2022-2024',
    icon: Award,
    type: 'certification',
    description: 'Multiple certifications in Adobe Creative Suite and visual design principles.',
  },
];

export const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const lineScaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="floating-orb w-80 h-80 bg-primary/15 top-1/4 -right-40"
          animate={{ x: [0, -30, 0], y: [0, 40, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
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
            Education & Certifications
          </span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Continuous learning and professional development in technology and design
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px overflow-hidden">
            <motion.div
              className="w-full h-full bg-gradient-to-b from-primary via-secondary to-primary/20 origin-top"
              style={{ scaleY: lineScaleY }}
            />
          </div>

          {educationItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.15 + 0.3, type: 'spring', stiffness: 200 }}
                  whileHover={{ scale: 1.4 }}
                  className="w-4 h-4 rounded-full bg-primary glow-primary"
                />
              </div>

              {/* Content Card */}
              <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                <motion.div
                  whileHover={{ scale: 1.03, y: -5 }}
                  transition={{ duration: 0.25 }}
                  className="card-glass group"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="p-3 rounded-xl bg-primary/20 group-hover:bg-primary/30 transition-colors"
                      whileHover={{ rotate: 10 }}
                    >
                      <item.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <h3 className="text-lg font-display font-bold">{item.title}</h3>
                        <span className="px-2 py-1 rounded-full bg-primary/20 text-xs text-primary">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-primary font-medium mb-2">{item.institution}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

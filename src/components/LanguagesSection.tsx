import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Globe, MessageCircle } from 'lucide-react';
import { Tilt3DCard } from './Tilt3DCard';

const languages = [
  {
    name: 'Somali',
    level: 'Native',
    proficiency: 100,
    flag: '🇸🇴',
  },
  {
    name: 'English',
    level: 'Fluent',
    proficiency: 95,
    flag: '🇬🇧',
  },
  {
    name: 'Arabic',
    level: 'Fluent',
    proficiency: 90,
    flag: '🇸🇦',
  },
];

export const LanguagesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.div
          className="floating-orb w-64 h-64 bg-primary/10 top-1/4 right-1/4"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
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
            <Globe className="w-4 h-4 inline mr-2" />
            Languages
          </span>
          <h2 className="section-title">
            Communication <span className="gradient-text">Skills</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Multilingual abilities enabling global collaboration and communication
          </p>
        </motion.div>

        {/* Languages Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {languages.map((lang, index) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={isInView ? { opacity: 1, scale: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15, type: 'spring', stiffness: 100 }}
            >
              <Tilt3DCard className="card-glass min-w-[180px] text-center group" intensity={8}>
                {/* Flag */}
                <motion.div
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                >
                  {lang.flag}
                </motion.div>

                {/* Language Name */}
                <h3 className="text-xl font-display font-bold mb-2">{lang.name}</h3>

                {/* Level Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-sm font-medium text-primary mb-4">
                  {lang.level}
                </span>

                {/* Proficiency Bar */}
                <div className="h-2 rounded-full bg-muted/50 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${lang.proficiency}%` } : {}}
                    transition={{ duration: 1.2, delay: 0.5 + index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="h-full rounded-full bg-primary glow-primary"
                  />
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-12 text-muted-foreground"
        >
          <MessageCircle className="w-5 h-5 text-primary" />
          <span>Available for international projects and collaborations</span>
        </motion.div>
      </div>
    </section>
  );
};

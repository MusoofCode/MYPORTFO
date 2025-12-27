import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, MessageCircle } from 'lucide-react';

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

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="floating-orb w-64 h-64 bg-primary/10 top-1/4 right-1/4"
          animate={{ x: [0, 20, 0], y: [0, -30, 0] }}
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
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                className="card-glass min-w-[180px] text-center group"
              >
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
                    transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                    className="h-full rounded-full bg-primary glow-primary"
                  />
                </div>
              </motion.div>
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

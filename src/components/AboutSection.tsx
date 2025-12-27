import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, FolderOpen, Sparkles } from 'lucide-react';
import profileImage from '@/assets/profile.png';

const stats = [
  { icon: FolderOpen, value: '4+', label: 'Projects' },
  { icon: Briefcase, value: '2+', label: 'Years Experience' },
  { icon: Sparkles, value: 'Multi', label: 'Discipline Skills' },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="floating-orb w-72 h-72 bg-primary/20 top-0 right-0"
          animate={{ x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div ref={ref} className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side - Mobile visible */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative lg:block"
          >
            <div className="relative max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-primary/30 rounded-2xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-secondary/30 rounded-2xl" />
              
              <motion.div
                className="glass-strong p-3 rounded-3xl"
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={profileImage}
                  alt="Mustafa Ahmed Abdillahi"
                  className="w-full h-auto rounded-2xl object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
              About Me
            </span>

            <h2 className="section-title">
              Crafting Digital <span className="gradient-text">Experiences</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I'm a creative and tech-savvy digital storyteller with 2+ years of experience 
              in software development, UI/UX design, graphic design, and digital branding. 
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a Bachelor's Degree in Software Engineering and high academic performance, 
              I've built multiple full software projects and continue to deliver visually 
              engaging, performance-driven digital solutions. I combine technical expertise 
              with creative vision to build products that make an impact.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card-glass text-center group"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-3xl font-display font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Download, Mail, Sparkles } from 'lucide-react';

export const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className="relative py-16 md:py-24 overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, type: 'spring', stiffness: 70 }}
          className="card-glass relative overflow-hidden text-center max-w-4xl mx-auto"
        >
          {/* Subtle ambient glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />

          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={isInView ? { scale: 1, rotate: 0 } : {}}
            transition={{ delay: 0.2, type: 'spring', stiffness: 150 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6 relative"
          >
            <Sparkles className="w-4 h-4" />
            Let's build something great
          </motion.div>

          <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 relative">
            Have a project in mind?{' '}
            <span className="gradient-text">Let's talk.</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8 relative">
            Whether you need a polished product, a brand identity, or a technical partner —
            I'd love to hear about it. Reach out or grab my CV below.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 relative">
            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.button>

            <motion.a
              href="/Mustafa_CV.pdf"
              download="Mustafa_Ahmed_CV.pdf"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-primary/30 hover:border-primary/60 font-medium transition-colors"
            >
              <Download className="w-5 h-5 text-primary" />
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

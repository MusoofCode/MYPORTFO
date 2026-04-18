import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Award, Eye, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import backend from '@/assets/certificates/backend-1.jpg';
import aiTraining from '@/assets/certificates/ai-training-1.jpg';
import dataScience from '@/assets/certificates/data-science-1.jpg';
import dataScienceTranscript from '@/assets/certificates/data-science-transcript-1.jpg';
import digitalMarketing from '@/assets/certificates/digital-marketing-1.jpg';
import digitalMarketingTranscript from '@/assets/certificates/digital-marketing-transcript-1.jpg';
import videoEditing from '@/assets/certificates/video-editing-1.jpg';
import somalilandAi from '@/assets/certificates/somaliland-ai.jpg';
import gollisBachelor from '@/assets/certificates/gollis-bachelor.jpg';
import alAnwarSecondary from '@/assets/certificates/al-anwar-secondary.jpg';

type Certificate = {
  title: string;
  issuer: string;
  year: string;
  category: string;
  preview: string;
  pdf: string;
};

const certificates: Certificate[] = [
  {
    title: 'Bachelor of Science in Software Engineering',
    issuer: 'Gollis University',
    year: '2025',
    category: 'Degree',
    preview: gollisBachelor,
    pdf: '',
  },
  {
    title: 'Artificial Intelligence Training',
    issuer: 'Somaliland Innovation Zone × Taiwan ICDF',
    year: '2025',
    category: 'Artificial Intelligence',
    preview: somalilandAi,
    pdf: '',
  },
  {
    title: 'Secondary Certificate of Islamic Studies',
    issuer: 'Al-Anwar Institute, Hargeisa',
    year: '2021',
    category: 'Education',
    preview: alAnwarSecondary,
    pdf: '',
  },
  {
    title: 'Backend Development',
    issuer: 'Professional Training',
    year: '2024',
    category: 'Development',
    preview: backend,
    pdf: '/certificates/backend.pdf',
  },
  {
    title: 'AI Training Program',
    issuer: 'Taiwan ICDF',
    year: '2024',
    category: 'Artificial Intelligence',
    preview: aiTraining,
    pdf: '/certificates/ai-training.pdf',
  },
  {
    title: 'Data Science Certificate',
    issuer: 'Coursera (CR1061)',
    year: '2024',
    category: 'Data Science',
    preview: dataScience,
    pdf: '/certificates/data-science.pdf',
  },
  {
    title: 'Data Science Transcript',
    issuer: 'Coursera (CR1061)',
    year: '2024',
    category: 'Data Science',
    preview: dataScienceTranscript,
    pdf: '/certificates/data-science-transcript.pdf',
  },
  {
    title: 'Digital Marketing Certificate',
    issuer: 'Coursera (CR923)',
    year: '2023',
    category: 'Marketing',
    preview: digitalMarketing,
    pdf: '/certificates/digital-marketing.pdf',
  },
  {
    title: 'Digital Marketing Transcript',
    issuer: 'Coursera (CR923)',
    year: '2023',
    category: 'Marketing',
    preview: digitalMarketingTranscript,
    pdf: '/certificates/digital-marketing-transcript.pdf',
  },
  {
    title: 'Video Editing',
    issuer: 'Professional Training',
    year: '2023',
    category: 'Creative',
    preview: videoEditing,
    pdf: '/certificates/video-editing.pdf',
  },
];

export const CertificatesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = activeIndex !== null ? certificates[activeIndex] : null;

  const goTo = (delta: number) => {
    if (activeIndex === null) return;
    const next = (activeIndex + delta + certificates.length) % certificates.length;
    setActiveIndex(next);
  };

  return (
    <section id="certificates" className="relative py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          className="floating-orb w-80 h-80 bg-secondary/15 top-1/3 -left-40"
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            My Certificates
          </span>
          <h2 className="section-title">
            Verified <span className="gradient-text">Achievements</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A curated collection of certifications earned through dedicated learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6 }}
              className="card-glass group cursor-pointer overflow-hidden"
              onClick={() => setActiveIndex(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl mb-4 bg-muted/30">
                <img
                  src={cert.preview}
                  alt={`${cert.title} preview`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 select-none pointer-events-none"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable={false}
                />
                {/* Watermark overlay */}
                <div
                  aria-hidden
                  className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden"
                >
                  <div className="rotate-[-30deg] flex flex-col gap-5 opacity-[0.14]">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div
                        key={i}
                        className="whitespace-nowrap text-foreground font-display font-semibold tracking-[0.35em] text-[10px] sm:text-xs"
                        style={{ marginLeft: `${(i % 2) * 40}px` }}
                      >
                        Mustafa Ahmed Abdillahi · Mustafa Ahmed Abdillahi · Mustafa Ahmed Abdillahi
                      </div>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                    <Eye className="w-4 h-4 text-primary" />
                    View Certificate
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-primary/15">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <h3 className="font-display font-bold truncate">{cert.title}</h3>
                    <span className="px-2 py-0.5 rounded-full bg-primary/15 text-[10px] text-primary">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{cert.issuer}</p>
                  <p className="text-xs text-primary/80 mt-1">{cert.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Viewer Modal */}
      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 25 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-strong rounded-2xl overflow-hidden flex flex-col"
              onClick={(e) => e.stopPropagation()}
              onContextMenu={(e) => e.preventDefault()}
            >
              <div className="flex items-center justify-between p-4 border-b border-border/40">
                <div className="min-w-0">
                  <h3 className="font-display font-bold truncate">{active.title}</h3>
                  <p className="text-sm text-muted-foreground truncate">
                    {active.issuer} • {active.year}
                  </p>
                </div>
                <Button variant="ghost" size="icon" onClick={() => setActiveIndex(null)}>
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="relative flex-1 overflow-auto bg-muted/20 flex items-center justify-center p-4 select-none">
                <div className="relative max-w-full max-h-[70vh]">
                  <img
                    src={active.preview}
                    alt={active.title}
                    className="max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl pointer-events-none"
                    draggable={false}
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden rounded-lg"
                  >
                    <div className="rotate-[-30deg] flex flex-col gap-8 opacity-[0.16]">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          className="whitespace-nowrap text-foreground font-display font-semibold tracking-[0.4em] text-sm sm:text-lg"
                          style={{ marginLeft: `${(i % 2) * 80}px` }}
                        >
                          Mustafa Ahmed Abdillahi · Mustafa Ahmed Abdillahi · Mustafa Ahmed Abdillahi
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  aria-label="Previous certificate"
                  onClick={() => goTo(-1)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:border-primary/50 transition-all"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  aria-label="Next certificate"
                  onClick={() => goTo(1)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:border-primary/50 transition-all"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>

                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass text-xs font-medium">
                  {(activeIndex ?? 0) + 1} / {certificates.length}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

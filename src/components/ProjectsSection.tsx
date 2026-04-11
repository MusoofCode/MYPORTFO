import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tilt3DCard } from './Tilt3DCard';
import brandIdentity1 from '@/assets/brand-identity-1.jpg';
import brandIdentity2 from '@/assets/brand-identity-2.jpg';
import brandIdentity3 from '@/assets/brand-identity-3.jpg';
import brandIdentity4 from '@/assets/brand-identity-4.jpg';
import socialMedia1 from '@/assets/social-media-1.jpg';
import socialMedia2 from '@/assets/social-media-2.jpg';
import socialMedia3 from '@/assets/social-media-3.jpg';
import socialMedia4 from '@/assets/social-media-4.jpg';

type ProjectType = 'github' | 'gallery';

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  type: ProjectType;
  githubUrl?: string;
  galleryImages?: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    category: 'Web Development',
    description: 'Full-stack e-commerce solution with React, Node.js, and Firebase. Features include user authentication, product management, and payment integration.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    type: 'github',
    githubUrl: 'https://github.com/MusoofCode',
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'Graphic Design',
    description: 'Complete brand identity package including logo design, color palette, typography, and brand guidelines for a tech startup.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    tags: ['Illustrator', 'Photoshop', 'Branding'],
    type: 'gallery',
    galleryImages: [brandIdentity1, brandIdentity2],
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive social media strategy and content creation that increased engagement by 200% and follower growth by 150%.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    tags: ['Strategy', 'Content', 'Analytics'],
    type: 'gallery',
    galleryImages: [socialMedia1, socialMedia2],
  },
  {
    id: 4,
    title: 'Learning Management System',
    category: 'Web Development',
    description: 'Educational platform with course management, video streaming, progress tracking, and interactive quizzes built with React and MySQL.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    tags: ['React', 'PHP', 'MySQL'],
    type: 'github',
    githubUrl: 'https://github.com/MusoofCode',
  },
];

export const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const openProject = (project: Project) => {
    setGalleryIndex(0);
    setSelectedProject(project);
  };

  return (
    <section id="projects" className="relative py-20 md:py-32 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <motion.div
          className="floating-orb w-80 h-80 bg-primary/15 top-20 -left-40"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 11, repeat: Infinity }}
        />
        <motion.div
          className="floating-orb w-96 h-96 bg-secondary/10 bottom-0 right-0"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 13, repeat: Infinity }}
        />
      </motion.div>

      <div ref={ref} className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6">
            Featured Work
          </span>
          <h2 className="section-title">
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            A selection of projects showcasing my skills in development, design, and marketing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60, rotateY: index % 2 === 0 ? -5 : 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.15, type: 'spring', stiffness: 80 }}
            >
              <Tilt3DCard
                className="card-glass overflow-hidden group cursor-pointer"
                intensity={6}
                onClick={() => openProject(project)}
              >
                <div className="relative h-56 -mx-6 -mt-6 mb-6 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-4 rounded-full bg-primary/90 scale-0 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-primary-foreground" />
                    </div>
                  </div>
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full glass text-xs font-medium text-primary">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 rounded-lg bg-muted/50 text-xs text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              </Tilt3DCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, rotateX: 10 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.85, opacity: 0, rotateX: -10 }}
              transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              className="glass-strong max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl glass hover:bg-muted transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Gallery or single image */}
              {selectedProject.type === 'gallery' && selectedProject.galleryImages ? (
                <div className="relative h-72 -mx-6 -mt-6 mb-6">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={galleryIndex}
                      src={selectedProject.galleryImages[galleryIndex]}
                      alt={`${selectedProject.title} ${galleryIndex + 1}`}
                      className="w-full h-full object-cover"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                  {selectedProject.galleryImages.length > 1 && (
                    <>
                      <button
                        onClick={() => setGalleryIndex((i) => (i - 1 + selectedProject.galleryImages!.length) % selectedProject.galleryImages!.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-muted transition-colors"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setGalleryIndex((i) => (i + 1) % selectedProject.galleryImages!.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full glass hover:bg-muted transition-colors"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        {selectedProject.galleryImages.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setGalleryIndex(i)}
                            className={`w-2 h-2 rounded-full transition-colors ${i === galleryIndex ? 'bg-primary' : 'bg-muted-foreground/50'}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div className="relative h-64 -mx-6 -mt-6 mb-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
              )}

              <div className="p-6 pt-0">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-sm font-medium text-primary mb-4">
                  {selectedProject.category}
                </span>

                <h3 className="text-2xl font-display font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-lg bg-muted/50 text-sm text-muted-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons based on type */}
                <div className="flex gap-4">
                  {selectedProject.type === 'github' && selectedProject.githubUrl && (
                    <motion.a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center gap-2 flex-1 justify-center"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                    </motion.a>
                  )}
                  {selectedProject.type === 'gallery' && (
                    <div className="text-sm text-muted-foreground text-center w-full py-2">
                      Browse the gallery above to see the designs ✨
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

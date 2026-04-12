import { useState, useRef } from 'react';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Github, X, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { Tilt3DCard } from './Tilt3DCard';

// Brand Identity images
import brandIdentity1 from '@/assets/brand-identity-1.jpg';
import brandIdentity2 from '@/assets/brand-identity-2.jpg';
import brandIdentity3 from '@/assets/brand-identity-3.jpg';
import brandIdentity4 from '@/assets/brand-identity-4.jpg';
import brandIdentity5 from '@/assets/brand-identity-5.jpg';
import brandIdentity6 from '@/assets/brand-identity-6.jpg';
import brandIdentity7 from '@/assets/brand-identity-7.jpg';
import brandIdentity8 from '@/assets/brand-identity-8.jpg';
import brandIdentity9 from '@/assets/brand-identity-9.jpg';
import brandIdentity10 from '@/assets/brand-identity-10.jpg';
import brandIdentity11 from '@/assets/brand-identity-11.jpg';
import brandIdentity12 from '@/assets/brand-identity-12.jpg';
import brandIdentity13 from '@/assets/brand-identity-13.jpg';
import brandIdentity14 from '@/assets/brand-identity-14.jpg';
import brandIdentity15 from '@/assets/brand-identity-15.jpg';

import brandIdentity17 from '@/assets/brand-identity-17.jpg';
import brandIdentity18 from '@/assets/brand-identity-18.jpg';
import brandIdentity19 from '@/assets/brand-identity-19.jpg';
import brandIdentity20 from '@/assets/brand-identity-20.jpg';
import brandIdentity21 from '@/assets/brand-identity-21.jpg';
import brandIdentity22 from '@/assets/brand-identity-22.jpg';
import brandIdentity23 from '@/assets/brand-identity-23.jpg';
import brandIdentity24 from '@/assets/brand-identity-24.jpg';
import brandIdentity25 from '@/assets/brand-identity-25.jpg';
import brandIdentity26 from '@/assets/brand-identity-26.jpg';
import brandIdentity27 from '@/assets/brand-identity-27.jpg';
import brandIdentity28 from '@/assets/brand-identity-28.jpg';

// Social Media images
import socialMedia1 from '@/assets/social-media-1.jpg';
import socialMedia2 from '@/assets/social-media-2.jpg';
import socialMedia3 from '@/assets/social-media-3.jpg';
import socialMedia4 from '@/assets/social-media-4.jpg';
import socialMedia5 from '@/assets/social-media-5.jpg';
import socialMedia6 from '@/assets/social-media-6.jpg';
import socialMedia7 from '@/assets/social-media-7.jpg';
import socialMedia8 from '@/assets/social-media-8.jpg';
import socialMedia9 from '@/assets/social-media-9.jpg';
import socialMedia10 from '@/assets/social-media-10.jpg';
import socialMedia11 from '@/assets/social-media-11.jpg';
import socialMedia12 from '@/assets/social-media-12.jpg';
import socialMedia13 from '@/assets/social-media-13.jpg';
import socialMedia14 from '@/assets/social-media-14.jpg';
import socialMedia15 from '@/assets/social-media-15.jpg';
import socialMedia16 from '@/assets/social-media-16.jpg';
import socialMedia17 from '@/assets/social-media-17.jpg';
import socialMedia18 from '@/assets/social-media-18.jpg';
import socialMedia19 from '@/assets/social-media-19.jpg';
import socialMedia20 from '@/assets/social-media-20.jpg';
import socialMedia21 from '@/assets/social-media-21.jpg';
import socialMedia22 from '@/assets/social-media-22.jpg';
import socialMedia23 from '@/assets/social-media-23.jpg';
import socialMedia24 from '@/assets/social-media-24.jpg';
import socialMedia25 from '@/assets/social-media-25.jpg';
import socialMedia26 from '@/assets/social-media-26.jpg';
import socialMedia27 from '@/assets/social-media-27.jpg';

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

const brandIdentityImages = [
  brandIdentity1, brandIdentity2, brandIdentity3, brandIdentity4,
  brandIdentity5, brandIdentity6, brandIdentity7, brandIdentity8,
  brandIdentity9, brandIdentity10, brandIdentity11, brandIdentity12,
  brandIdentity13, brandIdentity14, brandIdentity15,
  brandIdentity17, brandIdentity18, brandIdentity19, brandIdentity20,
  brandIdentity21, brandIdentity22, brandIdentity23, brandIdentity24,
  brandIdentity25, brandIdentity26, brandIdentity27, brandIdentity28,
];

const socialMediaImages = [
  socialMedia1, socialMedia2, socialMedia3, socialMedia4,
  socialMedia5, socialMedia6, socialMedia7, socialMedia8,
  socialMedia9, socialMedia10, socialMedia11, socialMedia12,
  socialMedia13, socialMedia14, socialMedia15, socialMedia16,
  socialMedia17, socialMedia18, socialMedia19, socialMedia20,
  socialMedia21, socialMedia22, socialMedia23, socialMedia24,
  socialMedia25, socialMedia26, socialMedia27,
];

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
    description: 'Complete brand identity packages including logo design, color palette, typography, packaging, stationery, and brand guidelines across multiple industries.',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    tags: ['Illustrator', 'Photoshop', 'Branding'],
    type: 'gallery',
    galleryImages: brandIdentityImages,
  },
  {
    id: 3,
    title: 'Social Media Campaign',
    category: 'Digital Marketing',
    description: 'Comprehensive social media strategies and content creation across multiple industries — fitness, travel, food, tech, fashion, and more.',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80',
    tags: ['Strategy', 'Content', 'Analytics'],
    type: 'gallery',
    galleryImages: socialMediaImages,
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
                      {/* Counter */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full glass text-xs font-medium">
                        {galleryIndex + 1} / {selectedProject.galleryImages.length}
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
                      Use the arrows to browse all {selectedProject.galleryImages?.length} designs ✨
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

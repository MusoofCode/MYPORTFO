import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Twitter, Mail, Instagram, MessageCircle } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com/MusoofCode', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/mustafa-ahmed-163015345/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/MustaphaAhmet', label: 'Twitter' },
  { icon: Instagram, href: 'https://www.instagram.com/hajji.mustafaa/', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/252636708469', label: 'WhatsApp' },
  { icon: Mail, href: 'mailto:mostaphaahmet@gmail.com', label: 'Email' },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <motion.a
            href="#"
            className="text-3xl font-display font-bold gradient-text mb-6"
            whileHover={{ scale: 1.05 }}
          >
            MUSOOF
          </motion.a>

          {/* Social Links */}
          <div className="flex gap-4 mb-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="p-3 rounded-xl glass hover:border-primary/50 transition-all"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 mb-8">
            {['About', 'Skills', 'Experience', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </nav>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Mustafa Ahmed Abdillahi. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <Heart className="w-4 h-4 text-destructive fill-destructive" />
            </motion.span>
            <span>in Hargeisa</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

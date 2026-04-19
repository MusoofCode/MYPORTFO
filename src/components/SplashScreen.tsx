import { motion, AnimatePresence } from 'framer-motion';

interface SplashScreenProps {
  isVisible: boolean;
}

export const SplashScreen = ({ isVisible }: SplashScreenProps) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background overflow-hidden"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        >
          {/* Ambient glow orbs */}
          <motion.div
            className="absolute w-[28rem] h-[28rem] rounded-full bg-primary/25 blur-3xl"
            animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute w-72 h-72 rounded-full bg-secondary/30 blur-3xl"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4], x: [-20, 20, -20] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          <div className="flex flex-col items-center gap-8 relative z-10">
            {/* M Logo with rotating rings */}
            <div className="relative w-32 h-32 flex items-center justify-center">
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl border-2 border-primary/40"
                animate={{ rotate: 360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                style={{
                  borderTopColor: 'hsl(var(--primary))',
                  borderRightColor: 'transparent',
                  borderBottomColor: 'transparent',
                }}
              />
              {/* Inner counter-rotating ring */}
              <motion.div
                className="absolute inset-2 rounded-2xl border-2 border-secondary/30"
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
                style={{
                  borderBottomColor: 'hsl(var(--secondary))',
                  borderTopColor: 'transparent',
                  borderLeftColor: 'transparent',
                }}
              />

              {/* M tile */}
              <motion.div
                initial={{ scale: 0, rotate: -90, opacity: 0 }}
                animate={{
                  scale: 1,
                  rotate: 0,
                  opacity: 1,
                }}
                transition={{ type: 'spring', stiffness: 220, damping: 14, delay: 0.15 }}
                className="relative w-20 h-20 rounded-2xl flex items-center justify-center shadow-2xl"
                style={{
                  background: 'var(--gradient-primary)',
                  boxShadow:
                    '0 0 40px hsla(130, 54%, 46%, 0.55), 0 10px 30px hsla(158, 83%, 14%, 0.4)',
                }}
              >
                <motion.span
                  className="text-5xl font-display font-extrabold text-primary-foreground select-none"
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
                >
                  M
                </motion.span>

                {/* Shimmer sweep */}
                <motion.div
                  className="absolute inset-0 rounded-2xl overflow-hidden"
                  aria-hidden
                >
                  <motion.div
                    className="absolute top-0 -left-1/2 w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
                    animate={{ left: ['-50%', '150%'] }}
                    transition={{
                      duration: 1.8,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      repeatDelay: 0.6,
                    }}
                  />
                </motion.div>
              </motion.div>

              {/* Pulsing halo */}
              <motion.div
                className="absolute w-20 h-20 rounded-2xl"
                animate={{ scale: [1, 1.6, 1.6], opacity: [0.6, 0, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
                style={{ boxShadow: '0 0 0 2px hsl(var(--primary))' }}
              />
            </div>

            {/* Brand name */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="text-2xl md:text-3xl font-display font-bold gradient-text tracking-widest"
            >
              MUSOOF
            </motion.div>

            {/* Animated progress */}
            <motion.div
              className="w-56 h-1.5 rounded-full bg-muted overflow-hidden relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ background: 'var(--gradient-primary)' }}
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.8, delay: 0.7, ease: 'easeInOut' }}
              />
              {/* Glow trail */}
              <motion.div
                className="absolute top-0 h-full w-12 bg-white/50 blur-sm"
                initial={{ left: '-10%' }}
                animate={{ left: '110%' }}
                transition={{ duration: 1.8, delay: 0.7, ease: 'easeInOut' }}
              />
            </motion.div>

            {/* Loading dots */}
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  animate={{ y: [0, -6, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    delay: i * 0.15,
                    ease: 'easeInOut',
                  }}
                />
              ))}
              <span className="ml-2 text-xs text-muted-foreground tracking-wider uppercase">
                Loading experience
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

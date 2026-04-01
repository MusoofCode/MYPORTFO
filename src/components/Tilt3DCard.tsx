import { useRef, useState, useCallback, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Tilt3DCardProps {
  children: ReactNode;
  className?: string;
  intensity?: number;
  perspective?: number;
  glare?: boolean;
  onClick?: () => void;
}

export const Tilt3DCard = ({
  children,
  className = '',
  intensity = 8,
  perspective = 800,
  glare = true,
  onClick,
}: Tilt3DCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTransform({
        rotateX: -y * intensity,
        rotateY: x * intensity,
        glareX: (x + 0.5) * 100,
        glareY: (y + 0.5) * 100,
      });
    },
    [intensity]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0, glareX: 50, glareY: 50 });
  }, []);

  return (
    <div style={{ perspective: `${perspective}px` }}>
      <motion.div
        ref={ref}
        className={`relative ${className}`}
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transition: 'transform 0.15s ease-out',
          willChange: 'transform',
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        {children}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 hover:opacity-100 transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, hsl(var(--primary) / 0.12) 0%, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

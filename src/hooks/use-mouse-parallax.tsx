import { useRef, useCallback, useEffect, useState } from 'react';

interface MouseParallaxOptions {
  intensity?: number;
  perspective?: number;
  disabled?: boolean;
}

export const useMouseParallax = ({
  intensity = 10,
  perspective = 1000,
  disabled = false,
}: MouseParallaxOptions = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (disabled || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTransform({
        rotateX: -y * intensity,
        rotateY: x * intensity,
      });
    },
    [intensity, disabled]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform({ rotateX: 0, rotateY: 0 });
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || disabled) return;
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [handleMouseMove, handleMouseLeave, disabled]);

  const style = {
    perspective: `${perspective}px`,
    transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
    transition: 'transform 0.15s ease-out',
    willChange: 'transform' as const,
  };

  return { ref, style };
};

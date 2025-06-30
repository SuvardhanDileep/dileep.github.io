import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  enterAnimation?: 'fadeIn' | 'slideUp' | 'scaleIn';
  exitAnimation?: 'fadeOut' | 'slideDown' | 'scaleOut';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id,
  enterAnimation = 'fadeIn' 
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getAnimationVariants = (animation: string) => {
    switch (animation) {
      case 'slideUp':
        return {
          initial: { opacity: 0, y: 50 },
          animate: { opacity: 1, y: 0 },
        };
      case 'scaleIn':
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: { opacity: 1, scale: 1 },
        };
      default:
        return {
          initial: { opacity: 0 },
          animate: { opacity: 1 },
        };
    }
  };

  const variants = getAnimationVariants(enterAnimation);

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={variants.initial}
      animate={inView ? variants.animate : variants.initial}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-20 ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default Section;
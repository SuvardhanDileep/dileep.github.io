import { useEffect, useState } from 'react';

interface UseScrollBackgroundProps {
  start?: number;
  end?: number;
  colors: string[];
}

export const useScrollBackground = ({ 
  start = 0, 
  end = 1000, 
  colors 
}: UseScrollBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const progress = Math.min(Math.max((scrollY - start) / (end - start), 0), 1);
  
  const interpolateColor = (color1: string, color2: string, factor: number) => {
    const rgb1 = hexToRgb(color1);
    const rgb2 = hexToRgb(color2);
    
    if (!rgb1 || !rgb2) return color1;
    
    const r = Math.round(rgb1.r + (rgb2.r - rgb1.r) * factor);
    const g = Math.round(rgb1.g + (rgb2.g - rgb1.g) * factor);
    const b = Math.round(rgb1.b + (rgb2.b - rgb1.b) * factor);
    
    return `rgb(${r}, ${g}, ${b})`;
  };

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  };

  if (colors.length >= 2) {
    const colorIndex = Math.floor(progress * (colors.length - 1));
    const localProgress = (progress * (colors.length - 1)) % 1;
    const currentColor = colors[colorIndex] || colors[0];
    const nextColor = colors[colorIndex + 1] || colors[colors.length - 1];
    
    return `linear-gradient(135deg, ${interpolateColor(currentColor, nextColor, localProgress)}, ${nextColor})`;
  }

  return `linear-gradient(135deg, ${colors[0] || '#1a1a2e'}, #16213e)`;
};
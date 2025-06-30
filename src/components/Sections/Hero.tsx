import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useScrollBackground } from "../../hooks/useScrollBackground";
import FloatingModel from "../3D/FloatingModel";

const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const backgroundGradient = useScrollBackground({
    start: 0,
    end: typeof window !== "undefined" ? window.innerHeight : 1000,
    colors: ["#1a1a2e", "#16213e", "#0f3460"],
  });

  useEffect(() => {
    const updateBackground = () => {
      if (typeof document !== "undefined") {
        document.body.style.background = backgroundGradient;
      }
    };

    updateBackground();
    window.addEventListener("scroll", updateBackground, { passive: true });

    return () => window.removeEventListener("scroll", updateBackground);
  }, [backgroundGradient]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-neon-blue border-t-transparent rounded-full animate-spin"></div>
            </div>
          }
        >
          <FloatingModel
            mousePosition={mousePosition}
            isHovering={isHovering}
          />
        </Suspense>
      </div>

      {/* Interactive Particle Background */}
      <div className="absolute inset-0 z-10">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.6, 1, 0.6],
              scale: isHovering ? [1, 1.5, 1] : [1, 1, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Mouse Follower Effect */}
      {isHovering && (
        <motion.div
          className="absolute w-32 h-32 pointer-events-none z-15"
          style={{
            left: mousePosition.x - 64,
            top: mousePosition.y - 64,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
        >
          <div className="w-full h-full bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-xl animate-pulse" />
        </motion.div>
      )}

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
            className="inline-flex items-center space-x-2 glass-card px-4 py-2 mb-6"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(51, 187, 255, 0.3)",
            }}
          >
            <Sparkles className="text-neon-blue w-5 h-5" />
            <span className="text-white font-medium">
              AI Engineer & Full-Stack Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text leading-tight"
            whileHover={{ scale: 1.02 }}
          >
            Suvardhan Dileep
            <br />
            Gaddameedi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
          >
            Building intelligent solutions with
            <span className="text-neon-blue"> AI technologies </span>
            and
            <span className="text-neon-purple">
              {" "}
              full-stack web development
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.6 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(51, 187, 255, 0.5)",
                y: -2,
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToNext}
              className="group relative px-8 py-4 glass-card text-white font-semibold rounded-full overflow-hidden transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-neon-blue to-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Explore My Work</span>
            </motion.button>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.preventDefault();
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-8 py-4 border-2 border-neon-purple text-neon-purple font-semibold rounded-full hover:bg-neon-purple hover:text-white transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-white/60 cursor-pointer"
            onClick={scrollToNext}
            whileHover={{ scale: 1.1, color: "#33bbff" }}
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      </div>

      {/* Interactive Background Elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/2 left-1/4 w-32 h-32 bg-neon-blue/10 rounded-full blur-3xl"
          animate={{
            scale: isHovering ? [1, 1.2, 1] : [1, 1.1, 1],
            x: isHovering
              ? (mousePosition.x - window.innerWidth / 2) * 0.02
              : 0,
            y: isHovering
              ? (mousePosition.y - window.innerHeight / 2) * 0.02
              : 0,
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-24 h-24 bg-neon-purple/10 rounded-full blur-3xl"
          animate={{
            scale: isHovering ? [1, 1.3, 1] : [1, 1.1, 1],
            x: isHovering
              ? (mousePosition.x - window.innerWidth / 2) * -0.01
              : 0,
            y: isHovering
              ? (mousePosition.y - window.innerHeight / 2) * -0.01
              : 0,
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
      </div>
    </section>
  );
};

export default Hero;

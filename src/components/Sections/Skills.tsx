import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  Brain,
  Code,
  Server,
  Cloud,
  Zap,
  Sparkles,
  Star,
  Hexagon,
} from "lucide-react";
import Section from "../UI/Section";

const Skills: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeCategory, setActiveCategory] = useState<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const skillCategories = [
    {
      category: "Programming Languages",
      icon: Code,
      color: "from-neon-blue to-blue-400",
      bgColor: "bg-neon-blue/10",
      skills: ["C", "C++", "Python", "JavaScript"],
      description: "Core programming foundations",
    },
    {
      category: "Artificial Intelligence",
      icon: Brain,
      color: "from-neon-purple to-purple-400",
      bgColor: "bg-neon-purple/10",
      skills: [
        "Machine Learning (ML)",
        "Deep Learning (DL)",
        "Prompt Engineering",
        "Retrieval-Augmented Generation",
        "LangChain",
        "Agents",
      ],
      description: "Building intelligent and adaptive AI systems",
    },
    {
      category: "Web Technologies",
      icon: Zap,
      color: "from-neon-pink to-pink-400",
      bgColor: "bg-neon-pink/10",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Git",
        "GitHub Actions (CI/CD)",
      ],
      description: "Creating responsive web applications",
    },
    {
      category: "Database Management",
      icon: Server,
      color: "from-cyan-400 to-neon-blue",
      bgColor: "bg-cyan-400/10",
      skills: ["SQL", "MySQL", "MongoDB (NoSQL)", "Postman (API testing)"],
      description: "Managing and optimizing data storage solutions",
    },
  ];

  const floatingSkills = [
    { name: "Python", x: 10, y: 20, delay: 0 },
    { name: "React", x: 80, y: 15, delay: 0.5 },
    { name: "TensorFlow", x: 15, y: 70, delay: 1 },
    { name: "Node.js", x: 70, y: 80, delay: 1.5 },
    { name: "AWS", x: 50, y: 10, delay: 2 },
    { name: "Docker", x: 85, y: 60, delay: 2.5 },
    { name: "GraphQL", x: 25, y: 45, delay: 3 },
    { name: "TypeScript", x: 60, y: 35, delay: 3.5 },
  ];

  return (
    <Section id="skills" enterAnimation="scaleIn">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning artificial intelligence, full-stack
            development, and modern cloud technologies.
          </p>
        </motion.div>

        {/* Floating Skills Cloud */}
        <div className="relative h-80 mb-16 overflow-hidden rounded-3xl glass-card">
          <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-neon-purple/5 to-neon-pink/5" />

          {/* Animated Background Grid */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
                style={{ left: `${(i + 1) * 5}%` }}
                animate={{
                  opacity: [0.1, 0.3, 0.1],
                  scaleY: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          {/* Floating Skills */}
          {floatingSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className="absolute"
              style={{
                left: `${skill.x}%`,
                top: `${skill.y}%`,
              }}
              initial={{ opacity: 0, scale: 0, rotate: -180 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1,
                delay: skill.delay,
                type: "spring",
                stiffness: 100,
              }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, -5, 0],
              }}
              whileHover={{
                scale: 1.3,
                rotate: 15,
                zIndex: 10,
              }}
              className="cursor-pointer"
            >
              <div className="relative">
                <motion.div
                  className="glass-card px-4 py-2 text-white font-medium rounded-full border border-neon-blue/30"
                  whileHover={{
                    boxShadow: "0 0 20px rgba(51, 187, 255, 0.5)",
                    borderColor: "rgba(51, 187, 255, 0.8)",
                  }}
                  transition={{
                    duration: 4 + (index % 3),
                    repeat: Infinity,
                  }}
                >
                  {skill.name}
                </motion.div>

                {/* Skill Icon Background */}
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 rounded-full blur-md -z-10"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}

          {/* Central Energy Core */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="relative">
              <Hexagon className="w-16 h-16 text-neon-blue/30" />
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                <Zap className="w-8 h-8 text-neon-purple" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Skill Categories with Creative Layouts */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              onHoverStart={() => setActiveCategory(categoryIndex)}
              onHoverEnd={() => setActiveCategory(null)}
              className="relative group"
            >
              <motion.div
                className="glass-card p-8 h-full relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2,
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Animated Background */}
                <motion.div
                  className={`absolute inset-0 ${category.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  animate={
                    activeCategory === categoryIndex
                      ? {
                          background: [
                            `radial-gradient(circle at 0% 0%, ${category.bgColor
                              .replace("bg-", "")
                              .replace("/10", "/20")}, transparent 50%)`,
                            `radial-gradient(circle at 100% 100%, ${category.bgColor
                              .replace("bg-", "")
                              .replace("/10", "/20")}, transparent 50%)`,
                            `radial-gradient(circle at 0% 0%, ${category.bgColor
                              .replace("bg-", "")
                              .replace("/10", "/20")}, transparent 50%)`,
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Category Header */}
                <div className="flex items-center mb-6 relative z-10">
                  <motion.div
                    whileHover={{
                      scale: 1.2,
                      rotate: 360,
                    }}
                    transition={{ duration: 0.6 }}
                    className={`flex items-center justify-center w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl mr-4 shadow-lg`}
                  >
                    <category.icon className="text-white w-8 h-8" />
                  </motion.div>
                  <div>
                    <h3
                      className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                    >
                      {category.category}
                    </h3>
                    <p className="text-gray-400 text-sm mt-1">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 gap-3 relative z-10">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: categoryIndex * 0.1 + skillIndex * 0.05,
                        type: "spring",
                        stiffness: 100,
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -2,
                      }}
                      className="relative group/skill"
                    >
                      <div className="glass-card p-3 text-center border border-white/10 hover:border-neon-blue/50 transition-all duration-300">
                        <span className="text-white font-medium text-sm">
                          {skill}
                        </span>

                        {/* Skill Hover Effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"
                          whileHover={{
                            background: [
                              "linear-gradient(45deg, rgba(51, 187, 255, 0.1), rgba(170, 51, 255, 0.1))",
                              "linear-gradient(45deg, rgba(170, 51, 255, 0.1), rgba(255, 51, 153, 0.1))",
                              "linear-gradient(45deg, rgba(51, 187, 255, 0.1), rgba(170, 51, 255, 0.1))",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Floating Particles for Active Category */}
                {activeCategory === categoryIndex && (
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-neon-blue rounded-full"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                          y: [0, -50, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 max-w-4xl mx-auto relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-32 h-32 border border-neon-blue/10 rounded-full"
                  style={{
                    left: `${(i * 20) % 100}%`,
                    top: `${(i * 30) % 100}%`,
                  }}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    delay: i * 1.5,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                className="flex items-center justify-center mb-4"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Sparkles className="w-8 h-8 text-neon-purple mr-2" />
                <Star className="w-6 h-6 text-neon-blue" />
              </motion.div>

              <h3 className="text-3xl font-bold text-white mb-4">
                Always Learning, Always Growing
              </h3>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                Technology evolves rapidly, and so do I. Currently exploring
                quantum computing, advanced neural architectures, and the latest
                in web3 technologies.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                {[
                  "Quantum Computing",
                  "Web3",
                  "Edge AI",
                  "MLOps",
                  "Blockchain",
                  "AR/VR",
                ].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: [0, -5, 5, 0],
                      boxShadow: "0 0 20px rgba(51, 187, 255, 0.5)",
                    }}
                    className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-purple text-white rounded-full text-sm font-medium cursor-pointer border border-white/20 hover:border-neon-blue/50 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Skills;

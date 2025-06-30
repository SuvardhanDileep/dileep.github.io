import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Section from "../UI/Section";

const Projects: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI Solution Builder",
      description:
        "Helps users design AI application architectures by guiding them through a structured workflow to select optimal techniques and generating tailored suggestions along with architecture diagrams.",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React.js", "AI", "Architecture Design", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI/ML",
    },
    {
      id: 2,
      title: "PDF Chat Application",
      description:
        "Interactive PDF chat app using Retrieval-Augmented Generation (RAG) with user-friendly interface for PDF uploads and content querying. Enhanced response accuracy from 48% to 92% through RAG pipeline optimization.",
      image:
        "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["LangChain", "OpenAI GPT-4o", "RAG", "Python", "Vector Store"],
      liveUrl: "#",
      githubUrl: "#",
      category: "AI",
    },
    {
      id: 3,
      title: "Predictive Maintenance for Metro Train Air Compressors",
      description:
        "Random Forest model to predict air leakage in air compressors using historical sensor data. Achieved 99% recall and 92% F1-score for fault detection, enabling proactive maintenance.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: [
        "Random Forest",
        "Predictive Analytics",
        "Python",
        "Feature Engineering",
      ],
      liveUrl: "#",
      githubUrl: "#",
      category: "Machine Learning",
    },
    {
      id: 4,
      title: "Audio Classifier",
      description:
        "AI model using Artificial Neural Networks (ANN) to classify urban sounds with MFCCs for audio feature extraction. Processed audio data with Librosa and SciPy, achieving 80% accuracy on the test set.",
      image:
        "https://images.pexels.com/photos/8438918/pexels-photo-8438918.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["TensorFlow", "Keras", "Audio Processing", "Librosa", "ANN"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Deep Learning",
    },
    {
      id: 5,
      title: "Blockchain Supply Chain Tracker",
      description:
        "Decentralized application for transparent supply chain management with smart contract automation.",
      image:
        "https://images.pexels.com/photos/6802049/pexels-photo-6802049.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Solidity", "Web3.js", "React", "IPFS", "Ethereum"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Blockchain",
    },
    {
      id: 6,
      title: "Real-time Collaboration Platform",
      description:
        "Multi-user collaboration platform with real-time editing, video conferencing, and AI-powered meeting insights.",
      image:
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Socket.io", "WebRTC", "Vue.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      category: "Collaboration",
    },
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <Section id="projects" enterAnimation="fadeIn">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions combining artificial intelligence
            with modern full-stack development practices.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 },
              }}
              className="glass-card overflow-hidden group cursor-pointer"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 text-xs font-semibold bg-neon-blue text-white rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-glass-white text-neon-purple rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-4">
                  <motion.a
                    href={project.liveUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors duration-300"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Live Demo</span>
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentProject}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="glass-card overflow-hidden"
              >
                <div className="relative">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 text-xs font-semibold bg-neon-blue text-white rounded-full">
                      {projects[currentProject].category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">
                    {projects[currentProject].title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {projects[currentProject].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {projects[currentProject].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-glass-white text-neon-purple rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={projects[currentProject].liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm">Live Demo</span>
                    </motion.a>
                    <motion.a
                      href={projects[currentProject].githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span className="text-sm">Code</span>
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card p-2 text-white hover:text-neon-blue transition-colors duration-300"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card p-2 text-white hover:text-neon-blue transition-colors duration-300"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  index === currentProject ? "bg-neon-blue" : "bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;

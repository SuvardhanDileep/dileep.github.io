import React from "react";
import { motion } from "framer-motion";
import { BookOpen, ExternalLink, Calendar, Users } from "lucide-react";
import Section from "../UI/Section";

const Publications: React.FC = () => {
  const publications = [
    {
      id: 1,
      title: "RAG HUB - A comprehensive guide to build an AI Architecture",
      journal: "AI Development Framework",
      year: "2024",
      authors: ["S.D. Gaddameedi"],
      abstract:
        "Created a question-driven framework to simplify AI development, guiding developers of all skill levels through custom AI architecture design with dynamic filtering and decision-tree logic. The framework reduces learning curves, accelerates development, and supports scalable AI solutions for projects of varying sizes.",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "#",
      citations: 0,
      type: "Technical Publication",
    },
  ];

  const blogPosts = [
    {
      title: "AI Knowledge Base",
      excerpt:
        "Web-based platform to document and share AI learnings, best practices, and reusable assets enabling developers to build GenAI solutions efficiently and collaboratively.",
      date: "2024-05-01",
      readTime: "10 min read",
      image:
        "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "#",
    },
    {
      title: "AI Notebook",
      excerpt:
        "Built a collaborative discussion and Q&A platform where students and developers can upload documents, save notes anchored in the central AI Knowledge Base.",
      date: "2024-03-15",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "#",
    },
    {
      title: "AI Solution Builder Overview",
      excerpt:
        "A detailed look at the architecture behind a tool that helps users design AI applications through structured workflows and tailored suggestions.",
      date: "2024-02-10",
      readTime: "12 min read",
      image:
        "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?auto=compress&cs=tinysrgb&w=400",
      url: "#",
    },
  ];

  return (
    <Section id="publications" enterAnimation="fadeIn">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Publications & Blog
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Sharing knowledge through research publications and technical blog
            posts on cutting-edge AI and development topics.
          </p>
        </motion.div>

        {/* Research Publications */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white mb-8 flex items-center"
          >
            <BookOpen className="text-neon-blue mr-3" />
            Research Publications
          </motion.h3>

          <div className="grid gap-8">
            {publications.map((pub, index) => (
              <motion.article
                key={pub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-1/4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative overflow-hidden rounded-lg"
                    >
                      <img
                        src={pub.image}
                        alt={pub.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        <span className="px-2 py-1 text-xs bg-neon-blue text-white rounded-full">
                          {pub.type}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  <div className="lg:w-3/4">
                    <motion.h4
                      whileHover={{ color: "#33bbff" }}
                      className="text-xl font-bold text-white mb-2 cursor-pointer transition-colors duration-300"
                    >
                      {pub.title}
                    </motion.h4>

                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {pub.year}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {pub.citations} citations
                      </div>
                      <span className="text-neon-purple font-medium">
                        {pub.journal}
                      </span>
                    </div>

                    <p className="text-gray-300 mb-3 leading-relaxed">
                      {pub.abstract}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Authors: </span>
                        {pub.authors.join(", ")}
                      </div>

                      <motion.a
                        href={pub.url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center space-x-2 text-neon-blue hover:text-neon-purple transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        <span>Read Paper</span>
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        {/* <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-3xl font-bold text-white mb-8"
          >
            Latest Blog Posts
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="glass-card overflow-hidden cursor-pointer group"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-3">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-lg font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300">
                    {post.title}
                  </h4>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <motion.a
                    href={post.url}
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center space-x-2 text-neon-purple hover:text-neon-blue transition-colors duration-300"
                  >
                    <span>Read More</span>
                    <ExternalLink size={14} />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </div>
        </div> */}
      </div>
    </Section>
  );
};

export default Publications;

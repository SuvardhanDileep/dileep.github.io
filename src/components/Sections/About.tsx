import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award, BookOpen } from "lucide-react";
import Section from "../UI/Section";

const About: React.FC = () => {
  const accordionData = [
    {
      title: "Education",
      icon: GraduationCap,
      items: [
        {
          title: "B.Tech in Electrical and Electronics Engineering",
          subtitle: "National Institute Of Technology, Calicut",
          period: "December 2021 - May 2025",
          description: "CGPA: 8.12",
        },
      ],
    },
    {
      title: "Experience",
      icon: Briefcase,
      items: [
        {
          title: "AI Academy - Freelancer",
          subtitle: "Online AI Education Platform",
          period: "November 2024 - Present",
          description:
            "Building interactive courses, real-world projects, and mentoring developers to harness AI's potential",
        },
        {
          title: "Full Stack Web Developer - Internship",
          subtitle: "Edureka",
          period: "July 2023 - February 2024",
          description:
            "Built responsive UI components with React.js, integrated RESTful APIs, and improved website performance",
        },
      ],
    },
    {
      title: "Achievements",
      icon: Award,
      items: [
        {
          title: "Competitive Programming",
          subtitle: "Leetcode, GeekforGeeks, Coding Ninjas",
          period: "",
          description:
            "Solved more than 550 problems across various coding platforms",
        },
        {
          title: "Self-driving Rover",
          subtitle: "Robotics Workshop",
          period: "",
          description:
            "Led a team of four in designing and building an autonomous navigation rover",
        },
        {
          title: "JEE Performance",
          subtitle: "National Engineering Entrance Exam",
          period: "2021",
          description:
            "Secured a top 1% rank in JEE MAIN 2021 and JEE ADVANCED 2021 qualified",
        },
      ],
    },
    {
      title: "Coursework",
      icon: BookOpen,
      items: [
        {
          title: "Core Computer Science",
          subtitle: "Academic Courses",
          period: "",
          description:
            "Data Structures and Algorithms, Database Management Systems, Operating Systems, Object-Oriented Programming",
        },
      ],
    },
  ];

  return (
    <Section id="about" enterAnimation="slideUp">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about creating intelligent solutions that bridge the gap
            between cutting-edge AI research and practical full-stack
            applications.
          </p>
        </motion.div>

        <div className="grid gap-8 max-w-4xl mx-auto">
          {accordionData.map((section, sectionIndex) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center mb-6">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full mr-4"
                >
                  <section.icon className="text-white w-6 h-6" />
                </motion.div>
                <h3 className="text-2xl font-bold text-white">
                  {section.title}
                </h3>
              </div>

              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <motion.div
                    key={itemIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: sectionIndex * 0.1 + itemIndex * 0.05,
                    }}
                    whileHover={{ scale: 1.02 }}
                    className="border-l-4 border-neon-blue pl-6 py-4 hover:border-neon-purple transition-colors duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <span className="text-neon-blue text-sm font-medium">
                        {item.period}
                      </span>
                    </div>
                    <p className="text-neon-purple font-medium mb-2">
                      {item.subtitle}
                    </p>
                    <p className="text-gray-300">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default About;

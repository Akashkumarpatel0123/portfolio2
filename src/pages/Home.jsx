import React from "react";
import { motion } from "framer-motion";
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaFileDownload, 
  FaAws,
  FaRegEnvelope
} from "react-icons/fa";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiHtml5, 
  SiCss3,
  SiTypescript,
  SiTailwindcss,
  SiGraphql
} from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Home = () => {
  // Data for different sections
  const experiences = [
    {
      company: "Cognifyz Technologies",
      role: "Full Stack Developer",
      period: "jan 2025 - feb 2025",
      description: "Developed and maintained scalable web applications using React.js and Node.js. Integrated RESTful APIs, ensuring smooth data flow between the backend and frontend. Led a project to enhance the user experience, achieving a 30% increase in user engagement. Collaborated with UI/UX teams to ensure mobile responsiveness and cross-platform compatibility..",
      color: "#4285F4",
      achievements: [
        "Improved search relevance by 15% through algorithm optimization",
        "Led a team of 5 engineers to deliver new features"
      ]
    },
     {
    company: "C-DAC (Centre for Development of Advanced Computing)",
    role: "Full Stack Trainee (MERN Stack)",
    period: "june 2024 - July 2024",
    description: "Completed intensive training focused on the MERN stack (MongoDB, Express.js, React.js, Node.js). Built several end-to-end web applications with features like user authentication, RESTful APIs, and responsive design. Gained hands-on experience with Git, Postman, and deployment using cloud platforms like Vercel and Render.",
    color: "#E91E63",
    achievements: [
      "Developed a full-stack project simulating a food delivery system with admin, user, and restaurant dashboards",
      "Built RESTful APIs using Express and integrated with MongoDB",
      "Achieved high code quality with reusable components and clean architecture"
    ]
  }
   
  ];

  const projects = [
    {
      title: "HTML Masterclass",
      description: "Comprehensive guide covering modern HTML5 features and best practices",
      tags: ["HTML5", "Web Development", "Tutorial"],
      link: "https://accredian-frontend-task-ecru-kappa.vercel.app/"
    },
    {
      title: "CSS Animations Guide",
      description: "Interactive tutorial on advanced CSS animations and transitions",
      tags: ["CSS3", "Animations", "UI/UX"],
      link: "https://foodxpress-frontend.vercel.app/"
    }
  ];

  const skills = [
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiReact />, name: "React" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiHtml5 />, name: "HTML5" },
    { icon: <SiCss3 />, name: "CSS3" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiGraphql />, name: "GraphQL" }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans scroll-smooth w-full overflow-x-hidden">
      {/* Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-gray-800/90 backdrop-blur-md border-b border-gray-700 shadow-lg w-full"
      >
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
          >
            Akash Portfolio
          </motion.div>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Home', 'Projects', 'Experience', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group px-1 py-2 text-sm font-medium transition-colors"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1 }}
              >
                <span className="group-hover:text-blue-400 transition-colors">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 h-0.5 bg-blue-500 w-0 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="relative w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="md:w-1/2 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              I build digital experiences <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                that users love
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
             Full-Stack Developer trained in MERN Stack with practical experience from C-DAC training and a development internship at Cognifyz Technologies. Proficient in JavaScript, React, Node.js, and MongoDB. Eager to contribute to real-world projects and grow as a developer.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-gray-600 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-800/50 transition-colors"
              >
                <FaFileDownload />
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {['EXPERTISE', 'PROJECTS', 'TECH BLOG', 'OPEN SOURCE'].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.2)" }}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-center backdrop-blur-sm hover:bg-gray-700/50 transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <h3 className="font-bold text-gray-100">{item}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-800/30 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Technical Toolkit
            </span>
          </motion.h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center p-3 mb-2 text-3xl text-blue-400">
                  {skill.icon}
                </div>
                <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Featured Work
            </span>
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden backdrop-blur-sm hover:shadow-xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 bg-gradient-to-r from-blue-900/30 to-purple-900/30 flex items-center justify-center relative">
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                    {project.title.split(' ')[0]}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="absolute top-4 right-4 text-gray-300 hover:text-white transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-gray-700/50 text-xs rounded-full text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
                  >
                    View Project <FiExternalLink size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gray-800/30 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </motion.h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 backdrop-blur-sm hover:shadow-lg transition-all"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-start gap-6">
                  <div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center text-2xl font-bold text-white shrink-0"
                    style={{ backgroundColor: exp.color }}
                  >
                    {exp.company[0]}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      {exp.role} · <span className="text-blue-400">{exp.company}</span>
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300 mb-4">{exp.description}</p>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-400 mr-2">▹</span>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-8 md:p-12 text-center shadow-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl font-bold mb-6"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                Let's Connect
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-300 max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a 
                href="mailto:damescdshub@gmail.com" 
                className="flex items-center gap-2 text-xl font-mono bg-gray-800 px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <FaRegEnvelope />
                akashkumarpatel7788@gmail.com
              </a>
            </motion.div>
            
            <motion.div 
              className="flex justify-center gap-6 text-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.a 
                href="https://github.com/Akashkumarpatel0123" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaGithub />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/akash-kumar-a18298266/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a 
                href="https://twitter.com/yourusername" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FaTwitter />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800 text-center text-gray-500 text-sm bg-gray-900/50 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
          <p className="mt-2 text-gray-600">Built with React, Tailwind CSS, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
import { motion } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Database, 
  Cpu, 
  BarChart3, 
  Code2, 
  Terminal,
  ChevronRight,
  BookOpen
} from "lucide-react";

const projects = [
  {
    title: "Risk Assessment",
    problem: "Developing predictive models to evaluate financial risk and creditworthiness using advanced machine learning techniques.",
    tools: ["Python", "Scikit-Learn", "XGBoost", "Pandas", "Statistics"],
    link: "https://github.com/vitorbeltrao/risk_assessment"
  },
  {
    title: "Fraud Detection",
    problem: "Real-time anomaly detection system to identify fraudulent transactions in financial datasets with high precision.",
    tools: ["Python", "LightGBM", "Imbalanced-learn", "MLflow", "SQL"],
    link: "https://github.com/vitorbeltrao/fraud-detection"
  },
  {
    title: "Crypto Anomaly Detection",
    problem: "Unsupervised learning approach to detect unusual patterns and potential market manipulations in cryptocurrency time-series data.",
    tools: ["PySpark", "Deep Learning", "Time Series", "Azure", "Docker"],
    link: "https://github.com/vitorbeltrao/cryptocurrency_anomaly_detection"
  }
];

const experiences = [
  {
    company: "Inter",
    role: "Data Scientist",
    period: "01/2025 - Present",
    description: "Leading advanced analytics initiatives and implementing machine learning solutions for one of Brazil's largest digital banks."
  },
  {
    company: "4yousee",
    role: "Data Scientist",
    period: "01/2023 - 01/2025",
    description: "Developed predictive models and data-driven strategies to optimize digital signage and audience measurement."
  },
  {
    company: "QDOIS Data Intelligence",
    role: "Data Scientist",
    period: "08/2021 - 01/2023",
    description: "Focused on business intelligence and predictive modeling, transforming complex data into actionable strategic insights."
  }
];

const techStack = [
  "Python", "Pyspark", "SQL", "MS Azure", "AWS", "CI/CD", "DataViz", 
  "Machine learning", "Deep learning", "NLP", "Statistics", "Math", 
  "CRISP-DM", "MLOps", "ETL", "A/B testing", "Model Interpretability", 
  "Docker", "Git", "MLflow", "Generative AI", "PowerBI", "Data Engineering", 
  "Excel", "Computer Vision", "Web Scrapping", "Airflow"
];

export default function App() {
  return (
    <div className="min-h-screen matrix-grid selection:bg-emerald-accent/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-none bg-graphite/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-mono text-emerald-accent font-bold tracking-tighter text-xl">
            VB<span className="animate-pulse">_</span>
          </span>
          <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest">
            <a href="#about" className="hover:text-emerald-accent transition-colors">About</a>
            <a href="#tech" className="hover:text-emerald-accent transition-colors">Stack</a>
            <a href="#projects" className="hover:text-emerald-accent transition-colors">Projects</a>
            <a href="#experience" className="hover:text-emerald-accent transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-accent transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-20">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col md:flex-row items-center justify-between gap-12 mb-32">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <div className="inline-block px-3 py-1 rounded-full bg-emerald-accent/10 border border-emerald-accent/20 text-emerald-accent text-xs font-mono mb-6">
              AVAILABLE FOR NEW CHALLENGES
            </div>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
              Vitor <span className="text-emerald-accent">Beltrão</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 font-light tracking-wide">
              Data Scientist | Machine Learning Engineer | IA Engineer
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://github.com/vitorbeltrao" 
                target="_blank" 
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-accent/50 hover:bg-emerald-accent/5 transition-all group"
              >
                <Github size={20} className="group-hover:text-emerald-accent" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/vitorbeltrao" 
                target="_blank" 
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-accent/50 hover:bg-emerald-accent/5 transition-all group"
              >
                <Linkedin size={20} className="group-hover:text-emerald-accent" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://medium.com/@vitorbeltrao300" 
                target="_blank" 
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 border border-white/10 hover:border-emerald-accent/50 hover:bg-emerald-accent/5 transition-all group"
              >
                <BookOpen size={20} className="group-hover:text-emerald-accent" />
                <span>Medium</span>
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden border-2 border-emerald-accent/30 relative z-10">
              <img 
                src="https://raw.githubusercontent.com/vitorbeltrao/Pictures/main/vb_image.jpeg" 
                alt="Vitor Beltrão" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-emerald-accent/10 rounded-2xl -z-0"></div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">01. About Me</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
              <p>
                Data Scientist with over <span className="text-white font-medium">8 years of professional experience</span>, 
                focusing the last 5 years in machine learning, predictive modeling, and data analytics.
              </p>
              <p>
                Proven ability to develop and implement advanced analytical solutions that drive decision-making 
                and strategic business growth. Expertise in <span className="text-emerald-accent">Python, Pyspark, and SQL</span>, 
                along with cloud computing platforms like <span className="text-white">Azure and AWS</span>.
              </p>
              <p>
                My strengths lie in transforming data into actionable insights, enhancing operational efficiencies, 
                and optimizing processes across various industries.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-xl glass-card">
                <Database className="text-emerald-accent mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">Data Strategy</h3>
                <p className="text-sm text-gray-500">Transforming raw data into strategic business decisions.</p>
              </div>
              <div className="p-6 rounded-xl glass-card">
                <Cpu className="text-emerald-accent mb-4" size={32} />
                <h3 className="text-white font-bold mb-2">ML Engineering</h3>
                <p className="text-sm text-gray-500">Building scalable predictive models and MLOps pipelines.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">02. Tech Stack</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech, index) => (
              <motion.span 
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-md bg-white/5 border border-white/10 text-sm font-mono hover:border-emerald-accent/40 hover:text-emerald-accent transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">03. Featured Projects</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div 
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl glass-card flex flex-col h-full group"
              >
                <div className="flex justify-between items-start mb-6">
                  <Terminal className="text-emerald-accent" size={24} />
                  <a href={project.link} target="_blank" className="text-gray-500 hover:text-emerald-accent transition-colors">
                    <ExternalLink size={20} />
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-emerald-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.problem}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map(tool => (
                    <span key={tool} className="text-[10px] font-mono text-emerald-accent/70 uppercase tracking-widest">
                      {tool}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  target="_blank"
                  className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-white hover:text-emerald-accent transition-colors"
                >
                  View on GitHub <ChevronRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="mb-32 scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold text-white uppercase tracking-tighter">04. Professional Path</h2>
            <div className="h-[1px] flex-1 bg-white/10"></div>
          </div>
          <div className="space-y-12 relative before:absolute before:left-[17px] before:top-2 before:bottom-2 before:w-[2px] before:bg-white/5">
            {experiences.map((exp, index) => (
              <motion.div 
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-0 top-1 w-9 h-9 rounded-full bg-graphite border-2 border-emerald-accent flex items-center justify-center z-10">
                  <div className="w-2 h-2 rounded-full bg-emerald-accent animate-pulse"></div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{exp.role} @ <span className="text-emerald-accent">{exp.company}</span></h3>
                  <span className="text-sm font-mono text-gray-500">{exp.period}</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-2xl">
                  {exp.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 text-center scroll-mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tighter">Get In Touch</h2>
            <p className="text-gray-400 max-w-lg mx-auto mb-10 text-lg">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
            <a 
              href="mailto:vitorbeltrao300@gmail.com" 
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-emerald-accent text-graphite font-bold text-lg hover:bg-emerald-glow hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] transition-all duration-300"
            >
              <Mail size={20} />
              Say Hello
            </a>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-sm text-gray-500 font-mono">
            © {new Date().getFullYear()} Vitor Beltrão. Built with React & Tailwind.
          </div>
          <div className="flex gap-6 text-gray-500">
            <a href="https://github.com/vitorbeltrao" target="_blank" className="hover:text-emerald-accent transition-colors"><Github size={20} /></a>
            <a href="https://linkedin.com/in/vitorbeltrao" target="_blank" className="hover:text-emerald-accent transition-colors"><Linkedin size={20} /></a>
            <a href="https://medium.com/@vitorbeltrao300" target="_blank" className="hover:text-emerald-accent transition-colors"><BookOpen size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

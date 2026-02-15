import { motion } from "framer-motion";

const experiences = [
  {
    role: "Group CTO",
    company: "Kifiya Financial Technology PLC",
    period: "October 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    desc: "Strategic leadership of Core Tech Infrastructures, CTO-level leadership of Intelligent Financial Infrastructure.",
  },
  {
    role: "Fractional CTO",
    company: "Kifiya Financial Technology PLC",
    period: "October 2025 – Present",
    location: "Addis Ababa, Ethiopia",
    desc: "Intelligent Financial Infrastructure — Strategic Technology Leadership, Architecture & Platform Design, AI & Data Intelligence Enablement, Governance, Compliance & Resilience.",
  },
  {
    role: "Chief Artificial Intelligence Officer",
    company: "Kifiya Financial Technology PLC",
    period: "August 2024 – January 2026",
    location: "Addis Ababa, Ethiopia",
    desc: "Leading AI strategy, data science initiatives, and AI-powered financial solutions.",
  },
  {
    role: "Chief Technology Officer",
    company: "Kifiya Financial Technology PLC",
    period: "May 2025 – September 2025",
    location: "Addis Ababa, Ethiopia",
    desc: "Make AI change lives — with Kifiya Financial Technology.",
  },
  {
    role: "Deputy Chief Technology Officer",
    company: "Kifiya Financial Technology PLC",
    period: "March 2025 – May 2025",
    location: "Addis Ababa, Ethiopia",
    desc: "Corporate Strategic Planning.",
  },
  {
    role: "Head of Intelligent Data Driven Decisioning (IDD)",
    company: "Kifiya Financial Technology PLC",
    period: "August 2024 – March 2025",
    location: "Addis Ababa, Ethiopia",
    desc: "Leading as lead data scientist driving the development of AI-driven credit scoring system that so far disbursed around USD 400 million.",
  },
  {
    role: "Head of Credit Research and Model Validation",
    company: "Kifiya Financial Technology PLC",
    period: "January 2024 – August 2024",
    location: "Addis Ababa, Ethiopia",
    desc: "Developed and validated AI-driven credit scoring and risk assessment models.",
  },
  {
    role: "Assistant Professor & Lecturer",
    company: "Addis Ababa University",
    period: "2011 – Present",
    location: "Addis Ababa, Ethiopia",
    desc: "Teaching and researching AI, machine learning, and software engineering.",
  },
  {
    role: "Chief Technology Officer",
    company: "iCog Labs",
    period: "2016 – 2018",
    location: "Addis Ababa, Ethiopia",
    desc: "Directed AI development projects, overseeing machine learning and software innovation.",
  },
  {
    role: "Senior Project Manager – Sophia Humanoid Robot",
    company: "Hanson Robotics",
    period: "2016 – 2018",
    location: "",
    desc: "Enhanced AI perception and interaction systems for Sophia, a globally recognized humanoid robot.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Experience</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Career Journey</h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-10"
              >
                {/* Dot */}
                <div className="absolute left-0 top-2 w-[23px] h-[23px] rounded-full border-2 border-accent bg-background flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                </div>

                <div className="bg-card p-6 rounded-xl border border-border hover:border-accent/20 transition-colors">
                  <span className="text-accent text-xs font-medium">{exp.period}</span>
                  <h3 className="text-foreground font-semibold text-lg mt-1">{exp.role}</h3>
                  <p className="text-muted-foreground text-sm">{exp.company}{exp.location && ` · ${exp.location}`}</p>
                  <p className="text-muted-foreground text-sm mt-3 leading-relaxed">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

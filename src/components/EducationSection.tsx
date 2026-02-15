import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "PhD, Computer Science & Digital Architecture",
    school: "National Engineering School of Brest (ENIB)",
    period: "2020 – 2023",
  },
  {
    degree: "MSc, Computer Science",
    school: "Addis Ababa University",
    period: "2008 – 2016",
  },
  {
    degree: "BSc, Computer Science",
    school: "Wollega University",
    period: "",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-secondary/50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Education</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Academic Background</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/20 transition-colors"
            >
              <GraduationCap className="w-8 h-8 text-accent mb-4" />
              <h3 className="text-foreground font-semibold mb-1">{edu.degree}</h3>
              <p className="text-muted-foreground text-sm">{edu.school}</p>
              {edu.period && (
                <p className="text-accent text-xs font-medium mt-3">{edu.period}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

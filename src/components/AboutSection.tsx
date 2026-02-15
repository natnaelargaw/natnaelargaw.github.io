import { motion } from "framer-motion";
import { Brain, Landmark, BarChart3, Users } from "lucide-react";

const focusAreas = [
  { icon: Brain, title: "Artificial Intelligence", desc: "Deep learning, NLP, and computer vision research" },
  { icon: Landmark, title: "Financial Technology", desc: "Next-generation fintech infrastructure" },
  { icon: BarChart3, title: "Credit Scoring", desc: "AI-driven risk assessment and alternative data" },
  { icon: Users, title: "Financial Inclusion", desc: "Bridging the gap for underserved communities" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Driving Innovation at the Intersection
            <br />
            of AI &amp; Finance
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6">
              With a strong academic foundation from Addis Ababa University, I have honed my expertise in Artificial Intelligence, Machine Learning, and Financial Technology, focusing on credit scoring, alternative data analytics, AI-driven risk assessment, and financial inclusion.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              At Kifiya, I lead the development of next-generation fintech infrastructure, leveraging deep learning, cloud computing, and Web 3.0 to pioneer alternative credit scoring models and agentic systems. I am deeply committed to bridging the gap between technology and financial accessibility, ensuring AI-driven financial services are both inclusive and impactful.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {focusAreas.map((area, i) => (
              <motion.div
                key={area.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-5 rounded-xl bg-card border border-border hover:border-accent/30 transition-colors group"
              >
                <area.icon className="w-8 h-8 text-accent mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-foreground text-sm mb-1">{area.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{area.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

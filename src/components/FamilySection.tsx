import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import familyPortrait from "@/assets/family-portrait.png";
import familyKids from "@/assets/family-kids.jpeg";
import familyFatherChild from "@/assets/family-father-child.png";
import familyWife from "@/assets/family-wife.png";

const FamilySection = () => {
  return (
    <section id="family" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Family</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Beyond Work</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-accent" />
              <h3 className="text-xl font-semibold text-foreground">Happily Married & Father of Three</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Behind every ambitious vision is a strong foundation. My family is the cornerstone of everything I do — 
              a source of joy, motivation, and balance. As a proud father of three wonderful children and a happily married man, 
              I find that the love and support of my family fuels my passion for innovation and purpose-driven work.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              They remind me every day why building inclusive technology and creating opportunities for the next generation matters.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <img
              src={familyFatherChild}
              alt="With my child"
              className="w-full h-80 object-cover object-top"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { src: familyWife, alt: "My wife", label: "My Better Half" },
            { src: familyKids, alt: "My children", label: "The Kids" },
            { src: familyPortrait, alt: "Portrait", label: "Moments" },
          ].map((photo, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-xl overflow-hidden border border-border"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <span className="text-white text-sm font-medium">{photo.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FamilySection;

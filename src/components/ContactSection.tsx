import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-gold text-sm font-medium tracking-widest uppercase">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Let's Connect</h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-12">
            Interested in collaborating on AI research, fintech innovation, or academic partnerships? I'd love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="mailto:natnaelargaw@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold text-primary text-sm font-semibold rounded-lg hover:bg-gold/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              Email Me
            </a>
            <a
              href="https://www.linkedin.com/in/natnaelwondimu/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 border border-primary-foreground/30 text-primary-foreground text-sm font-medium rounded-lg hover:border-primary-foreground/60 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 mt-10 text-primary-foreground/50 text-sm">
            <MapPin className="w-4 h-4" />
            <span>Addis Ababa, Ethiopia</span>
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-primary-foreground/10">
        <p className="text-center text-primary-foreground/40 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </section>
  );
};

export default ContactSection;

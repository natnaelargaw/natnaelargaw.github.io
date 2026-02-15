import { motion } from "framer-motion";
import { useState } from "react";
import { Briefcase, ChevronDown, ChevronUp } from "lucide-react";

const projects = [
  {
    title: "Enterprise Bank Grade General Ledger",
    period: "Jan 2026 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "A bank-grade General Ledger and Financial Control platform implementing double-entry bookkeeping, event-driven posting, and strict accounting period controls. Supports complex financial flows such as loans, wallets, accruals, revenue sharing, taxes, reconciliation, and end-of-period close.",
  },
  {
    title: "Enterprise Robocall and Call Center Wrapper",
    period: "Jan 2026 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "A full-fledged wrapper for Issabel call center and customer support automation platform.",
  },
  {
    title: "Loyalty Infrastructure",
    period: "Jan 2026 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "Loyalty and customer retention systems implementation.",
  },
  {
    title: "Embedded Finance BNPL Platform",
    period: "Dec 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "A multi-tenant embedded Buy Now, Pay Later platform combining credit decisioning, payments, risk management, and compliance into a configurable, white-label system.",
  },
  {
    title: "Open Data Engine",
    period: "Nov 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "Open data provider engine serving standardized data points such as addresses, KYB, and more.",
  },
  {
    title: "Digital Wallet System",
    period: "Oct 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "An AI-enabled Digital Wallet System with embedded Loan Management, featuring pluggable architecture for core banking, payment gateways, and credit scoring engines.",
  },
  {
    title: "Identity Management System",
    period: "Oct 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "Comprehensive identity management and verification infrastructure.",
  },
  {
    title: "Intelligent Onboarding and Verification (eKYC)",
    period: "Oct 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "AI-powered electronic Know Your Customer system for intelligent onboarding and verification.",
  },
  {
    title: "Loan Collection and Recovery System",
    period: "Oct 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "AI-driven debt recovery system using ML, predictive analytics, and omnichannel communication for higher recovery rates.",
  },
  {
    title: "Loan Portfolio Intelligence Platform",
    period: "Oct 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "End-to-end portfolio visibility with predictive insights, dynamic segmentation, stress testing, and scenario modeling.",
  },
  {
    title: "Fraud Intelligence Platform",
    period: "Aug 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "AI-powered fraud detection combining ML intelligence with rule-based decisioning, featuring case management, alert management, and AML tools.",
  },
  {
    title: "Agentic HR System",
    period: "Feb 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "AI-driven HR management solution for talent acquisition, employee engagement, and performance analytics.",
  },
  {
    title: "Agentic Credit Portfolio Optimizer",
    period: "Jan 2025 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "AI-driven solution utilizing alternative data, ML, LLM, and risk analytics to optimize credit portfolio performance.",
  },
  {
    title: "AI Powered Alternative Credit Scoring Infrastructure",
    period: "Sep 2024 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "Scalable AI tech infrastructure for dynamic credit scoring with 30+ ML models, supporting low-code deployment globally.",
  },
  {
    title: "MSME Credit Scoring Models",
    period: "Sep 2024 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "20+ credit scoring ML models including Transaction, Business Growth, Employment, Repayment, Psychometric, and Invoice models.",
  },
  {
    title: "PX: Large Scale AI and Data Marketplace",
    period: "Sep 2024 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "Large-scale platform for 5M+ data sourcing agents to collect data for under-resourced languages like Amharic and Afaan Oromo.",
  },
  {
    title: "Intelligent Data Driven Decisioning MaaS",
    period: "Jan 2024 – Present",
    company: "Kifiya Financial Technology PLC",
    desc: "Credit Scoring Model as a Service Platform with Meta Model orchestration architecture. AI Native Platform.",
  },
  {
    title: "Agentic Kifiya Experience (Virtual Assistant)",
    period: "Present",
    company: "Kifiya Financial Technology PLC",
    desc: "AI-powered virtual assistant for customer interactions using NLP, delivering seamless banking, credit scoring, and support experiences.",
  },
  {
    title: "Referral System",
    period: "Sep 2025 – Dec 2025",
    company: "Kifiya Financial Technology PLC",
    desc: "Referral system as a service enabling customer network growth.",
  },
  {
    title: "Transitional Liquidity and Guarantee Management",
    period: "Jun 2024 – Nov 2025",
    company: "Kifiya Financial Technology PLC",
    desc: "Transitional liquidity and guarantee management system.",
  },
  {
    title: "CRM",
    period: "Jan 2024 – Sep 2025",
    company: "Kifiya Financial Technology PLC",
    desc: "Full-fledged pathway to credit Participant Management System.",
  },
  {
    title: "Agentic Survey Management System",
    period: "Jun 2025 – Jul 2025",
    company: "Kifiya Financial Technology PLC",
    desc: "Agentic survey tool with multifaceted analysis using LLM and multi-agent frameworks.",
  },
  {
    title: "eVoucher System",
    period: "Jan 2025 – Apr 2025",
    company: "Kifiya Financial Technology PLC",
    desc: "NFC-based card management system.",
  },
  {
    title: "Agricultural Risk Prediction Modeling",
    period: "Nov 2024 – Jan 2025",
    company: "Kifiya Financial Technology PLC",
    desc: "5+ ML models including NDVI, Weather Prediction, Soil Fertility Index, Yield Prediction, and Price Prediction.",
  },
  {
    title: "Voice Biometrics System",
    period: "Aug 2024 – Jan 2025",
    company: "Kifiya Financial Technology PLC",
    desc: "AI-based voice biometric system for identity verification.",
  },
  {
    title: "Face Recognition Attendance & Liveliness System",
    period: "Oct 2024 – Nov 2024",
    company: "Kifiya Financial Technology PLC",
    desc: "Deep learning-based liveliness detection and attendance management.",
  },
  {
    title: "Conversational Banking System",
    period: "Jan 2024 – Aug 2024",
    company: "Kifiya Financial Technology PLC",
    desc: "RAG system for voice-based banking assistance in local languages.",
  },
  {
    title: "ERP Project Consultancy",
    period: "Jan 2020 – Present",
    company: "Ethiopian Sugar Industry Group",
    desc: "ERP system implementation consultancy across HQ and multiple sugar factories.",
  },
  {
    title: "Humanoid Robot Vision System (Sophia)",
    period: "Jun 2016 – Jan 2018",
    company: "iCog Labs / Hanson Robotics",
    desc: "Computer vision for Sophia robot: saliency detection, facial emotion recognition, gesture detection and puppeteering.",
  },
];

const ProjectsSection = () => {
  const [showAll, setShowAll] = useState(false);
  const displayed = showAll ? projects : projects.slice(0, 8);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Projects</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">Key Projects</h2>
          <p className="text-muted-foreground mt-3">A selection of {projects.length} projects spanning AI, FinTech, and enterprise systems.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {displayed.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/20 transition-colors group"
            >
              <div className="flex items-start gap-3 mb-3">
                <Briefcase className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <div className="min-w-0">
                  <h3 className="text-foreground font-semibold leading-tight">{project.title}</h3>
                  <p className="text-muted-foreground text-xs mt-1">{project.company}</p>
                </div>
              </div>
              <span className="text-accent text-xs font-medium">{project.period}</span>
              <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3">{project.desc}</p>
            </motion.div>
          ))}
        </div>

        {projects.length > 8 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center mt-10"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground text-sm font-medium rounded-lg hover:border-accent/40 transition-colors"
            >
              {showAll ? (
                <>Show Less <ChevronUp className="w-4 h-4" /></>
              ) : (
                <>Show All {projects.length} Projects <ChevronDown className="w-4 h-4" /></>
              )}
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;

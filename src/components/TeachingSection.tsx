import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen } from "lucide-react";

const bscCourses = [
  { title: "Introduction to Programming" },
  { title: "Data Structures and Algorithms" },
  { title: "Object-Oriented Programming" },
  { title: "Software Engineering Principles and Techniques" },
  { title: "Software Testing & QA" },
  { title: "Database Systems" },
  { title: "Web Programming" },
  { title: "Operating Systems" },
  { title: "Computer Networks" },
  { title: "Machine Learning" },
  { title: "Deep Learning" },
  { title: "Computer Vision" },
  { title: "Mobile Engineering" },
  { title: "Cloud Computing Fundamentals" },
  { title: "Project Management" },
  { title: "Human-Computer Interaction" },
  { title: "Database Administration" },
];

const mscCourses = [
  { title: "Cognitive Science" },
  { title: "Computer Vision" },
  { title: "Deep Learning" },
  { title: "AI Principles and Techniques" },
  { title: "Reinforcement Learning" },
];

const advisoryDomains = [
  "Interactive Machine Learning",
  "Explainable AI",
  "Reinforcement Learning",
  "Computer Vision",
  "Financial Data Analysis",
];

const CourseGrid = ({ courses }: { courses: { title: string }[] }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
    {courses.map((course, i) => (
      <motion.div
        key={course.title}
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: i * 0.03 }}
        className="p-4 rounded-lg bg-card border border-border hover:border-accent/20 transition-colors group"
      >
        <div className="flex items-start gap-3">
          <BookOpen className="w-4 h-4 text-accent mt-0.5 shrink-0" />
          <h4 className="text-foreground text-sm font-medium leading-snug">{course.title}</h4>
        </div>
      </motion.div>
    ))}
  </div>
);

const TeachingSection = () => {
  return (
    <section id="teaching" className="py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-accent text-sm font-medium tracking-widest uppercase">Teaching</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Courses at Addis Ababa University
          </h2>
        </motion.div>

        <Tabs defaultValue="bsc" className="w-full">
          <TabsList className="mb-8 bg-secondary">
          <TabsTrigger value="bsc" className="text-sm">BSc Courses</TabsTrigger>
            <TabsTrigger value="msc" className="text-sm">MSc Courses</TabsTrigger>
            <TabsTrigger value="advisory" className="text-sm">Advisory</TabsTrigger>
          </TabsList>

          <TabsContent value="bsc">
            <p className="text-muted-foreground text-sm mb-6">
              Undergraduate courses for Software Engineering, IT, and AI students.
            </p>
            <CourseGrid courses={bscCourses} />
          </TabsContent>

          <TabsContent value="msc">
            <p className="text-muted-foreground text-sm mb-6">
              Advanced courses for Master's students in AI and cognitive computing.
            </p>
            <CourseGrid courses={mscCourses} />
          </TabsContent>

          <TabsContent value="advisory">
            <p className="text-muted-foreground text-sm mb-6">
              I advise students at the intersection of these research domains.
            </p>
            <div className="flex flex-wrap gap-3">
              {advisoryDomains.map((domain, i) => (
                <motion.span
                  key={domain}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium border border-accent/20"
                >
                  {domain}
                </motion.span>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default TeachingSection;

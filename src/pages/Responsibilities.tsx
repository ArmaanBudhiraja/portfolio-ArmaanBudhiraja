import {
  Code,
  Users,
  Award,
  TvMinimalIcon,
  Mic2,
  Calendar
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const Responsibilities = () => {
  const [active, setActive] = useState(0);

  const positions = [
    {
      id: 0,
      title: "Publicity & Marketing Head-VIT Anchoring Club",
      year: "Mar 2025 – Present",
      icon: <Users className="h-5 w-5" />,
      color: "bg-purple-500",
      role: "Publicity & Marketing",
      skills: ["Team Leadership", "Digital Marketing", "Brand Strategy", "Content Creation", "Social Media"],
      responsibilities: [
        "Led digital and offline campaigns for the VIT Anchoring Club, increasing event attendance by 40% and tripling Instagram engagement.",
        "Collaborated with media teams to design 10+ reels, 20+ posters, and 50+ stories for social media promotion.",
        "Managed a publicity team of 20+ members, coordinating across digital platforms and campus-level outreach.",
      ],
    },
    {
      id: 1,
      title: "Core Member-  Advanced Developers Group (ADG)",
      year: "Jun 2024 - Apr 2025", 
      icon: <Code className="h-5 w-5" />,
      color: "bg-blue-500",
      role: "App & Web Development",
      skills: ["React", "Swift", "Performance Optimization", "Code Review", "Problem Solving"],
      responsibilities: [
        "Analyzed macOS application performance bottlenecks using Instruments, resolving 15+ critical memory leaks and improving responsiveness by 30% for users with older machines.",
        "Conducted weekly code reviews in ADG, identified inefficiencies, and implemented fixes that reduced runtime by 15%, enhancing overall user experience across multiple projects.",
      ],
    },
    {
      id: 2,
      title: "Riviera (VIT Vellore)",
      year: "Feb 2025",
      icon: <Mic2 className="h-6 w-6" />,
      color: "bg-amber-500",
      role: "Anchoring & Event Hosting",
      skills: [
        "Anchoring",
        "Scriptwriting",
        "Live Event Coordination",
        "Crowd Engagement",
      ],
      responsibilities: [
        "Hosted Proshows where 10+ celebrities performed for 20,000+ attendees, ensuring seamless on-stage execution.",
        "Contributed to event scripting, show flow management, and coordinated transitions between celebrity acts.",
      ],
    },
    {
      id: 3,
      title: "Gravitas (VIT Vellore)",
      year: "Oct 2024",
      icon: <Calendar className="h-6 w-6" />,
      color: "bg-green-500",
      role: "Event & Guest Management",
      skills: [
        "Leadership",
        "Coordination",
        "Communication",
        "Event Supervision",
      ],
      responsibilities: [
        "Coordinated with 50+ guests from diverse tech backgrounds and supervised 25+ volunteers during the 3-day tech fest.",
        "Ensured smooth execution of 30+ events by managing schedules, logistics, and real-time problem-solving.",
      ],
    },
    
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Title */}
      <div className="mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold flex items-center flex-row-reverse">
          <span>Positions of Responsibility</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Timeline */}
        <div className="lg:col-span-4 hidden lg:block">
          <div className="lg:sticky lg:top-24 space-y-2 pb-4">
            {positions.map((pos, index) => (
              <button
                key={pos.id}
                onClick={() => setActive(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 flex items-start gap-3 hover:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring ${
                  active === index ? "bg-muted shadow-md scale-[1.02]" : ""
                }`}
              >
                <div className="relative">
                  <div
                    className={`p-2 rounded-full text-white ${pos.color}`}
                  >
                    {pos.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold">{pos.title}</h3>
                  <p className="text-sm text-muted-foreground">{pos.year}</p>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Details Panel with Animation */}
        <div className="lg:col-span-8 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={positions[active].id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-card rounded-xl p-6 md:p-8 shadow-sm border"
            >
              {/* Header */}
              <div className="mb-6 md:mb-8">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {positions[active].title}
                </h2>
                <p className="text-lg text-muted-foreground mt-1">
                  {positions[active].role}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-6 md:mb-8">
                <h3 className="text-sm uppercase font-semibold text-muted-foreground mb-3">
                  Skills
                </h3>
                <div className="flex flex-wrap gap-2">
                  {positions[active].skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="inline-flex items-center rounded-full bg-secondary text-secondary-foreground text-sm py-1 px-3 font-semibold hover:bg-secondary/80 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-sm uppercase font-semibold text-muted-foreground mb-3">
                  Key Responsibilities
                </h3>
                <ul className="space-y-4">
                  {positions[active].responsibilities.map((res, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div
                        className={`p-1.5 rounded-full text-white shrink-0 mt-0.5 ${positions[active].color}`}
                      >
                        <Award className="h-4 w-4" />
                      </div>
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1, duration: 0.3 }}
                        className="text-base md:text-lg"
                      >
                        {res}
                      </motion.span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

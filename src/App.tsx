import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeProvider, useMode } from "./contexts/ModeContext";
import { Layout } from "./components/Layout";
import { ProfessionalHome } from "./pages/professional/Home";
import { ChaoticHome } from "./pages/chaotic/Home";
import { About } from "./pages/About";
import { Skills } from "./pages/Skills";
import { Projects } from "./pages/Projects";
import { Hobbies } from "./pages/Hobbies";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";
import { Responsibilities } from "./pages/Responsibilities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

import { TypewriterIntro } from "@/components/TypewriterIntro";
import { useState } from "react";

const HomePage = () => {
  const { mode } = useMode();

  // Read localStorage once on mount
  const [introDone, setIntroDone] = useState(() => {
    const played = localStorage.getItem("introPlayed");
    return played === "true"; // If true → skip intro
  });

  function handleIntroComplete() {
    localStorage.setItem("introPlayed", "true");
    setIntroDone(true);
  }

  return (
    <>
      {/* Intro only if NOT played before */}
      {!introDone && <TypewriterIntro onComplete={handleIntroComplete} />}

      {/* Homepage wrapper (blur initially only if intro playing) */}
      <div
        id="app-page-wrapper"
        className={
          introDone
            ? "transition-all duration-700 opacity-100"
            : "transition-all duration-700 opacity-0 "
        }
      >
        {mode === "professional" ? <ProfessionalHome /> : <ChaoticHome />}
      </div>
    </>
  );
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ModeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/hobbies" element={<Hobbies />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/responsibilities" element={<Responsibilities />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

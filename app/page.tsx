
import Skill from "@/components/Skill";
import About from "../components/About";
import Hero from "../components/Hero";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <main className="px-6 w-full min-h-screen bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
      <Hero />
      <About />
      <Skill />
      <Projects />
     
    </main>
  );
}

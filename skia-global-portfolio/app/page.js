import Navigation      from '../components/Navigation';
import Hero            from '../components/Hero';
import About           from '../components/About';
import Programs        from '../components/Programs';
import CaseStudies     from '../components/CaseStudies';
import Specialisations from '../components/Specialisations';
import Experience      from '../components/Experience';
import Contact         from '../components/Contact';
import Footer          from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <About />
      <Programs />
      <CaseStudies />
      <Specialisations />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}

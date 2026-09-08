import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Experience from '../components/Experience';
import Services from '../components/Services';
import BlogPreview from '../components/BlogPreview';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Experience />
      <Services />
      <BlogPreview />
      <Contact />
    </>
  );
}

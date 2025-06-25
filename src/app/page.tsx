import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Programs from '@/components/Programs';
import News from '@/components/News';
import About from '@/components/About';
import Admissions from '@/components/Admissions';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import DeviceTestPanel from '@/components/DeviceTestPanel';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Programs />
        <News />
        <About />
        <Admissions />
        <Contact />
      </main>
      <Footer />
      <DeviceTestPanel />
    </div>
  );
}

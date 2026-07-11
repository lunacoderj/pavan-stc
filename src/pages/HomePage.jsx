import React from 'react';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { Services } from '../components/sections/Services';
import { Gallery } from '../components/sections/Gallery';
import { Process } from '../components/sections/Process';
import { Coverage } from '../components/sections/Coverage';
import { Testimonials } from '../components/sections/Testimonials';
import { FAQ } from '../components/sections/FAQ';
import { ContactCTA } from '../components/sections/ContactCTA';

export function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Coverage />
      <Process />
      <Gallery />
      <About />
      <Testimonials />
      <FAQ />
      <ContactCTA />
    </main>
  );
}

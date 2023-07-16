import React from 'react';
import Navbar from '../components/Navbar';
import { EmblaCarousel } from '../components/EmblaCarousel';
import About from '../components/About';

const Home = () => {
  return (
    <div>
      <Navbar />
      <EmblaCarousel />
      <About />
    </div>
  );
};

export default Home;

import React from 'react';
import Hero from '../../components/Hero';
import Landing from '../../components/Landing';

const HomeScreen = () => {
  return (
    <div className="grid grid-cols-3 h-screen w-screen bg-gray-900 bg-opacity-95">
      <div className="col-span-1">
        <Hero />
      </div>
      <div className="col-span-2">
        <Landing />
      </div>
    </div>
  );
};

export default HomeScreen;

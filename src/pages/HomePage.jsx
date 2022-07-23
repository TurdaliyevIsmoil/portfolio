import React from "react";
import Header from "../components/Header";
import HomeHero from "../components/HomeHero";
import Portfolio from "../components/Portfolio";

function HomePage() {
  return (
    <div>
      <Header />
      <HomeHero />
      <Portfolio />
      <p style={{textAlign: 'center'}}>Soon</p>
    </div>
  );
}

export default HomePage;

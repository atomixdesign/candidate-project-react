import React, { useEffect } from "react";
import logo from "./atomix.png";
import "./App.scss";
import Navbar from "./header/Navbar";
import HomeBanner from "./home/banner/home-banner";
import ThreeColumn from "./home/Three-column/Three-column";
import Carousel from "./home/Carousel/Carousel";
import Team from "./home/Team/Team";
import Footer from "./Footer/Footer";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "/Header/main.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="App">
      <Navbar />

      <HomeBanner />
      <ThreeColumn />
      <Carousel />
      <Team />
      <Footer />
    </div>
  );
}

export default App;

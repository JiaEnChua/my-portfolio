import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* <Experience />
      <Projects />
      <Footer /> */}
    </div>
  );
}

export default App;

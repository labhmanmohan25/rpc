import "./App.css";
import Header from "./components/header/Header";
import Benifits from "./components/benifits/Benifits";
import Mockup from "./components/mockup/Mockup";
import Features from "./components/features/Features";
import Info from "./components/info/Info";
import Footer from "./components/footer/Footer";
import React, { useState } from "react";

function App() {
  const [tnc, set_tnc] = useState(false);
  // console.log(tnc);

  return (
    <div className="app">
      <Header tnc={tnc} set_tnc={set_tnc} />
      <Benifits />
      <Mockup />
      <Features />
      <Info />
      <Footer tnc={tnc} set_tnc={set_tnc} />
    </div>
  );
}

export default App;

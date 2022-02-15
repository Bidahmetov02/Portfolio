import Topbar from "./components/topbar/Topbar";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Intro from "./components/intro/Intro";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, SetMenuOpen] = useState(false);

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>
      <Menu menuOpen={menuOpen} SetMenuOpen={SetMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;

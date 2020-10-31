import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./components/SideBar";
import { Content, About, Works, Contact } from "./pages";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <SideBar onClick={() => setOpen(true)} />
        <Switch>
          <Route path="/" exact render={() => <Content open={open} />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/works" render={() => <Works />} />
          <Route path="/contact" render={() => <Contact />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

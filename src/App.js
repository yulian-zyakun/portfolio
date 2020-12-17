import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Aside from "./Components/Aside";
import Contacts from "./Components/Contacts";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/about"} />} />
          <Route path="/about" render={() => <About />} />
          <Route path="/home" render={() => <About />} />
          <Route path="/resume" render={() => <Portfolio />} />
          <Route path="/portfolio" render={() => <Portfolio />} />
          <Route path="/contact" render={() => <Contacts />} />
          <Route path="*" render={() => <div>Error 404 - Not Found</div>} />
        </Switch>
      </section>
      <Aside />
      <Footer />
    </div>
  );
}

export default App;

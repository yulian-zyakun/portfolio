import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contacts from "./Components/Contacts";
import Aside from "./Components/Aside";
import "./App.css";
import { data } from "./Assets/appData";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <section>
        <Switch>
          <Route exact path="/" render={() => <Redirect to={"/about"} />} />
          <Route path="/about" render={() => <About data={data.about} />} />
          <Route path="/home" render={() => <About />} />
          <Route path="/resume" render={() => <Resume />} />
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

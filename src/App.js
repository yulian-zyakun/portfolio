import { Redirect, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
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
      <Header contacts={data.contacts} />
      <section>
        <About data={data.about} />
        <Portfolio data={data.portfolio} />
        <Resume data={data.resume} />
        <Contacts contacts={data.contacts} />
        {/* <Switch>
          <Route exact path="/" render={() => <Redirect to={"/about"} />} />
          <Route path="/about" render={() => <About data={data.about} />} />
          <Route path="/home" render={() => <About />} />
          <Route path="/resume" render={() => <Resume data={data.resume} />} />
          <Route path="/portfolio" render={() => <Portfolio data={data.portfolio} />} />
          <Route path="/contact" render={() => <Contacts contacts={data.contacts} />} />
          <Route path="*" render={() => <div>Error 404 - Not Found</div>} />
        </Switch> */}
      </section>
      <Footer />
    </div>
  );
}

export default App;

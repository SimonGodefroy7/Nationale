import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Partenaires from "../Pages/Partenaires";
import Training from "../Pages/Training";
import Sprint from "../Pages/Sprint";
import MiddleDistance from "../Pages/MiddleDistance";
import LongDistance from "../Pages/LongDistance";
import Hebergements from "../Pages/Hebergements";
import ListeDeDepart from "../Pages/ListedeDepart";
import LandingPage from "../Pages/LandingPage";
import Resultats from "../Pages/Resultats";
import Galery from "../Pages/Galery";
import Lego from "../Pages/Lego";

const BASE_PATH = "/";

class Router extends Component {
  render() {
    return (
      <BrowserRouter basename={BASE_PATH}>
        <React.Fragment>
          <Route path="/" exact component={LandingPage} />
          <Route path="/home" exact component={Home} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/hebergements" exact component={Hebergements} />
          <Route path="/liste-de-depart" exact component={ListeDeDepart} />
          <Route path="/resultats" exact component={Resultats} />
          <Route path="/partenaires" exact component={Partenaires} />
          <Route path="/sprint" exact component={Sprint} />
          <Route path="/training" exact component={Training} />
          <Route path="/middle-distance" exact component={MiddleDistance} />
          <Route path="/long-distance" exact component={LongDistance} />
          <Route path="/gallery" exact component={Galery} />
          <Route path="/lego" exact component={Lego} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;

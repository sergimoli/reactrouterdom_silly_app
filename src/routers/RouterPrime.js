import React from "react";
import {
  BrowserRouter,
  NavLink,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Start from "../components/Start";
import Article from "../components/Article";
import Contact from "../components/Contact";
import Error from "../components/Error";
import Person from "../components/Person";
import PannelControl from "../components/PannelControl";
import StartPanel from "../components/panel/StartPanel";
import CreatePanel from "../components/panel/CreatePanel";
import ManagementPanel from "../components/panel/ManagementPanel";
import AboutPanel from "../components/panel/AboutPanel";

function RouterPrime() {
  return (
    <BrowserRouter>
      <h1>Header</h1>
      <hr />
      <nav>
        <ul>
          <li>
            {/* <a href="/start">start</a> */}
            {/* Si fem lo de dalt sempre refresca la pagina i no actua com una pàgina SPA */}
            {/* posant el navlink to NO recarrega la pàgina. Només canvia el contingut */}
            {/* <NavLink to="/start" className="activated"> */}
            {/* NavLink pot rebre dades (rebo isActive = true or false) per això li poso isActive com a paràmetre. */}
            <NavLink
              to="/start"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              start
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/article"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              article
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/panel"
              className={({ isActive }) => (isActive ? "activated" : "")}
            >
              panel
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <section className="content-prime">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/start" element={<Start />} />
          <Route path="/article" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/person/:name/:surname" element={<Person />} />
          <Route path="/person/:name/" element={<Person />} />
          <Route path="/person" element={<Person />} />
          <Route
            path="/redirect"
            element={<Navigate to="/person/sergi/molina/" />}
          />
          <Route path="/panel/*" element={<PannelControl />}>
            <Route index element={<StartPanel />}></Route>
            <Route path="start" element={<StartPanel />}></Route>
            <Route path="create-articles" element={<CreatePanel />}></Route>
            <Route
              path="management-users"
              element={<ManagementPanel />}
            ></Route>
            <Route path="about" element={<AboutPanel />}></Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </section>
      <hr />
      <footer>This is the footer!</footer>
    </BrowserRouter>
  );
}

export default RouterPrime;

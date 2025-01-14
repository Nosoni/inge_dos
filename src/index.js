/*!

=========================================================
* BLK Design System React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.2.0";
import "assets/demo/demo.css";

import Login from "./views/paginas/Login.js";
import Inicio from "./views/paginas/Inicio.js";
import NotFound from "./views/paginas/NotFound.js";
import Administracion from "./views/paginas/Administracion.js";
import { SesionContext } from "./context.js"
import Desarrollo from "views/paginas/Desarrollo.js";
import Configuracion from "views/paginas/Configuracion.js";

ReactDOM.render(
  <SesionContext>
    <BrowserRouter>
      <Switch>
        <Route
          path="/login"
          render={(props) => <Login {...props} />}
        />
        <Route
          path="/inicio"
          render={(props) => <Inicio {...props} />}
        />
        <Route
          path="/administracion"
          render={(props) => <Administracion {...props} />}
        />
        <Route
          path="/desarrollo"
          render={(props) => <Desarrollo {...props} />}
        />
        <Route
          path="/configuracion"
          render={(props) => <Configuracion {...props} />}
        />
        <Route
          path="/404"
          render={(props) => <NotFound {...props} />}
        />
        <Redirect from="/" to="/login" />
      </Switch>
    </BrowserRouter>
  </SesionContext>,
  document.getElementById("root")
);

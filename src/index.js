import {Provider} from 'mobx-react'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Switch, Route } from 'react-router-dom'

import Footer from './footer'
import Home from './home'
import ListadoPeliculas from './peliculas/listado'
import EdicionPelicula from './peliculas/edicion'
import PeliculasStore from './stores/PeliculasStore'

const peliculas = new PeliculasStore()

ReactDOM.render
(
  <Provider peliculas= {peliculas}>
    <HashRouter>
      <div className="container-fluid">
        <Switch>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/peliculas/:clasificacion" component={ ListadoPeliculas }/>
          <Route exact path="/peliculas/edicion/:id" component={ EdicionPelicula }/>
        </Switch>
        <Footer/>  {/*no cambia en todas las páginas*/}
      </div>
    </HashRouter>
    </Provider>
  ,
  document.getElementById('base')
)

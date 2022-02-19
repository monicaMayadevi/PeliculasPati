import React from "react"
import {Link} from 'react-router-dom'
import DetallePelicula from './DetallePelicula'
class Home extends React.Component
{
    render()
    {
              
        return(  //siempre paréntesis para que no se confunda el compilador
            <div className="col-12">
                <div className="row justify-content-center gap-3">
                <div className="col-3 border border-light rounded-3 p-3">
                    <img className="img-fluid" src="images/infantil.jpg"/>
                    <div className="text-center mt-5">
                        <Link to="/peliculas/A" className="link-light">Peliculas Infantiles</Link>
                    </div>
                </div>
                <div className="col-3 border border-light rounded-3 p-3">
                <img className="img-fluid" src="images/adolescentes.jpg"/>
                <div className="text-center mt-5">
                    <Link to="/peliculas/B" className="link-light">Peliculas para Adolescentes</Link> 
                </div>
              </div>
              <div className="col-3 border border-light rounded-3 p-3 align-content-center">
              <img className="img-fluid" src="images/adultos.jpg"/>
              <div className="text-center mt-5">
                <Link to="/peliculas/C" className="link-light">Peliculas para Adultos</Link>
               </div>
              </div>
                
                </div>               
            </div>
        )
    }
}
export default Home
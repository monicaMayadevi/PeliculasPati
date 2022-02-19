import { inject, observer } from "mobx-react"
import React from "react"
import {Link} from 'react-router-dom'
import DetallePelicula from "../DetallePelicula"

class ListadoPeliculas extends React.Component
{
    constructor(props){
        super(props)
        const {peliculas}= props
        if (! peliculas.listadoCargado)       
            peliculas.cargarListado()
        
    }

    renombrarPelicula()
    {
        console.log("ejecutado")
        this.props.peliculas.cambiarNombre("Bambi")
    }
    render()
    {
        const {peliculas}= this.props
        const clasificar=this.props.match.params.clasificacion
       
        const peliculasFiltradas = peliculas.listado.filter( pelicula => pelicula.clasificacion == clasificar )
        return(  //siempre paréntesis para que no se confunda el compilador
            <div className="text-center"> 
            {console.log("error listado "+peliculas.errorListado)}
            {
                peliculas.errorListado &&
                (
                    <div className="alert alert-danger" onClick={ () => peliculas.errorListado = false}>
                        Hubo un error al solicitar las películas.
                        Por favor repórtalo con el administrador de sistemas
                    </div>
                )
            }
                <div className="row">
                    <div className="col fs-3 text-center mb-3">
                        Titulos {clasificar=="A"?"Infantil":(clasificar=="B"?"Adolescentes":"Adultos")}
                    </div>
                </div>
            <div className="row row-cols-1 row-cols-md-4 g-4">
            { peliculasFiltradas.map(pelicula => (
             <DetallePelicula datos={ pelicula }/>
            ))}
            </div>
                <Link to="/" className="btn btn-outline-light mt-5 mb-5" id="Home"><i className="bi-house-fill display-4"></i></Link>                 
            </div>
            
        )
    }
}
export default inject('peliculas')(
    observer(ListadoPeliculas)
)
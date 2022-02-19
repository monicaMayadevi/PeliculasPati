import React from "react"
import { ImgHTMLAttributes } from "react"
import {Link} from 'react-router-dom'
class DetallePelicula extends React.Component
{
    render()
    {
        const {id, nombre, genero, img} = this.props.datos

        return(
            
            <div className="col">
                <div className="card text-center text-white bg-dark border-light h-100">
                    <img src={img} className="card-img-top" alt=""/>
                    <div className="card-body bg-gradient">
                        <h5 className="card-title">{ nombre }</h5>
                        <p className="card-text">{ genero }</p>
                        <h6 className="card-title position-absolute bottom-0 end-0"><Link to={`/peliculas/edicion/${id}` } className="btn btn-outline-secondary  btn-sm m-2"><i className="bi bi-pencil"></i></Link></h6>
                    </div>
                </div>
            </div>


           
        )
    }
}

export default DetallePelicula
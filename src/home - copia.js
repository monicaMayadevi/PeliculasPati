import React from "react"
import {Link} from 'react-router-dom'

class Home extends React.Component
{
    render()
    {
        const usuario = {nombre: 'Santiago', email:'santiago@email.com', edad: 20}
        const titulos = ['Nightmare on Elm Street', 'Bambi', 'La hora del lobo']
           
        
        return(  //siempre paréntesis para que no se confunda el compilador
            <div>
                home
                <br/>
                <Link to="/peliculas">Peliculas</Link>
                <br/>
                <div>
                    Nombre: {usuario.nombre.toUpperCase()}
                </div>
                <div>
                    Correo: {usuario.email}
                </div>
                <div>
                    Edad: {usuario.edad}
                </div>
                <div>
                    <h3>Titulos</h3>
                        { titulos.map(titulo=>(
                            <div>{ titulo }</div>
                        )) }
                </div>
            </div>
        )
    }
}
export default Home
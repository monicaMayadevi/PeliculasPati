import { inject, observer } from "mobx-react"
import React from "react"
import {Link} from 'react-router-dom'

class EdicionPelicula extends React.Component
{
    constructor(props){
        super(props)
        const {match, peliculas}=props
        if (match.params.id != props.peliculas.seleccionado.id)
            peliculas.seleccionar(match.params.id)

        this.state = { aceptoTerminos: false }

    }

   aplicar(event)
   {
    const {seleccionado}= this.props.peliculas
    seleccionado[event.target.name]= event.target.value
   }
   validar (event) {
          event.form.classList.add('was-validated')
        }
    render()
    {
        const {seleccionado}= this.props.peliculas
        const nombreEsValido = Boolean(seleccionado.nombre)
        const esValido = nombreEsValido && this.state.aceptoTerminos //&& fechaEsValida ....

        return(  //siempre paréntesis para que no se confunda el compilador
            <div>
            <form className="row g-3 needs-validation" novalidate >

                <div className="mb-2">
                    <label for="nombre" className="form-label">Nombre</label>
                    <div className="input-group has-validation">
                        <input name="nombre" id="nombre" type="text"
                        value ={seleccionado.nombre} onChange={event => {this.aplicar(event)}} className="form-control" required/>

                        <div className={ `invalid-feedback ${ nombreEsValido? 'd-none': 'd-block' }`}>
                            Asignale un nombre, no puedes dejar el campo en blanco
                        </div>
                        <div className="valid-feedback">
                         Bien!
                        </div>
                    </div>
                </div>
                <div>
                    <label for="clasificacion" className="form-label">Clasificacion</label>
                    <select name="clasificacion" id="clasificacion" value={ seleccionado.clasificacion} onChange={ event => {this.aplicar(event)}} className="form-control" required>
                        <option selected value="">Seleccionar...</option>
                        <option value="A">Infantil</option>
                        <option value="B">Adolescentes</option>
                        <option value="C">Adultos</option>
                    </select>
                </div>
                <div>
                    <label for="genero" className="form-label">Genero</label>
                    <select multiple name="genero" id="genero" value={ seleccionado.genero} onChange={ event => {this.aplicar(event)}} className="form-select form-control" required>
                        <option selected value="">Seleccionar...</option>
                        <option value="Acción">Acción</option>
                        <option value="Aventura">Aventura</option>
                        <option value="Comedia">Comedia</option>
                        <option value="Drama">Drama</option>
                        <option value="Ficción">Ficción</option>
                        <option value="Misterio">Misterio</option>
                        <option value="Terror">Terror</option>
                        <option value="Thriller">Thriller</option>
                    </select>
                </div>
                <div>
                  <input type='checkbox' onClick={ event => this.setState({ aceptoTerminos: event.target.checked } )}/> Acepto términos y condiciones
                </div>
                <div className="col-12">
                <button className="btn btn-light"  onClick={ event => {this.validar(event)}}
                   disabled={ !esValido }
                >Enviar</button>
  </div>
            </form>
            <Link to={`/peliculas/${seleccionado.clasificacion}` } className="btn btn-outline-light mt-5 mb-5 position-absolute bottom-0 start-50 translate-middle"><i className="bi bi-reply-fill display-4"></i></Link>

            </div>

        )
    }
}
export default inject('peliculas')(
    observer(EdicionPelicula)
)

import {assert, expect} from 'chai'
import sinon from 'sinon'

import PeliculasStore from '../../../src/stores/PeliculasStore'
import ServicioPeliculas from '../../../src/services/ServicioPeliculas'

const sandbox = sinon.createSandbox()

const listadoPrueba =['Dumbo', 'Pesadilla en la calle del infierno']

describe ('PeliculasStore', () =>
{
    beforeEach(()=>
    {
        sandbox.stub(console, 'error') //se deshabilita el error en la consola para que no lo mande en las pruebas
    })
    afterEach(()=> sandbox.restore())

    describe ('cargarListado', () =>
    {
        it('debe cargar listado de peliculas',async()=>
        {
            sandbox.stub(ServicioPeliculas, 'leerPeliculas').resolves (listadoPrueba) //objeto falso
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.true
            expect (store.errorListado).to.be.false
            expect (store.listado).to.deep.equal(listadoPrueba)

            sinon.assert.calledOnce(ServicioPeliculas.leerPeliculas) //se llamó una vez el método y que argumentos
            
        })

        it('debe indicar que hubo un error al cargar peklículas',async()=>
        {
            sandbox.stub(ServicioPeliculas, 'leerPeliculas').rejects (Error('Bum')) //objeto falso
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.false
            expect (store.errorListado).to.be.true
            expect (store.listado).to.deep.equal([])

            sinon.assert.calledOnce(ServicioPeliculas.leerPeliculas)
            
        })
    })
    describe ('limpiar', () =>
    {
        it('debe limpiar el listado de peliculas',async()=>
        {
            sandbox.stub(ServicioPeliculas, 'leerPeliculas').resolves (listadoPrueba) //objeto falso
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.true
           
            store.limpiar()
            
            expect (store.listadoCargado).to.be.false
            expect (store.errorListado).to.be.false
            expect (store.listado).to.deep.equal([])

                      
        })
    })

    describe ('seleccionar', () =>
    {
        const pelicula1 ={id: 1, nombre: 'X-Men'}
        const pelicula2 ={id: 2, nombre: 'Blanca Nieves'}

        beforeEach(()=>{ sandbox.stub(ServicioPeliculas, 'leerPeliculas').resolves ([pelicula1, pelicula2])})
        it('debe seleccionar un registro',async()=>
        {
           
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.true
            expect (store.seleccionado.id).not.to.be.ok

           
            store.seleccionar(1)
            
            expect (store.seleccionado).to.be.deep.equal(pelicula1)
                      
        })

        it('no debe seleccionar un registro si no se proporciona un id válido',async()=>
        {
           
            const store = new PeliculasStore()
            await store.cargarListado()

            expect (store.listadoCargado).to.be.true
            expect (store.seleccionado.id).not.to.be.ok

           
            store.seleccionar(30)
            
            expect (store.seleccionado.id).to.not.be.ok
                      
        })
    })
})

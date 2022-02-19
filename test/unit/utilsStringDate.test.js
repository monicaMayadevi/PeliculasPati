import {assert, expect} from 'chai'
import utilsStringDate from '../../src/utilsStringDate'

describe('utilsStringDate',()=>
{
    describe('convertStringToDate',()=>
    {
        it('Convierte una cadena en fecha, si no es una fecha válida pone la fecha actual (recibe cadena vacía)', ()=>
        {
            const fecha = utilsStringDate.convertStringToDate ('') 
            verificarObjetoDate (fecha)
            
        })    
        it('Convierte una cadena en fecha, si no es una fecha válida pone la fecha actual (recibe cadena con formato válido)', ()=>
        {
        const fechaF1 = utilsStringDate.convertStringToDate ('2021/10/12') 
        verificarObjetoDate(fechaF1)
        expect (fechaF1.getMonth()).to.equal(9)
        expect (fechaF1.getDate()).to.equal(12)
        expect (fechaF1.getFullYear()).to.equal(2021)
        })
        it('Convierte una cadena en fecha, si no es una fecha válida pone la fecha actual (recibe null)', ()=>
        {
            const fechaNull =utilsStringDate.convertStringToDate(null)
            verificarObjetoDate (fechaNull)
        })
        it('Convierte una cadena en fecha, si no es una fecha válida pone la fecha actual (recibe cadena con formato no válido)', ()=>
        {
            const fechaActual = utilsStringDate.convertStringToDate ('blabla') 
            verificarObjetoDate (fechaActual)  
        })
        it('Convierte una cadena en fecha, si no es una fecha válida pone la fecha actual (recibe undefined)', ()=>
        {         
            const fechaIndefinida = utilsStringDate.convertStringToDate (undefined) 
            verificarObjetoDate(fechaIndefinida)
        })
    })

    describe('dateToString',()=>
    {
        it('Convierte un Objeto Date en cadena con formato (dd/mes con letra/yyyy)', ()=>
        {
            const cadena = utilsStringDate.dateToString (new Date('2020/02/01'))   
            expect(cadena).is.ok
            expect(cadena).to.be.an ('string')                  
            const datosCadena = cadena.split('/')
            expect (datosCadena).is.ok
            expect (datosCadena).to.be.an ('array')
            expect (datosCadena.length).to.equal(3)
            expect (datosCadena[0]).to.equal('01')
            expect (datosCadena[1]).to.equal('Febrero')
            expect (datosCadena[2]).to.equal('2020')
            expect (datosCadena).to.deep.equal(['01', 'Febrero','2020'])
           
        })
    })
})

function verificarObjetoDate(fecha) {
    expect(fecha).is.ok
    expect(fecha).to.be.an.instanceof(Date)
}

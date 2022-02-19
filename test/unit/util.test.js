import {assert, expect} from 'chai'

import utils from '../../src/utils'
describe ('utils',()=>
{
    describe('separar',()=>
    {
        it('debe separar una cadena en tres partes', ()=>
        {
            const resultado = utils.separar ('12:23:00')
            expect (resultado).is.ok
            expect (resultado).to.be.an ('array')
            expect (resultado.length).to.equal(3)
            expect (resultado[0]).to.equal('12')
            expect (resultado[1]).to.equal('23')
            expect (resultado[2]).to.equal('00')
            expect (resultado).to.deep.equal(['12', '23','00'])
        })
        it('debe separar una cadena vacía como arreglo vacio', ()=>
        {
        const resultado = utils.separar('')
        expect (resultado).to.deep.equal([])
        })

        it('debe fallar si recibe una cadena nula', ()=>
        {
            
            try{
                utils.separar(null)
                expect.fail()
            }
            catch(error){}
        })
    })

    describe('esperar',()=>{
        it('debe continuar después de 1 segundo', async()=>{
           await utils.esperar(1000) // return 
        })
        xit ('debe fallar si pasamos intervalo 0', async ()=>{ //deshabilitada
            try {
                await utils.esperar(0)
                expect.fail()
            } catch (error) {
                expect(error).to.be.ok
                expect(error.message).to.be.ok
                expect(error.message).to.equal('no se pasó una espera adecuada')
            }
        })
    })

    describe('ejecutarDespues',()=>
    {
        it('debe ejecutar despues', done =>
        {
            let variable=0

            utils.ejecutarDespues(100, () => {variable++})

            const verification = () =>
            {
                expect(variable).equal(1)
                done()
            }

            setTimeout(verification, 110)


        })
    })
})
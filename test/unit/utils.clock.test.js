import {assert, expect} from 'chai'
import sinon from 'sinon'
import utils from '../../src/utils'

const sandbox = sinon.createSandbox()


describe ('utils',()=>
{
    let clock = null

    beforeEach(() =>
    {
        clock=sandbox.useFakeTimers()
    })

    afterEach(() =>
    {
        clock.restore()
        sandbox.restore()
    })
    
    describe('ejecutarDespues',()=>
    {
        it('debe ejecutar despues', () =>
        {
            let variable=0
            utils.ejecutarDespues(300000, () => {variable++})
            clock.tick(300000) //Se adelante X milisegundos
            expect (variable).equal(1)
           
        })
    })

    describe('ejecutarRepetido',()=>
    {
        it('debe ejecutar repetidamente', () =>
        {
            let variable=0
            utils.ejecutarRepetido(300000, () => {variable++})
            clock.tick(300000) //Se adelante X milisegundos
            expect (variable).equal(1)
            clock.tick(300000) //Se adelante X milisegundos
            expect (variable).equal(2)
        })
    })

})
const convertStringToDate = texto => new Date(texto) != 'Invalid Date' ? new Date(texto) : new Date()

const dateToString = date => { 
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    if (date instanceof Date)
        return `${date.getDate()<10 ? '0'+date.getDate() : date.getDate()}/${months[date.getMonth()]}/${date.getFullYear()}`
}

export default {convertStringToDate, dateToString}


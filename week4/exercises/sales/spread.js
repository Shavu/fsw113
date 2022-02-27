// print city sales data

let strReport = ''
strReport += parseRegion(eastOffices, 'East')
strReport += parseRegion(southOffices, 'South')
strReport += parseRegion(westOffices, 'West')

function parseRegion(array, title){
    let str = `<div class='header'>${title} Offices</div>`
    array.forEach(item => {
        str += `<div class='columnA'>${item.city}</div>`
        str += `<div class='columnB'>${item.sales.toLocaleString()}</div>`
    })
    return str
}

document.querySelector('#citiesReport').innerHTML = strReport

// create reconciliation report

const cities = [ ...eastOffices, ...southOffices, ...westOffices]

const citySales = cities.reduce((total, item) => { return item.sales + total }, 0)
const regionalSales = regOffices.reduce((total, item) => { return item.totalSales + total }, 0)

document.querySelector('#citySales').innerText = citySales.toLocaleString()
document.querySelector('#regionalSales').innerText = regionalSales.toLocaleString()

if (citySales != regionalSales) {
    document.querySelector('#regionalSales').className = 'alert'
}
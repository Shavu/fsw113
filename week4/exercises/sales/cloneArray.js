const eastOffices = [
    { city: 'Albany', sales: 2497},
    { city: 'Baltimore', sales: 3201},
    { city: 'Pittsburgh', sales: 5991},
    { city: 'Chicago', sales: 4037},
    { city: 'Milwaukee', sales: 3888},
    { city: 'Cincinnati', sales: 2010}
]

const allEastOffices = ['New York City', ...eastOffices]


function addCity(type, newCity){
    let ary = eval(type + 'Offices')
    return [...ary, newCity]
}

const newEastOffices = addCity('east', 'Columbus');
const newWestOffices = addCity('west', 'Albuquerque');

console.log(allOffices.sort())
console.log(eastOffices.length + '/' + newEastOffices.length)
console.log(westOffices.length + '/' + newWestOffices.length)
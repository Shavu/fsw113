const cities = [ 
    { state: 'Arizona', city: 'Phoenix', temp: 118 },
    { state: 'Arizona', city: 'Tucson', temp: 115 },
    { state: 'California', city: 'Los Angeles', temp: 101 },
    { state: 'California', city: 'San Diego', temp: 101 },
    { state: 'California', city: 'San Francisco', temp: 103 },
    { state: 'Nevada', city: 'Las Vegas', temp: 112 },
    { state: 'Oregon', city: 'Eugene', temp: 108 },
    { state: 'Oregon', city: 'Portland', temp: 107 },
    { state: 'Washington', city: 'Seattle', temp: 110 },
    { state: 'Washington', city: 'Tacoma', temp: 105 },
]

let tempList = '<ul>'

for (let x = 0; x < cities.length; x++) {
    tempList += `<li>${cities[x].city}, ${cities[x].state}: ${cities[x].temp}\u00B0F</li>`
}

tempList += '</ul>'
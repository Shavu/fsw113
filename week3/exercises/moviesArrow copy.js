const movies = [ 
    { name: 'Avatar', year: 2009, gross: 2847246203 },
    { name: 'Endgame', year: 2019, gross: 2797501328 },
    { name: 'Titanic', year: 1997, gross: 2201647264 },
    { name: 'The Force Awakens', year: 2015, gross: 2068455677 },
    { name: 'Infinity War', year: 2018, gross: 2048359754 },
    { name: 'Jurassic World', year: 2015, gross: 1670516444 },
    { name: 'The Lion King', year: 2019, gross: 1657870986 },
    { name: 'The Avengers', year: 2012, gross: 1518815515 },
    { name: 'Furious 7', year: 2015, gross: 1515255622 },
    { name: 'Frozen II', year: 2019, gross: 1450026933 }
]

const movies2B = movies.filter(function(item) {
    return item.gross >= 2000000000
})

console.log(movies2B)

const moviesDTL  = movies.forEach(function(movie) {
    console.log(movie)
})

console.log(moviesDTL)

const movieNames = movies.map(function(item) {
    return item.name
})

console.log(movieNames)

const faveMovie = movies.find(function(item) {
    return item.name === 'The Lion King'
})

console.log(faveMovie)

const oldMovies = movies.some(function(item) {
    return item.year <= 2000
})

console.log(oldMovies)

const blockBusters = movies.every(function(item) {
    return item.gross >= 1500000000
})

console.log(blockBusters)

const totalGross = movies.reduce(function(currentTotal, item) {
            return item.gross + currentTotal
    }, 
0)
    
console.log(totalGross / movies.length)
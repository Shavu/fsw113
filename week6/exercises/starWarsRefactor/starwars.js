let data, queryType, itemID
const objSpinner = document.getElementById('spinner')
const objDataPanel = document.querySelector('#ResponseData')

function fetchData(){
    swapVisible(objSpinner)
    objDataPanel.style.visibility = 'hidden'
    queryType = document.querySelector('#queryType').value
    itemID = document.querySelector('#itemID').value
    getSWAPI()
        .then(function(data){
            updateInfo(data)
        })
        .catch(function(err) {
            console.warn(err)
        })
}

const getSWAPI = async() => {
    const response = await fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    data = await response.json()
    return data
}

function updateInfo(data) {
    if (queryType === 'people') {
        document.querySelector('#dataLabel1').innerText = 'Person Name:'
        document.querySelector('#dataValue1').innerText = data.name
        document.querySelector('#dataLabel2').innerText = 'Hair Color:'
        document.querySelector('#dataValue2').innerText = data.hair_color
    } else if (queryType === 'planets') {
        document.querySelector('#dataLabel1').innerText = 'Planet Name:'
        document.querySelector('#dataValue1').innerText = data.name
        document.querySelector('#dataLabel2').innerText = 'Climate:'
        document.querySelector('#dataValue2').innerText = data.climate
    } else if (queryType === 'starships') {
        document.querySelector('#dataLabel1').innerText = 'Starship Name:'
        document.querySelector('#dataValue1').innerText = data.name
        document.querySelector('#dataLabel2').innerText = 'Model:'
        document.querySelector('#dataValue2').innerText = data.model
    }
    swapVisible(objSpinner)
    swapVisible(objDataPanel)
}   

function swapVisible(obj) {
    if(obj.style.visibility == 'hidden') {
        obj.style.visibility = 'visible'
    } else {
        obj.style.visibility = 'hidden'
    }
}

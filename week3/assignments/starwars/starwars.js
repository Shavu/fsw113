// declare any necessary variables
let queryType, itemID;

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'


function fetchData() {
    queryType = document.querySelector("#queryType").value;
    itemID = document.querySelector("#itemID").value;
    // console.log(queryType, itemID);
    getFromSWAPI(queryType, itemID);
}


function getFromSWAPI() {
    // assign values to any necessary variables
    fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
        .then(response => response.json())
        .then(data => updateInfo(data))
        .catch(err => console.warn(err));
}


// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
// labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function updateInfo(data) {
    // console.log(data)
    const keys = Object.keys(data);
    // console.log(keys)
    document.querySelector("#dataLabel1").textContent = keys[0];
    document.querySelector("#dataLabel2").innerText = keys[5];
    document.querySelector("#dataValue1").innerText = data[keys[0]];
    document.querySelector("#dataValue2").innerText = data[keys[5]];
    checkQueryType()
}

function checkQueryType() {
    if (queryType == "people") return true;

    else return false
}


const parts = [
    { partNbr: 'R5AQDVU', partDescr: 'Halbendozer', aisle: 'B3', qty: 14 },
    { partNbr: 'LJBKC0M', partDescr: 'Knudleknorp', aisle: 'H1', qty: 12 },
    { partNbr: 'HUS51DE', partDescr: 'Knudlescheiffer', aisle: 'H1', qty: 12 },
    { partNbr: 'M0XORFH', partDescr: 'Borgom Oil', aisle: 'B2', qty: 3 },
    { partNbr: '35X7AP8', partDescr: 'Glundelscharf', aisle: 'C3', qty: 1 },
    { partNbr: 'C1AYCAI', partDescr: 'Tschoffle', aisle: 'A4', qty: 5 },
    { partNbr: 'E9IEYLS', partDescr: 'Karmandloch', aisle: 'C2', qty: 2 },
    { partNbr: 'IW2I0TG', partDescr: 'Shreckendwammer', aisle: 'J4', qty: 2 },
    { partNbr: '95OJTV6', partDescr: 'Dimpenaus', aisle: 'B1', qty: 16 },
    { partNbr: 'LYII1MJ', partDescr: 'Lumpenknorp', aisle: 'H1', qty: 12 },
    { partNbr: 'VQIL7AO', partDescr: 'Lumpenschieffer', aisle: 'H1', qty: 12 },
    { partNbr: 'XF0MPS9', partDescr: 'Ratklampen', aisle: 'N2', qty: 7 },
    { partNbr: 'AFU9OUG', partDescr: 'Dulpo Fittings', aisle: 'J2', qty: 4 },
    { partNbr: 'E7XWGGO', partDescr: 'Flugtrimsammler', aisle: 'B3', qty: 3 },
    { partNbr: '981FNC9', partDescr: 'Grosstramle', aisle: 'A1', qty: 1 },
    { partNbr: 'AGSXYVZ', partDescr: 'Skirpenflatch', aisle: 'B2', qty: 2 },
    { partNbr: 'V0SK0UX', partDescr: 'Lumpenmagler', aisle: 'H1', qty: 12 },
    { partNbr: 'CTL40Z1', partDescr: 'Lumpenflempest', aisle: 'H1', qty: 24 },
    { partNbr: 'POO9ZPM', partDescr: 'Eumonklippen', aisle: 'D2', qty: 7 },
    { partNbr: 'WEYPU3Z', partDescr: 'Mumpenflipper', aisle: 'E3', qty: 1 }

]

// list of each part number and qty for check-off in the "detailsList" element  "forEach"
var detailsList = document.getElementById("detailsList");
parts.forEach(
    function (part) {
        // console.log(part);
        // console.log(detailsList)
        // detailsList.textContent += " Part Number  " + part.partNbr + " Part Descr " + part.partDescr + " Part Qty " + part.qty
        var newPart = document.createElement("div")
        detailsList.append(newPart);

        var child = document.createElement("input")
        newPart.append(child)
        child.type = "checkbox"


        var child = document.createElement("span")
        child.textContent = " Part Number  " + part.partNbr
        newPart.append(child);
        // child.style.borderRight = "solid 2px black"
        child.style.paddingRight = "10px "

        var child = document.createElement("span")
        child.textContent = " Part Descr " + part.partDescr
        newPart.append(child);
        child.style.paddingRight = "10px "


        var child = document.createElement("span")
        child.textContent = " Part Qty " + part.qty
        newPart.append(child);
        child.style.paddingRight = "10px "


    }

)

// If parts requiring special handling exist (in aisle B3), list of items needing special packaging in the "specialPackaging" element, else remove element

var specialPackaging = document.getElementById("specialPackaging");
parts.filter(
    function (part) {
        if (part.aisle === "B3") {
            var newPart = document.createElement("div")
            specialPackaging.append(newPart);
            newPart.textContent = (part.partNbr);
        }
    }
)

// If hazardous parts exist (in aisle J4), let employee know in the "hazardousMaterials"  element and remind them to get gloves, else remove element.
var hazardousMaterials = document.getElementById("hazardousMaterials");
var part = parts.find((itemParts) => { return itemParts.aisle === "J4" })

if (part) {
    var newPart = document.createElement("div")
    newPart.textContent = "Get gloves for hazardous Materials ";
    hazardousMaterials.append(newPart);
} else {
    hazardousMaterials.remove()
}



// if all items in the order are small parts (aisle H1), then let employee know that they should take a basket and go dirctly to aisle H1
var part = parts.every((itemParts) => { return itemParts.aisle === "H1" })
var smallItemsOnly = document.getElementById("smallItemsOnly");

if (part) {
    var newPart = document.createElement("div")
    newPart.textContent = " Take a basket and go dirctly to aisle H1";
    smallItemsOnly.append(newPart);
    // } else {
    //     // smallItemsOnly.remove()
}




// if there are large items (anthing in aisles S, T, or U), then let the employee know in the "forkiftNeeded" element that they will need to reserve a forklift, else remove the element
var part = parts.some((itemParts) => { return itemParts.aisle === "S" || itemParts.aisle === "T" || itemParts.aisle === "U" })
var forkiftNeeded = document.getElementById("forkiftNeeded");

if (part) {
    var newPart = document.createElement("div")
    newPart.textContent = " Will need to reserve a forklift ";
    forkiftNeeded.append(newPart);
} else {
    forkiftNeeded.remove()
}


// sum up the total number of parts and append that number to the text already in "totalItems" element
var part = parts.reduce((itemqty, itemParts) => { return itemParts.qty + itemqty }, 0)
var totalItems = document.getElementById("totalItems");


var newPart = document.createElement("div")
newPart.textContent += part;
totalItems.append(newPart);




// Arrays – Methods of
//     forEach(callbackFn) - Calls a function (callbackFn) for each element in the array.
//     filter(callbackFn) – Returns a new array containing all the elements of the calling array for which the provided filtering function (callbackFn) returns true.
//     map(callbackFn) - Returns a new array containing the results of calling a function (callbackFn) on every element in this array.
//     find(callbackFn) - Returns the value of the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function (callbackFn), undefined is returned.
//     some (callbackFn) - Returns true if at least one element in this array satisfies the provided testing function (callbackFn).
//     every(callbackFn) - Returns true if every element in this array satisfies the testing function (callbackFn).
//     reduce (callbackFn) - Apply a user-supplied “reducer” function on each element of the array (from left-to-right) passing the calculation value  to  the next element.  The final result is a single value.
//     sort(compareFn)- Sorts the elements of an array in place and returns the array. compareFn is optional and if omitted, the elements are converted to strings and then sorted. (Verb)
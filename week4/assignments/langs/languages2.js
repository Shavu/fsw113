const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
document.querySelector("#submit").addEventListener("click", () => {
    let input = document.querySelectorAll("input");
    let inputBox = [...input];
    chkLang(inputBox);
})

function chkLang(langs) {
    let result = false

    // use an array method to check whether the user included 'JavaScript' in their
    // list of languages
    langs.forEach((inputLang) => {
        if (inputLang.value === lang) {
            result = true;
        }
    });


    let obj = document.querySelector('#TestResult')
    if (result)
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}
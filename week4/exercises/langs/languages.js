function chkLang(lang, ...langs) {
    let result = false

    langs.forEach((item) => {
       if (item === lang) 
        result = true
    })

    let obj = document.querySelector('#TestResult')
    if (result) 
        obj.innerText = `Congratulations!\nYou know ${lang}.`
    else
        obj.innerText = `Sorry,\nyou don't know ${lang}.`
}
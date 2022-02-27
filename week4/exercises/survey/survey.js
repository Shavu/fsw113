document.querySelector('#review').addEventListener(
    'click', function() {
        const nodeList = document.querySelectorAll('textarea')
        const aryResponses = [...nodeList]
        combineComments(aryResponses)
    }
)

function combineComments(ary) {
    let str = ''
    ary.forEach((item) => {
        str += `<p><strong>${item.id}</strong><br />${item.value}</p>`
     })
     document.querySelector('#reviewPanel').innerHTML = str
     document.querySelector('#submit').style.visibility = 'visible'
}
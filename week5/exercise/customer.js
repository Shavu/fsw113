class objCustomer {
    constructor (...args) {
        this.customerName = args[0],
        this.businessName = args[1],
        this.street = args[2],
        this.city = args[3],
        this.state = args[4],
        this.zip = args[5],
        this.phone = args[6],
        this.aryPurchases = args[7],
        this.aryPayments = args[8]
    }
    
    sumPurchases() {
        let allPurchases = this.aryPurchases.reduce((currentTotal, item) => {
                return item.price + currentTotal
            },
        0)
        return allPurchases
    }

    sumPayments() {
        let allPayments = this.aryPayments.reduce((currentTotal, item) => {
                return item.payment + currentTotal
            },
        0)
        return allPayments
    }

    getBalance() {
        return this.sumPurchases() - this.sumPayments()
    }

    printPurchases() {
        let lstPurchases = `<div class='itemwrapper'>`
        this.aryPurchases.forEach(element => {
            lstPurchases += `<div class='itemcell'>${element.item}</div>`
            lstPurchases +=  `<div class='itemcell' style='text-align: right;'>$${element.price.toLocaleString()}</div>`
        })
        lstPurchases += `</div>`
        console.log(lstPurchases)
        return lstPurchases
    }
 
    printPayments() {
        let lstPayments = `<div class='itemwrapper'>`
        this.aryPayments.forEach(element => {
            lstPayments += `<div class='itemcell'>${element.date}</div>`
            lstPayments +=  `<div class='itemcell' style='text-align: right;'>$${element.payment.toLocaleString()}</div>`
        })
        lstPayments += `</div>`
        return lstPayments
    }
}
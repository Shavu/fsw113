let customer

document.querySelector('#customer-id')
    .addEventListener(
        'change', function () {
            setCustomer(document.querySelector('#customer-id').value)

            // display customer contact information 
            document.querySelector('#contactInfo').innerHTML = 
                customer.businessName + '<br />' + 
                'c/o ' +  customer.customerName + '<br />' + 
                customer.street + '<br />' + 
                customer.city + ', ' + customer.state + ' ' + customer.zip + '<br />' + 
                formatPhone(customer.phone)

            // display purchases
            document.querySelector('#purchases').innerHTML = customer.printPurchases()

            // display payments
            document.querySelector('#payments').innerHTML = customer.printPayments()
            
            // display balance
            document.querySelector('#balance').innerHTML = '$' + customer.getBalance().toLocaleString()
        }
    )

function formatPhone(str) {
    return `${str.substring(0, 3)}.${str.substring(3,6)}.${str.substring(6,10)}`
}
function setCustomer(id) {
    switch (id) {
        case '1': 
            customer = new objCustomer(
                'Hakeem Chambers',
                'Virginia Weekenders',
                '1510 Cherry Avenue',
                'Charlottesville',
                'VA',
                '22903',
                '4346549065',
                [
                    { item: '3 Hour Bus tour', price: 795 },
                    { item: 'Standard Tour Guide', price: 499 },
                    { item: 'Deluxe Refreshment Package', price: 249 }
                ],
                [
                    { date: '4/2/2021', payment: 500 },
                    { date: '5/5/2021', payment: 500 }
                ]
            )
            break;
        case '2':
            customer = new objCustomer(
                'Shanice Thornton',
                'Coffee County Cruisers',
                '203 Sylvan Drive',
                'Mobile',
                'AL',
                '36603',
                '2512468642',
                [
                    { item: 'Flight from MOB to MIA', price: 12412},
                    { item: '5 Day Cruise', price: 15599 },
                    { item: 'Diving Add On', price: 999 },
                    { item: 'Mayan Excursion', price: 600 }
                ],
                [
                    { date: '3/15/2021', payment: 10000 },
                    { date: '4/17/2021', payment: 10000 },
                    { date: '5/12/2021', payment: 5000 }
                ]
            )
            break;
        case '3':
            customer = new objCustomer(
                'Sonia Ramirez',
                'Hearty Bucket Listers',
                '4031 Stathmore Avenue',
                'San Antonio',
                'TX',
                '78217',
                '2103517339',
                [
                    { item: 'Bus to Boca Chica', price: 1599},
                    { item: 'Hotel Quad Room Rate', price: 1200 },
                    { item: 'Launch Celebration Dinner', price: 699 }
                ],
                [
                    { date: '4/25/2021', payment: 500 },
                    { date: '5/29/2021', payment: 1000 }
                ]
            )
            break;
    }
}
export const menu = [
     {
        name:'Breads',
        icon: 'breads.svg',
        subTitle: 'Kinds of Breads',
        contents: [{name: 'Canilla'}, {name:'Montañesa'}, {name:'Ciabbatta'}, {name:'Rustic'}]

    },
    {
        name:'Operations',
        icon: 'operations.svg',
        subTitle: 'Manage Operations',
        contents: [{name:'Send Request', url:'/send-request'}, {name:'Request History', url:'/requests'},{name:'Ingredients', url:'/ingredients'}, ]

    },
    {
        name:'Production',
        icon: 'production.svg',
        subTitle: 'Manage Your Production',
        contents: [{name:'Daily Planing', url:'/daily-plan'}, {name:'History Production', url:'/history-production'}, {name:'Tools', url:'/production.tools'}, ]

    },
    {
        name:'Reports',
        icon: 'reports.svg',
        subTitle: 'Control Area',
        contents: [{name:'Production Reports', url:'/production-reports'}, {name:'Request Reports', url:'/request-report'},{name:'Inventory Reports', url:'/inventory-report'}, ]

    }
]
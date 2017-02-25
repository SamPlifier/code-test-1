var table_data = [{
        first_name: 'Rose',
        last_name: 'Tyler',
        home: 'Earth'
    },
    {
        first_name: 'Zoe',
        last_name: 'Heriot',
        home: 'Space Station W3'
    },
    {
        first_name: 'Jo',
        last_name: 'Grant',
        home: 'Earth'
    },
    {
        first_name: 'Leela',
        last_name: null,
        home: 'Unspecified'
    },
    {
        first_name: 'Romana',
        last_name: null,
        home: 'Gallifrey'
    },
    {
        first_name: 'Clara',
        last_name: 'Oswald',
        home: 'Earth'
    },
    {
        first_name: 'Adric',
        last_name: null,
        home: 'Alzarius'
    },
    {
        first_name: 'Susan',
        last_name: 'Foreman',
        home: 'Gallifrey'
    }
];


function makeContactList() {
    for (let i = 0; i < table_data.length; i++) {
        if (table_data[i].last_name === null) {
            table_data[i].last_name = '(none)';
        }
    }
    const names = table_data.map(table_data => `${table_data.first_name} ${table_data.last_name} ${table_data.home}`);

    for (let i = 0; i < table_data.length; i++) {
        document.write('<ul><li>'+names[i]+'</li></ul>');
    }
}
makeContactList();

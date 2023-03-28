Ext.define('MyApp.model.Movie', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'Id', type: 'int' },
        { name: 'Title', type: 'string' },
        { name: 'Genre', type: 'string' },
        { name: 'ReleaseData', type: 'date' },
        { name: 'Price', type: 'float' }
    ]
});

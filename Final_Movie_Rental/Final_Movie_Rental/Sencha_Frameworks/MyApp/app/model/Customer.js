Ext.define('MyApp.model.Customer', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'Id', type: 'int' },
        { name: 'Name', type: 'string' },
        { name: 'Email', type: 'string' },
        { name: 'Phone', type: 'string' },
        { name: 'Address', type: 'string' }
    ],

    proxy: {
        type: 'rest',
        url: 'http://localhost:55434/api/customer',
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },
    autoLoad: true,
});

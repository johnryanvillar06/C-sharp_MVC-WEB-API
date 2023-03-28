Ext.define('MyApp.viewmodel.CustomerViewModel', {
    extend: 'Ext.app.ViewModel',

    requires: [
        'MyApp.store.Customers'
    ],

    stores: {
        customers: {
            type: 'customers',
            autoLoad: true
        }
    }
});

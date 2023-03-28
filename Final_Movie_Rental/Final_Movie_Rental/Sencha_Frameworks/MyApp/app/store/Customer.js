Ext.define('MyApp.store.Customers', {
    extend: 'Ext.data.Store',
    alias: 'store.customers',
    model: 'MyApp.model.Customer',
    
    proxy: {
        type: 'rest',
        url: 'http://localhost:55434/api/customer',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        listeners: {
            // Refresh the store after a successful create operation
            write: function (proxy, operation) {
                if (operation.wasSuccessful()) {
                    this.load();
                }
            }
        }
    },
    autoLoad: true,
    autoSync: true
});

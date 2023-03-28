Ext.define('MyApp.store.Movies', {
    extend: 'Ext.data.Store',
    alias: 'store.movies',
    model: 'MyApp.model.Movie',

    proxy: {
        type: 'rest',
        url: 'http://localhost:55434/api/movies',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
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
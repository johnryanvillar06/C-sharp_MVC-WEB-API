Ext.define('MyApp.view.Viewport', {
    extend: 'Ext.container.Viewport',

    requires: [
        'MyApp.view.customer.CustomerView'
    ],

    layout: 'fit',

    items: [{
        xtype: 'customerview'
    }]
});

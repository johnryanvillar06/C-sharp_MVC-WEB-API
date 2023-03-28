Ext.define('MyApp.view.customer.CustomerModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customer',

    data: {
        customer: {
            Name: '',
            Email: '',
            Phone: '',
            Address: ''
        }
    },

    formulas: {
        isCustomerValid: function (get) {
            var customer = get('customer');
            return customer.Name && customer.Email && customer.Phone && customer.Address;
        }
    }
});


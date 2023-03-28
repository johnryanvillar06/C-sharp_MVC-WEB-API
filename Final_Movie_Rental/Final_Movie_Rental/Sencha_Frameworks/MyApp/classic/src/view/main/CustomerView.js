Ext.define('MyApp.view.customer.CustomerView', {
    extend: 'Ext.panel.Panel',
    xtype: 'customerview',

    viewModel: {
        type: 'customer'
    },

    items: [{
        xtype: 'form',
        region: 'north',
        title: 'Add Customer',
        bodyPadding: 10,
        defaults: {
            xtype: 'textfield',
            anchor: '100%',
            allowBlank: false
        },
        items: [{
            fieldLabel: 'Name',
            name: 'Name',
            bind: '{customer.Name}'
        }, {
            fieldLabel: 'Email',
            name: 'Email',
            bind: '{customer.Email}'
        }, {
            fieldLabel: 'Phone',
            name: 'Phone',
            bind: '{customer.Phone}'
        }, {
            fieldLabel: 'Address',
            name: 'Address',
            bind: '{customer.Address}'
        }],
        buttons: [{
            text: 'Save',
            formBind: true,
            handler: function () {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    var customer = form.getValues();
                    var store = Ext.getStore('customers');
                    var record = form.getRecord();
                    if (record) {
                        // Update existing record
                        record.set(customer);
                        store.sync({
                            success: function (batch) {
                                Ext.Msg.alert('Success', 'Customer updated successfully.');
                            },
                            failure: function (batch) {
                                Ext.Msg.alert('Error', 'Failed to update customer.');
                                store.rejectChanges();
                            }
                        });
                    } else {
                        // Add new record
                        form.submit({
                            type: 'POST',
                            url: 'http://localhost:55434/api/customer',
                            success: function (form, action) {
                                Ext.Msg.alert('Success', 'Customer added successfully.');
                                form.reset();
                                if (store) {
                                    customer.Id = action.result.data.Id;
                                    store.add(customer);

                                    // Refresh the grid view to show the newly added record
                                    var grid = Ext.ComponentQuery.query('grid')[0];
                                    grid.getView().refresh();

                                    // Select the newly added record in the grid
                                    var record = store.getById(customer.Id);
                                    if (record) {
                                        grid.getSelectionModel().select(record);
                                    }
                                }
                            },

                            failure: function (form, action) {
                                Ext.Msg.alert('Error', action.result.message);
                            }
                        });
                    }
                }
            }
        }]

    },
        {
            xtype: 'grid',
            region: 'center',
            title: 'Customers',
            store: {
                type: 'customers'
            },
            height: 600,
            columns: [{
                text: 'Name',
                dataIndex: 'Name',
                flex: 1
            }, {
                text: 'Email',
                dataIndex: 'Email',
                flex: 1
            }, {
                text: 'Phone',
                dataIndex: 'Phone',
                flex: 1
            }, {
                text: 'Address',
                dataIndex: 'Address',
                flex: 1
                }, {
                    xtype: 'actioncolumn',
                    text: 'Edit',
                    flex: 1,
                    items: [{
                        iconCls: 'x-fa fa-edit',
                        tooltip: 'Edit',
                        handler: function (grid, rowIndex, colIndex, item, event, record) {
                            var form = grid.up('customerview').down('form');
                            form.loadRecord(record);

                            var saveButton = form.down('button[text=Save]');
                            saveButton.setText('Update');
                            saveButton.setHandler(function () {
                                var form = this.up('form').getForm();
                                if (form.isValid()) {
                                    form.submit({
                                        type: 'PUT',
                                        url: 'http://localhost:55434/api/customer/' + record.get('Id'),
                                        success: function (form, action) {
                                            Ext.Msg.alert('Success', 'Customer updated successfully.');
                                            form.reset();
                                            var store = Ext.getStore('customers');
                                            if (store) {
                                                var customer = form.getValues();
                                                customer.Id = record.get('Id');
                                                record.set(customer);
                                                store.sync();
                                            }
                                            saveButton.setText('Save');
                                            saveButton.setHandler(function () {
                                                var form = this.up('form').getForm();
                                                if (form.isValid()) {
                                                    form.submit({
                                                        type: 'POST',
                                                        url: 'http://localhost:55434/api/customer',
                                                        success: function (form, action) {
                                                            Ext.Msg.alert('Success', 'Customer added successfully.');
                                                            form.reset();
                                                            var store = Ext.getStore('customers');
                                                            if (store) {
                                                                var customer = form.getValues();
                                                                customer.Id = action.result.data.Id;
                                                                store.add(customer);
                                                                var grid = Ext.ComponentQuery.query('grid')[0];
                                                                grid.getView().refresh();
                                                                var record = store.getById(customer.Id);
                                                                if (record) {
                                                                    grid.getSelectionModel().select(record);
                                                                }
                                                            }
                                                        },
                                                        failure: function (form, action) {
                                                            Ext.Msg.alert('Error', action.result.message);
                                                        }
                                                    });
                                                }
                                            });
                                        },
                                        failure: function (form, action) {
                                            Ext.Msg.alert('Error', action.result.message);
                                        }
                                    });
                                }
                            });
                        }
                    }]
                },

                {
                    xtype: 'actioncolumn',
                    text: 'Delete',
                    flex: 1,
                    items: [{
                        iconCls: 'x-fa fa-trash',
                        tooltip: 'Delete',
                        handler: function (grid, rowIndex, colIndex, item, event, record) {
                            Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this customer?', function (button) {
                                if (button === 'yes') {
                                    Ext.Ajax.request({
                                        url: 'http://localhost:55434/api/customer/' + record.get('Id'),
                                        method: 'DELETE',
                                        success: function (response) {
                                            Ext.Msg.alert('Success', 'Customer deleted successfully.');
                                            var store = Ext.getStore('customers');
                                            if (store) {
                                                store.remove(record);
                                                store.sync();
                                            }
                                        },
                                        failure: function (response) {
                                            Ext.Msg.alert('Error', 'Failed to delete customer.');
                                        }
                                    });
                                }
                            });
                        }
                    }]
                }
            ]} //end of grid
        ]
    }
);

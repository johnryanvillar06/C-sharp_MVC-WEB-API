Ext.define('MyApp.view.MovieGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'moviegrid',

    requires: [
        'MyApp.model.Movie',
        'MyApp.store.Movies'
    ],
    viewModel: {
        type: 'moviegrid'
    },

    title: 'Movies',

    store: {
        type: 'movies'
    },

    /*height: '600',*/
    columns: [
        { text: 'ID', dataIndex: 'Id', flex: 1 },
        { text: 'Title', dataIndex: 'Title', flex: 2 },
        { text: 'Genre', dataIndex: 'Genre', flex: 2 },
        { text: 'Release Date', dataIndex: 'ReleaseDate', xtype: 'datecolumn', format: 'm/d/Y', flex: 2 },
        { text: 'Price', dataIndex: 'Price', xtype: 'numbercolumn', format: '$0.00', flex: 1 },

        {
            xtype: 'actioncolumn',
            text: 'Edit',
            flex: 1,
            items: [{
                iconCls: 'x-fa fa-edit',
                tooltip: 'Edit',
                handler: function (grid, rowIndex, colIndex, item, event, record) {
                    console.log('Edit Movie button clicked.');

                    // Create and display form panel for adding a new movie
                    var form = Ext.create('Ext.form.Panel', {
                        title: 'Edit Movie',
                        layout: 'anchor',
                        defaults: {
                            anchor: '100%',
                            labelWidth: 80,

                        },
                        bodyPadding: 10,
                        items: [{
                            xtype: 'textfield',
                            name: 'Title',
                            fieldLabel: 'Title'
                        }, {
                            xtype: 'textfield',
                            name: 'Genre',
                            fieldLabel: 'Genre'
                        }, {
                            xtype: 'datefield',
                            name: 'ReleaseDate',
                            fieldLabel: 'Release Date',
                            format: 'm/d/Y'
                        }, {
                            xtype: 'numberfield',
                            name: 'Price',
                            fieldLabel: 'Price',
                            format: '$0.00'
                        }],
                        buttons: [{
                            text: 'Add',
                            handler: function () {
                                var form = this.up('form'),
                                    values = form.getValues(),
                                    newRecord = Ext.create('MyApp.model.Movie', values);

                                newRecord.save({
                                    url: 'http://localhost:55434/api/movies/',
                                    method: 'PUT',
                                    success: function (record) {
                                        console.log('Update movie added: ' + record.get('Title'));
                                        Ext.Msg.alert('Update movie added: ' + record.get('Title'));

                                        form.destroy();
                                    },
                                    failure: function (record, operation) {
                                        console.log('Failed to Edit movie: ' + operation.getError());
                                        Ext.Msg.alert('Failed to Edit movie: ' + operation.getError());
                                    },
                                });
                            }
                        }, {
                            text: 'Cancel',
                            handler: function () {
                                form.destroy();

                            }
                        }],

                    });

                    // Create window container to hold the form panel and render it to the page
                    var windowContainer = Ext.create('Ext.window.Window', {

                        title: 'Edit Movie',
                        modal: true,
                        items: [form]
                    });

                    windowContainer.show();
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
                    Ext.Msg.confirm('Confirm', 'Are you sure you want to delete this movies?', function (button) {
                        if (button === 'yes') {
                            Ext.Ajax.request({
                                url: 'http://localhost:55434/api/movies/' + record.get('Id'),
                                method: 'DELETE',
                                success: function (response) {
                                    Ext.Msg.alert('Success', 'movies deleted successfully.');
                                    var store = Ext.getStore('movies');
                                    if (store) {
                                        store.remove(record);
                                        store.sync();
                                    }
                                },
                                failure: function (response) {
                                    Ext.Msg.alert('Error', 'Failed to delete movies.');
                                }
                            });
                        }
                    });
                }
            }]
        }],

    dockedItems: [{
        xtype: 'toolbar',
        dock: 'top',
        items: [{
            xtype: 'button',
            text: 'Add Movie',
            handler: function () {
                console.log('Add Movie button clicked.');

                // Create and display form panel for adding a new movie
                var form = Ext.create('Ext.form.Panel', {
                    title: 'Create Movie',
                    layout: 'anchor',
                    defaults: {
                        anchor: '100%',
                        labelWidth: 80,
                      
                    },
                    bodyPadding: 10,
                    items: [{
                        xtype: 'textfield',
                        name: 'Title',
                        fieldLabel: 'Title'
                    }, {
                        xtype: 'textfield',
                        name: 'Genre',
                        fieldLabel: 'Genre'
                    }, {
                        xtype: 'datefield',
                        name: 'ReleaseDate',
                        fieldLabel: 'Release Date',
                        format: 'm/d/Y'
                    }, {
                        xtype: 'numberfield',
                        name: 'Price',
                        fieldLabel: 'Price',
                        format: '$0.00'
                        }],
                    buttons: [{
                        text: 'Add',
                        handler: function () {
                            var form = this.up('form'),
                                values = form.getValues(),
                                newRecord = Ext.create('MyApp.model.Movie', values);

                            newRecord.save({
                                url: 'http://localhost:55434/api/movies',
                                success: function (record) {
                                    console.log('New movie added: ' + record.get('Title'));
                                    Ext.Msg.alert('New movie added: ' + record.get('Title'));
                                   
                                    form.destroy();
                                },
                                failure: function (record, operation) {
                                    console.log('Failed to add movie: ' + operation.getError());
                                    Ext.Msg.alert('Failed to add movie: ' + operation.getError());
                                },                              
                            });                          
                        }
                    }, {
                        text: 'Cancel',
                        handler: function () {
                            form.destroy();
                            
                        }
                    }],
                   
                });

                // Create window container to hold the form panel and render it to the page
                var windowContainer = Ext.create('Ext.window.Window', {
                  
                    title: 'Add Movie',
                    modal: true,
                    items: [form]
                });

                windowContainer.show();
            }
        }]
    }]
});

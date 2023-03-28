Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: 'Vidly-Rental Program'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 25,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        items: [{
            xtype: 'introduction'
        }]
    }, {
        title: 'Movies',
        iconCls: 'fa-video',
        items: [{
            xtype: 'moviegrid'
        }]
    }, {
        title: 'Customer',
        iconCls: 'fa-users',
        items: [{
            xtype: 'customerview'
        }]
    }, {
        title: 'Rent Movies',
        iconCls: 'fa-film',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Return Movies',
        iconCls: 'fa-arrow-left',
        bind: {
            html: '{loremIpsum}'
        }
    }]

});

Ext.define('MyApp.view.Introduction', {
    extend: 'Ext.panel.Panel',
    xtype: 'introduction',

    title: 'Introduction',

    layout: {
        type: 'hbox',
        align: 'stretch'
    },

    items: [
        {
            xtype: 'container',
            flex: 1,
            margin: '0 10 0 0',
            items: [
                {
                    xtype: 'component',
                    html: '<i class="fa fa-search fa-3x"></i>',
                    margin: '20 0'
                },
                {
                    xtype: 'component',
                    html: '<h3>Search Movies</h3>',
                    margin: '0 0 10 0'
                },
                {
                    xtype: 'component',
                    html: '<p>Search our collection of movies by title, genre, rating, and more.</p>'
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            margin: '0 10 0 10',
            items: [
                {
                    xtype: 'component',
                    html: '<i class="fa fa-shopping-cart fa-3x"></i>',
                    margin: '20 0'
                },
                {
                    xtype: 'component',
                    html: '<h3>Rent Movies</h3>',
                    margin: '0 0 10 0'
                },
                {
                    xtype: 'component',
                    html: '<p>Rent movies with just a few clicks and enjoy them in the comfort of your own home.</p>'
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            margin: '0 0 0 10',
            items: [
                {
                    xtype: 'component',
                    html: '<i class="fa fa-undo fa-3x"></i>',
                    margin: '20 0'
                },
                {
                    xtype: 'component',
                    html: '<h3>Return Movies</h3>',
                    margin: '0 0 10 0'
                },
                {
                    xtype: 'component',
                    html: '<p>Return your rented movies to any of our locations or via mail.</p>'
                }
            ]
        },
        {
            xtype: 'container',
            flex: 1,
            margin: '0 0 0 10',
            items: [
                {
                    xtype: 'component',
                    html: '<i class="fa fa-info-circle fa-3x"></i>',
                    margin: '20 0'
                },
                {
                    xtype: 'component',
                    html: '<h3>About Us</h3>',
                    margin: '0 0 10 0'
                },
                {
                    xtype: 'component',
                    html: '<p>Learn more about our company and our mission to provide the best movie rental service.</p>'
                }
            ]
        }
    ],

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'bottom',
            items: [
                {
                    xtype: 'component',
                    html: 'Contact Us: 1-800-MOVIE-RENTAL'
                },
                {
                    xtype: 'tbfill'
                },
                {
                    xtype: 'component',
                    html: '&copy; 2023 Vidly, Inc.'
                }
            ]
        }
    ]
});

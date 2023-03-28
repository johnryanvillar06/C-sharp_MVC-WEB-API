Ext.define('MyApp.view.MovieGridViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.moviegrid',
    stores: {
        movies: {
            type: 'movies'
        }
    }
});
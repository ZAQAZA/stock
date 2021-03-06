var
  express = require('express'),
  app     = express(),
  poet    = require('poet')( app );

poet
  .createPostRoute()
  .createPageRoute()
  .createTagRoute()
  .createCategoryRoute()
  .init();

app.set( 'view engine', 'jade' );
app.set( 'views', __dirname + '/views' );
app.use( express.static( __dirname + '/public' ) );
app.use( app.router );

app.get( '/', function ( req, res ) { res.render( 'welcome' ); });
app.listen( 3210 );
console.log('Listening - 3210')
const express = require('express');
const compression = require('compression');
const session = require('express-session');
const bodyParser = require('body-parser');
const logger = require('morgan');
const chalk = require('chalk');
const dotenv = require('dotenv');
const path = require('path');
const ui_rest = require('./rest/ui_support.js');


dotenv.load({ path: 'environment.conf' });

/**
 * Create Express server.
 */
const app = express();

app.get('/version', function(e,r){
  r.send("Test")
});

app.get('/get_session_id', ui_rest.get_session_id);
app.get('/get_tags', ui_rest.get_tags);



app.set('host', process.env.NODE_IP || '0.0.0.0');
app.set('port', process.env.PORT || process.env.NODE_PORT || 8080);
app.set('rest', path.join(__dirname, 'rest'));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(session({
//   resave: true,
//   saveUninitialized: true,
//   secret: process.env.SESSION_SECRET,
//   store: new MongoStore({
//     url: process.env.MONGODB_URI || process.env.MONGOLAB_URI,
//     autoReconnect: true,
//     clear_interval: 3600
//   })
// }));

/**
 * Start Express server.
 */
app.listen(app.get('port'), app.get('host'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.green('✓'), app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

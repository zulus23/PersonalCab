/**
 * Created by Gukov on 25.08.2015.
 */


module.exports = function(){
     var client = './app/';
     var config = {

          scssfile: ['content/scss/application.scss'],
          cssDist: './content/css/',
          cssFiles:'./content/css/application.css',
          bowerDir: './bower_components',
          index: client+'index.html',
          js: [
              client+'**/*.module.js',
               client+'**/*.js',
          ],
          client: client,
          /**
           * Bower and NPM locations
           */
          bower: {
               json: require('./bower.json'),
               directory: './bower_components/',
               ignorePath: '../..'
          },

     };
     config.getWiredepDefaultOption = function(){
          var options = {
               bowerJson: config.bower.json,
               directory: config.bower.directory,
               ignorePath: config.bower.ignorePath
          };
          return options;

     };



     return config;
}
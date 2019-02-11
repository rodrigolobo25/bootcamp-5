//This file holds any configuration variables we may need 
//'config.js' is typically ignored by git to protect sensitive information, such as your database's username and password

module.exports = {
  db: {
      uri: 'mongodb://rodrigolobo:25julio99@ds121455.mlab.com:21455/rodrigobootcamp3', //place the URI of your mongo database here.
  }, 
    port: process.env.PORT || 8080
};
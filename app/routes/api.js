<<<<<<< Updated upstream
// //Applications APIs will go here
// var User = require('../models/userModel');
// var Jobbie = require('../models/jobbieModel');
// module.exports = function(app, passport) {
//   // app.post('/api/postjobbie', isAuthenticated, function(req, res) {
//   //   var newJobbie = new Jobbie();
//   //   newJobbie.title = req.body.title;
//   //   newJobbie.description = req.body.description;
//   //   // save the user
//   //   newJobbie.save(function(err) {
//   //     if (err)
//   //       throw err;
//   //     return done(null, newJobbie);
//   //   });
//   // });
//
//
//
//
// }
=======
//Applications APIs will go here
var mongoose = require('mongoose');
mongoose.connect(db.url);

module.exports = function(app, passport) {
  app.get('/jobbies', function(req, res) {
    
  });
}
>>>>>>> Stashed changes

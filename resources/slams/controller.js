  const Slam = require('../../models/grand_slam');

  // This file will hold all ROUTES. Use from specific to generic.

  module.exports = {
    index(req, res, next) {
      Slam.allSlams()
        .then((slams_data) => {
          // .render automaticall looks for a views folder
          res.render('index', {
            slams: slams_data,
          });
      })
        .catch(err => next(err));
        console.log('error');
    }
    //Another function here.
  };

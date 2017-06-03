
  // This is the new variable that now represents the entire model folder, which contains all of my query selectors that interact with the database.
  const Slam = require('../../models/grand_slam');

  // This file will hold all ROUTES. Use from specific to generic.

  module.exports = {
    index(req, res) {
      // This will call the function located in the model directory.
      Slam.allSlams()
        .then((slams_data) => {
          // .render automatically looks for a views folder
          res.render('index', {
            // This created a new key 'slams', within the larger object retrieved, with 'slams_data' equaling something we can access with dot notation.
            slams: slams_data,
          });
      })
      .catch((err) => {
        res.send(err);
      });
    },

    show(req, res) {
      // This will grab the url paramater passed in.
      Slam.findById(req.params.id)
        .then((id) => {
          res.render('single_slam', {
            slams: id,
          });
        })
        .catch((err) => {
          res.send(err);
        });
    },

    // create(req,res) {
    //   Slam.newInput()
    //   .then((input_ifno) => {
    //     res.render('')
    //   });
    // },


    //Another function here.
  };

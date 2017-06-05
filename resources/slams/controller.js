
  // This is the new variable that now represents the entire model folder, which contains all of my query selectors that interact with the database.
  const Slam = require('../../models/grand_slam');
  const Question = require('../../models/grand_slam');
  const Response = require('../../models/grand_slam');

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
        .then((slams_data) => {
          res.render('single_slam_page', {
            slams: slams_data,
          });
          console.log(slams_data);
        })
        .catch((err) => {
          res.send(err);
        });

    },

    // show(req, res) {
    //   // This will grab the url paramater passed in.
    //   Slam.findById(req.params.id)
    //     .then((slams_data) => {
    //       Slam.getQuestions(req.params.id)
    //         .then((slam_questions) => {
    //           res.render('single_slam_page', {
    //             slams: slams_data,
    //             questions: slam_questions
    //           });
    //         })
    //         .catch((err) => {
    //           res.send(err);
    //         });
    //     })
    //     .catch((err) => {
    //       res.send(err);
    //     });
    //
    // }

      // show(req, res) {
      //   // This will grab the url paramater passed in.
      //   Question.findById(req.params.id)
      //     .then((slams_data) => {
      //       res.render('new_question', {
      //         questions: question_data,
      //       });
      //       console.log(question_data);
      //     })
      //     .catch((err) => {
      //       res.send(err);
      //     });
      //
      // },



    //Another function here.
  };



// This is the MODEL. This will proxy the data, which goes and gets it.

// This is the only file with a connectino to the database. This is the only file that will directly interact with the db.

const db = require('../config/database');


module.exports = {

  allSlams() {
    return db.any(`
        SELECT *
        FROM slams
        ORDER by id
        ASC
      `);
   },

   oneSlam() {
     
   }

  // findById(id) {
  //   returndb.one(`
  //     SELECT *
  //     FROM slams
  //     WHERE id =
  //     `, id)
  // },

















};

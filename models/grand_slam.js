

// This is the MODEL. This will proxy the data, which goes and gets it.

// This is the only file with a connectino to the database. This is the only file that will directly interact with the db.

const db = require('../config/database');

module.exports = {

  allSlams() {
    return db.any(`
        SELECT *
        FROM slams
        ORDER BY id
        ASC
      `);
   },

   findById(id) {
     return db.one(`
        SELECT *
        FROM slams
        WHERE id = $1
        `, id);
   },




};

require('dotenv').config();

const express     = require('express');
// Start up express.
const app         =  express();
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require ('body-parser');
const slamsRouter = require('./resources/slams')
// const forumRouter = require('./resources/hotels');

// Who is setting our port?
const PORT = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/slams', slamsRouter);

app.get('/' , (req, res) => {
  res.redirect(301, '/slams');
});




app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));

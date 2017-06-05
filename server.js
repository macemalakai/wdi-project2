require('dotenv').config();

const express     = require('express');
// Start up express.
const app         =  express();
const logger      = require('morgan');
const path        = require('path');
const bodyParser  = require ('body-parser');
const slamsRouter = require('./resources/slams');
// const forumRouter = require('./resources/hotels');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

// Who is setting our port?
const PORT = process.argv[2] || process.env.PORT || 3000;

app.set('view engine', 'ejs');

app.use('/slams', slamsRouter);


//define variable to link jquery and materializeCSS
const dir = {
  public: path.join(__dirname, 'public'),
  jquery: path.join(__dirname, 'node_modules/jquery/dist'),
};

//link jquerys/materializeCSS
app.use(express.static(dir.public));
app.use('/vendor/jquery', express.static(dir.jquery));


app.get('/', (req, res) => {
  res.redirect(301, '/slams');
});

app.post('/:id', urlencodedParser, function (req, res) {
  console.log(req.body);
  res.render('new_question');
})



app.listen(PORT, () => console.log(`Server up and listening on port ${PORT}`));

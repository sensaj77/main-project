import http from 'http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/local');

var questionSchema = {
	questions: Array
}
var Question = mongoose.model('Question', questionSchema, 'questions')

var app = express();
app.server = http.createServer(app);

// CORS - 3rd party middleware
app.use(cors());

// This is required by falcor-express middleware to work correctly with falcor-browser
app.use(bodyParser.json({extended: false}));

app.get('/', (req, res) => { 
    Question.find(function (err, questions) {

        let ourQuestions = questions.map(function( questionItem ){
            return `<h2>${questionItem.questions[0]}</h2> ${questionItem.questions[1]}`;
        }).join("<br/>");

        res.send(`<h1>Quiz Application!</h1> ${ourQuestions}`);
    });
});

app.server.listen(process.env.PORT || 3000);
console.log(`Started on port ${app.server.address().port}`);

export default app;
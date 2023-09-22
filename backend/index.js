const express = require('express');
const app = express();
const morgan = require('morgan');
const articleRoutes = require('./routes/articleRoutes');
app.use(morgan('dev'));

let articles = [
    { id: 1, title: 'Article 1', content: 'Content 1' },
    { id: 2, title: 'Article 2', content: 'Content 2' },
    { id: 3, title: 'Article 3', content: 'Content 3' }
  ];


app.listen(8080, () => {
    console.log('Server running on port 8080');
    });

// Article CRUD Routes Redirected from index.js to articleRoutes.js

app.use('/articles', articleRoutes);

// CRUD routes

// app.get('/', (req, res) => {
//     res.send(articles);
//     });

// app.get('/:id', (req, res) => {
//     const id = req.params.id;
//     const article = articles.find(article => article.id === +id); // +id converts string to number, better practice to use parseInt       
//     res.send(article);
//     })

// app.post('/', (req, res) => {
//     const article = req.body;
//     articles.push(article);
//     console.log(articles);
//     res.send('Article added successfully');
//     })

// app.put('/:id', (req, res) => {
//     const id = req.params.id;
//     const article = req.body;
//     articles[id] = article;
//     res.send('Article updated successfully');
//     })

// app.delete('/:id', (req, res) => {
//     const id = req.params.id;
//     if (articles[id]) {
//         delete articles[id];
//         res.send('Article deleted successfully');
//     } else {
//         res.status(404).send('Article not found');
//     }
// })


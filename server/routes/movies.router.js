const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = 'SELECT * FROM movies';
  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log('Error completing SELECT movies query', err);
      res.sendStatus(500);
    });
});

router.get('/genres', (req, res) => {
  const queryText = `SELECT movies.id, movies.title, movies.description, movies.poster, array_agg(genres.name) as genre FROM movies
    JOIN movies_genres ON movies.id=movies_genres.movies_id
    JOIN genres ON movies_genres.genres_id=genres.id
    GROUP by movies.id ORDER BY movies.id;`;
  pool
    .query(queryText)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((error) => {
      console.log(error);
      res.sendStatus(500);
    });
});

module.exports = router;

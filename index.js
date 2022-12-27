const express = require('express');
const characters = require('./modal/characters');

const app = express();

app.get('/search', async (req, res, next) => {
          try {
                    const filters = req.query;
                    const filteredcharacters = await characters.characters.filter(character => {
                              return (character.name.includes(filters.name) && true || false)
                    });
                    res.status(200).send(filteredcharacters);
          } catch (e) {
                    console.log(e);
          }
});

app.get('/characters', async (req, res) => {
          try {
                    const limitValue = req.query.limit || 2;
                    const skipValue = req.query.skip || 0;
                    const charactersList = characters.characters.slice(skipValue).slice(0, limitValue);
                    res.status(200).send({ total: characters.characters.length, data: charactersList });
          } catch (e) {
                    console.log(e);
          }
});

app.listen(5000, () => {
          console.log('Server started!');
});
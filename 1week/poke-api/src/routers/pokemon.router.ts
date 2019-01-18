import express from 'express';
import { pokemon } from '../data';

export const pokemonRouter = express.Router();

/**
 * Url: /pokemon
 * Retreive all pokemon
 */
pokemonRouter.get('', (req, res) => {
  res.json(pokemon);
});

/**
 * Url: /pokemon/type/:type
 * Find all pokemon by provided type
 */
pokemonRouter.get('/type/:type', (req, res) => {
  const pokemonByType = pokemon.filter(poke => poke.type.includes(req.params.type));
  res.json(pokemonByType);
});

/**
 * Url: /pokemon
 * Save a new pokemon
 */
pokemonRouter.post('', (req, res) => {
  pokemon.push(req.body);
  res.status(201);
  res.send('Successfully Created Pokemon');
});
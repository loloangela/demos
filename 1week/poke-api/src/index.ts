import { Pokemon } from './models/pokemon';
import { User } from './models/user';
import { PokemonMove } from './models/pokemon-move';

let peter = new User(1,'peter', 'password', 'peter');
let kyle = new User(2, 'kyle', 'password', 'kyle');

let slash = new PokemonMove(1, 'slash', 'normal', 25, 10);
let hyperBeam = new PokemonMove(2, 'hyper beam', 'normal', 10, 100);
let blastBurn = new PokemonMove(3, 'blast burn', 'fire', 10, 30);
let surf = new PokemonMove(4, 'surf', 'water', 20, 75);

let pokemon: Pokemon[] = [
  new Pokemon(4, 'charmander', 5, ['fire'], [slash, blastBurn], peter),
  new Pokemon(7, 'squirtle', 5, ['water'], [hyperBeam, surf], kyle)
];

console.log(pokemon);
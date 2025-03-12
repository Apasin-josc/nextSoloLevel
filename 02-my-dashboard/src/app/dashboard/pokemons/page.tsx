import { SimplePokemon, PokemonsResponse, PokemonGrid } from "@/pokemons";

//! <mr> is the snipper for creating metadata
export const metadata = {
  title: '151 Pokemons List',
  description: 'Pokemons List',
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  /* throw new Error('This is a issue ❌'); */

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);
  return (
    <div className="flex flex-col">
      <span className="text-5xl my-2">Pokemon List <small className="text-blue-500">static</small></span>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}

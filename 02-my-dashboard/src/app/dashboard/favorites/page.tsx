import { PokemonGrid } from "@/pokemons";

//! <mr> is the snipper for creating metadata
export const metadata = {
    title: 'Favorites Pokemons List',
    description: 'Pokemons List',
};


export default async function PokemonsPage() {
    return (
        <div className="flex flex-col">
            <span className="text-5xl my-2">Favorite Pokemons <small className="text-blue-500">Global State</small></span>
            <PokemonGrid pokemons={[]} />
        </div>
    );
}

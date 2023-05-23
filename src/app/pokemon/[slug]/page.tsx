import { Pokemon } from "@/types/PokeAPI";

interface Props {
  params: {
    slug: string;
  }
}

const fetchPokemonDetails = async (pokeName: string) => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
    .then(response => response.json());
}

const PokemonDetails = async ({ params }: Props) => {
  const pokemonDetails: Pokemon = await fetchPokemonDetails(params.slug);
  
  return (
    <div>
      <pre>
        {
          JSON.stringify(pokemonDetails, null, 2)
        }
      </pre>
    </div>
  )
}

export default PokemonDetails
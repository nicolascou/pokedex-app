import { Pokemon } from "@/types/PokeAPI";
import Image from "next/image";

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
    <div className="p-8">
      <div className="flex justify-center items-center">
        <Image src={pokemonDetails.sprites.front_default} width={100} height={100} alt="Front Default Sprite" />
        <Image src={pokemonDetails.sprites.back_default} width={100} height={100} alt="Back Default Sprite" />
        <Image src={pokemonDetails.sprites.front_shiny} width={100} height={100} alt="Front Shiny Default Sprite" />
        <Image src={pokemonDetails.sprites.back_shiny} width={100} height={100} alt="Back Shiny Default Sprite" />
      </div>
    </div>
  )
}

export default PokemonDetails
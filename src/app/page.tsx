import Image from 'next/image';
import Link from 'next/link';

interface Pokemon {
  name: string;
  url: string;
}

const fetchPokemon = async () => {
  return fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(data => data.results);
}

export default async function Home() {
  const pokemonArray: Pokemon[] = await fetchPokemon();
  
  return (
    <>
      <h1 className='text-4xl text-center mt-10'>My Pokemon App</h1>
      <main className="flex gap-5 items-center justify-center p-24 flex-wrap">
        {
          pokemonArray &&
          pokemonArray.map(({ name }, index) => (
            <Link href={{ pathname: '/pokemon/[slug]', query: { slug: name } }} 
            key={name} className="bg-gray border-2 border-black rounded-lg"
            >
              <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('00' + (index+1)).slice(-3)}.png`} alt={`${name} front image`} width={200} height={200} />
              <p>{name}</p>
            </Link>
          ))
        }
      </main>
    </>
  )
}

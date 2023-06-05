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
      <div className='flex align-center justify-center'>
        <h1 className='text-4xl text-center mt-10 uppercase font-bold tracking-wider bg-white px-20 py-6 rounded-3xl'>Pokedex</h1>
      </div>
      <main className="flex gap-5 p-12 items-center justify-center flex-wrap">
        {
          pokemonArray &&
          pokemonArray.map(({ name }, index) => (
            <Link href={`/pokemon/${name}`} key={name} 
              className="border-2 border-black rounded-lg bg-orange-800 p-4 hover:bg-orange-700 duration-500"
            >
              <p className='text-center capitalize text-yellow-300 text-xl tracking-wider font-bold'>{name}</p>
              <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('00' + (index+1)).slice(-3)}.png`} alt={`${name} front image`} width={150} height={150} />
              <div className='flex items-center justify-between'>
                <Image src="/icons/poke.png" width={22} height={22} alt="Pokeball" />
                <p className='text-gray-100 bottom-4 right-4'>#{('00' + (index+1)).slice(-3)}</p>
              </div>
            </Link>
          ))
        }
      </main>
    </>
  )
}

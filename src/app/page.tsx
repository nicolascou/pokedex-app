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
      <div className='flex items-end justify-center'>
        <div className='py-2 px-4 rounded-lg shadow-lg shadow-gray-400 border-2 border-black'>
          <i></i>
          <input type="text" className='bg-transparent outline-none border-none' />
        </div>
        <Image src='/logo.png' width={400} height={150} className='mx-20' alt='Pokemon Title' />
        <Link href='https://google.com'>Favorites</Link>
      </div>
      <main className="flex gap-5 mt-12 items-center justify-center flex-wrap">
        {
          pokemonArray &&
          pokemonArray.map(({ name }, index) => (
            <Link href={`/pokemon/${name}`} key={name} 
              className="border-2 border-black rounded-lg shadow-lg shadow-gray-400 bg-blue-400 p-4 hover:bg-blue-500 duration-500"
            >
              <p className='text-center capitalize text-black text-xl tracking-wider font-bold'>{name}</p>
              <Image src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${('00' + (index+1)).slice(-3)}.png`} alt={`${name} front image`} width={150} height={150} />
              <div className='flex items-center justify-between'>
                <Image src="/icons/poke.png" width={22} height={22} alt="Pokeball" />
                <p className='text-black bottom-4 right-4'>#{('00' + (index+1)).slice(-3)}</p>
              </div>
            </Link>
          ))
        }
      </main>
    </>
  )
}

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

interface ISavedPokemon {
  name: string;
  id: string;
}

const LikeButton = (pokemon: ISavedPokemon) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    if (liked) {
      const favPokemons: ISavedPokemon[] = JSON.parse(localStorage.getItem('pokedex-saved') || '');
      favPokemons.push(pokemon);
      localStorage.setItem('pokedex-saved', JSON.stringify(favPokemons));
    }

  }, [liked, pokemon]);
  
  return (
    <button>
      <Image src="/icons/pokeball.png" width={23} height={23} alt="Heart Icon" />
    </button>
  )
}

export default LikeButton;
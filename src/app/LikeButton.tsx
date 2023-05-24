'use client';

import React, { useEffect, useState } from 'react';

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
    <button>Like</button>
  )
}

export default LikeButton;
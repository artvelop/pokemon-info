import { pokemonApi } from '@/apis/controller/pokemonApi';
import { Pokemon } from '@/types/pokemon.type';
import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { PokemonItem } from './PokemonItem';

export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = async () => {
    const list = await pokemonApi.getList();

    setPokemonList(list);
  };

  return (
    <Container>
      {pokemonList.map((item) => (
        <PokemonItem key={item.id} pokemon={item} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

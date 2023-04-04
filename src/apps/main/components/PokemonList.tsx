import React from 'react';
import styled from '@emotion/styled';
import { useRecoilValue } from 'recoil';
import { pokemonList } from '@/recoil/pokemonList.recoil';
import { Pokemon } from '@/types/pokemon.type';
import { PokemonItem } from './PokemonItem';

export const PokemonList = () => {
  const list = useRecoilValue(pokemonList);

  return (
    <Container>
      {list.map((item: Pokemon) => (
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

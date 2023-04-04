import React from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';
import { Pokemon } from '@/types/pokemon.type';

interface Props {
  pokemon: Pokemon;
}

const POKEMON_IMAGE = {
  WIDTH: 120,
  HEIGHT: 120,
};

export const PokemonItem = ({ pokemon }: Props) => {
  return (
    <Container>
      <Image src={pokemon.image} alt="" width={POKEMON_IMAGE.WIDTH} height={POKEMON_IMAGE.HEIGHT} />
      <h3>{pokemon.name}</h3>
      <p>{pokemon.type}</p>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border-radius: 4px;
  gap: 16px;
`;

import React from 'react';
import Image from 'next/image';
import { Pokemon } from '@/types/pokemon.type';
import styled from '@emotion/styled';

interface Props {
  pokemon: Pokemon;
}

export const PokemonItem = ({ pokemon }: Props) => {
  return (
    <Container>
      <Image src={pokemon.image} alt="" width={120} height={120} />
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

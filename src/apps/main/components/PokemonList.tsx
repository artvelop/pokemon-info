import styled from '@emotion/styled';
import React from 'react';

export const PokemonList = () => {
  return (
    <Container>
      <div>PokemonItem</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

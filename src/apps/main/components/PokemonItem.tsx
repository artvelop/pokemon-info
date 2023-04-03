import styled from '@emotion/styled';
import React from 'react';

export const PokemonItem = () => {
  return (
    <Container>
      <div>PokemonItem</div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 4px;
`;

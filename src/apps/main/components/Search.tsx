import { pokemonList } from '@/recoil/pokemonList.recoil';
import styled from '@emotion/styled';
import React from 'react';
import { useRecoilRefresher_UNSTABLE } from 'recoil';

export const Search = () => {
  const refreshPokemonList = useRecoilRefresher_UNSTABLE(pokemonList);

  const handleRefreshPokemonList = () => {
    refreshPokemonList();
  };

  return (
    <Container>
      <InputContainer />
      <RefreshButton onClick={handleRefreshPokemonList}>Refresh</RefreshButton>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  width: 100%;
`;

const InputContainer = styled.input`
  display: flex;
  flex: 1;
  padding: 8px;
  border: 1px solid #fff;
`;

const RefreshButton = styled.button`
  color: #fff;
  padding: 8px 16px;
  border-radius: 4px;
`;

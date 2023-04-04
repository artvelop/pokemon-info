import React, { Suspense } from 'react';
import styled from '@emotion/styled';
import { LayoutDefault } from '@/components/layout/LayoutDefault';
import { PokemonList } from './components/PokemonList';
import { Search } from './components/Search';

export const Main = () => {
  return (
    <LayoutDefault>
      <Search />
      <Suspense fallback={<LoadingWrapper>loading...</LoadingWrapper>}>
        <PokemonList />
      </Suspense>
    </LayoutDefault>
  );
};

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: #fff;
`;

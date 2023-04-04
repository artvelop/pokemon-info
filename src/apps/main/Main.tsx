import { LayoutDefault } from '@/components/layout/LayoutDefault';
import React from 'react';
import { PokemonList } from './components/PokemonList';

export const Main = () => {
  return (
    <LayoutDefault>
      <PokemonList />
    </LayoutDefault>
  );
};

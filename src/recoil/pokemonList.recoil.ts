import { pokemonApi } from '@/apis/controller/pokemonApi';
import { sleep } from '@/utils/sleep';
import { selector } from 'recoil';

export const pokemonList = selector({
  key: 'POKEMON_LIST',
  get: async () => {
    const res = await pokemonApi.getList();

    await sleep(1000);

    return res;
  },
});

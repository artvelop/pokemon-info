import { Pokemon } from '@/types/pokemon.type';

export const pokemonApi = {
  getList: async (): Promise<Pokemon[]> => {
    const promises = [];

    for (let i = 1; i <= 150; i++) {
      promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => res.json()));
    }

    return Promise.all(promises).then((results) =>
      results.map(({ name, sprites, types, id }: any) => ({
        name,
        image: sprites['front_default'],
        type: types.map(({ type }: any) => type.name).join(', '),
        id: id.toString(),
      })),
    );
  },
};

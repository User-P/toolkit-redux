import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoading } from "./pokemonSlice";

export const getPokemons = (page = 0) => async (dispatch, getState) => {
    dispatch(startLoading());
    //TODO: realizar peticion http

    const { data } = await pokemonApi.get(`pokemon?offset=${page * 10}&limit=10`);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
}

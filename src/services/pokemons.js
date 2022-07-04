const URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async () => {
	const response = await fetch(URL);
	return await response.json();
};
// export const getPokemons = () => {
// 	return fetch(URL).then((response) => response.json());
// };

export const getMorePokemons = (offset) => {
	return fetch(`{URL}?offset=${offset}&limit=20`).then((response) => response.json());
};
// export const getMorePokemons = (offset) => {
// 	return fetch(`{URL}?offset=${offset}&limit=20`).then((response) => response.json());
// };

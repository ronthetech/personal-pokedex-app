const URL = "https://pokeapi.co/api/v2/pokemon";

export const getPokemons = async () => {
	const response = await fetch(URL);
	return await response.json();
};

// export const getPokemons = () => {
// 	return fetch(URL).then((response) => response.json());
// };

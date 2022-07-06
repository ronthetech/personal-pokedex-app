const URL = "https://pokeapi.co/api/v2/pokemon";
// const URL2 = "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20";

// export const getPokemons = async () => {
// 	const response = await fetch(URL);
// 	return await response.json();
// };
export const getPokemons = () => {
	return fetch(URL)
		.then((response) => response.json())
		.catch((err) => {
			console.log("error reading data:" + err);
		});
};

// export const getMorePokemons = async (offset) => {
// 	const response = await fetch(`{URL}?offset=${offset}&limit=20`);
// 	return await response.json();
// };
export const getMorePokemons = (count) => {
	return fetch(`${URL}?offset=${count}&limit=20`)
		.then((response) => response.json())
		.catch((err) => {
			console.log("error reading data:" + err);
		});
};
// export const getMorePokemons = () => {
// 	return fetch(`{URL}?offset=40&limit=20`)
// 		.then((response) => response.json())
// 		.catch((err) => {
// 			console.log("error reading data:" + err);
// 		});
// };

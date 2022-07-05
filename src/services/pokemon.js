const URL = "https://pokeapi.co/api/v2";

// export const getPokemon = async (pathName) => {
// 	const response = await fetch(`${URL}${pathName}`);
// 	return await response.json();
// };

export const getPokemon = (pathName) => {
	return fetch(`${URL}${pathName}`)
		.then((response) => response.json())
		.catch((err) => {
			console.log("error reading data:" + err);
		});
};

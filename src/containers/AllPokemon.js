import React, { useEffect, useState } from "react";
import PokeEntry from "../components/PokeEntry";
import { getPokemons } from "../services/pokemons";

const AllPokemon = () => {
	const [pokemons, setPokemons] = useState([]);

	useEffect(() => {
		getPokemons().then((data) => {
			setPokemons(data);
		});
	}, []);
	//console.log(Object.entries(pokemons)[3] && Object.entries(pokemons)[3][1]);
	return (
		<div>
			<div>
				{Object.entries(pokemons)[3] &&
					Object.entries(pokemons)[3][1].map((pokemon, index) => {
						return <PokeEntry key={index} {...pokemon} id={index + 1} />;
					})}
			</div>
		</div>
	);
};

export default AllPokemon;

import React, { useEffect, useState } from "react";
import { getPokemon } from "../services/pokemon";
import { useLocation } from "react-router-dom";

const Pokemon = () => {
	const location = useLocation();
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		getPokemon(location.pathname).then((data) => {
			setPokemon(data);

			console.log(data);
		});
	}, [location.pathname]);
	//console.log(props.location.pokemon);
	const { id } = pokemon;

	return <div className='pokeEntry'></div>;
};

export default Pokemon;

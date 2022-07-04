import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getPokemon } from "../services/pokemon";

const PokeEntry = (props) => {
	//console.log(props.id);
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		getPokemon(props.id).then((data) => {
			setPokemon(data);
		});
	}, []);

	return (
		<NavLink className='entry' to={{ pathname: `/pokemon/${props.id}`, pokemon: { ...pokemon } }}>
			<h3 className='entry__title'>{props.name}</h3>
			<img
				className='entry__img'
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
				alt='pokemon-pic'
			/>
		</NavLink>
	);
};

export default PokeEntry;

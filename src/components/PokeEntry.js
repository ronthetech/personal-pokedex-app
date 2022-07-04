import React from "react";

const PokeEntry = (props) => {
	console.log(props.id);
	return (
		<div>
			<h3>{props.name}</h3>
			<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`} alt='pokemon-pic' />
			<h3>{props.url}</h3>
		</div>
	);
};

export default PokeEntry;

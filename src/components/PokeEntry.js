import React from "react";

const PokeEntry = (props) => {
	console.log(props.id);
	return (
		<div className='entry'>
			<h3 className='entry__title'>{props.name}</h3>
			<img
				className='entry__img'
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
				alt='pokemon-pic'
			/>
		</div>
	);
};

export default PokeEntry;

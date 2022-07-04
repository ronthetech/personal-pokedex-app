import AllPokemon from "./containers/AllPokemon.js";
import Pokemon from "./components/Pokemon";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/pokemon/:id' element={<Pokemon />} />
					<Route path='/' element={<AllPokemon />} />
				</Routes>
			</Router>
		</div>
	);
};

export default App;

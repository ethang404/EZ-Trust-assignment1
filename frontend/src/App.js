import HomePage from "./HomePage";
import Register from "./Register";
import Auth from "./Auth";
//import { Routes, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
	return (
		<div>
			<Router>
				<Routes>
					<Route exact path="/" element={<HomePage/>} />
					<Route exact path="/register" element={<Register/>} />
					<Route exact path="/:username/:password" element={<Auth />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import SimpleForm from "./pages/simple-form";
import SimpleFormResPage from "./pages/simple-form-res";

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<SimpleForm />}></Route>
					<Route
						path='/simple-form-result'
						element={<SimpleFormResPage />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;

import "./App.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/Router"

function App() {
	const getCountriesByName = async () => {
		await fetch("https://restcountries.com/v3.1/all", {
			method: "GET",
		})
	}

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	)
}

export default App

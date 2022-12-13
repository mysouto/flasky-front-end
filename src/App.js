import "./App.css";
import Navbar from "./components/Navbar";
import BikeList from "./components/BikeList.js";

const bikesList = [
	{
		id: 1,
		name: "This is some data that we will work to display next class!",
		size: 50,
		price: 100,
		type: "special",
	},
	{
		id: 2,
		name: "This is some data that we will work to display next class!",
		size: 40,
		price: 20,
		type: "duplicate",
	},
	{
		id: 3,
		name: "New Bike",
		size: 80,
		price: 100,
		type: "unique",
	},
];

function App() {
	return (
		<div>
			<Navbar />

			{/* send bikesList to bikesList component as a prop */}
			<BikeList bikesList={bikesList} />

			<button>Add Bike</button>
		</div>
	);
}

export default App;

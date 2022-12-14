// organizing imports, put external libraries at the top
import PropTypes from "prop-types";

import Bike from "./Bike";

// app is sending props to BikeList
function BikeList({ bikesList }) {
	const bikeComponents = [];

	for (const bike of bikesList) {
		bikeComponents.push(
			<li key={bike.id}>
				<Bike
					id={bike.id}
					name={bike.name}
					size={bike.size}
					price={bike.price}
					type={bike.type}
				/>
			</li>
		)
	}

	// using data from bikeList to create new components
	// return bikesList.map((bike) => (
	return(
		<div>
			{bikeComponents}
		</div>
	);
	//returns [<Bike/>, <Bike/>]
}

// create prop types
BikeList.propTypes = {
	// bikesList: PropTypes.array.isRequired,
	bikesList: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			name: PropTypes.string.isRequired,
			size: PropTypes.number.isRequired,
			type: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
		})
	),
};

export default BikeList;

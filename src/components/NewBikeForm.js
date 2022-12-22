// import React from "react";
// don't need to import React in newer version
import { useState } from "react";
import PropTypes from "prop-types";

import "./NewBikeForm.css";

// one object to hold all data needed
const INITIAL_FORM_DATA = {
	size: 0,
	type: "",
	price: 0,
	name: "",
};

// Defining a new component
const NewBikeForm = (props) => {
	// State below only holds info about size
	// const [newBikeSize, setNewBikeSize] = useState(100);

	// Create a state that holds all info about bike
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);

	// 'e' stands for event
	const handleChange = (e) => {
		// console.log("Handle change called");
		// console.log(e); // whole event object, interested in target.value in event
		// console.log(
		// 	`Target name: ${e.target.name}. Target value: ${e.target.value}`
		// );
		// setNewBikeSize(e.target.value);

		// create JS object
		const newFormData = {
			// makes copy of form data
			...formData,
			// also updates new value
			// key info is in target.name
			[e.target.name]: e.target.value,
		};
		// console.log(newFormData);

		// update state with useState function
		setFormData(newFormData);
	};

	const handleNewBikeSubmit = (e) => {
		// prevets default form submit event from happening
		// default behavior: reloading every time we submit a form
		e.preventDefault();
		// check if form data containes new bike info that we want to create
		// console.log(formData);

		props.addBikeCallBackFunc(formData);
		// props.addBike(formData);
	};

	return (
		<form onSubmit={handleNewBikeSubmit}>
			<br></br>
			<label htmlFor="size"> Size</label>
			<input
				type="number"
				id="size"
				name="size"
				// value={newBikeSize}
				// formData is useState list
				value={formData.size}
				onChange={handleChange}
			></input>
			<br></br>

			<label htmlFor="name"> Name</label>
			<input
				type="text"
				id="name"
				name="name"
				value={formData.name}
				onChange={handleChange}
			></input>
			<br></br>

			<label htmlFor="type">Type</label>
			<input
				type="text"
				id="type"
				name="type"
				value={formData.type}
				onChange={handleChange}
			></input>
			<br></br>

			<label htmlFor="price"> Price</label>
			<input
				type="number"
				id="price"
				name="price"
				value={formData.price}
				onChange={handleChange}
			></input>
			<br></br>

			<input type="submit" value="Add bike"></input>
		</form>
	);
};

NewBikeForm.propTypes = {
	addBikeCallbackFunc: PropTypes.func,
	// functions need isRequired?
};

export default NewBikeForm;

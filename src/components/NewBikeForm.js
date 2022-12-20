// import React from "react";
// don't need to import React in newer version
import { useState } from "react";

import "./NewBikeForm.css";

// one object to hold all data needed
const INITIAL_FORM_DATA = {
	size: 0,
	type: "",
	price: 0,
	name: "",
};

const NewBikeForm = () => {
	// State below only holds info about size
	// const [newBikeSize, setNewBikeSize] = useState(100);

	// Create a state that holds all info about bike
	const [formData, setFormData] = useState(INITIAL_FORM_DATA);

	// 'e' stands for event
	const handleChange = (e) => {
		console.log("Handle change called");
		console.log(
			`Target name: ${e.target.name}. Target value: ${e.target.value}`
		);
		// setNewBikeSize(e.target.value);

		// create JS object
		const newFormData = {
			// makes copy of form data
			...formData,
			// also updates new value
			// key info is in target.name
			[e.target.name]: e.target.value,
		};

		// update state with useState function
		setFormData(newFormData);
	};

	return (
		<form>
			<br></br>
			<label htmlFor="size"> Size</label>
			<input
				type="number"
				id="size"
				name="size"
				// value={newBikeSize}
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
		</form>
	);
};

export default NewBikeForm;

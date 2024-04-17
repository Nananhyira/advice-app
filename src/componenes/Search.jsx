import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [data, setData] = useState([]);
	const [v, setV] = useState(data);

	useEffect(() => {
		axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
			setData(response.data);
			setV(response.data);
		});
	}, []);
	const handleChange = (e) => {
		const val = e.target.value;
		setV(data.filter((i) => i.name.includes(val)));
	};

	return (
		<div>
			<h1>Search</h1>
			<input type='text' onChange={handleChange} placeholder='search' />
			<h1>{v}</h1>
			{v.map((item, index) => {
				return (
					<div key={index}>
						<h1>{item.name}</h1>
						<h3></h3>
					</div>
				);
			})}
		</div>
	);
};

export default Search;

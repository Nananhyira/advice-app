import { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
	const [data, setData] = useState([]);
	const [v, setV] = useState([]);

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
		<div className="p-5 bg-light border shadow">
      <div className="bg-white ">
			<input type='text' onChange={handleChange} className="form-control" placeholder='search' />
			<table className="table bg-primary">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>PHONE</th>
          </tr>
        </thead>
        <tbody>
      {v.map((item, index) => {
				return (
					<tr key={index}>
						<td>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
					</tr>
				);
			})}
        </tbody>
        
      </table>
			

      </div>
			
		</div>
	);
};

export default Search;

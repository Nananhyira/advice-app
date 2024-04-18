import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Memory = () => {
	const [grid, setGrid] = useState([
		[0, 3, 5, 1],
		[1, 2, 2, 4],
		[4, 3, 5, 0],
	]);

	return (
		<div className="container">
			{grid.map((row, rowIndex) => {
				return (
					<div key={rowIndex} className='row'>
						{row.map((col, colIndex) => {
							return (
								<div className='col-3' style={{ padding: "5px" }} key={colIndex} >
									<Card style={{ width: "15rem", padding: "5px" }}>
										<Card.Img variant='top' src='holder.js/100px180' />
										<Card.Body>
											<Card.Title>{col}</Card.Title>
										</Card.Body>
									</Card>
								</div>
							);
						})}
					</div>
				);
			})}
			<div>Memory</div>
		</div>
	);
};

export default Memory;

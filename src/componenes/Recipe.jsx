import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";

const apiKey = import.meta.env.VITE_MY_API_KEY;



const Recipe = () => {
	const [recipe, setRecipe] = useState({});
  //  const fetchData = async () => {
	// 		try {
	// 			const data = await fetch(options.url, options.headers);
	// 			 const res = await data.json();
	// 			setRecipe(res);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	};
	useEffect(() => {
    // fetchData()
		fetch(
			`https://api.spoonacular.com/recipes/random?number=100&apiKey=${apiKey}`
		)
			.then((res) => res.json())
			.then((result) => setRecipe(result));
	}, []);


	console.log(recipe);
	return (
		<div className='container m-5 j'>
			<div className='row'>
				<div className='col-3  justify-content-center'>
					{/* {recipe.map((item, index) => {
						return (
							<Card
								key={index}
								className='justify-content-center'
								style={{
									width: "25rem",
									height: "20rem",
									backgroundColor: "red",
								}}>
								<Card.Body>
									<Card.Title
										className='text-center'
										style={{ color: "white", fontSize: "20px" }}>
										Advice Number:
									</Card.Title>
									<Card.Text
										className='text-center'
										style={{ color: "white", fontSize: "30px" }}></Card.Text>
								</Card.Body>
							</Card>
						);
					})} */}
				</div>
			</div>
		</div>
	);
};

export default Recipe;

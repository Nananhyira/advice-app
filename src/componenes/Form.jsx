import { useState } from "react";
import { Row, Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Form = () => {
	const [users, setUsers] = useState([{ name: "ama", email: "ama@@gmail.com" }]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let user = { name: name, email: email };
		setUsers(
			[...users,user]
		);
		// console.log(users);
		setName("");
		setEmail("");
	};

	return (
		<div className='container m-5 j'>
			<div className='row'>
				<div className='col-md-12  justify-content-center'>
					<h1>Register form</h1>
					<form onSubmit={handleSubmit}>
						<input
							type='text'
							placeholder='name'
							value={name}
							onChange={(e) => {
								setName(e.target.value);
							}}
						/>
						<input
							type='text'
							placeholder='email'
							value={email}
							onChange={(e) => {
								setEmail(e.target.value);
							}}
						/>
						<Button type='submit' variant='primary'>
							submit
						</Button>
					</form>
				</div>
				<div className='col-md-6'>
					<Row> 
						{users.map((item,index)=>{
							return(
								<div key={index} className='col-md-4 ml-3'>
							<Card  style={{ width: "15rem" }}>
								<Card.Body>
									<Card.Title>user details</Card.Title>
									<Card.Subtitle className='mb-2 text-muted'>
										Name:{item.name}
									</Card.Subtitle>
									<Card.Text>Email:{item.email}</Card.Text>
									<Button variant='primary'>edit</Button>
									<Button variant='danger'>delete</Button>
								</Card.Body>
							</Card>
						</div>
							)
							})}
						
					</Row>
				</div>
			</div>
		</div>
	);
};

export default Form;

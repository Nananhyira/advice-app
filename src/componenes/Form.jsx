import { useState } from "react";
import { Row, Card, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { v4 as uuidv4 } from "uuid";
import Edit from "./Edit";

const Form = () => {
	const [users, setUsers] = useState([{id:uuidv4(), name: "ama", email: "ama@@gmail.com" }]);
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let user = { id:uuidv4(), name: name, email: email };
		setUsers(
			[...users,user]
		);
	console.log(users);
		setName("");
		setEmail("");
	};
const handleDelete = (id) => {
	setUsers(users.filter(user=>id!==user.id))

}
const handleEdit = (id,newData) => {
	setUsers(users.map((item)=>{
		if(item.id==id){
			[...users, newData]

		}
	}))


}
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
				</div>
				<hr/>
				<div className='col-md-12'>
					<Row> 
						{users.map((item,index)=>{
							return (
								<div key={index} className='col-md-4'>
									<Col className="col-md-12">
										<Card style={{ width: "18rem", padding: "5px" }}>
											<Card.Body>
												<Card.Title>user details</Card.Title>
												<Card.Subtitle className='mb-2 text-muted'>
													Name:{item.name}
												</Card.Subtitle>
												<Card.Text>Email:{item.email}</Card.Text>
												<Edit users={users} f={handleEdit}/>
												<Button onClick={()=>handleDelete(item.id)} variant='danger'>delete</Button>
											</Card.Body>
										</Card>
									</Col>
								</div>
							);
							})}
						
					</Row>
				</div>
			</div>
		
	);
};

export default Form;



import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { v4 as uuidv4 } from "uuid";


function Edit({users, handleEdit}) {

	const [show, setShow] = useState(false);
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		let user = { id: uuidv4(), name: name, email: email };
		setUsers([...users, user]);
		console.log(users);
		setName("");
		setEmail("");
	};

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant='primary' onClick={handleShow}>
				edit
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Modal heading</Modal.Title>
				</Modal.Header>
				<Modal.Body>
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
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleClose}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Edit;

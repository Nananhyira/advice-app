import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";



function Edit({users, f}) {
  console.log(users);

	const [show, setShow] = useState(false);
  const [name, setName] = useState(users.name);
	const [email, setEmail] = useState(users.email);

	const handleSubmit = (e) => {
		e.preventDefault();
		let user = { id:users.id, name, email };
		f(users.id, user)
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
					<form >
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
					</form>
				</Modal.Body>
				<Modal.Footer>
					<Button variant='secondary' onClick={handleClose}>
						Close
					</Button>
					<Button variant='primary' onClick={handleSubmit}>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
}

export default Edit;

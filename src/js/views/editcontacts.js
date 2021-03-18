import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const EditContacts = props => {
	let short = store.contacts[props.match.params.index];
	let id = props.match.params.id;
	const { store, actions } = useContext(Context);
	const [phone, setPhone] = useState(short.phone);
	const [name, setName] = useState(short.full_name);
	const [email, setEmail] = useState(short.email);
	const [address, setAddress] = useState(short.address);
	console.log("try", store.contacts);

	return (
		<div className="container">
			<div>
				<h1 className="text-center mt-5">Edit contact</h1>
				<form>
					<div className="form-group">
						<label>Full Name</label>
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							defaultValue={store.conacts[PropTypes.name.params.index].full_name}
							onChange={e => setName(e.target.value)}
						/>
					</div>
					<div className="form-group">
						<label>Email</label>
						<input type="email" className="form-control" placeholder="Enter email" />
					</div>
					<div className="form-group">
						<label>Phone</label>
						<input type="phone" className="form-control" placeholder="Enter phone" />
					</div>
					<div className="form-group">
						<label>Address</label>
						<input type="text" className="form-control" placeholder="Enter address" />
					</div>
					<Link to={"/"}>
						<button
							type="button"
							className="btn btn-primary form-control"
							onClick={() => {
								actions.editContacts(props.match.params.id, name, phone, email, address);
							}}>
							{" "}
							save
						</button>
					</Link>
					<Link className="mt-3 w-100 text-center" to="/">
						or get back to contacts
					</Link>
				</form>
			</div>
		</div>
	);
};
export default EditContacts;

EditContacts.propTypes = {
	match: PropTypes.objects,
	history: PropTypes.object,
	onDelete: PropTypes.func
};

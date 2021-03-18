import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const { store } = useContext(Context);
	console.log("store", store);
	return (
		<div className="container">
			<div>
				<p className="text-right my-3">
					<Link className="btn btn-success" to="/add">
						Add new contact
					</Link>
				</p>
			</div>
			<div id="contacts" className="panel-collapse collapse show" aria-expanded="true">
				<ul className="list-group pull-down" id="contact-list">
					{store.contacts &&
						store.contacts.map((item, index) => {
							return <ContactCard key={index} item={item} index={index} />;
						})}
				</ul>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

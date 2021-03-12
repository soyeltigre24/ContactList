import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { ContactCard } from "../component/ContactCard.js";
import { Modal } from "../component/Modal";

export const Contacts = () => {
	const [state, setState] = useState({
		showModal: false
	});
	const [store, setStore] = useState(["agenda"]);

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
					{store.agenda &&
						store.agenda.map((item, index) => {
							return (
								<ContactCard key={index} name={item} onDelete={() => setState({ showModal: true })} />
							);
						})}
				</ul>
			</div>
			<Modal show={state.showModal} onClose={() => setState({ showModal: false })} />
		</div>
	);
};

import { AddContact } from "../views/AddContact";
import editContacts from "../views/editcontacts";
import PropTypes from "prop-types";
const getState = ({ getStore, setStore }) => {
	const url = "https://assets.breatheco.de/apis/fake/contact/";
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch(url + "agenda/Jairo")
					.then(response => response.json())
					.then(contacts => {
						console.log(contacts);
						setStore({ contacts: contacts });
					});
			},
			addContact(name, phone, email, address) {
				fetch(url, {
					method: "post",
					headers: { "Content-type": "application/json" },
					body: JSON.stringify({
						full_name: name,
						phone: phone,
						address: address,
						email: email,
						agenda_slug: "Jairo"
					})
				}).then(() => {
					fetch(url + "agenda/Jairo")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			},
			editContacts(id, name, phone, email, address) {
				let store = getStore();
				let body = {
					full_name: name,
					phone: phone,
					address: address,
					email: email,
					agenda_slug: "Jairo"
				};
				fetch(url + id, {
					method: "PUT",
					body: JSON.stringify(body),
					headers: { "Content-Type": "application/json" }
				})
					.then(response => response.json())
					.then(result => {
						console.log("result:", result);
						let newContacts = store.contacts.map(c => (c.id === id ? result : c));
						setStore({
							contacts: newContacts
						});
					})
					.catch(e => console.error(e));
			},
			deleteContact(id) {
				fetch(url + id, {
					method: "Delete"
				}).then(() => {
					fetch(url + "agenda/Jairo")
						.then(response => response.json())
						.then(result => {
							console.log("delete", result),
								setStore({
									contacts: result
								});
						})
						.catch(e => console.error(e));
				});
			}
		}
	};
};
export default getState;

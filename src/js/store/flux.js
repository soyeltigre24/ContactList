import { AddContact } from "../views/AddContact";
import editContact from "../views/editcontacts";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			getContacts: () => {
				fetch("https://assets.breatheco.de/apis/fake/contact/agenda/Jairo")
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
									contacts: results
								});
						})
						.catch(e => console.error(e));
				});
			},
			editContact(id, name, phone, email, address) {
				fetch(url + id, {
					method: "put",
					headers: { "Content-type": "applications/json" },
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
			deleteContact(id) {
				fetch(url + id, {
					method: "delete"
				}).then(() => {
					fetch(url + "https://assets.breatheco.de/apis/fake/contact/agenda/Jairo")
						.then(response => response.json())
						.then(result => {
							console.log("result", result),
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

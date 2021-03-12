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
			}
		}
	};
};

export default getState;

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: [],
			API_URL: "https://www.swapi.tech/api",
		},

		actions: {
			getCharacters: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.API_URL}/people`)
					if (response.ok) {
						const data = await response.json()
						console.log(data.results)
						data.results.forEach(async (element) => {
							let responseElement = await fetch(`${store.API_URL}/people/${element.uid}`)
							let dataItem = await responseElement.json()
							
							setStore({characters: [...store.characters , dataItem.result ]  })
						});
					}
				} catch (error) {
					console.log(error)
				}
			},
			getPlanets: async () => {
				const store = getStore()
				try {
					const response = await fetch(`${store.API_URL}/planets`)
					if (response.ok) {
						const data = await response.json()
						console.log(data.results)
						data.results.forEach(async (element) => {
							let responseElement = await fetch(`${store.API_URL}/planets/${element.uid}`)
							let dataItem = await responseElement.json()
							
							setStore({planets: [...store.planets , dataItem.result ]  })
						});
					}
				} catch (error) {
					console.log(error)
				}

			},
			addFavorites: (name) => {
				const store = getStore();
				const favorites = [...store.favorites, name];
				setStore({favorites});
			},
			deleteFavorites: (index) => {
				const store = getStore();
				const updateFavorites = store.favorites.filter((_, filterIndex) => filterIndex !== index);
				setStore({ favorites: updateFavorites});
			},
		}
	};
};

export default getState;

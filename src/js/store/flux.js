const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
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
							console.log(dataItem)
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
							console.log(dataItem)
							setStore({planets: [...store.planets , dataItem.result ]  })
						});
					}
				} catch (error) {
					console.log(error)
				}

			},
		}
	};
};

export default getState;

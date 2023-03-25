class MarvelService {
	_apiBase = 'https://gateway.marvel.com:443/v1/public/';
	_apiKey = 'fb8e8ca0d2845749458860402c4c214c';

	getRecource = async (url) => {
		let res = await fetch(url);

		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`);
		}

		return await res.json();
	};

	getAllCharacters = () => {
		return this.getRecource(
			`${this._apiBase}characters?limit=9&offset=210&apikey=${this._apiKey}`
		);
	};

	getCharacter = (id) => {
		return this.getRecource(
			`${this._apiBase}characters/${id}?apikey=${this._apiKey}`
		);
	};
}

export default MarvelService;

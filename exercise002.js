import fetch from 'node-fetch';

const jsonTypicode = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchData = async (apiEndPoint) => {
	try {
		const response = await fetch(apiEndPoint);
		return await response.json();
	} catch (error) {
		return error;
	}
};

console.log(await fetchData(jsonTypicode));

const totallyLegitTechPhrases = 'https://techy-api.vercel.app/api/json';

const response = await fetchData(totallyLegitTechPhrases);
console.log(`\nTrust me, I'm an engineer. ${response.message}`);

const catInfoService = 'https://cat-fact.herokuapp.com/facts';

const catResponse = await fetchData(catInfoService);
const catFact = catResponse[Math.floor(Math.random() * catResponse.length)];

console.log(`\nToday's Cat Fact: ${catFact.text}`);

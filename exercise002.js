import fetch from 'node-fetch';

const jsonTypicode = 'https://jsonplaceholder.typicode.com/todos/1';

const fetchData = async (apiEndPoint) => {
	try {
		const response = await fetch(apiEndPoint);
    console.log(await response.json());    
	} catch (error) {
		console.log(error);
	}
};

fetchData(jsonTypicode);

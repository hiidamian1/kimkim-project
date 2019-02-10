import axios from 'axios';

const url = '/api/days';

class dayService {
	// Get single day
	static getDay(id) {
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(`${url}/${id}/viewOne`);
				const data = res.data;
				resolve(data);
			} catch(err) {
				reject(err);
			}
		})
	}

	// Get days
	static getDays(tripId) {
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(`${url}/${tripId}/viewAll`);
				const data = res.data;
				resolve(data);
			} catch(err) {
				reject(err);
			}
		})
	}
	
	// Create day
	static addDay(tripId, title, description) {
		return axios.post(`${url}/new`, {
			tripId,
			title,
			description
		});
	}

	// Delete day
	static deleteDay(id) {
		return axios.delete(`${url}/${id}/delete`);
	}

	// Edit day
	static editDay(id, title, description) {
		return axios.post(`${url}/${id}/edit`, {
			title, 
			description
		});
	}
}

export default dayService;
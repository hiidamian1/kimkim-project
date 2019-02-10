import axios from 'axios';

const url = '/api/tripPlans';

class tripPlanService {
	// Get single trip plan
	static getTripPlan(id) {
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(`${url}/viewOne/${id}`);
				const data = res.data;
				resolve(data);
			} catch(err) {
				reject(err);
			}
		})
	}

	// Get trip plans
	static getTripPlans() {
		return new Promise(async (resolve, reject) =>{
			try {
				const res = await axios.get(`${url}/viewAll`);
				const data = res.data;
				resolve(data);
			} catch(err) {
				reject(err);
			}
		})
	}
	
	// Create trip plan 
	static addTripPlan(title, summary) {
		return axios.post(`${url}/new`, {
			title,
			summary
		});
	}

	// Delete trip plan
	static deleteTripPlan(id) {
		return axios.delete(`${url}/${id}/delete`);
	}

	// Edit trip plan
	static editTripPlan(id, title, summary, days) {
		return axios.post(`${url}/${id}/edit`, {
			title, 
			summary,
			days
		});
	}
}

export default tripPlanService;
import axios from 'axios'
import md5 from 'md5'

const apiURL = 'http://api.valantis.store:40000'
const password = 'Valantis'
const timestamp = new Date().toISOString().slice(0, 10).split('-').join('')
const fullPassword = `${password}_${timestamp}`
const authString = md5(fullPassword).toString()

export const getItem = async id => {
	try {
		const response = await axios({
			method: 'post',
			url: apiURL,
			headers: {
				'Content-Type': 'application/json',
				'X-Auth': authString,
			},
			data: JSON.stringify({
				action: 'get_items',
				params: {
					ids: id,
				},
			}),
		})
		const table = {}
		const uniquerArr = response.data.result.filter(
			({ id }) => !table[id] && (table[id] = 1)
		)
		return uniquerArr
	} catch (error) {
		console.error(
			`Error: ${error.request.status} - ${error.request.responseText}`
		)
	}
}

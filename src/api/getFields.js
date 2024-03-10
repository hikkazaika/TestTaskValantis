import axios from 'axios'
import md5 from 'md5'

const apiURL = 'http://api.valantis.store:40000'
const password = 'Valantis'
const timestamp = new Date().toISOString().slice(0, 10).split('-').join('')
const fullPassword = `${password}_${timestamp}`
const authString = md5(fullPassword).toString()

export const getFields = async () => {
	try {
		const response = await axios({
			method: 'post',
			url: apiURL,
			headers: {
				'Content-Type': 'application/json',
				'X-Auth': authString,
			},
			data: JSON.stringify({
				action: 'get_fields',
				params: { field: 'brand', offset: 0 },
			}),
		})
		const uniquerArr = response.data.result.reduce((acc, curr) => {
			if (!acc.includes(curr)) {
				acc.push(curr)
			}
			return acc
		}, [])
		return uniquerArr
	} catch (error) {
		console.error(`Error: ${error.request.status} - ${error.request.Text}`)
	}
}

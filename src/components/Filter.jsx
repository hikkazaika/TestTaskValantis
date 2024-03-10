/* eslint-disable react/prop-types */
import { useState } from 'react'
import styles from '../app.module.css'

const Filter = ({ brand, setSelectedFilter, setFilter }) => {
	const [inputOne, setInputOne] = useState('')
	const [inputTwo, setInputTwo] = useState('')
	return (
		<div className={styles.filter}>
			<select onChange={e => setSelectedFilter(e.target.value)}>
				{brand.map(el => {
					return (
						<option key={el} value={el}>
							{el}
						</option>
					)
				})}
			</select>
			<div>
				<input
					placeholder='Price'
					type='numeric'
					value={inputOne}
					onChange={e => {
						setInputOne(parseInt(e.target.value))
						setFilter('price')
					}}
				/>
				<button
					type='submit'
					value='Search'
					onClick={() => setSelectedFilter(inputOne)}
				>
					Search
				</button>
			</div>
			<div>
				<input
					placeholder='Product'
					type='numeric'
					value={inputTwo}
					onChange={e => {
						setInputTwo(e.target.value)
						setFilter('product')
					}}
				/>
				<button type='submit' onClick={() => setSelectedFilter(inputTwo)}>
					Search
				</button>
			</div>
		</div>
	)
}

export default Filter

/* eslint-disable react/prop-types */
import styles from '../app.module.css'

const ItemCard = ({ item }) => {
	return (
		<div className={styles.card}>
			<h3>{item.product}</h3>
			<p>{item.brand != null ? `Бренд: ${item.brand}` : 'Бренд: '}</p>
			<strong>Цена: {item.price}</strong>
			<br />
			<small>ID: {item.id}</small>
		</div>
	)
}

export default ItemCard

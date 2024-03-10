/* eslint-disable react/prop-types */
import styles from '../app.module.css'
import ItemCard from './ItemCard'

const Catalog = ({ itemsList }) => {
	return (
		<div className={styles.catalog}>
			{itemsList.map(el => {
				return <ItemCard key={el} item={el} />
			})}
		</div>
	)
}

export default Catalog

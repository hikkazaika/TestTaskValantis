/* eslint-disable react/prop-types */
import styles from '../app.module.css'

const Skeleton = () => {
	return (
		<>
			<div className={styles.item}>
				<h4>Loading...</h4>
			</div>
		</>
	)
}

export default Skeleton

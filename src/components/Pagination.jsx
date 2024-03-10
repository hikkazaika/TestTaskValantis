/* eslint-disable react/prop-types */
import styles from '../app.module.css'

const Pagination = ({
	totalPages,
	currentPage,
	handlePreviousPage,
	handlePageClick,
	handleNextPage,
	lastPage,
}) => {
	return (
		<div className={styles.pagination}>
			<button onClick={handlePreviousPage} disabled={currentPage <= 1}>
				{'<'}
			</button>
			<div className={styles.pagList}>
				{[...Array(totalPages - 1)].map((_, index) => {
					return (
						<button
							onClick={() => handlePageClick(index + 1)}
							disabled={index + 1 == currentPage}
							key={index}
						>
							{index + 1}
						</button>
					)
				})}
			</div>
			<button onClick={() => handlePageClick(lastPage)}>{lastPage}</button>
			<button onClick={handleNextPage}>{'>'}</button>
		</div>
	)
}

export default Pagination

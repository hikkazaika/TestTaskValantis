/* eslint-disable no-mixed-spaces-and-tabs */
import { useEffect, useState } from 'react'
import { getField, getFilterId, getId } from '../api/getID.js'
import { getItem } from '../api/getItems.js'
import Catalog from '../components/Catalog.jsx'
import Filter from '../components/Filter.jsx'
import Pagination from '../components/Pagination.jsx'
import Skeleton from '../components/Skeleton.jsx'

const Main = () => {
	const [items, setItems] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const [filter, setFilter] = useState('brand')
	const [brand, setBrand] = useState([])
	const [selectedFilter, setSelectedFilter] = useState()
	const totalPages = 10
	const [lastPage, setLastPage] = useState(10)

	const fetchId = async currentPage => {
		try {
			setIsLoading(true)
			getFilterId
			const response =
				selectedFilter != 'All' && selectedFilter != null
					? await getFilterId(
							filter,
							Number.isInteger(selectedFilter)
								? parseInt(selectedFilter)
								: selectedFilter
					  )
					: await getId(currentPage, brand)
			const res = await getItem(response)
			setItems(res)
			console.warn(
				'К сожалению не успел реализовать работу пагинации с фильтрами. Ночи нынче коротки, да и в целом это чудо на костылях держится, - страшно самому смотреть!'
			)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	const fetchBrand = async () => {
		try {
			const response = await getField()
			setBrand(['All', ...response])
		} catch (error) {
			console.log(error)
		}
	}
	console.log(selectedFilter)
	useEffect(() => {
		fetchBrand()
	}, [])
	useEffect(() => {
		fetchId(currentPage)
	}, [currentPage, selectedFilter])

	// Пагинация конечно бесконечная, но вот и без
	//ограничений оставлять тоже так себе.
	// P.s. Ничего лучше под утро придти не могло ._.
	const handleNextPage = () => {
		setCurrentPage(currentPage + 1)
		setLastPage(currentPage + 1)
	}

	const handlePreviousPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1)
			setLastPage(totalPages)
		}
	}

	const handlePageClick = pageNumber => {
		setCurrentPage(pageNumber)
		setLastPage(totalPages)
	}
	return (
		<>
			<Filter
				brand={brand}
				setSelectedFilter={setSelectedFilter}
				setFilter={setFilter}
			/>
			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={totalPages}
				lastPage={lastPage}
			/>
			{items.length > 0 && !isLoading ? (
				<Catalog itemsList={items} />
			) : (
				<Skeleton />
			)}
			<Pagination
				handleNextPage={handleNextPage}
				handlePreviousPage={handlePreviousPage}
				handlePageClick={handlePageClick}
				currentPage={currentPage}
				totalPages={totalPages}
			/>
		</>
	)
}

export default Main

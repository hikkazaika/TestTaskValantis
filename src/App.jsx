import Main from './pages/main.jsx'

function App() {
	// const [items, setItems] = useState([])
	// const [currentPage, setCurrentPage] = useState([1])
	// const totalPages = 10

	// const fetchId = async currentPage => {
	// 	try {
	// 		const response = await getId(currentPage)
	// 		const res = await getItem(response)
	// 		setItems(res)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }

	// useEffect(() => {
	// 	fetchId(currentPage)
	// }, [currentPage])

	// const handleNextPage = () => {
	// 	if (currentPage < totalPages) {
	// 		setCurrentPage(currentPage + 1)
	// 	}
	// }

	// const handlePreviousPage = () => {
	// 	if (currentPage > 1) {
	// 		setCurrentPage(currentPage - 1)
	// 	}
	// }

	// const handlePageClick = pageNumber => {
	// 	setCurrentPage(pageNumber)
	// }

	// console.log(items)
	// console.log(currentPage < totalPages)
	return (
		<>
			<h1>Test task VALANTIS</h1>
			<Main />
		</>
	)
}

export default App

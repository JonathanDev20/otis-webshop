// Import React
import React, { useEffect } from 'react'

/**
 * A component to be able to filter products.
 * 
 * @param {Object} - State properties.
 * @returns - A sorting functionality for products.
 */
const Sorting = ({sort, setSort, filteredProducts, setFilteredProducts, responseData}) => {
  useEffect(() => {
		sortProducts()
	}, [sort, responseData])

  const sortProducts = async () => {
		if (sort === 'priceUp') {
			setFilteredProducts(
				[...filteredProducts].sort((a, b) => (a.price > b.price ? 1 : -1))
			)
		} else if (sort === 'priceDown') {
			setFilteredProducts(
				[...filteredProducts].sort((a, b) => (b.price > a.price ? 1 : -1))
			)
		} else if (sort === 'alphabetic') {
			setFilteredProducts(
				[...filteredProducts].sort((a, b) => (a.title > b.title ? 1 : -1))
			)
		} else {
			setFilteredProducts(responseData)
		}
	}
	return (
		<div className="sortingProducts">
			<select onChange={(e) => setSort(e.target.value)}>
				<option value="default">Sortera produkter</option>
				<option value="priceUp">Pris stigande</option>
				<option value="priceDown">Pris fallande</option>
				<option value="alphabetic">A-Ö</option>
			</select>
		</div>
	)
}

export default Sorting

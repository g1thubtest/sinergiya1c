import React from 'react'
import Product from './Product'

interface Item {
	id: number
	img: string
	title: string
	price: number
	description: string
	category: string
}

interface ProductsProps {
	items: Item[]
}

const Products: React.FC<ProductsProps> = ({ items }) => {
	return (
		<div className='mt-10'>
			<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-6'>
				{items.map(item => (
					<Product key={item.id} item={item} />
				))}
			</div>
		</div>
	)
}

export default Products

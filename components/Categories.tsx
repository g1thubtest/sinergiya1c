import React from 'react'

interface Category {
	key: string
	name: string
	img: string
}

const Categories: React.FC = () => {
	const categories: Category[] = [
		{
			key: 'buh',
			name: 'Бухгалтерский учет',
			img: '/assets/бухгалтерский учет.png',
		},
		{
			key: 'zp',
			name: 'Кадровый учет',
			img: '/assets/расчет зп.png',
		},
		{
			key: 'upr',
			name: 'Управленческий учет',
			img: '/assets/уп учет.png',
		},
		{
			key: 'serv',
			name: 'Сервисы 1С',
			img: '/assets/сервисы.png',
		},
		{
			key: 'kr',
			name: 'Комплексные решения',
			img: '/assets/kr.png',
		},
		{
			key: 'fresh',
			name: '1С:Фреш',
			img: '/assets/облоко.png',
		},
		{
			key: 'med',
			name: 'Решения для медицины',
			img: '/assets/мед.png',
		},
	]

	return (
		<div className='mt-5 flex  justify-center'>
			<div className='flex flex-col items-center'>
				<div className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-5 mt-2'>
					{categories.map(category => (
						<div
							key={category.key}
							className='flex flex-col items-center bg-slate-50 gap-2 p-4 rounded-lg group cursor-pointer hover:bg-slate-200 '
						>
							<img
								src={category.img}
								alt='categories'
								width={80}
								height={80}
								className='group-hover:scale-110 translate-all ease-in-out'
							/>
							<h2 className='hidden md:block text-center'>{category.name}</h2>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default Categories

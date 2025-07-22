import React from 'react';

const ProductListFilter = () => {
	const [selectedSort, setSelectedSort] = React.useState('Liên quan');
	const [isAscending, setIsAscending] = React.useState(true);

	const toggleSort = () => {
		setIsAscending((prev) => !prev);
	};

	const sortOptions = ['Liên quan', 'Bán chạy', 'Mới nhất', 'Nổi bật'];

	const handleSortClick = (option: string) => {
		setSelectedSort(option);
	};

	return (
		<div className="flex flex-wrap items-center justify-between gap-2 text-sm">
			<h2 className="font-semibold text-xl mr-2">Danh sách sản phẩm</h2>
			<div className="flex gap-2 items-center text-base">
				<span className="text-gray-600">Sắp xếp theo</span>
				{/* Sort Buttons */}
				{sortOptions.map((option) => (
					<button
						key={option}
						onClick={() => handleSortClick(option)}
						className={`relative px-4 py-2 border rounded-lg transition-colors
    					${selectedSort === option ? 'font-bold text-blue-600 border-blue-500' : 'text-gray-600 border-gray-300'}
    					`}
					>
						{option}
						{selectedSort === option && (
							<span className="absolute top-0 right-0 w-8 h-8 rounded overflow-hidden">
								<span className="block w-full h-full rotate-45 translate-x-[50%] translate-y-[-50%] bg-blue-600"></span>
								<img src="/icons/Unread.svg" alt="tick" className="absolute top-0 right-0 w-3 h-3" />
							</span>
						)}
					</button>
				))}
				{/* Price Sort */}
				<button
					onClick={toggleSort}
					className="flex items-center px-3 py-2 text-sm text-gray-700 hover:text-black transition group"
				>
					Giá:&nbsp;
					{isAscending ? 'Thấp → Cao' : 'Cao → Thấp'}
					<img
						src="/icons/down_black.svg"
						className={`ml-2 w-5 h-5 transform transition-transform duration-300 ${
							isAscending ? 'rotate-[360deg]' : 'rotate-180'
						}`}
						alt="chevron"
					/>
				</button>
			</div>
		</div>
	);
};

export default ProductListFilter;

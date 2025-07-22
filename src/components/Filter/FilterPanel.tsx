import React, { useState } from 'react';
import { filterData } from '../../mock/filterData';
import Section from './Section';

const FilterPanel = () => {
	const [selectedFilters, setSelectedFilters] = React.useState({
		category: [] as string[],
		price: [] as string[],
		brand: [] as string[],
		year: [] as string[],
		origin: [] as string[],
	});

	React.useEffect(() => {
		// Gọi API ở đây với selectedFilters
		console.log('Gọi API với:', selectedFilters);
		// callApi(selectedFilters);
	}, [selectedFilters]);

	const handleCheckboxChange = (group: keyof typeof selectedFilters, value: string) => {
		setSelectedFilters((prev) => {
			const groupValues = prev[group];
			const isSelected = groupValues.includes(value);
			const newValues = isSelected ? groupValues.filter((v) => v !== value) : [...groupValues, value];

			return { ...prev, [group]: newValues };
		});
	};

	const [openSections, setOpenSections] = React.useState({
		category: true,
		price: true,
		brand: true,
		year: true,
		origin: true,
	});
	const toggleSection = (key: keyof typeof openSections) => {
		setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
	};
	return (
		<div className="w-[20vw] p-4 bg-white rounded-lg shadow-sm flex flex-col gap-4 text-[0.875rem]">
			<div className="flex gap-2 items-center">
				<img src="/icons/end icon.svg" className="w-8 h-8" />
				<h2 className="text-blue-600 font-bold text-2xl flex items-center gap-2">Bộ Lọc</h2>
			</div>

			{/* Section: Danh mục sản phẩm */}
			<Section title="Danh mục sản phẩm" open={openSections.category} onToggle={() => toggleSection('category')}>
				{filterData.categories.map((label, idx) => (
					<label key={idx} className="flex items-center gap-4 mt-1">
						<input
							type="checkbox"
							checked={selectedFilters.category.includes(label)}
							onChange={() => handleCheckboxChange('category', label)}
							className="accent-blue-600"
						/>
						<span className="leading-5">
							{label} <span className="text-gray-400">(24)</span>
						</span>
					</label>
				))}
			</Section>

			{/* Section: Khoảng giá */}
			<Section title="Khoảng giá" open={openSections.price} onToggle={() => toggleSection('price')}>
				{filterData.prices.map((price, idx) => {
					const isChecked = selectedFilters.price.includes(price);
					return (
						<label
							key={idx}
							className={`block mt-1 p-2 border rounded text-center cursor-pointer transition 
        ${isChecked ? 'bg-blue-100 border-blue-500 text-blue-600' : 'border-gray-100 hover:bg-gray-100'}`}
						>
							<input
								type="checkbox"
								className="hidden"
								checked={isChecked}
								onChange={() => handleCheckboxChange('price', price)}
							/>
							{price}
						</label>
					);
				})}
			</Section>
			{/* Section: Thương hiệu */}
			<Section title="Thương hiệu" open={openSections.brand} onToggle={() => toggleSection('brand')}>
				{filterData.brands.map((brand, idx) => (
					<label key={idx} className="flex items-center gap-4 mt-1">
						<input
							type="checkbox"
							className="accent-blue-600"
							checked={selectedFilters.brand.includes(brand)}
							onChange={() => handleCheckboxChange('brand', brand)}
						/>
						<span>
							{brand} <span className="text-gray-400">(24)</span>
						</span>
					</label>
				))}
			</Section>

			{/* Section: Năm sản xuất */}
			<Section title="Năm sản xuất" open={openSections.year} onToggle={() => toggleSection('year')}>
				{filterData.years.map((year, idx) => (
					<label key={idx} className="flex items-center gap-4 mt-1">
						<input
							type="checkbox"
							className="accent-blue-600"
							checked={selectedFilters.year.includes(year)}
							onChange={() => handleCheckboxChange('year', year)}
						/>
						<span>
							{year} <span className="text-gray-400">(24)</span>
						</span>
					</label>
				))}
			</Section>

			{/* Section: Xuất xứ */}
			<Section title="Xuất xứ" open={openSections.origin} onToggle={() => toggleSection('origin')}>
				{filterData.origins.map((origin, idx) => (
					<label key={idx} className="flex items-center gap-4 mt-1">
						<input type="checkbox" className="accent-blue-600" />
						<span>
							{origin} <span className="text-gray-400">(24)</span>
						</span>
					</label>
				))}
			</Section>
		</div>
	);
};

export default FilterPanel;

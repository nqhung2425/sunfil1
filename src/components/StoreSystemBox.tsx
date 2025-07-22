export default function StoreSystemBox() {
	return (
		<div className="m-auto w-[90%] 2xl:w-[75%] flex-1 flex flex-col text-ssm bg-transparent">
			<div className="relative flex justify-between items-center px-6 py-4 w-full mx-auto z-20 bg-transparent ">
				<div className="flex items-center gap-3">
					<div className="text-[#1a73e8] text-xl">
						<img src="/icons/map_end icon.svg" alt="map_end" className="w-12 h-12" />
					</div>
					<p className="text-3xl font-medium text-gray-800">Xem hệ thống 88 cửa hàng trên toàn quốc</p>
				</div>

				<button className="relative px-6 py-3 bg-white rounded-full shadow-sm flex items-center gap-1">
					<span className="text-2xl">Xem ngay</span>
					<img src="/icons/arrow_end icon.svg" alt="arrow_end icon" className="w-12 h-12" />
				</button>
			</div>
		</div>
	);
}

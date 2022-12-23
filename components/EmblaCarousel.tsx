import useEmblaCarousel from "embla-carousel-react";

export function EmblaCarousel({ slides }: { slides: number[] }) {
	const [emblaRef] = useEmblaCarousel({
		align: "start",
		containScroll: "trimSnaps",
	});
	console.log(slides);

	return (
		<div
			ref={emblaRef}
			className="mt-20 border-2 border-green-500  w-[505px] h-52 flex items-center overflow-hidden"
		>
			<div className="flex border-red-700 border-2 items-center ">
				{slides.map((slide, index) => (
					<div
						className={`w-[100px] h-[100px] ${
							index === 0
								? "ml-[50px]"
								: index === slides.length - 1
								? "mr-[50px]"
								: null
						} m-[25px] shrink-0 bg-gray-300 hover:scale-[2] border-purple-500 border-2 flex items-center justify-center`}
						key={slide}
					>
						{slide}
					</div>
				))}
			</div>
		</div>
	);
}

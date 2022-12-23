import { EmblaCarousel } from "../components/EmblaCarousel";

export default function Home() {
	const slides = Array.from({ length: 20 }, (_, i) => i + 1);
	console.log(slides);

	return (
		<div className="flex items-center justify-center">
			<EmblaCarousel slides={slides} />
		</div>
	);
}

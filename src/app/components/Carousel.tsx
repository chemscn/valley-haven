import Image from 'next/image';
import carouselImage1 from '../../../public/carousel-1.jpg'

export const Carousel = () => {
	return (
		<div className="carousel lg:w-2/3 w-full mx-10">
			<div
				id="slide1"
				className="carousel-item relative w-full"
			>
				<Image
					className="w-full"
					src={carouselImage1}
					width={400}
					height={40}
					alt="picture of emergency center outside"
				/>
				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a
						href="#slide5"
						className="btn btn-circle border-2"
					>
						❮
					</a>
					<a
						href="#slide2"
						className="btn btn-circle"
					>
						❯
					</a>
				</div>
			</div>
			<div
				id="slide2"
				className="carousel-item relative w-full"
			>
				<Image
					className="w-full"
					src="/carousel-2.jpg"
					width={400}
					height={40}
					alt="picture of emergency center outside"
				/>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a
						href="#slide1"
						className="btn btn-circle"
					>
						❮
					</a>
					<a
						href="#slide3"
						className="btn btn-circle"
					>
						❯
					</a>
				</div>
			</div>
			<div
				id="slide3"
				className="carousel-item relative w-full"
			>
				<Image
					className="w-full"
					src="/carousel-3.jpg"
					width={400}
					height={40}
					alt="picture of emergency center outside"
				/>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a
						href="#slide2"
						className="btn btn-circle"
					>
						❮
					</a>
					<a
						href="#slide4"
						className="btn btn-circle"
					>
						❯
					</a>
				</div>
			</div>
			<div
				id="slide4"
				className="carousel-item relative w-full"
			>
				<Image
					className="w-full"
					src="/carousel-4.jpg"
					width={400}
					height={40}
					alt="picture of emergency center outside"
				/>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a
						href="#slide3"
						className="btn btn-circle"
					>
						❮
					</a>
					<a
						href="#slide5"
						className="btn btn-circle"
					>
						❯
					</a>
				</div>
			</div>
			<div
				id="slide5"
				className="carousel-item relative w-full"
			>
				<Image
					className="w-full"
					src="/carousel-5.jpg"
					width={400}
					height={40}
					alt="picture of emergency center outside"
				/>

				<div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
					<a
						href="#slide4"
						className="btn btn-circle"
					>
						❮
					</a>
					<a
						href="#slide1"
						className="btn btn-circle"
					>
						❯
					</a>
				</div>
			</div>
		</div>
	);
};

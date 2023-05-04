import { useNavigate } from "react-router-dom";

export const HomePage = () => {
	const navigate = useNavigate();

	return (
		<>
			<figure className="Banner">
				<img className="Banner__image" src="/assets/banner-1.jpg" alt="banner" />
				<figcaption className="Banner__caption">
					<h1>Level up your beauty with our products collection</h1>
					<button onClick={() => navigate('/products')}>Shop now</button>
				</figcaption>
			</figure>
			<section className="Section">
				<h1 className="Section__title">Categories</h1>
				<article className="Section__content">
					Hola
				</article>
			</section>
		</>
	);
};

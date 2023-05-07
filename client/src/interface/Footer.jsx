import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export const Footer = () => {
	return (
		<>
			<div className="Footer__main">
				<svg
					className="Footer__logo"
					viewBox="0 0 4074 1351"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M3717 400H3585L3228 1334H3371L3651 601.5L3931 1334H4074L3717 400Z"
						fill="inherit"
					/>
					<path
						d="M1492 1351C1725.62 1351 1915 1173.03 1915 953.5V399H1781V940.5C1781 1093.76 1651.61 1218 1492 1218C1332.39 1218 1203 1093.76 1203 940.5V400H1069V953.5C1069 1173.03 1258.38 1351 1492 1351Z"
						fill="inherit"
					/>
					<path d="M701.5 0.5H145.5V133.5H701.5V0.5Z" fill="inherit" />
					<path
						d="M489.5 400.5H357.5L0.5 1334.5H143.5L423.5 602L703.5 1334.5H846.5L489.5 400.5Z"
						fill="inherit"
					/>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M2249 400V1335H2383V1013H2727L2890 1335H3040L2846.41 953.807C2921.95 898.032 2971 808.031 2971 706.5C2971 537.225 2834.67 400 2666.5 400H2249ZM2663.5 879C2759.32 879 2837 801.769 2837 706.5C2837 611.231 2759.32 534 2663.5 534H2383V879H2663.5Z"
						fill="inherit"
					/>
				</svg>
				<span className="Footer__caption">The place where you can improve your beauty</span>
				<div className="Footer__social-media">
					<Link
						className="Footer__social-link"
						to="https://www.facebook.com/profile.php?id=100087026423255"
						target="_blank"
					>
						<FaFacebook />
					</Link>
					<Link
						className="Footer__social-link"
						to="https://www.instagram.com/aura.belleza77/"
						target="_blank"
					>
						<FaInstagram />
					</Link>
					<Link
						className="Footer__social-link"
						to="https://www.tiktok.com/@aura.belleza"
						target="_blank"
					>
						<FaTiktok />
					</Link>
				</div>
			</div>
			<div className="Footer__section">
				<div className="Footer__article">
					<h3 className="Footer__title">Shop</h3>
					<Link className="Footer__link" to="/products">
						Products
					</Link>
					<Link className="Footer__link" to="/categories">
						Categories
					</Link>
				</div>
				<div className="Footer__article">
					<h3 className="Footer__title">Company</h3>
					<Link className="Footer__link" to="">
						About Us
					</Link>
					<Link className="Footer__link" to="">
						Contact
					</Link>
				</div>
				<div className="Footer__article">
					<h3 className="Footer__title">Payment Methods</h3>
					<div className="Footer__payment-methods">
						<svg xmlns:svg="http://www.w3.org/2000/svg" viewBox="0 0 1000 324.68351">
							<path
								d="m 651.18503,0.50000002 c -70.93272,0 -134.32163,36.76584998 -134.32163,104.69357998 0,77.90028 112.42264,83.28082 112.42264,122.41576 0,16.47806 -18.88384,31.22851 -51.13668,31.22851 -45.77308,0 -79.98403,-20.61081 -79.98403,-20.61081 l -14.63836,68.54658 c 0,0 39.41037,17.40989 91.73375,17.40989 77.55217,0 138.57651,-38.57104 138.57651,-107.66029 0,-82.3157 -112.89106,-87.53633 -112.89106,-123.86008 0,-12.9082 15.50201,-27.05169 47.66251,-27.05169 36.28682,0 65.89216,14.98968 65.89216,14.98968 l 14.32608,-66.20444 c 0,0 -32.21317,-13.89668998 -77.64189,-13.89668998 z M 2.2175605,5.49657 0.49999253,15.48969 c 0,0 29.84159547,5.46149 56.71878047,16.35593 34.606624,12.4927 37.071853,19.7653 42.900167,42.35367 l 63.51098,244.83152 85.13673,0 131.15974,-313.53424 -84.94155,0 L 210.7069,218.67018 176.3165,37.97422 C 173.1626,17.29371 157.18709,5.49657 137.63219,5.49657 l -135.4146295,0 z m 411.8650095,0 -66.63383,313.53424 80.99895,0 66.39962,-313.53424 -80.76474,0 z m 451.75943,0 c -19.53181,0 -29.88045,10.45695 -37.47421,28.73022 l -118.66834,284.80402 84.94155,0 16.434,-47.46734 103.48348,0 9.99312,47.46734 74.94843,0 -65.3847,-313.53424 -68.27333,0 z m 11.04709,84.70733 25.17799,117.65341 -67.45359,0 42.2756,-117.65341 z"
								fill="#1434cb"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 641 410">
							<path fill="#ff5f00" d="M224.833 42.298h190.416v311.005H224.833z" />
							<path
								d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z"
								fill="#eb001b"
							/>
							<path
								d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z"
								fill="#f79e1b"
							/>
						</svg>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 145 33">
							<path
								d="M17.5483 1.22981L3.47061 8.44693C1.04872 9.68951 0.306126 12.6662 1.90102 14.8118L14.5737 31.8831C14.8418 32.2085 15.1742 32.4752 15.5501 32.6664C15.926 32.8575 16.3373 32.9691 16.7583 32.994C17.1793 33.019 17.6009 32.9568 17.9967 32.8114C18.3926 32.666 18.7541 32.4404 19.0588 32.1489L32.1387 18.1176C32.5012 17.7357 32.7062 17.2309 32.7124 16.7044C32.7187 16.1779 32.5258 15.6684 32.1724 15.278L20.0799 1.68549C19.8819 1.46686 19.6398 1.29256 19.3697 1.17403C19.0996 1.05551 18.8074 0.995431 18.5124 0.997745C18.1773 0.998199 17.847 1.07771 17.5483 1.22981Z"
								fill="#FF2F73"
							/>
							<path
								d="M10.0253 2.6292L0.865197 15.1057C-0.710713 17.2533 0.0382133 20.23 2.47064 21.4621L21.852 31.2762C23.4807 32.0335 25.4384 31.2361 25.9848 29.5884L31.0311 11.4454C31.1673 10.933 31.1084 10.3883 30.866 9.9167C30.6236 9.44514 30.2149 9.08028 29.7189 8.89276L12.4957 1.93091C12.2424 1.8284 11.9715 1.7761 11.6983 1.7769C11.3738 1.77476 11.0534 1.84886 10.7628 1.99323C10.4722 2.13761 10.2196 2.34822 10.0253 2.6081"
								fill="#2FCAD7"
							/>
							<path
								d="M24.6876 6.87371L14.5338 2.77466L7.12896 6.57203L1.52783 14.2026C1.63546 14.4157 1.76035 14.6196 1.90124 14.8123L9.46645 25.002L20.502 30.5946L27.9133 22.6413L30.4849 13.3968L24.6876 6.87371Z"
								fill="#210049"
							/>
						</svg>
					</div>
				</div>
			</div>
			<div className="Footer__copyright">
				&copy; 2023 Aura. All rights reserverd
			</div>
		</>
	);
};



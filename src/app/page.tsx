import { Divider } from './components';
import { Card } from './components/Card';
import { Carousel } from './components/Carousel';
import { Hero } from './components/Hero';
import { InfoCard } from './components/InfoCard';
import { ICard, ICardInfoProps } from './models';
import volunteerImage from '/public/volunteer.jpg';
import careerImage from '/public/career.jpg';
import donationImage from '/public/donation.jpg';
import handsImage from '/public/hands.png';

const cards: ICard[] = [
	{
		title: 'Volunteer',
		content: `
		Join us in making a difference by volunteering at our shelter, where your compassion
		and time can bring comfort and support to those in need
		`,
		linkSrc: '/volunteer',
		imageSrc: volunteerImage
	},
	{
		title: 'Career',
		content: `
		Embark on a menaingufl journey by joining our dedicated team at the shelter, 
		where every career contributes to creating a secure and nurturing envrionment for those in crisis.
		`,
		linkSrc: '/career',
		imageSrc: careerImage
	},
	{
		title: 'Giving',
		content: `
		Make a positive impact by supporting our shelter through your generous donation,
		helping us provide essential care and comfort to those facing crisis situations.
		`,
		linkSrc: '/giving',
		imageSrc: donationImage
	}
];

const cardInfo: ICardInfoProps = {
	title: 'Our Philosophy',
	paragraphs: [
		`At Valley Haven, we steadfastly hold the belief that children represent the cornerstone of our future society. We understand that the trajectory of their lives, the values they uphold, and the impact they make on the world are intricately tied to the nurturing they receive today..`,
		`Our commitment extends far beyond mere provision; we strive to create an immersive, empowering environment where youth are encouraged to explore their identities fully and develop into confident, compassionate leaders of tomorrow.`,
		`In our relentless pursuit of excellence, we dedicate ourselves to instilling core principles of social responsibility, fostering healthy living habits, and promoting a culture of inclusivity and acceptance. Through structured programs and hands-on experiences, we equip our children with the essential tools and skills necessary to navigate an ever-changing world with grace and resilience.`,
		`At Valley Haven, safety is paramount, love is unconditional, voices are heard, and happiness is not just a fleeting emotion but a foundational aspect of every child's experience. We believe in nurturing the whole child – mind, body, and spirit – to cultivate well-rounded individuals who are poised to thrive in all facets of life.`,
		`Join us at Valley Haven, where every child's journey is celebrated, and every dream is nurtured with unwavering support and dedication. Together, we shape futures and empower the leaders of tomorrow.`
	],
	imageSrc: handsImage,
	imageAlt: 'holding hands',
	imageHeight: 300,
	imageWidth: 300
};

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col">
			<Hero />
			<Divider />
			<div className="flex-wrap flex flex-row justify-around py-20 gap-5">
				{cards.map((card, i) => {
					return (
						<Card
							key={i}
							title={card.title}
							content={card.content}
							linkSrc={card.linkSrc}
							imageSrc={card.imageSrc}
						/>
					);
				})}
			</div>
			<Divider />
			<InfoCard cardInfo={cardInfo} />
			<Divider />
			<div className="flex justify-center py-10">
				<Carousel />
			</div>
		</main>
	);
}

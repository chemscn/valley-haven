import { title } from 'process';
import { Divider } from './components';
import { Card } from './components/Card';
import { Carousel } from './components/Carousel';
import { Hero } from './components/Hero';
import { InfoCard } from './components/InfoCard';
import { ICard, ICardInfoProps } from './models';

const cards: ICard[] = [
	{
		title: 'Volunteer',
		content: `
		Join us in making a difference by volunteering at our shelter, where your compassion
		and time can bring comfort and support to those in need
		`,
		linkSrc: '/volunteer',
		imageSrc: '/volunteer.jpg',
	},
	{
		title: 'Career',
		content: `
		Embark on a menaingufl journey by joining our dedicated team at the shelter, 
		where every career contributes to creating a secure and nurturing envrionment for those in crisis.
		`,
		linkSrc: '/career',
		imageSrc: '/career.jpg',
	},
	{
		title: 'Giving',
		content: `
		Make a positive impact by supporting our shelter through your generous donation,
		helping us provide essential care and comfort to those facing crisis situations.
		`,
		linkSrc: '/giving',
		imageSrc: '/donation.jpg',
	},
];

const cardInfo: ICardInfoProps = {
	title: 'Our Philosophy',
	paragraphs: [
		`At Valley Haven, we believe that children are the very essence of the future. Who they are
	tomorrow is essentially the outcome of how they are raised and nurtured today.`,
		`We go above and beyond to provide our youth with an empowering environment where they can
	fully embrace their identity and gain all the skills they need to be leaders tomorrow.`,
		`We work endlessly to shape the way they live their lives and teach them the fundamentals
	of social responsibility, healthy living, and cultural acceptance.`,
		`Valley Haven: Where children are safe, loved, heard and happy!`,
	],
	imageSrc: '/hands.png',
	imageAlt: 'holding hands',
	imageHeight: 300,
	imageWidth: 300,
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

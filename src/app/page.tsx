import { Divider } from './components';
import { Card } from './components/Card';
import { Carousel } from './components/Carousel';
import { Hero } from './components/Hero';
import { InfoCard } from './components/InfoCard';
import { ICard } from './models';

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
		title: 'Donation',
		content: `
		Make a positive impact by supporting our shelter through your generous donation,
		helping us provide essential care and comfort to those facing crisis situations.
		`,
		linkSrc: '/donation',
		imageSrc: '/donation.jpg',
	},
];
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
			<InfoCard />
			<Divider />
			<div className="flex justify-center py-10">
				<Carousel />
			</div>
		</main>
	);
}

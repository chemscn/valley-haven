import Link from 'next/link';
import { Button, Divider, InfoCard } from '../components';
import { ICardInfoProps } from '../models';

export default function Giving() {
	const givingCardInfo: ICardInfoProps = {
		title: 'Giving',
		paragraphs: [
			`Giving is not just about making a donation. It's about making a difference. 
			At Valley Haven, we have children of all ages from newborn to teen all with needs big and small.  
			Your donation helps to soften their hearts and begin the healing process for a brighter future.`,
			`
			Every act of kindness, no matter how small, creates a ripple effect of positivity. Your contribution to Valley Haven is not just a gift; it's a catalyst for change in the lives of these children. Together, we can be the difference they need, igniting hope and healing for a brighter tomorrow. Remember, it's not about the magnitude of your action, but the intention behind it. Let's join hands and make a lasting impact, one heart at a time.`,
			`Imagine the joy in a child's eyes when they realize they are not alone, that there are people out there who care enough to lend a helping hand. Your donation to Valley Haven is more than just a financial transaction; it's a lifeline of hope for these children, a beacon of light in their darkest moments. Your support has the power to transform despair into possibility, sadness into smiles, and uncertainty into a future filled with promise. Let's come together and be the change-makers these children need. Every dollar, every act of generosity, is a step towards building a community where love, compassion, and support reign supreme. Thank you for being a part of this journey towards a brighter, more inclusive world for all.`,
			`"I am only one, but I am one. I cannot do everything, but I can do something.  And I will not let what I cannot do interfere with what I can do."  ~Edward Hale `
		],
		imageSrc: '/children-running.png',
		imageAlt: 'children running',
		imageWidth: 600,
		imageHeight: 300
	};
	const wishListCardInfo: ICardInfoProps = {
		title: 'Our Wish List',
		paragraphs: [
			`At Valley Haven, we believe in the power of community and the profound impact it can have on the lives of children in need. Our organization is built on the foundation of generosity and compassion, and we rely wholeheartedly on the support of our community to fulfill our mission. Your donations, whether big or small, play a crucial role in providing essential items such as clothing, shoes, and personal care items to the children under our care.`,
			`It's important to recognize that these basic necessities are not just material possessions; they represent dignity, comfort, and a sense of belonging for the children who receive them. By donating to Valley Haven, you are not only providing tangible items, but you are also sending a powerful message of love and support to these children. Your generosity helps to create a nurturing environment where they can feel valued and cared for, regardless of their circumstances`,
			`Furthermore, your donations contribute to the overall well-being and development of the children at Valley Haven. Having access to proper clothing and personal care items promotes good hygiene practices and fosters a sense of self-esteem and confidence. These are essential components of a healthy childhood and are often taken for granted by those who have never experienced a lack of these basic necessities.`,
			`By coming together as a community to support Valley Haven, we are not just providing material goods; we are investing in the future of these children. Your donations pave the way for brighter tomorrows, where these children can grow and thrive in a safe and supportive environment. Together, we can make a difference in the lives of these children and show them that they are not alone – that their community stands behind them, ready to lift them up and support them every step of the way. Thank you for your continued generosity and support.`,
			`Valley Haven relies on the generosity of the community in order to provide clothing, shoes, and personal care items for the children in our care.`
		],
		imageSrc: '/circle-children.png',
		imageAlt: 'children holding hands in a cirlce',
		imageWidth: 300,
		imageHeight: 300,
		isWishList: true
	};
	return (
		<div className="container mx-auto pb-3">
			<InfoCard cardInfo={givingCardInfo} />
			<Divider />
			<div className="flex flex-col py-20 lg:mx-48 sm:mx-10">
				<h2 className="text-5xl text-center">Ways to Give</h2>
				<div className="flex flex-row py-20 justify-between gap-20">
					<div className="flex flex-col max-w-2xl justify-between">
						<h1 className="text-3xl">In-Kind Donation</h1>
						<p className="lg:max-w-xs text-lg">
							Each in-kind donation plays a part in preparing the children in our care for their
							futures. Gifts of your time, talent, and goods demonstrate the faith you place in
							securing a prosperous future for our children
						</p>
						<Link
							target="blank"
							href="https://www.brantwoodchildrenshome.org/page/online-giving#"
						>
							<Button
								buttonType="outline"
								buttonText="Learn More"
								className="w-40 mx-2"
							/>
						</Link>
					</div>
					<div className="flex flex-col gap-10 max-w-2xl justify-between">
						<h1 className="text-3xl">Cash Donation</h1>
						<p className="lg:max-w-xs text-lg">
							Make a positive impact by supporting our children's emergency shelter through your
							generous donation. Help us in providing essential care and comfort to those facing
							crisis situations
						</p>
						<Link
							target="blank"
							href="https://www.paypal.com/donate/?hosted_button_id=X9H2JT2XF5PEG"
						>
							<Button
								className="w-40 mx-2"
								buttonText="Donate"
								buttonType="accent"
							/>
						</Link>
					</div>
				</div>
			</div>
			<Divider />
			<InfoCard cardInfo={wishListCardInfo} />
		</div>
	);
}

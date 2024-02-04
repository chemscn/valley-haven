import { AboutHero, Divider } from '../components';

export default function About() {
	return (
		<div className="container mx-auto px-10 py-10">
			<AboutHero />
			<div className="pt-10">
				<Divider />
			</div>
			<div className="card my-10 bg-green-800 text-white">
				<div className="card-body">
					<h2 className="text-4xl text-center pb-4">Mission & Values</h2>
					<h3 className="text-2xl text-center pb-4">Committed to Making a Difference</h3>
					<p className="text-xl pb-2">
						Valley Haven is the only Emergency Children’s Shelter, in Cameron County. It is also
						the largest in the Rio Grande Valley of South Texas. Our mission is to provide refuge
						for abused, neglected, and abandoned children who have been removed from their homes
						through Child Protective Services. Valley Haven works to end conditions that seemingly
						perpetuate never-ending cycles of child abuse and neglect. Valley Haven provides a
						properly equipped 36-bed home-like facility with a highly trained staff to house and
						execute this kind of effort.
					</p>
					<p className="text-xl pb-2">
						At Valley Haven, our goal is to stop the cycle of abuse, allowing the children in our
						care to heal and learn to have strong, nurturing relationships with their own
						children. By showing and teaching appropriate ways to trust and love each other, the
						children at Valley Haven will feel safe, begin to heal, and look at their future in a
						positive way. Our children deserve the chance to grow into loving, caring, and happy
						adults that have had the opportunity to heal from this very traumatic time in their
						lives.
					</p>
					<p className="text-xl pb-2">
						When children are removed from their homes they lose more than their parents,
						grand-parents and family. Often they lose their home, school, friends, and sometimes
						even their siblings. These are the same brothers and sisters who helped support one
						another and survive traumatic, abusive environments. Siblings are often separated
						because services needed to care for them are not available in the Rio Grande Valley.
					</p>
					<p className="text-xl pb-2">
						Valley Haven is here to bridge that gap. Our main priority is to keep the children and
						their siblings that come into our care safe, cared for and together!
					</p>
					<p className="text-xl pb-2 underline">
						Valley Haven's mission is to protect, guide, and nurture abused and neglected children
						by providing them a safe and loving home!
					</p>
				</div>
			</div>
			<div className="py-10">
				<Divider />
				<div className="py-10 flex justify-center">
					<iframe
						width={1200}
						height={600}
						src="https://www.youtube.com/embed/d7HJoUVD5CA?si=TJQiJtTlddiSb7g4"
						title="YouTube video player"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					></iframe>
				</div>
				<Divider />
			</div>
			<h1 className="text-5xl text-center pb-4">Our Founders</h1>
			<div className="flex flex-col md:flex-row md:justify-around mx-20 py-10 gap-5 md:gap-2">
				<div className="avatar flex-col items-center">
					<div className="w-40 mask mask-squircle">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
					<p className="text-lg font-bold py-2">Gracie Bradwell</p>
				</div>
				<div className="avatar flex-col items-center">
					<div className="w-40 mask mask-squircle">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
					<p className="text-lg font-bold py-2">Kristen Millon</p>
				</div>
				<div className="avatar flex-col items-center">
					<div className="w-40 mask mask-squircle">
						<img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
					</div>
					<p className="text-lg font-bold py-2">Pamela Alvarez</p>
				</div>
			</div>
		</div>
	);
}

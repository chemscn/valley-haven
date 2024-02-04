import { Button, Divider, InfoCard } from '../components';
import { ICardInfoProps } from '../models';

export default function Volunteer() {
	const volunteerCardInfo: ICardInfoProps = {
		title: 'Volunteer',
		paragraphs: [
			`Valley Haven is delighted to offer a plethora of volunteer opportunities tailored to suit your interests and availability! 
			If you're passionate about making a difference in the lives of children and would like to engage directly with the youngsters in our care, 
			we warmly invite you to take part in our volunteer program. To initiate the process, we kindly ask that you complete our volunteer application form. 
			This step ensures that we can promptly commence the background check procedure, ensuring the safety and well-being of all involved. 
			Your dedication and support are invaluable to us as we strive to create a nurturing environment for the children at Valley Haven.
			`
		],
		isVolunteer: true
	};
	return (
		<div className="container mx-auto pb-3">
			<InfoCard cardInfo={volunteerCardInfo} />
			<Divider />
			<div className="flex flex-col py-10 mx-5">
				<h2 className="text-2xl text-center tracking-wider py-5">Get in Touch</h2>
				<p className='mx-auto xl:mx-24 2xl:mx-56'>
					If you would like to volunteer at our donation center or for other activities that do not
					consist of direct contact with our children, please fill out the form below and a Valley
					Haven representative will contact you within 5 business days.
				</p>
			</div>
			<form className="mx-5 sm:mx-3 my-10">
				<div className="flex flex-row justify-center">
					<label className="form-control w-full max-w-lg me-10">
						<div className="label">
							<span className="label-text">First Name</span>
						</div>
						<input
							type="text"
							className="input input-bordered input-success w-full max-w-lg"
						/>
					</label>
					<label className="form-control w-full max-w-lg">
						<div className="label">
							<span className="label-text">Last Name</span>
						</div>
						<input
							type="text"
							className="input input-bordered input-success w-full max-w-lg"
						/>
					</label>
				</div>
				<div className="flex flex-row justify-center">
					<label className="form-control w-full max-w-lg me-10">
						<div className="label">
							<span className="label-text">Email</span>
						</div>
						<input
							type="text"
							className="input input-bordered input-success w-full max-w-lg"
						/>
					</label>
					<label className="form-control w-full max-w-lg">
						<div className="label">
							<span className="label-text">Phone</span>
						</div>
						<input
							type="text"
							className="input input-bordered input-success w-full max-w-lg"
						/>
					</label>
				</div>
				<div className="flex flex-row pb-10 mx-auto xl:mx-24 2xl:mx-56">
					<label className="form-control w-full ">
						<div className="label">
							<span className="label-text">Message</span>
						</div>
						<textarea className="textarea textarea-success textarea-bordered textarea-lg"></textarea>
					</label>
				</div>
				<div className="flex justify-start pb-16 mx-auto xl:mx-24 2xl:mx-56">
						<Button
							buttonType="primary"
							buttonText="Submit"
							mode='submit'
						/>
						<Button
							buttonType="danger"
							buttonText="Reset"
							mode='reset'
						/>
					</div>
			</form>
		</div>
	);
}

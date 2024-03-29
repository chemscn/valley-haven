import { Button, ContactElement, Divider } from '../components';
import { IContactElement } from '../models';
import geoImage from '/public/geo.svg';
import telephoneImage from '/public/telephone.svg';
import emailImage from '/public/mail.svg';

export default function Contact() {
	const contactElements: IContactElement[] = [
		{
			imageSrc: geoImage,
			title: 'Address'
		},
		{
			imageSrc: telephoneImage,
			title: 'Phone Number',
			subContent: '(956) 893-0422',
			isPhone: true
		},
		{
			imageSrc: emailImage,
			title: 'Email',
			subContent: 'info@valleyhaveninc.org',
			isEmail: true
		}
	];
	return (
		<>
			<div className="container mx-auto ">
				<h1 className="text-4xl font-bold  py-10 text-center">Contact Us</h1>
				<form className="mx-5 sm:mx-3">
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
					<div className="flex flex-row justify-center">
						<label className="form-control w-full max-w-lg me-10">
							<div className="label">
								<span className="label-text">Address</span>
							</div>
							<input
								type="text"
								className="input input-bordered input-success w-full max-w-lg"
							/>
						</label>
						<label className="form-control w-full max-w-lg">
							<div className="label">
								<span className="label-text">City</span>
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
								<span className="label-text">State</span>
							</div>
							<input
								type="text"
								className="input input-bordered input-success w-full max-w-lg"
							/>
						</label>
						<label className="form-control w-full max-w-lg">
							<div className="label">
								<span className="label-text">Zip Code</span>
							</div>
							<input
								type="text"
								className="input input-bordered input-success w-full max-w-lg"
							/>
						</label>
					</div>
					<div className="flex flex-row justify-start mx-auto xl:mx-24 2xl:mx-56">
						<label className="form-control w-full">
							<div className="label ">
								<span className="label-text">Subject</span>
							</div>
							<input
								type="text"
								className="input input-bordered input-success w-full"
							/>
						</label>
					</div>
					<div className="flex flex-row pb-10 mx-auto xl:mx-24 2xl:mx-56">
						<label className="form-control w-full">
							<div className="label">
								<span className="label-text">Message</span>
							</div>
							<textarea className="textarea textarea-success textarea-bordered textarea-lg w-full"></textarea>
						</label>
					</div>
					<div className="flex justify-start pb-16 mx-auto xl:mx-24 2xl:mx-56">
						<Button
							buttonType="primary"
							buttonText="Submit"
							mode="submit"
						/>
						<Button
							buttonType="danger"
							buttonText="Reset"
							mode="reset"
						/>
					</div>
				</form>
				<Divider />
				<div className="mx-5">
					<iframe
						className="container mx-auto py-20"
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14321.920189741184!2d-97.747167!3d26.181058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x866f804eaa6674d3%3A0x203fc3ea18d004f!2sValley%20Haven%20Inc.!5e0!3m2!1sen!2sus!4v1705465888376!5m2!1sen!2sus"
						width="1030"
						height="500"
						loading="lazy"
					></iframe>
				</div>
			</div>
			<div className="flex flex-col md:flex-row lg:justify-evenly justify-between mx-5">
				{contactElements.map((el, i) => {
					return (
						<ContactElement
							key={`${el.title}-${i}`}
							imageSrc={el.imageSrc}
							title={el.title}
							subContent={el.subContent}
							isPhone={el.isPhone}
							isEmail={el.isEmail}
						/>
					);
				})}
			</div>
		</>
	);
}

import type { Metadata } from 'next';
import { Navbar, Footer } from './components';
import './globals.css';

export const metadata: Metadata = {
	title: 'Valley Haven Inc.',
	description: "Emergency Children's Shelter"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			data-theme="fantasy"
			lang="en"
		>
			<body>
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

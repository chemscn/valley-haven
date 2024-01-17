import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from './components';
import { Footer } from './components/Footer';
import './globals.css';

export const metadata: Metadata = {
	title: 'Valley Haven Inc.',
	description: "Emergency Children's Shelter",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			data-theme="light"
			lang="en"
		>
			<body className="bg-white">
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}

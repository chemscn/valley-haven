/** @type {import('next').NextConfig} */
const nextConfig = {
    output: process.env.NODE_ENV !== 'production' ? 'standalone': 'export',
	images: {
		remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
                port: '',
                pathname: '**'
            }
        ]
	}
};

module.exports = nextConfig;


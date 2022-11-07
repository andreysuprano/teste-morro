/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		unoptimized: false,
		loader: 'imgix',
		path: ''
	}
};
module.exports = {
	// https://github.com/vercel/next.js/issues/21079
	// Remove this workaround whenever the issue is fixed
	images: {
		loader: 'imgix'
	}
};

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [ '@svgr/webpack' ]
		});

		return config;
	}
};

module.exports = nextConfig;

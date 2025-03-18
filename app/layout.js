import "./globals.css";
import localFont from "next/font/local";

const canela = localFont({
	src: "fonts/Canela-Medium.woff2",
	variable: "--font-canela",
});

const fk = localFont({
	src: "fonts/FKScreamerLegacy-Upright.woff2",
	variable: "--font-fk",
});

const apercu = localFont({
	src: [
		{
			path: "fonts/apercu-regular-pro.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "fonts/apercu-italic-pro.woff2",
			weight: "400",
			style: "italic",
		},
		{
			path: "fonts/apercu-bold-pro.woff2",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-apercu",
});

export const metadata = {
	title: {
		// template: '%s - Docs',
		default: "Extreme Challenge 2026 Canada: Sea to Summit | Hope for Justice",
	},
	description:
		"September 12th - 20th, 2026. Change the lives of people trapped in modern slavery and who have survived human trafficking",
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
		},
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${canela.variable} ${apercu.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}

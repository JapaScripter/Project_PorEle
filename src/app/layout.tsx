import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import 'globals.css';
import '../i18n/client';
import { Providers } from "./providers";

export const metadata: Metadata = {
	title: "Por Ele",
	description: "Porque dele, por ele e para ele são todas as coisas. A ele seja a glória para sempre! Amém.",
	icons: {
		icon: "/public/img/logos/porelelogobranco.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pt-BR">
			<body>
				<Providers>
					<Header />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

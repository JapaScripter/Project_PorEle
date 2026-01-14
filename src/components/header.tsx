'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { useTranslation } from 'react-i18next';
import "@i18n/client";

const Header: React.FC = () => {
	const { t, i18n } = useTranslation();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isLangOpenDesktop, setIsLangOpenDesktop] = useState(false);
	const [isLangOpenMobile, setIsLangOpenMobile] = useState(false);
	const [shrinkHeader, setShrinkHeader] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setShrinkHeader(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const toggleLangDesktop = () => setIsLangOpenDesktop((prev) => !prev);
	const toggleLangMobile = () => setIsLangOpenMobile((prev) => !prev);

	return (
		<header key={i18n.language} className="fixed flex w-full h-30 z-50">
			<div className={`relative flex w-full h-30 items-center justify-center ${shrinkHeader ? " h-16 text-lg" : "h-24 text-2xl"}`}>
				<div className="absolute inset-0 bg-[#0D0D0D] rounded-b-2xl lg:rounded-none pointer-events-none z-10" />
				<div className="relative hidden size-full lg:flex lg:flex-col justify-around z-10">
					<Link href="/" className="w-full flex flex-row justify-center items-center text-base lg:text-lg text-[#F0F0F0]transition-colors" onClick={() => setIsMenuOpen(false)}>
						<img className="size-10 lg:size-10" src="/img/logos/porele.png" alt="Logo" />
						<img className="w-auto h-[4vw]" src="/img/logos/poreleinscricao.png" alt="Logo" />
					</Link>
					<ul className="flex w-full justify-evenly items-center">
						<li>
							<Link className="flex flex-col lg:w-35 justify-center items-center text-base lg:text-base text-[#F0F0F0] hover:bg-[#F0F0F0]/20 rounded-xs transition-colors" href="/sobre" onClick={() => setIsMenuOpen(false)}>
								<img className="size-4" src="/img/botoes/sobre.svg" alt="Sobre" />
								{t('Sobre')}
							</Link>
						</li>
						<li>
							<Link className="flex flex-col lg:w-35 justify-center items-center text-base lg:text-base text-[#F0F0F0] hover:bg-[#F0F0F0]/20 rounded-xs transition-colors" href="/culto" onClick={() => setIsMenuOpen(false)}>
								<img className="size-4" src="/img/botoes/cult.svg" alt="Cultos" />
								{t('Cultos')}
							</Link>
						</li>
						<li>
							<Link className="flex flex-col lg:w-35 justify-center items-center text-base lg:text-base text-[#F0F0F0] hover:bg-[#F0F0F0]/20 rounded-xs transition-colors" href="/dizimo" onClick={() => setIsMenuOpen(false)}>
								<img className="size-4" src="/img/botoes/money.svg" alt="Money" />
								{t('Dízimos e Ofertas')}
							</Link>
						</li>
						<li>
							<Link className="flex flex-col lg:w-35 justify-center items-center text-base lg:text-base text-[#F0F0F0] hover:bg-[#F0F0F0]/20 rounded-xs transition-colors" href="/contato" onClick={() => setIsMenuOpen(false)}>
								<img className="size-4" src="/img/botoes/contato.svg" alt="Contato" />
								{t('Contato')}
							</Link>
						</li>
						<li className="relative">
							<button className="flex flex-col lg:w-35 justify-center items-center text-base lg:text-base text-[#F0F0F0] hover:bg-[#F0F0F0]/20 rounded-xs transition-colors cursor-pointer" onClick={toggleLangDesktop}>
								<img className="size-4" src="/img/botoes/language.svg" alt="Idioma" />
								{t('Idioma')}
							</button>
							{isLangOpenDesktop && (
								<ul className="absolute flex flex-col top-9 right-1 mt-2 p-4 gap-2 items-start bg-[#0D0D0D] rounded-xs z-50">
									{[
										{ code: 'pt', href: '/', img: "br.svg", label: "PT/BR" },
										{ code: 'en', href: '/', img: "en.svg", label: "EN" },
										{ code: 'es', href: '/', img: "es.svg", label: "ES" },
									].map(({ code, href, img, label }) => (
										<li key={label}>
											<button className="flex w-25 items-center p-2 gap-2 text-sm text-[#F0F0F0] hover:bg-[#F0F0F0]/20 rounded-xs cursor-pointer"
												onClick={() => {
													i18n.changeLanguage(code);
													setIsLangOpenDesktop(false);
													setIsMenuOpen(false);
												}}>
												<img className="size-5" src={`/img/botoes/${img}`} alt={label} />
												{label}
											</button>
										</li>
									))}
								</ul>
							)}
						</li>
					</ul>
				</div>
				<div className="relative flex w-1/2 lg:hidden justify-between z-10">
					<Link href="/" className="flex">
						<img className="size-10 lg:size-10" src="/img/logos/porele.png" alt="Logo" />
						<img className="w-auto h-[12vw]" src="/img/logos/poreleinscricao.png" alt="Logo" />
					</Link>
					<button onClick={toggleMenu} aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}>
						<img className="size-10" src={isMenuOpen ? "/img/botoes/close.svg" : "/img/botoes/menu.svg"} alt={isMenuOpen ? "Fechar" : "Menu"} />
					</button>
				</div>
				{isMenuOpen && (
					<div className="fixed w-full h-full top-25 left-0 bg-[#0D0D0D] shadow-md z-9">
						<ul className="flex flex-col items-start p-4 gap-2">
							{[
								{ href: "/sobre", icon: "sobre.svg", label: t('sobre') },
								{ href: "/culto", icon: "cult.svg", label: t('cultos') },
								{ href: "/dizimo", icon: "money.svg", label: t('dizimo e ofertas') },
								{ href: "/contato", icon: "contato.svg", label: t('contato') },
							].map(({ href, icon, label }) => (
								<li key={label} className="w-full py-2 border-b-2 border-[#F0F0F0]">
									<Link className="flex w-fit p-2 gap-2 items-center text-sm text-[#F0F0F0]" href={href} onClick={() => setIsMenuOpen(false)}>
										<img className="size-5" src={`/img/botoes/${icon}`} alt={label} />
										{label}
									</Link>
								</li>
							))}
							<li className="w-full py-2 border-b-2 border-[#F0F0F0]">
								<button className="flex p-2 gap-2 items-center text-sm text-[#F0F0F0]" onClick={toggleLangMobile}>
									<img className="size-5" src="/img/botoes/language.svg" alt="Idioma" />
									{t('idioma')}
								</button>
								{isLangOpenMobile && (
									<ul className="flex flex-col ml-12 mt-4 gap-4">
										{[
											{ code: 'pt', img: 'br.svg', label: 'PT/BR' },
											{ code: 'en', img: 'en.svg', label: 'EN' },
											{ code: 'es', img: 'es.svg', label: 'ES' },
										].map(({ code, img, label }) => (
											<li key={code}>
												<button className="flex gap-2 items-center text-sm text-[#F0F0F0]"
													onClick={() => {
														i18n.changeLanguage(code);
														setIsLangOpenMobile(false);
														setIsMenuOpen(false);
													}}>
													<img className="size-5" src={`/img/botoes/${img}`} alt={label} />
													{label}
												</button>
											</li>
										))}
									</ul>
								)}
							</li>
						</ul>
					</div>
				)}
			</div>
		</header >
	)
};

export default Header;

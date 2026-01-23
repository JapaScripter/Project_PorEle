"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n/client";
import Link from "next/link";

export default function Sobre() {
	const { t } = useTranslation();

	return (
		<main className="w-full bg-[#0D0D0D] text-[#F0F0F0]">
			<section className="relative w-full h-screen flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/img/preta.jpg')" }}>
				<div className="absolute inset-0 bg-[#0D0D0D]/60"></div>
			</section>
			<section className="w-full h-screen grid grid-cols-1 md:grid-cols-3">
				<div className="flex flex-col justify-center items-center bg-[#1A1A1A] p-10 text-center">
					<h2 className="text-2xl font-bold mb-4">Cursos</h2>
					<Link href="/cursos" className="mt-4 px-6 py-3 bg-[#F0F0F0] text-[#0D0D0D] font-semibold rounded hover:bg-gray-200 transition">
						Ver cursos
					</Link>
				</div>
				<div className="flex flex-col justify-center items-center bg-[#262626] p-10 text-center">
					<h2 className="text-2xl font-bold mb-4">Quero fazer parte</h2>
					<Link href="/participar" className="mt-4 px-6 py-3 bg-[#F0F0F0] text-[#0D0D0D] font-semibold rounded hover:bg-gray-200 transition">
						Participar
					</Link>
				</div>
				<div className="flex flex-col justify-center items-center bg-[#333333] p-10 text-center">
					<h2 className="text-2xl font-bold mb-4">Me registrar</h2>
					<Link href="/registro" className="mt-4 px-6 py-3 bg-[#F0F0F0] text-[#0D0D0D] font-semibold rounded hover:bg-gray-200 transition">
						Registrar
					</Link>
				</div>
			</section>
			<section className="w-full py-20 px-6 lg:px-20 bg-[#0F0F0F]">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl font-bold mb-6">Sobre a Igreja</h2>
					<p className="text-gray-300 leading-relaxed">
						Somos uma igreja comprometida com a Palavra de Deus, com o amor ao
						próximo e com o crescimento espiritual de cada membro. Nosso
						propósito é viver Romanos 11:36 — Porque dele, por ele e para ele
						são todas as coisas.
					</p>
				</div>
			</section>
			<section className="w-full py-20 px-6 lg:px-20 bg-[#151515]">
				<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
					<div className="flex flex-col justify-center gap-10">
						<h2 className="text-3xl font-bold">Venha nos Conhecer</h2>
						<p>
							📍 R. Amparo, 75 - Vila Prudente, São Paulo - SP, 03151-060
						</p>
						<a href="tel:+5511962527624" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 w-fit px-6 py-3 bg-[#F0F0F0] text-[#0D0D0D] font-semibold rounded-lg hover:opacity-90 transition">
							📞 Telefone: (11) 9 6252-7624
						</a>
						<a href="https://www.instagram.com/porelechurch/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 w-fit px-6 py-3 bg-[#F0F0F0] text-[#0D0D0D] font-semibold rounded-lg hover:opacity-90 transition">
							<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256"><g fill="none"><rect width="256" height="256" fill="url(#SVGWRUqebek)" rx="60"/><rect width="256" height="256" fill="url(#SVGfkNpldMH)" rx="60"/><path fill="#fff" d="M128.009 28c-27.158 0-30.567.119-41.233.604c-10.646.488-17.913 2.173-24.271 4.646c-6.578 2.554-12.157 5.971-17.715 11.531c-5.563 5.559-8.98 11.138-11.542 17.713c-2.48 6.36-4.167 13.63-4.646 24.271c-.477 10.667-.602 14.077-.602 41.236s.12 30.557.604 41.223c.49 10.646 2.175 17.913 4.646 24.271c2.556 6.578 5.973 12.157 11.533 17.715c5.557 5.563 11.136 8.988 17.709 11.542c6.363 2.473 13.631 4.158 24.275 4.646c10.667.485 14.073.604 41.23.604c27.161 0 30.559-.119 41.225-.604c10.646-.488 17.921-2.173 24.284-4.646c6.575-2.554 12.146-5.979 17.702-11.542c5.563-5.558 8.979-11.137 11.542-17.712c2.458-6.361 4.146-13.63 4.646-24.272c.479-10.666.604-14.066.604-41.225s-.125-30.567-.604-41.234c-.5-10.646-2.188-17.912-4.646-24.27c-2.563-6.578-5.979-12.157-11.542-17.716c-5.562-5.562-11.125-8.979-17.708-11.53c-6.375-2.474-13.646-4.16-24.292-4.647c-10.667-.485-14.063-.604-41.23-.604zm-8.971 18.021c2.663-.004 5.634 0 8.971 0c26.701 0 29.865.096 40.409.575c9.75.446 15.042 2.075 18.567 3.444c4.667 1.812 7.994 3.979 11.492 7.48c3.5 3.5 5.666 6.833 7.483 11.5c1.369 3.52 3 8.812 3.444 18.562c.479 10.542.583 13.708.583 40.396s-.104 29.855-.583 40.396c-.446 9.75-2.075 15.042-3.444 18.563c-1.812 4.667-3.983 7.99-7.483 11.488c-3.5 3.5-6.823 5.666-11.492 7.479c-3.521 1.375-8.817 3-18.567 3.446c-10.542.479-13.708.583-40.409.583c-26.702 0-29.867-.104-40.408-.583c-9.75-.45-15.042-2.079-18.57-3.448c-4.666-1.813-8-3.979-11.5-7.479s-5.666-6.825-7.483-11.494c-1.369-3.521-3-8.813-3.444-18.563c-.479-10.542-.575-13.708-.575-40.413s.096-29.854.575-40.396c.446-9.75 2.075-15.042 3.444-18.567c1.813-4.667 3.983-8 7.484-11.5s6.833-5.667 11.5-7.483c3.525-1.375 8.819-3 18.569-3.448c9.225-.417 12.8-.542 31.437-.563zm62.351 16.604c-6.625 0-12 5.37-12 11.996c0 6.625 5.375 12 12 12s12-5.375 12-12s-5.375-12-12-12zm-53.38 14.021c-28.36 0-51.354 22.994-51.354 51.355s22.994 51.344 51.354 51.344c28.361 0 51.347-22.983 51.347-51.344c0-28.36-22.988-51.355-51.349-51.355zm0 18.021c18.409 0 33.334 14.923 33.334 33.334c0 18.409-14.925 33.334-33.334 33.334s-33.333-14.925-33.333-33.334c0-18.411 14.923-33.334 33.333-33.334"/><defs><radialGradient id="SVGWRUqebek" cx="0" cy="0" r="1" gradientTransform="matrix(0 -253.715 235.975 0 68 275.717)" gradientUnits="userSpaceOnUse"><stop stop-color="#fd5"/><stop offset=".1" stop-color="#fd5"/><stop offset=".5" stop-color="#ff543e"/><stop offset="1" stop-color="#c837ab"/></radialGradient><radialGradient id="SVGfkNpldMH" cx="0" cy="0" r="1" gradientTransform="matrix(22.25952 111.2061 -458.39518 91.75449 -42.881 18.441)" gradientUnits="userSpaceOnUse"><stop stop-color="#3771c8"/><stop offset=".128" stop-color="#3771c8"/><stop offset="1" stop-color="#60f" stop-opacity="0"/></radialGradient></defs></g></svg> Siga no Instagram
						</a>
					</div>
					<div className="w-full h-[300px]">
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.497235643397!2d-46.59099852532575!3d-23.586493862514786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5d91ec3a0fcf%3A0x6309d492f3df826c!2sPor%20Ele%20%7C%20Church!5e0!3m2!1spt-BR!2sbr!4v1767914757045!5m2!1spt-BR!2sbr"
							className="w-full h-full rounded-lg"
							style={{ border: 0 }}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
						/>
					</div>
					<div className="overflow w-full x-auto">
						<div className="flex gap-4 w-full">
							<a href="https://www.instagram.com/p/POST1" target="_blank" className="min-w-[180px] h-[180px] bg-[#222] rounded-lg flex items-center justify-center hover:scale-105 transition">
								<span className="text-sm text-gray-300 text-center px-2">
									Culto de Domingo 🙌
								</span>
							</a>
							<a href="https://www.instagram.com/p/POST2" target="_blank" className="min-w-[180px] h-[180px] bg-[#2A2A2A] rounded-lg flex items-center justify-center hover:scale-105 transition">
								<span className="text-sm text-gray-300 text-center px-2">
									Palavra da Semana 📖
								</span>
							</a>
							<a href="https://www.instagram.com/p/POST3" target="_blank" className="min-w-[180px] h-[180px] bg-[#333] rounded-lg flex items-center justify-center hover:scale-105 transition">
								<span className="text-sm text-gray-300 text-center px-2">
									Evento Especial 🎶
								</span>
							</a>
							<a href="https://www.instagram.com/p/POST1" target="_blank" className="min-w-[180px] h-[180px] bg-[#222] rounded-lg flex items-center justify-center hover:scale-105 transition">
								<span className="text-sm text-gray-300 text-center px-2">
									Culto de Domingo 🙌
								</span>
							</a>
							<a href="https://www.instagram.com/p/POST2" target="_blank" className="min-w-[180px] h-[180px] bg-[#2A2A2A] rounded-lg flex items-center justify-center hover:scale-105 transition">
								<span className="text-sm text-gray-300 text-center px-2">
									Palavra da Semana 📖
								</span>
							</a>
							<a href="https://www.instagram.com/p/POST3" target="_blank" className="min-w-[180px] h-[180px] bg-[#333] rounded-lg flex items-center justify-center hover:scale-105 transition">
								<span className="text-sm text-gray-300 text-center px-2">
									Evento Especial 🎶
								</span>
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
	);
}

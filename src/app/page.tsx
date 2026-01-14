"use client";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@i18n/client";
import Link from "next/link";

export default function Sobre() {
	const { t } = useTranslation();

	return (
		<main className="w-full bg-[#0D0D0D] text-white">
			<section className="relative w-full h-screen flex items-center justify-center bg-center bg-cover" style={{ backgroundImage: "url('/img/preta.jpg')" }}>
				<div className="absolute inset-0 bg-black/60"></div>
			</section>
			<section className="w-full h-screen grid grid-cols-1 md:grid-cols-3">
				<div className="flex flex-col justify-center items-center bg-[#1A1A1A] p-10 text-center">
					<h2 className="text-2xl font-bold mb-4">Cursos</h2>
					<Link href="/cursos" className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
						Ver cursos
					</Link>
				</div>
				<div className="flex flex-col justify-center items-center bg-[#262626] p-10 text-center">
					<h2 className="text-2xl font-bold mb-4">Quero fazer parte</h2>
					<Link href="/participar" className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
						Participar
					</Link>
				</div>
				<div className="flex flex-col justify-center items-center bg-[#333333] p-10 text-center">
					<h2 className="text-2xl font-bold mb-4">Me registrar</h2>
					<Link href="/registro" className="mt-4 px-6 py-3 bg-white text-black font-semibold rounded hover:bg-gray-200 transition">
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
						<a href="https://www.instagram.com/SEUINSTAGRAM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 w-fit px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
							📞 Telefone: (11) 9 6252-7624
						</a>
						<a href="https://www.instagram.com/SEUINSTAGRAM" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 w-fit px-6 py-3 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
							📸 Siga no Instagram
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

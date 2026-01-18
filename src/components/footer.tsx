'use client';
import React from 'react';
import { useTranslation } from 'react-i18next';
import "@/i18n/client";

const Footer: React.FC = () => {
	const { t, i18n } = useTranslation();

	const currentYear = new Date().getFullYear();

	return (
		<footer className="w-full h-auto">
			<div className="flex flex-col size-auto justify-evenly items-center bg-[#0D0D0D]">
				<div className="flex flex-col lg:flex-row size-auto px-10 justify-around items-start lg:items-center">
					<a className="flex size-auto justify-center items-center" href="/politica">
						<p className="flex flex-row w-50 lg:h-10 justify-start lg:justify-center items-center text-lg lg:text-base text-[#F0F0F0]  hover:bg-[#F0F0F0]/20 rounded-xs">
							<img className="w-auto lg:w-5" src="/img/botoes/politica.svg" />{t('Politica de Privacidade')}
						</p>
					</a>
					<div className='w-full justify-start lg:justify-center items-center'>
						<p className="hidden lg:flex lg:justify-center items-center">
							©<span className='p-1'>{currentYear}</span>{t('Todos os direitos reservados Por Ele Church')}
						</p>
						<p className="hidden lg:flex lg:justify-center items-center">
							{t('Desenvolvido por Unique/Unilatem')}
						</p>
					</div>
						<br></br>
						
					
					<a className="flex w-auto lg:w-100 justify-center" href="/termo">
						<p className="flex flex-row-reverse w-50 lg:h-10 justify-end lg:justify-center items-center text-lg lg:text-base text-[#F0F0F0]  hover:bg-[#F0F0F0]/20 rounded-xs">
							{t('Termos de Uso')} <img className="w-auto lg:w-5" src="/img/botoes/termo.svg" />
						</p>
					</a>
					<p className="flex lg:hidden w-auto justify-start lg:justify-center items-center text-lg text-[#0D0D0D]">
						© <span>{currentYear}</span> {t('Todos os direitos reservados/desenvolvido por Unique/Unilatem')}
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

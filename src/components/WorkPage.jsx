import React, { useEffect, useRef } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import PowerButton from '../subComponents/powerButton';
import { Work } from '../data/WorkData';
import Card from '../subComponents/Card';
import { YinYang } from './AllSvgs';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';
import ParticleComponent from '../subComponents/ParticleComponent';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 400vh;
	position: relative;
	display: flex;
	align-items: center;
`;

const Main = styled(motion.ul)`
	position: fixed;
	top: 12rem;
	left: calc(10rem + 15vw);
	height: 40vh;
	display: flex;
	color: white;
	z-index: 1;
`;

const Rotate = styled.span`
	display: block;
	position: fixed;
	right: 1rem;
	bottom: 1rem;
	width: 80px;
	height: 80px;
	z-index: 1;
`;

//Config
const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.5,
			duration: 0.5,
		},
	},
};
const WorkPage = () => {
	const ref = useRef(null);
	const yingyang = useRef(null);
	useEffect(() => {
		let element = ref.current;
		const rotate = () => {
			element.style.transform = `translateX(${-window.scrollY}px)`;
			return (yingyang.current.style.transform = `rotate(${-window.scrollY}deg)`);
		};
		window.addEventListener('scroll', rotate);
		return () => window.removeEventListener('scroll', rotate);
	}, []);

	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<ParticleComponent theme="dark" />
				<LogoComponent theme="dark" />
				<PowerButton />
				<SocialIcon theme="dark" />
				<Main ref={ref} variants={container} initial="hidden" animate="show">
					{Work.map((d) => (
						<Card key={d.id} data={d}></Card>
					))}
				</Main>
				<Rotate ref={yingyang}>
					<YinYang width={80} height={80} fill={darkTheme.text} />
				</Rotate>
				<BigTitle text="WORK" top="10%" right="20%" />
			</Box>
		</ThemeProvider>
	);
};

export default WorkPage;

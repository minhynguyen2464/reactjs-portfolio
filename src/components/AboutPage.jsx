import React from 'react';
import styled, { ThemeProvider, keyframes } from 'styled-components';
import { darkTheme } from './Themes';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import PowerButton from '../subComponents/powerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import astronaut from '../assets/Images/spaceman.png';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
`;

const float = keyframes`
	0% {transform: translateY(-15px)};
	50% {transform: translateY(20px) translateX(20px)};
	100% {transform: translateY(-15px)};
`;

const Spaceman = styled(motion.div)`
	position: absolute;
	top: 10%;
	right: 5%;
	width: 20vw;
	animation: ${float} 4s ease infinite;
	img {
		width: 100%;
		height: auto;
	}
`;

const Main = styled(motion.div)`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	padding: 2rem;
	width: 50vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: calc(0.6rem + 1vw);
	backdrop-filter: blur(4px);
	position: absolute;
	left: calc(5rem + 5vw);
	top: 10rem;
	font-family: 'Ubuntu Mono', monospace;
`;

//Config
const SpaceManAnimation = {
	hidden: {
		top: 400,
		right: -200,
	},
	show: {
		top: 60,
		right: 80,
		transition: {
			type: 'spring',
			duration: 3,
		},
	},
};

//Config
const MainAnimation = {
	hidden: {
		opacity: 0,
	},
	show: {
		opacity: 1,
		transition: {
			type: 'spring',
			duration: 3,
		},
	},
};
const MySkillsPage = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<PowerButton />
				<SocialIcon theme="dark" />
				<ParticleComponent theme="dark" />
				<Spaceman variants={SpaceManAnimation} initial="hidden" animate="show">
					<img src={astronaut} alt="spaceman"></img>
				</Spaceman>
				<Main variants={MainAnimation} initial="hidden" animate="show">
					I'm a front-end developer located in Vietnam. I love to create simple
					yet beautiful websites with great user experience.
					<br />
					<br />
					I'm interested in the whole frontend stack Like trying new things and
					building great projects. I'm an independent freelancer and blogger.
					<br />
					<br />I love to write blogs and read books. I believe everything is an
					Art when you put your consciousness in it. You can connect with me via
					social links.
				</Main>
				<BigTitle text="ABOUT" top="10%" left="5%" />
			</Box>
		</ThemeProvider>
	);
};

export default MySkillsPage;

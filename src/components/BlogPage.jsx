import React from 'react';
import styled from 'styled-components';
import img from '../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg';
import '../subComponents/LogoComponent';
import LogoComponent from '../subComponents/LogoComponent';
import SocialIcon from '../subComponents/SocialIcon';
import PowerButton from '../subComponents/powerButton';
import { Blogs } from '../data/BlogData';
import BlogComponents from './BlogComponents';
import AnchorComponents from '../subComponents/AnchorComponents';
import { useState, useEffect } from 'react';
import BigTitle from '../subComponents/BigTitle';
import { motion } from 'framer-motion';

const MainContainer = styled.div`
	background-image: url(${img});
	background-size: cover;
	background-repeat: no-repeat;
	background-attachment: fixed;
	background-position: center;
`;

const Container = styled.div`
	background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
	width: 100%;
	height: auto;
	position: relative;
	padding-bottom: 5rem;
`;

const Center = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10rem;
`;

const Grid = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
	grid-gap: calc(1rem + 2vw);
`;

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

const BlogPage = () => {
	const [number, setnumber] = useState(0);
	useEffect(() => {
		let num = (window.innerHeight - 70) / 30;
		setnumber(parseInt(num));
	}, []);

	return (
		<MainContainer>
			<Container>
				<LogoComponent />
				<PowerButton />
				<SocialIcon />
				<AnchorComponents number={number} />
				<Center>
					<Grid variants={container} initial="hidden" animate="show">
						{Blogs.map((blog) => {
							return <BlogComponents key={blog.id} blog={blog} />;
						})}
					</Grid>
				</Center>
				<BigTitle text="BLOG" top="5rem" left="5rem" />
			</Container>
		</MainContainer>
	);
};

export default BlogPage;

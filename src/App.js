import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { darkTheme, lightTheme } from './components/Themes';
import { Route, Routes, useLocation } from 'react-router-dom';

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import MySkillPage from './components/MySkillsPage';
import WorkPage from './components/WorkPage';
import { AnimatePresence } from 'framer-motion';

function App() {
	const location = useLocation();
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<AnimatePresence mode="wait">
					<Routes location={location} key={location.pathname}>
						<Route path="/" element={<Main />}></Route>
						<Route path="/about" element={<AboutPage />}></Route>
						<Route path="/blog" element={<BlogPage />}></Route>
						<Route path="/skills" element={<MySkillPage />}></Route>
						<Route path="/work" element={<WorkPage />}></Route>
					</Routes>
				</AnimatePresence>
			</ThemeProvider>
		</>
	);
}

export default App;

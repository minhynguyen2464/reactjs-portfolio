import { ThemeProvider } from 'styled-components';
import GlobalStyle from './globalStyles';
import { darkTheme, lightTheme } from './components/Themes';
import { Route, Routes } from 'react-router-dom';

//Components
import Main from './components/Main';
import AboutPage from './components/AboutPage';
import BlogPage from './components/BlogPage';
import MySkillPage from './components/MySkillsPage';
import WorkPage from './components/WorkPage';

function App() {
	return (
		<>
			<GlobalStyle />
			<ThemeProvider theme={lightTheme}>
				<Routes>
					<Route path="/" element={<Main />}></Route>
					<Route path="/about" element={<AboutPage />}></Route>
					<Route path="/blog" element={<BlogPage />}></Route>
					<Route path="/skills" element={<MySkillPage />}></Route>
					<Route path="/work" element={<WorkPage />}></Route>
				</Routes>
			</ThemeProvider>
		</>
	);
}

export default App;

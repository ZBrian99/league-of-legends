import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { GlobalReset, Loader } from './styled-components';
import { DataProvider } from './context';
import { lazy, Suspense } from 'react';
import { Footer, NavBar } from './components';

// import { Champion, Champions, Universo, Regiones } from './pages';

const Champion = lazy(() => import('./pages/Champion/Champion'));
const Champions = lazy(() => import('./pages/Champions/Champions'));
const Regiones = lazy(() => import('./pages/Regiones'));
const Universo = lazy(() => import('./pages/Universo'));

export const App = () => {
	return (
		<>
			<GlobalReset />
			<Suspense fallback={<Loader />}>
				<BrowserRouter basename='/league-of-legends'>
					<NavBar />
					<DataProvider>
						<Routes>
							<Route path='/champion/:id/' element={<Champion />} />
							<Route path='/champions/' element={<Champions />} />
							{/* <Route path='/regions/' element={<Regiones />} /> */}
							{/* <Route path='/universe/' element={<Universo />} /> */}
							<Route path='*' element={<Navigate to='/champions/' />} />
						</Routes>
					</DataProvider>
					<Footer />
				</BrowserRouter>
			</Suspense>
		</>
	);
};

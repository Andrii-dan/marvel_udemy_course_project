import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import AppHeader from '../appHeader/AppHeader';
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const ComicsPage = lazy(() => import('../pages/ComicsPage'));
const SingleComicsPage = lazy(() => import('../pages/SingleComicsPage'));

const App = () => {
	return (
		<div className='app'>
			<AppHeader />
			<main>
				<Suspense fallback={<Spinner />}>
					<Router>
						<Routes>
							<Route path='/' element={<MainPage />} />
							<Route path='/comics' element={<ComicsPage />} />
							<Route path='/comics/:comicsId' element={<SingleComicsPage />} />
							<Route path='*' element={<Page404 />} />
						</Routes>
					</Router>
				</Suspense>
			</main>
		</div>
	);
};

export default App;

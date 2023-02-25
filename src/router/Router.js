import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loader from '../components/Loader/Loader.jsx';

const Home = lazy(() => import('../pages/Home.jsx'));

const RepositoryDetails = lazy(() => import('../pages/RepositoryDetails.jsx'));

const Router = () => {

    return (
        <Routes>
            <Route path="/" element={<Suspense fallback={<Loader />}><Home /></Suspense>} />
            <Route path="/repository/:id" element={<Suspense fallback={<Loader />}><RepositoryDetails /></Suspense>} />
        </Routes>

    )
}


export default Router;
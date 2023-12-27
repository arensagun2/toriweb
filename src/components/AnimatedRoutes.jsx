// Modules
import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
// Components
import HomePage from '../pages/homepage/HomePage'
import SocialPage from '../pages/socialpage/SocialPage';

export default function AnimatedRoutes() {
    const location = useLocation();
    return(
            <Routes key={location.pathname}>
                <Route path='/' element={<HomePage />}></Route>
                <Route path='/social' element={<SocialPage />}></Route>
            </Routes>
        
    )
}